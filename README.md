# 🔐 CheckMatch — Crypto Wallet Address Verifier

> **Bảo vệ bạn khỏi lừa đảo clipboard hijacking & address poisoning.**  
> Verify every crypto wallet address before sending funds to ensure complete security.

🚀 **Live Demo**: [CheckMath on GitHub Pages](https://libraco.github.io/checkmath/)

---

## ✨ Key Features

- 🎨 **Modern White Theme**: A clean, high-contrast, and professional UI designed for readability.
- ⚡ **Address Poisoning Detection**: Automatically detects advanced scams where prefix/suffix match but the middle is swapped.
- 🔍 **Character-by-Character Diff**: Highlights every single mismatch between the original and pasted addresses.
- ⛓️ **Multi-Chain Support**: Auto-detects EVM (ETH/BNB/MATIC), Bitcoin (BTC), Solana (SOL), and TRON (TRX).
- 🌐 **Bi-lingual Support**: Full localization for Vietnamese 🇻🇳 and English 🇺🇸.
- 🔒 **Privacy-First**: 100% Client-side. No data is stored, logged, or sent to any server.
- 📈 **SEO Optimized**: Built with Google SEO standards, including JSON-LD structured data and OG tags.

---

## 📸 Preview

### Clean Aesthetic (White Theme)
![Initial Load](/Users/vanti/.gemini/antigravity/brain/b9ffabe1-c590-493a-990e-98759793bfa8/initial_load_light_theme_1773566081929.png)

### Advanced Scam Detection
![Danger Detection](/Users/vanti/.gemini/antigravity/brain/b9ffabe1-c590-493a-990e-98759793bfa8/poisoning_test_result_1773566104408.png)

---

## 🚀 Quick Start / Deployment

CheckMatch is a static web app. You can host it anywhere for free.

### Deploy to GitHub Pages
1. Fork or clone this repository: [CheckMath Source Code](https://github.com/libraco/checkmath)
2. Go to **Settings → Pages**.
3. Set Source to **Deploy from a branch** and select `main` branch, `/ (root)` folder.
4. Your site will be live in minutes!

---

## 🔒 Security Commitment

- **No Backend**: This project has no server-side components. Everything runs in your browser.
- **No External Libraries**: Minimal dependencies to ensure no supply-chain vulnerabilities.
- **CSP Headers**: Configured to block unauthorized external network requests.
- **Open Source**: Audit the code yourself at any time.

---

## 🧪 Detection Logic

| Scenario | Risk Level | Description |
|---|---|---|
| **Identical** | 🟢 SAFE | 100% match. Safe to proceed. |
| **Poisoning** | 🔴 DANGER | Prefix (4 chars) and Suffix (4 chars) match, but inner content differs. |
| **Mismatch** | 🟡 WARNING | Any other difference detected during character comparison. |

---

## ☕ Support the Project

If this tool helped you save your funds, consider donating:
**BTC Address**: `bc1qqe52pz5f68zd8u2x9s35jjfr4jsfp3c5thddqd`

---

*Built with ❤️ to fight crypto scams. Open source, free forever.*
