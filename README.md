# 🔐 CheckMatch — Crypto Wallet Address Verifier

> **Clipboard hijacking & address poisoning.**  
> Verify every crypto wallet address before sending funds to ensure complete security.

🚀 **Live Demo**: [CheckMatch on GitHub Pages](https://libraco.github.io/checkmatch/)

---

## ✨ Key Features

- 🎨 **Modern White Theme**: A clean, high-contrast, and professional UI designed for readability.
- ⚡ **Address Poisoning Detection**: Automatically detects advanced scams where prefix/suffix match but the middle is swapped.
- 🔍 **Character-by-Character Diff**: Highlights every single mismatch between the original and pasted addresses.
- ⛓️ **Multi-Chain Support**: Auto-detects EVM (ETH/BNB/MATIC), Bitcoin (BTC), Solana (SOL), and TRON (TRX).
- 🌐 **Bi-lingual Support**: Full localization for Vietnamese 🇻🇳 and English 🇺🇸.
- 🔒 **Privacy-First**: 100% Client-side. No data is stored, logged, or sent to any server.


## 🚀 Quick Start / Deployment

CheckMatch is a static web app. You can host it anywhere for free.

### Deploy to GitHub Pages
1. Fork or clone this repository.
2. Go to **Settings → Pages**.
3. Set Source to **Deploy from a branch** and select `main` branch, `/ (root)` folder.
4. Your site will be live in minutes!


## 🔒 Security Commitment

- **No Backend**: This project has no server-side components. Everything runs in your browser.
- **No External Libraries**: Minimal dependencies to ensure no supply-chain vulnerabilities.
- **CSP Headers**: Configured to block unauthorized external network requests.
- **Open Source**: Audit the code yourself at any time.


## 🧪 Detection Logic

| Scenario | Risk Level | Description |
|---|---|---|
| **Identical** | 🟢 SAFE | 100% match. Safe to proceed. |
| **Poisoning** | 🔴 DANGER | Prefix (4 chars) and Suffix (4 chars) match, but inner content differs. |
| **Mismatch** | 🟡 WARNING | Any other difference detected during character comparison. |

## ☕ Support the Project

If this tool helped you save your funds, consider donating:
**BTC Address**: `bc1qqe52pz5f68zd8u2x9s35jjfr4jsfp3c5thddqd`

---

*Built with ❤️ to fight crypto scams. Open source, free forever.*
