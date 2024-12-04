## HelloBase

![og](./public/og.png)

This is the official repo for HelloBase.dev, a starting place for any developer who is interested in building onchain.

The app is composed of two pieces:

- Next.js client
- [Smart Contracts on Base Sepolia](https://github.com/PinataCloud/hello-base-contracts)

This repo contains the code for the Next.js client and uses a combination of [Wagmi.sh](https://wagmi.sh) and [Coinbase Smart Wallets](https://www.coinbase.com/wallet/smart-wallet) to provide a seemless experience for anyone to start building onchain. Below is a flow chart for the user experience and what happens behind the scenes.

```mermaid
sequenceDiagram
    participant User
    participant Wallet
    participant ContractFactory
    participant Contract

    User->>Wallet: Create Wallet
    User->>ContractFactory: Deploy Contract
    ContractFactory-->>Contract: Create new instance
    ContractFactory-->>User: Return contract address
    User->>Contract: Set initial greeting
    Contract-->>User: Confirm transaction
    User->>Contract: Read greeting
    Contract-->>User: Return greeting
    User->>Contract: Set new greeting
    Contract-->>User: Confirm transaction
    User->>Contract: Read greeting again
    Contract-->>User: Return new greeting
```

## Development

First clone the repo and install dependencies

```
git clone https://github.com/PinataCloud/hello-base
cd hello-base
npm install
```

Update the `.env.example` to `.env.local` and fill in the environment variables

```
NEXT_PUBLIC_URL= # Hosted App URL
NEXT_PUBLIC_FACTORY_ADDRESS= # Address of deployed factory
```

Spin up the dev server

```
npm run dev
```
