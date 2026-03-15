// ============================
// CheckMatch v3 — app.js
// White Theme · VI/EN Fixed
// ============================

const i18n = {
  en: {
    heroBadge: "Free security tool",
    heroH1a: "Verify your wallet address",
    heroH1b: "before sending crypto",
    heroPara: "Address-poisoning scams are rising. Compare every character to make sure you're sending to the right place.",
    badge1: "100% Client-Side", badge2: "No data stored", badge3: "No tracking", badge4: "Open source",
    howTitle: "⚡ How it works",
    how1t: "Paste original address", how1p: "Copy the address from the official source (website, confirmation email, QR code...).",
    how2t: "Paste clipboard address", how2p: "Paste the address you copied from your clipboard — the one you will use to send funds.",
    how3t: "Read the result", how3p: "The tool compares every character and warns you instantly if a scam is detected.",
    cardInputTitle: "🔍 Address Comparison",
    labelOriginal: "📋 Original address (official source)",
    labelPasted: "📋 Pasted address (from clipboard)",
    placeholderOriginal: "Paste the address from the official source...",
    placeholderPasted: "Paste the address from your clipboard / wallet...",
    btnCheck: "🔍 Check Addresses", btnPasteClip: "📎 Paste from Clipboard", btnClear: "🗑️ Clear",
    kbdHint: "💡 Press <kbd class='kbd'>Ctrl+Enter</kbd> to check quickly",
    cardResultTitle: "📊 Analysis Result",
    statMatch: "Matching", statMismatch: "Different", statTotal: "Total Chars", statSimilarity: "Similarity",
    diffLabel1: "Original address — character by character:",
    diffLabel2: "Pasted address — character by character:",
    legendMatch: "Match", legendMismatch: "Mismatch", legendMissing: "Missing / Extra",
    safe_label: "✅ SAFE — Addresses match perfectly!",
    safe_desc: "Both addresses are identical. You may proceed with the transaction.",
    warn_label: "⚠️ WARNING — Addresses differ!",
    warn_desc: "The addresses do NOT match. Do NOT send funds until you verify manually.",
    danger_label: "🚨 DANGER — Address Poisoning Detected!",
    danger_desc: "Prefix/suffix match but middle differs — classic clipboard hijack. STOP. Do not send!",
    secTitle: "🔒 Security Commitment",
    secF1t: "100% Browser-Side", secF1p: "All computation runs in your browser. No data ever leaves your device.",
    secF2t: "No Data Storage", secF2p: "No database, no server. Your wallet addresses are never saved or logged.",
    secF3t: "No External API Calls", secF3p: "No internet calls when checking. CSP headers block all unauthorized requests.",
    secF4t: "Open Source", secF4p: "All code is publicly available on GitHub. Fully transparent — nothing hidden.",
    cardTipsTitle: "🛡️ Security Tips",
    tips: [
      { icon: "🔍", title: "Always verify manually", text: "Never skip checking the full address, especially the middle characters." },
      { icon: "📵", title: "Limit clipboard access", text: "Use hardware wallets or clipboard-protection browser extensions." },
      { icon: "🔗", title: "Send a test transaction", text: "Always send a tiny amount first to confirm the address before the full amount." },
      { icon: "📷", title: "Use QR codes", text: "Scan QR codes directly instead of copy-pasting whenever possible." },
      { icon: "🛡️", title: "Use address whitelists", text: "Most exchanges support whitelisting — activate it to prevent attacks." },
      { icon: "🔔", title: "Watch for lookalikes", text: "Scammers use 0 vs O, l vs 1, and similar visual tricks to fool you." },
    ],
    footerMain: "Made with ❤️ to fight crypto scams &nbsp;|&nbsp; Open source on <a href='https://github.com/libraco/checkmatch' target='_blank' rel='noopener noreferrer'>GitHub</a>",
    donLabel: "Donation BTC address wallet:",
    copyBtn: "Copy",
    donNote: "⚠️ Only send BTC to this address — do not send other coins.",
    toastClipboard: "✅ Pasted from clipboard!",
    toastNoClipboard: "⚠️ Clipboard access denied — please paste manually.",
    toastCopied: "✅ BTC address copied!",
    toastCleared: "🗑️ Cleared.",
    toastEnterBoth: "Please fill in both address fields.",
  },
  vi: {
    heroBadge: "Công cụ bảo mật miễn phí",
    heroH1a: "Kiểm tra địa chỉ ví",
    heroH1b: "trước khi gửi crypto",
    heroPara: "Lừa đảo đánh tráo địa chỉ ngày càng phổ biến. Hãy so sánh từng ký tự để đảm bảo bạn gửi đúng nơi.",
    badge1: "100% Client-Side", badge2: "Không lưu dữ liệu", badge3: "Không tracking", badge4: "Mã nguồn mở",
    howTitle: "⚡ Cách thực hiện",
    how1t: "Dán địa chỉ gốc", how1p: "Copy địa chỉ từ nguồn chính thức (website, email xác nhận, QR code...).",
    how2t: "Dán địa chỉ paste", how2p: "Paste địa chỉ bạn đã copy vào clipboard — cái sẽ dùng để gửi tiền.",
    how3t: "Xem kết quả", how3p: "Hệ thống so sánh từng ký tự và cảnh báo ngay nếu phát hiện dấu hiệu lừa đảo.",
    cardInputTitle: "🔍 So Sánh Địa Chỉ",
    labelOriginal: "📋 Địa chỉ gốc (nguồn chính thức)",
    labelPasted: "📋 Địa chỉ đã paste (từ clipboard)",
    placeholderOriginal: "Dán địa chỉ bạn copy từ nguồn chính thức...",
    placeholderPasted: "Dán địa chỉ từ clipboard / ví của bạn...",
    btnCheck: "🔍 Kiểm Tra Địa Chỉ", btnPasteClip: "📎 Paste từ Clipboard", btnClear: "🗑️ Xóa",
    kbdHint: "💡 Nhấn <kbd class='kbd'>Ctrl+Enter</kbd> để kiểm tra nhanh",
    cardResultTitle: "📊 Kết Quả Phân Tích",
    statMatch: "Khớp", statMismatch: "Sai khác", statTotal: "Tổng ký tự", statSimilarity: "Độ giống",
    diffLabel1: "Địa chỉ gốc — từng ký tự:",
    diffLabel2: "Địa chỉ đã paste — từng ký tự:",
    legendMatch: "Khớp", legendMismatch: "Sai khác", legendMissing: "Thiếu / Thừa",
    safe_label: "✅ AN TOÀN — Địa chỉ khớp hoàn toàn!",
    safe_desc: "Hai địa chỉ giống hệt nhau. Bạn có thể tiến hành giao dịch an toàn.",
    warn_label: "⚠️ CẢNH BÁO — Địa chỉ có sự khác biệt!",
    warn_desc: "Hai địa chỉ không khớp. KHÔNG gửi tiền khi chưa xác minh thủ công.",
    danger_label: "🚨 NGUY HIỂM — Phát hiện tấn công đánh tráo địa chỉ!",
    danger_desc: "Đầu/cuối giống nhưng phần giữa khác — dấu hiệu điển hình của clipboard hijack. DỪNG LẠI. Đừng gửi!",
    secTitle: "🔒 Cam Kết Bảo Mật",
    secF1t: "100% Trình duyệt", secF1p: "Mọi tính toán diễn ra trong browser. Không có dữ liệu nào rời khỏi thiết bị.",
    secF2t: "Không lưu dữ liệu", secF2p: "Không database, không server. Địa chỉ ví không bao giờ được lưu hay ghi lại.",
    secF3t: "Không gọi API ngoài", secF3p: "Website không kết nối internet khi kiểm tra. CSP header ngăn mọi request trái phép.",
    secF4t: "Mã nguồn mở", secF4p: "Toàn bộ code có thể xem trên GitHub. Minh bạch hoàn toàn, không có gì ẩn.",
    cardTipsTitle: "🛡️ Mẹo Bảo Mật",
    tips: [
      { icon: "🔍", title: "Luôn kiểm tra thủ công", text: "Không bao giờ bỏ qua việc kiểm tra toàn bộ địa chỉ, đặc biệt phần ở giữa." },
      { icon: "📵", title: "Hạn chế truy cập clipboard", text: "Dùng ví cứng hoặc trình duyệt có extension bảo vệ clipboard." },
      { icon: "🔗", title: "Gửi thử một lượng nhỏ", text: "Luôn gửi một lượng nhỏ để xác nhận địa chỉ trước khi gửi số tiền lớn." },
      { icon: "📷", title: "Dùng mã QR", text: "Quét mã QR trực tiếp thay vì copy-paste khi có thể." },
      { icon: "🛡️", title: "Dùng whitelist địa chỉ", text: "Hầu hết sàn giao dịch hỗ trợ whitelist địa chỉ. Hãy kích hoạt tính năng này." },
      { icon: "🔔", title: "Cảnh giác ký tự giả", text: "Kẻ lừa đảo dùng 0 vs O, l vs 1 để đánh lừa mắt người dùng." },
    ],
    footerMain: "Tạo bởi ❤️ để chống lừa đảo crypto &nbsp;|&nbsp; Mã nguồn mở trên <a href='https://github.com/libraco/checkmatch' target='_blank' rel='noopener noreferrer'>GitHub</a>",
    donLabel: "Donation BTC address wallet:",
    copyBtn: "Copy",
    donNote: "⚠️ Chỉ gửi BTC đến địa chỉ này — không gửi các loại coin khác.",
    toastClipboard: "✅ Đã paste từ clipboard!",
    toastNoClipboard: "⚠️ Không được phép đọc clipboard — hãy paste thủ công.",
    toastCopied: "✅ Đã copy địa chỉ BTC!",
    toastCleared: "🗑️ Đã xóa.",
    toastEnterBoth: "Vui lòng nhập cả hai địa chỉ.",
  }
};

// ── STATE ──
let currentLang = 'vi';

// ── BLOCKCHAIN DETECT ──
function detectBlockchain(address) {
  const a = (address || '').trim();
  if (!a) return null;
  if (/^T[A-Za-z1-9]{33}$/.test(a)) return { id:'trx', name:'TRON',    icon:'🔺' };
  if (/^0x[0-9a-fA-F]{40}$/.test(a)) return { id:'eth', name:'ETH/EVM', icon:'⟠' };
  if (/^(1|3)[a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(a) || /^bc1[a-z0-9]{39,59}$/i.test(a))
    return { id:'btc', name:'Bitcoin', icon:'₿' };
  if (/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(a)) return { id:'sol', name:'Solana', icon:'◎' };
  return { id:'unk', name:'Unknown', icon:'❓' };
}

// ── SANITIZE ──
function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#x27;');
}

// ── COMPARE ──
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

// ── RISK ──
function getRisk(orig, pasted, d) {
  const sim = d.len > 0 ? (d.match / d.len * 100) : 0;
  if (d.mismatch === 0 && d.missing === 0) return { level:'safe',   sim, icon:'✅' };
  const o = orig.trim(), p = pasted.trim();
  if (o.length >= 8 && p.length >= 8 && o.slice(0,4)===p.slice(0,4) && o.slice(-4)===p.slice(-4) && o!==p)
    return { level:'danger', sim, icon:'☠️' };
  return { level:'warn', sim, icon:'⚠️' };
}

// ── RENDER DIFF ──
function renderDiff(diffs, field) {
  return diffs.map(c => {
    const ch = field === 'orig' ? c.orig : c.pasted;
    if (ch === null) return `<span class="ch missing">_</span>`;
    return `<span class="ch ${c.type}">${esc(ch)}</span>`;
  }).join('');
}

// ── CHAIN BADGE ──
function updateChainBadge(id, address) {
  const el = document.getElementById(id);
  if (!el) return;
  const chain = detectBlockchain(address);
  if (!chain || chain.id === 'unk' || !address.trim()) { el.className='chain-badge'; el.textContent=''; return; }
  el.className = `chain-badge ${chain.id} visible`;
  el.textContent = `${chain.icon} ${chain.name}`;
}

// ── MAIN CHECK ──
function checkAddresses() {
  const t = i18n[currentLang];
  const orig   = (document.getElementById('addr-original').value || '').trim();
  const pasted = (document.getElementById('addr-pasted').value   || '').trim();
  if (!orig || !pasted) { showToast(t.toastEnterBoth); return; }

  const d    = compareAddresses(orig, pasted);
  const risk = getRisk(orig, pasted, d);
  const sim  = d.len > 0 ? (d.match / d.len * 100).toFixed(1) : '0.0';

  document.getElementById('risk-banner').className = `risk-banner ${risk.level}`;
  document.getElementById('risk-icon').textContent  = risk.icon;
  document.getElementById('risk-label').textContent = t[`${risk.level}_label`];
  document.getElementById('risk-desc').textContent  = t[`${risk.level}_desc`];
  document.getElementById('risk-score').textContent = `${sim}%`;

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

// ── CLIPBOARD PASTE ──
async function pasteFromClipboard() {
  const t = i18n[currentLang];
  try {
    if (!navigator.clipboard) { showToast(t.toastNoClipboard); return; }
    const text = await navigator.clipboard.readText();
    document.getElementById('addr-pasted').value = text;
    updateChainBadge('chain-pasted', text);
    showToast(t.toastClipboard);
  } catch { showToast(t.toastNoClipboard); }
}

// ── COPY DONATION ──
function copyDonationAddr() {
  const addr = (document.getElementById('btc-addr').textContent || '').trim();
  const t = i18n[currentLang];
  const success = () => {
    showToast(t.toastCopied);
    const btn = document.getElementById('btn-copy-btc');
    btn.textContent = '✅ Copied!';
    setTimeout(() => { btn.innerHTML = '📋 ' + t.copyBtn; }, 2000);
  };
  if (navigator.clipboard) {
    navigator.clipboard.writeText(addr).then(success).catch(() => fallbackCopy(addr, success));
  } else { fallbackCopy(addr, success); }
}

// ── fallbackCopy ──
function fallbackCopy(text, onSuccess) {
  const ta = document.createElement('textarea');
  ta.value = text; ta.style.cssText = 'position:fixed;opacity:0;top:-9999px';
  document.body.appendChild(ta); ta.select();
  if (document.execCommand('copy')) onSuccess();
  document.body.removeChild(ta);
}

// ── CLEAR ──
function clearAll() {
  ['addr-original','addr-pasted'].forEach(id => document.getElementById(id).value = '');
  ['chain-original','chain-pasted'].forEach(id => {
    const el = document.getElementById(id);
    el.className = 'chain-badge'; el.textContent = '';
  });
  document.getElementById('result-section').classList.remove('visible');
  showToast(i18n[currentLang].toastCleared);
}

// ── TOAST ──
let _toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg; el.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

// ── LANGUAGE ──
function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  applyTranslations();
}

function applyTranslations() {
  const t = i18n[currentLang];

  // All data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] === undefined) return;
    // Keys that contain HTML
    if (key === 'footerMain' || key === 'kbdHint') { el.innerHTML = t[key]; return; }
    el.textContent = t[key];
  });

  // Explicit HTML keys for fallback or specific IDs
  const footerMainEl = document.getElementById('footer-main-text');
  if (footerMainEl) footerMainEl.innerHTML = t.footerMain;

  // Placeholders
  document.getElementById('addr-original').placeholder = t.placeholderOriginal;
  document.getElementById('addr-pasted').placeholder   = t.placeholderPasted;

  // Tips (dynamic)
  const tc = document.getElementById('tips-container');
  if (tc) {
    tc.innerHTML = t.tips.map(tp => `
      <div class="tip-item">
        <div class="tip-ico">${tp.icon}</div>
        <div class="tip-body"><strong>${esc(tp.title)}</strong>${esc(tp.text)}</div>
      </div>`).join('');
  }

  // Security section dynamic elements
  const secFields = [
    ['secF1t','secF1p'],['secF2t','secF2p'],['secF3t','secF3p'],['secF4t','secF4p']
  ];
  secFields.forEach(([kt, kp]) => {
    const strong = document.querySelector(`[data-i18n="${kt}"]`);
    const span   = document.querySelector(`[data-i18n="${kp}"]`);
    if (strong) strong.textContent = t[kt];
    if (span)   span.textContent   = t[kp];
  });
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();

  // ── Button wiring ──
  document.getElementById('btn-lang-en').addEventListener('click', () => setLang('en'));
  document.getElementById('btn-lang-vi').addEventListener('click', () => setLang('vi'));
  document.getElementById('btn-check').addEventListener('click', checkAddresses);
  document.getElementById('btn-paste').addEventListener('click', pasteFromClipboard);
  document.getElementById('btn-clear').addEventListener('click', clearAll);
  document.getElementById('btn-copy-btc').addEventListener('click', copyDonationAddr);

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
