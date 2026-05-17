# CheckMatch - Crypto Wallet Address Verifier

> Clipboard hijacking and address poisoning.
> Verify every crypto wallet address before sending funds to ensure complete security.

Live Demo: https://libraco.github.io/checkmatch/

## Key Features

- Classic Forum Theme: A clean, retro, and professional UI designed for readability, inspired by Bitcointalk.
- Address Poisoning Detection: Automatically detects advanced scams where prefix/suffix match but the middle is swapped.
- Character-by-Character Diff: Highlights every single mismatch between the original and pasted addresses.
- Multi-Chain Support: Auto-detects EVM (ETH/BNB/MATIC), Bitcoin (BTC), Solana (SOL), and TRON (TRX).
- English Only: Standardized to English for universal understanding.
- Privacy-First: 100% Client-side. No data is stored, logged, or sent to any server.
- SEO Optimized: Built with Google SEO standards, including JSON-LD structured data and OG tags.

## Quick Start / Deployment

CheckMatch is a static web app. You can host it anywhere for free.

### Deploy to GitHub Pages
1. Fork or clone this repository: https://github.com/libraco/checkmatch
2. Go to Settings -> Pages.
3. Set Source to Deploy from a branch and select main branch, / (root) folder.
4. Your site will be live in minutes!

## Security Commitment

- No Backend: This project has no server-side components. Everything runs in your browser.
- No External Libraries: Minimal dependencies to ensure no supply-chain vulnerabilities.
- CSP Headers: Configured to block unauthorized external network requests.
- Open Source: Audit the code yourself at any time.

## Detection Logic

| Scenario | Risk Level | Description |
|---|---|---|
| Identical | SAFE | 100% match. Safe to proceed. |
| Poisoning | DANGER | Prefix (4 chars) and Suffix (4 chars) match, but inner content differs. |
| Mismatch | WARNING | Any other difference detected during character comparison. |

## Support the Project

If this tool helped you save your funds, consider donating:
BTC Address: bc1qqe52pz5f68zd8u2x9s35jjfr4jsfp3c5thddqd

---

Made with for Bitcoin enthusiasts. Open source, free forever.
