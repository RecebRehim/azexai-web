function publicEnv(name: string, fallback = "") {
  const value = process.env[name]?.trim();
  return value || fallback;
}

const vercelUrl = process.env.VERCEL_URL?.trim();

export const site = {
  name: "AzexAI Systems",
  platformName: "AzexAI VSM",
  platformUrl: publicEnv("NEXT_PUBLIC_VSM_URL"),
  email: publicEnv("NEXT_PUBLIC_CONTACT_EMAIL", "contact@azexai.systems"),
  url: publicEnv(
    "NEXT_PUBLIC_SITE_URL",
    vercelUrl ? `https://${vercelUrl}` : "https://azexai.systems",
  ),
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

export const intentKeys = [
  "general",
  "product",
  "platform",
  "partnership",
  "corporate",
  "human",
  "support",
] as const;

export type IntentKey = (typeof intentKeys)[number];

export const productNav = [
  { href: "/products", key: "products" },
  { href: "/products/index", key: "index" },
  { href: "/products/institutional-index", key: "institutional" },
  { href: "/products/plus", key: "plus" },
  { href: "/iit-3d", key: "iit3d" },
] as const;

export const companyNav = [
  { href: "/company", key: "company" },
  { href: "/company/leadership", key: "leadership" },
  { href: "/company/partnerships", key: "partnerships" },
  { href: "/research", key: "research" },
  { href: "/insights", key: "insights" },
  { href: "/support", key: "support" },
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

export const sitemapPaths = [
  "",
  "/vsm",
  "/products",
  "/products/index",
  "/products/institutional-index",
  "/products/plus",
  "/technology",
  "/iit-3d",
  "/trust",
  "/research",
  "/company",
  "/company/leadership",
  "/company/partnerships",
  "/insights",
  "/support",
  "/contact",
  "/privacy",
  "/terms",
] as const;
