import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { site } from "@/lib/site";

export async function pageMetadata(
  locale: string,
  path: string,
  namespace: string,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });
  const languages: Record<string, string> = {
    "x-default": `${site.url}/${routing.defaultLocale}${path}`,
  };
  for (const code of routing.locales) {
    languages[code] = `${site.url}/${code}${path}`;
  }
  const title = t("kicker");
  const description = t("lede");
  const url = `${site.url}/${locale}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title,
      description,
      url,
      locale,
      siteName: site.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
