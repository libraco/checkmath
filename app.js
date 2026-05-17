// ============================
// CheckMatch v3 - app.js
// Classic Theme
// ============================

// -- BLOCKCHAIN DETECT --
function detectBlockchain(address) {
  const a = (address || '').trim();
  if (!a) return null;
  if (/^T[A-Za-z1-9]{33}$/.test(a)) return { id:'trx', name:'TRON' };
  if (/^0x[0-9a-fA-F]{40}$/.test(a)) return { id:'eth', name:'ETH/EVM' };
  if (/^(1|3)[a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(a) || /^bc1[a-z0-9]{39,59}$/i.test(a))
    return { id:'btc', name:'Bitcoin' };
  if (/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(a)) return { id:'sol', name:'Solana' };
  return { id:'unk', name:'Unknown' };
}

// -- SANITIZE --
function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#x27;');
}

// -- COMPARE --
function compareAddresses(a, b) {
  const res = []; let match = 0, mismatch = 0, missing = 0;
  const len = Math.max(a.length, b.length);
  for (let i = 0; i < len; i++) {
    const ca = a[i] || null, cb = b[i] || null;
    if (ca === cb)     { match++;    res.push({ orig:ca, pasted:cb, type:'match' });    }
    else if (ca && cb) { mismatch++; res.push({ orig:ca, pasted:cb, type:'mismatch' }); }
    else               { missing++;  res.push({ orig:ca, pasted:cb, type:'missing' });  }
  }
  return { res, match, mismatch, missing, len };
}

// -- RISK --
function getRisk(orig, pasted, d) {
  const sim = d.len > 0 ? (d.match / d.len * 100) : 0;
  if (d.mismatch === 0 && d.missing === 0) return { level:'safe',   sim };
  const o = orig.trim(), p = pasted.trim();
  if (o.length >= 8 && p.length >= 8 && o.slice(0,4)===p.slice(0,4) && o.slice(-4)===p.slice(-4) && o!==p)
    return { level:'danger', sim };
  return { level:'warn', sim };
}

// -- RENDER DIFF --
function renderDiff(diffs, field) {
  return diffs.map(c => {
    const ch = field === 'orig' ? c.orig : c.pasted;
    if (ch === null) return `<span class="ch missing">_</span>`;
    return `<span class="ch ${c.type}">${esc(ch)}</span>`;
  }).join('');
}

// -- CHAIN BADGE --
function updateChainBadge(id, address) {
  const el = document.getElementById(id);
  if (!el) return;
  const chain = detectBlockchain(address);
  if (!chain || chain.id === 'unk' || !address.trim()) { el.className='chain-badge'; el.textContent=''; return; }
  el.className = `chain-badge ${chain.id} visible`;
  el.textContent = `[${chain.name}]`;
}

// -- MAIN CHECK --
function checkAddresses() {
  const orig   = (document.getElementById('addr-original').value || '').trim();
  const pasted = (document.getElementById('addr-pasted').value   || '').trim();
  if (!orig || !pasted) { showToast("Please fill in both address fields."); return; }

  const d    = compareAddresses(orig, pasted);
  const risk = getRisk(orig, pasted, d);
  const sim  = d.len > 0 ? (d.match / d.len * 100).toFixed(1) : '0.0';

  document.getElementById('risk-banner').className = `risk-banner ${risk.level}`;
  
  let label = "", desc = "";
  if(risk.level === 'safe') {
      label = "SAFE - Addresses match perfectly!";
      desc = "Both addresses are identical. You may proceed with the transaction.";
  } else if(risk.level === 'warn') {
      label = "WARNING - Addresses differ!";
      desc = "The addresses do NOT match. Do NOT send funds until you verify manually.";
  } else if(risk.level === 'danger') {
      label = "DANGER - Address Poisoning Detected!";
      desc = "Prefix/suffix match but middle differs - classic clipboard hijack. STOP. Do not send!";
  }

  document.getElementById('risk-label').textContent = label;
  document.getElementById('risk-desc').textContent  = desc;
  document.getElementById('risk-score').textContent = `[ ${sim}% ]`;

  document.getElementById('stat-match').textContent      = d.match;
  document.getElementById('stat-mismatch').textContent   = d.mismatch + d.missing;
  document.getElementById('stat-total').textContent      = Math.max(orig.length, pasted.length);
  document.getElementById('stat-similarity').textContent = sim + '%';

  document.getElementById('diff-original').innerHTML = renderDiff(d.res, 'orig');
  document.getElementById('diff-pasted').innerHTML   = renderDiff(d.res, 'pasted');

  const sec = document.getElementById('result-section');
  sec.classList.add('visible');
  sec.scrollIntoView({ behavior:'smooth', block:'start' });
}

// -- CLIPBOARD PASTE --
async function pasteFromClipboard() {
  try {
    if (!navigator.clipboard) { showToast("Clipboard access denied - please paste manually."); return; }
    const text = await navigator.clipboard.readText();
    document.getElementById('addr-pasted').value = text;
    updateChainBadge('chain-pasted', text);
    showToast("Pasted from clipboard!");
  } catch { showToast("Clipboard access denied - please paste manually."); }
}

// -- CLEAR --
function clearAll() {
  ['addr-original','addr-pasted'].forEach(id => document.getElementById(id).value = '');
  ['chain-original','chain-pasted'].forEach(id => {
    const el = document.getElementById(id);
    el.className = 'chain-badge'; el.textContent = '';
  });
  document.getElementById('result-section').classList.remove('visible');
  showToast("Cleared.");
}

// -- TOAST --
let _toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg; el.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

// -- INIT --
document.addEventListener('DOMContentLoaded', () => {
  // -- Button wiring --
  document.getElementById('btn-check').addEventListener('click', checkAddresses);
  document.getElementById('btn-paste').addEventListener('click', pasteFromClipboard);
  document.getElementById('btn-clear').addEventListener('click', clearAll);

  // Live chain detection
  document.getElementById('addr-original').addEventListener('input', e => updateChainBadge('chain-original', e.target.value));
  document.getElementById('addr-pasted').addEventListener('input',   e => updateChainBadge('chain-pasted',   e.target.value));

  // Ctrl+Enter shortcut
  ['addr-original','addr-pasted'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') checkAddresses();
    });
  });
});
