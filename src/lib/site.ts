function publicEnv(name: string, fallback = "") {
  const value = process.env[name]?.trim();
  return value || fallback;
}

const vercelUrl = process.env.VERCEL_URL?.trim();

export const site = {
  name: "AzevsmAI Systems",
  platformName: "AzevsmAI",
  platformUrl: publicEnv("NEXT_PUBLIC_VSM_URL"),
  email: publicEnv("NEXT_PUBLIC_CONTACT_EMAIL", "contact@azevsmai.systems"),
  url: publicEnv(
    "NEXT_PUBLIC_SITE_URL",
    vercelUrl ? `https://${vercelUrl}` : "https://azevsmai.systems",
  ),
} as const;

export const plusServices = [
  { code: "PB", label: "Büdcə təhlili" },
  { code: "EI", label: "İnvestisiya təhlili" },
  { code: "CF", label: "Maliyyə dayanıqlığı" },
  { code: "CR", label: "İnstitusional risk konturları" },
  { code: "GOV+", label: "İdarəetmənin dərinləşdirilmiş təhlili" },
  { code: "IP+", label: "Məhsul hüquqlarının bütövlüyü" },
  { code: "ESG+", label: "Dayanıqlılıq və xarici təsir" },
] as const;

export const plusCodes = plusServices.map((service) => service.code);

export const processChain = [
  "Evidence",
  "Validation",
  "Structured variables",
  "Controlled assessment",
  "Interpretation",
  "Traceable result",
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
] as const;

export const companyNav = [
  { href: "/company", key: "company" },
] as const;

export const footerGroups = [
  {
    key: "platform",
    items: [
      { href: "/platform", key: "platform" },
      { href: "/technology", key: "technology" },
      { href: "/white-box", key: "whiteBox" },
      { href: "/trust", key: "trust" },
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
    items: [{ href: "/company", key: "company" }],
  },
  {
    key: "contact",
    items: [
      { href: "/contact", key: "contact" },
      { href: "/contact?intent=partnership", key: "partnership" },
      { href: "/contact?intent=human", key: "human" },
    ],
  },
] as const;

export const sitemapPaths = [
  "",
  "/platform",
  "/products",
  "/products/index",
  "/products/institutional-index",
  "/products/plus",
  "/technology",
  "/white-box",
  "/trust",
  "/company",
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
  "/security",
  "/accessibility",
] as const;
