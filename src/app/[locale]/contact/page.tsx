import type { Metadata } from "next";
import { Suspense } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero, Section } from "@/components/ui/PageHero";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/contact", "contact");
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <>
      <PageHero kicker={t("kicker")} title={t("headline")} lede={t("lede")} />
      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <Suspense fallback={<div className="h-96 border border-line bg-ink-2" />}>
            <ContactForm />
          </Suspense>
          <aside className="border border-line p-8 md:p-10">
            <p className="kicker" translate="no">
              {site.name}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 block font-display text-2xl text-bronze hover:text-bronze-2"
            >
              {site.email}
            </a>
            <p className="mt-6 text-sm leading-7 text-paper-dim">{t("asideIntents")}</p>
          </aside>
        </div>
      </Section>
    </>
  );
}
