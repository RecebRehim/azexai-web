import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { site } from "@/lib/site";

const paths = [
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
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${site.url}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.7,
    })),
  );
}
