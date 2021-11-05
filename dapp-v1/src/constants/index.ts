import { ChainId, JSBI, Percent, Token, WETH } from 'fswap-sdk';

export const ROUTER_ADDRESS = '0xFce0ef9690eD67Bd48FDB2C01bddCC92240D4307'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const CAKE = new Token(ChainId.TESTNET, '0xB8F5B50ed77596b5E638359d828000747bb3dd89', 18, 'CAKE', 'PancakeSwap Token')
export const FRA = new Token(ChainId.TESTNET, '0x0000000000000000000000000000000000001000', 18, 'FRA', 'FINDORA')
export const DAI = new Token(ChainId.TESTNET, '0x3Cf204795c4995cCf9C1a0B3191F00c01B03C56C', 18, 'DAI', 'Dai Stablecoin')
export const BUSD = new Token(ChainId.TESTNET, '0xE0dFffc2E01A7f051069649aD4eb3F518430B6a4', 18, 'BUSD', 'Binance USD')
export const USDT = new Token(ChainId.TESTNET, '0x7afd064DaE94d73ee37d19ff2D264f5A2903bBB0', 18, 'USDT', 'Tether USD')
export const ETH = new Token(ChainId.TESTNET, '0xE282a15DBad45e3131620C1b8AF85B7330Cb3b4B', 18, 'ETH', 'Binance-Peg Ethereum Token')

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.TESTNET]: [WETH[ChainId.TESTNET]],
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.TESTNET]: [...WETH_ONLY[ChainId.TESTNET], DAI, BUSD, USDT, ETH],
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.TESTNET]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.TESTNET]: [...WETH_ONLY[ChainId.TESTNET], DAI, BUSD, USDT],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.TESTNET]: [...WETH_ONLY[ChainId.TESTNET], DAI, BUSD, USDT],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.TESTNET]: [
    [CAKE, FRA],
    [BUSD, USDT],
    [DAI, USDT],
  ],
}

export const NetworkContextName = 'FNETWORK1'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 80
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
