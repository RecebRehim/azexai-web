export const site = {
  name: "AzexAI Systems",
  platformName: "AzexAI VSM",
  platformUrl: process.env.NEXT_PUBLIC_VSM_URL ?? "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@azexai.systems",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://azexai.systems",
} as const;

export const plusCodes = [
  "PB",
  "EI",
  "CF",
  "CR",
  "GOV+",
  "IP+",
  "ESG+",
] as const;

export const processChain = [
  "uncertainty",
  "evidence",
  "structure",
  "result",
  "understanding",
] as const;

export const navItems = [
  { href: "/", key: "home" },
  { href: "/vsm", key: "vsm" },
  { href: "/products", key: "products" },
  { href: "/technology", key: "technology" },
  { href: "/iit-3d", key: "iit3d" },
  { href: "/trust", key: "trust" },
  { href: "/research", key: "research" },
  { href: "/company", key: "company" },
  { href: "/insights", key: "insights" },
  { href: "/support", key: "support" },
  { href: "/contact", key: "contact" },
] as const;

export const footerGroups = [
  {
    key: "platform",
    items: [
      { href: "/vsm", key: "vsm" },
      { href: "/iit-3d", key: "iit3d" },
      { href: "/trust", key: "trust" },
      { href: "/technology", key: "technology" },
    ],
  },
  {
    key: "products",
    items: [
      { href: "/products", key: "products" },
      { href: "/products/index", key: "index" },
      { href: "/products/institutional-index", key: "institutional" },
      { href: "/products/plus", key: "plus" },
    ],
  },
  {
    key: "company",
    items: [
      { href: "/company", key: "company" },
      { href: "/company/leadership", key: "leadership" },
      { href: "/company/partnerships", key: "partnerships" },
      { href: "/research", key: "research" },
      { href: "/insights", key: "insights" },
    ],
  },
  {
    key: "contact",
    items: [
      { href: "/support", key: "support" },
      { href: "/contact", key: "contact" },
      { href: "/contact?intent=partnership", key: "partnership" },
      { href: "/contact?intent=human", key: "human" },
    ],
  },
] as const;
