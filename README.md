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

1. **Flowchart** (for general process flows):
```mermaid
flowchart TD
    A[User] --> B[Create Wallet]
    B --> C[Deploy Contract]
    C --> D[Set Initial Greeting]
    D --> E[Read Greeting]
    E --> F[Set New Greeting]
    F --> G[Read New Greeting]
```

2. **State Diagram** (for showing state transitions):
```mermaid
stateDiagram-v2
    [*] --> WalletCreation
    WalletCreation --> ContractDeployment
    ContractDeployment --> InitialGreeting
    InitialGreeting --> ReadGreeting
    ReadGreeting --> UpdateGreeting
    UpdateGreeting --> ReadGreeting
    ReadGreeting --> [*]
```

3. **Class Diagram** (for showing contract structure):
```mermaid
classDiagram
    class ContractFactory {
        +deployContract()
    }
    class GreetingContract {
        +string greeting
        +setGreeting()
        +getGreeting()
    }
    ContractFactory --> GreetingContract
```

4. **Entity Relationship Diagram** (for showing relationships):
```mermaid
erDiagram
    USER ||--o{ WALLET : creates
    USER ||--o{ CONTRACT : deploys
    WALLET ||--o{ CONTRACT : interacts
    CONTRACT {
        string greeting
        function setGreeting
        function getGreeting
    }
```

5. **Gantt Chart** (for project timeline visualization):
```mermaid
gantt
    title HelloBase Interaction Flow
    dateFormat  s
    axisFormat %S
    Create Wallet      :a1, 0, 2s
    Deploy Contract    :a2, after a1, 3s
    Set Initial Greeting :a3, after a2, 2s
    Read Greeting      :a4, after a3, 1s
    Update Greeting    :a5, after a4, 2s
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

## Contact

Feel free to reach out if you have any questions!

[steve@pinata.cloud](mailto:steve@pinata.cloud)
