
# Migrate
npx truffle migrate --reset --network findoraForge 

# truffle console

npx truffle console --network findoraForge --log

# PanCake Exchange Contracts 🥞

PancakeFactoryV2 Testnet: 0x65BD2c527E75664C2f64be47Ca68734D45D375C9 

PancakeRouterV2: 0xFce0ef9690eD67Bd48FDB2C01bddCC92240D4307 

FRA (FRC20): 0x0000000000000000000000000000000000001000

Multicall: 0xc42616A31f8333566d12c26B1884f7Ade440e3ef

INIT HASH: b5ddb17968859aa42323083b0c8f548b0a56bbf2113ab44f7b006ba11f681397



# Findora test coins
!evm 0x5A2770f69AF30370D60B416ad31FF538839112F6

let block = await web3.eth.getBlock("latest")

await rtr.addLiquidity('0xc6742e096AfE473412077FD0E293AeAD2204420d','0x079aCCeA3D2216088865260A6ab1c74aea19535A','10000','10000','9800','9800','0x5A2770f69AF30370D60B416ad31FF538839112F6', '1636392911')


### Run test

npx truffle test --network findoraForge --compile-none tests/test1.js