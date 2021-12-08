
# Findora Swap
Swap DEX For Findora EVM


## Setup

### Deploy Router and Factory
```
cd exchange-contracts
npm install 
run migrations

cd factory-contract
npm install 
run migrations
```


#### Setup Frontend

- Update .env
```
cd dapp-v1
cp .env.development .env
```

- Update `Router` address to `ROUTER_ADDRESS` at `src/constants/index.ts`
  
- Update support chain to testnet at `src/connectors/index.ts`	

- Update `Factory` address and code hash to `FACTORY_ADDRESS` and `INIT_CODE_HASH` in SDK

- Update `Factory` address to `v2 factory`; `Router01` address to `v2 router 01` and `Router` address to `v2 router 02` at `src/state/swap/hooks.ts`

- Update `WBNB` address to FRA Address  in SDK

- Update multicall contracts in /src/constants/multicall/index.ts(6,12)


- Update BSCSCAN_PREFIXES (change chainids) in util/index


- Deploy your own tokens
	+ Deploy your own tokens and update info (token address + chainId ) token json
	+ Remember update token icon with name as token address in lowercase mode to `public/images/coins`	
	+ Update coin addresses to your at `src/constants/index.ts`
	
	
- Custom menu at `src/components/Menu/config.ts`

### Start and Build Frontend

- Start
```
yarn start
```

- Build
```
yarn build
```

### Deployed Contracts (Check on Findora Blockscout)

- FRA(FRC20): 0x0000000000000000000000000000000000001000
- Factory:  0x65BD2c527E75664C2f64be47Ca68734D45D375C9
- Router:   0xFce0ef9690eD67Bd48FDB2C01bddCC92240D4307
- Multicall: 0xc42616A31f8333566d12c26B1884f7Ade440e3ef
- Frontend:        https://localhost:3000


**Tokens**

- FRA Token: 0x0000000000000000000000000000000000001000
- DAI Token: 0x3cBe826aC1ACfd97bBADe07FB4640B7D990BccB2
