# 🛡️ CipherMarket: Confidential Data Exchange

> **Privacy-preserving data verification powered by Zero-Knowledge Proofs on Aleo.**

<div align="center">
  <img src="/public/assets/zkv.png" alt="CipherMarket Logo" width="120" />
  <h3>Trustless Data Verification for the Decentralized Web</h3>
</div>

---

## 📋 Overview

**CipherMarket** is a revolutionary Web3 application that solves the trust deficit in data marketplaces. It allows data sellers to cryptographically prove the quality and structure of their datasets (schema, row count, integrity) **without ever revealing the actual data**.

Built on the **Aleo Testnet**, CipherMarket leverages **Zero-Knowledge Proofs (ZKPs)** to ensure that sensitive data remains private (client-side) while public proofs are verifiable on-chain.

---

## 🚀 Key Features

### 🔒 Zero-Knowledge Verification
Generate proofs for your CSV datasets that attest to:
- **Schema Validity**: Column counts and data types.
- **Dataset Size**: Verified row counts.
- **Data Integrity**: Cryptographic hash commitments.
*All without exposing a single cell of raw data.*

### ⚡ Client-Side Processing
- **100% Local**: All data processing and proof generation happen directly in your browser.
- **No Server Uploads**: Your raw CSV files never leave your device.
- **WASM Powered**: Utilizes WebAssembly for high-performance local execution.

### 🌐 Aleo Integration
- **Wallet Support**: Seamlessly connect with **Leo Wallet**, **Fox Wallet**, and **Puzzle Wallet**.
- **On-Chain Settlement**: Submit verifiable proofs directly to the Aleo Testnet.
- **Smart Contracts**: Powered by custom Leo circuits (`data_attestation.aleo`).

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 19, Vite, TypeScript, Framer Motion |
| **Styling** | Tailwind CSS v4, Shadcn UI |
| **Blockchain** | Aleo SDK, Leo Wallet Adapters |
| **Backend** | Convex (Auth & Orchestration) |
| **Cryptography** | @provablehq/sdk, Custom Leo Circuits |

---

## 🏁 Getting Started

### Prerequisites
- **Node.js** or **Bun** (recommended)
- An **Aleo Wallet** (Leo, Fox, or Puzzle) installed in your browser.

### Installation

1.  **Clone the repository** (or download source):
    
