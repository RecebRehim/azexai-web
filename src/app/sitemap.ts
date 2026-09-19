import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { site, sitemapPaths } from "@/lib/site";

const CONTENT_DATE = new Date("2026-09-19");

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) =>
    sitemapPaths.map((path) => ({
      url: `${site.url}/${locale}${path}`,
      lastModified: CONTENT_DATE,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.7,
    })),
  );
}
