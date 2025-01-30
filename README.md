# d-drive

A decentralized file service system.

## Overview

`d-drive` is a decentralized file storage system that allows users to upload and access files in a decentralized manner using **IPFS** (InterPlanetary File System). Files are uploaded and stored in the distributed network of IPFS, where they can be accessed securely and efficiently using unique Content Identifiers (CIDs).

## How It Works

In this system, **Pinata** is used to interact with the IPFS network for uploading files. However, Pinata is **not used as a pinning service** in this project. Here's how the process works:

1. **Uploading Files to IPFS**:  
   The data is uploaded to IPFS via **Pinata's API**. This allows the files to be stored in the decentralized IPFS network. When a file is uploaded, it is given a unique **Content Identifier (CID)** that points to the content stored on IPFS.

2. **Not Using Pinata for Pinning**:  
   While **Pinata** can provide a pinning service (which keeps data available by storing it on Pinata's nodes), **this project does not rely on Pinata for pinning**. Pinning ensures data permanence, but without it, your data may not remain available if other nodes in the IPFS network don't hold it.

3. **Fetching Files from IPFS**:  
   Once a file is uploaded to IPFS, it can be accessed using its **CID**. The data is available through any node in the IPFS network that has cached or pinned that content. The file can be fetched directly using public IPFS gateways, your own IPFS node, or any other available node that stores the content.
`https://ipfs.io/ipfs/<CID>`

## Key Features

- **Decentralized**: Your files are stored in a distributed manner across the IPFS network.
- **Access Anytime**: Files are accessible using their CID from any IPFS node holding the data.
- **No Pinning Dependency**: The system does not rely on Pinata’s pinning service, allowing files to be fetched directly from the IPFS network.

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   (or)
   pnpm install
   ```

2. **Git clone**:
   ```bash
   git clone https://github.com/naveen-2111-dev/ddrive.front.git
   ```

3. **Run the project**:
   ```bash
   npm run dev
   (or)
   pnpm run dev
   ```
# The D-drive
![Image](https://github.com/user-attachments/assets/8ad5b3a5-1bb8-40cc-9279-6b9c2f3c9137)
