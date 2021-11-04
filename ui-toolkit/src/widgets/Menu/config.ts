import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "http://localhost:3600",
      },
      {
        label: "Liquidity",
        href: "http://localhost:3600/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    status: status.LIVE,
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://findoraswap.info",
      },
      {
        label: "Tokens",
        href: "https://findoraswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://findoraswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://findoraswap.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.findoraswap.finance",
      },
      {
        label: "Github",
        href: "https://github.com/layinka",
      },
      {
        label: "Docs",
        href: "https://docs.findoraswap.finance",
      },
      {
        label: "Blog",
        href: "https://findoraswap.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/findoraswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/FindoraswapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/Findoraswap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/FindoraswapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/Findoraswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/Findoraswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/Findoraswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/FindoraswapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/FindoraswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/Findoraswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/Findoraswapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/FindoraswapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/FindoraswapWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/Findoraswap",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
