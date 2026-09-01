import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Exo_2, IBM_Plex_Mono, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SupportAssistant } from "@/components/support/SupportAssistant";
import { routing } from "@/i18n/routing";
import { site } from "@/lib/site";

const display = Exo_2({
  variable: "--font-display",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["500", "600", "700"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const title = t("title");
  const description = t("description");
  const languages: Record<string, string> = {
    "x-default": `${site.url}/${routing.defaultLocale}`,
  };
  for (const code of routing.locales) {
    languages[code] = `${site.url}/${code}`;
  }

  return {
    metadataBase: new URL(site.url),
    title: {
      default: title,
      template: `%s · ${t("siteName")}`,
    },
    description,
    alternates: {
      canonical: `${site.url}/${locale}`,
      languages,
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      siteName: t("siteName"),
      type: "website",
      locale,
      url: `${site.url}/${locale}`,
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
    robots: { index: true, follow: true },
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
      apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    },
    other: {
      "theme-color": "#0b1218",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations("nav");
  const meta = await getTranslations("meta");

  return (
    <html
      lang={locale}
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink font-sans text-paper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              url: site.url,
              email: site.email,
              description: meta("description"),
            }),
          }}
        />
        <NextIntlClientProvider messages={messages}>
          <a href="#main" className="skip-link">
            {t("skipToContent")}
          </a>
          <div className="site-grain" aria-hidden="true" />
          <Header />
          <main id="main" className="relative z-10 pt-16" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <SupportAssistant />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
