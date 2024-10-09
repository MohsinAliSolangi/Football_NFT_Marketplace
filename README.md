# NFT_Marketplace - Smart Contract & DApp Instructions

Welcome to the PakSial NFT project! This repository contains instructions for interacting with the smart contracts and deploying the DApp.

## Overview of PakSial NFT Marketplace

The PakSial is a decentralized NFT_Marketplace application that enables users to mint ERC721 NFT tokens into the platform and they can Sell & Buy that art. Buy sell process is very easy and also this platform offer to auction on nft and or the can list minted nft for sell. 

![Homepage Screenshot](https://github.com/MohsinAliSolangi/POD-NFT_Marketplace/blob/main/frontend/public/paksial.png)


### Key Tokens

- **mint NFT:** This ERC721 token is used for sell within the DApp. Users need to mint and approve this token for the marketplace before sell.
  
- **list NFT for Sell:** After minting its directly list on sell . Other users can buy NFT at anytime.

## DApp Instructions

### Prerequisites
- **Metamask:** Install Metamask to access the DApp.

### Steps to Deploy Smart Contracts on Sepolia
1. Deploy the marketplace contract, nftContract on Sepolia.
   
### Configuration for the DApp

1. **Copy and Paste ABI**
   - Copy the ABI (Application Binary Interface) of the staking contract and stake token contract.
   - Paste the ABI files into the `src/contractData` folder.

2. **Update Contract Addresses**
   - Update the contract addresses of the staking contract and stake token in the `src/Store.js` file.

### Running the DApp Locally

1. **Navigate to the Client Directory**
   ```bash
   cd frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```
## 🚀 Contact

For any questions, feedback, or inquiries, feel free to reach out to **Mohsin Ali Solangi**. You can connect via the following platforms:

🌐 **Linktree**: [Mohsin Ali Solangi](https://linktr.ee/mohsinalisolangi)

🔗 **LinkedIn**: [Mohsin Ali Solangi](https://www.linkedin.com/in/mohsinalisolangi/)

Looking forward to hearing from you! 😄
---
