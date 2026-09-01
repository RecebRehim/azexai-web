import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero, Section } from "@/components/ui/PageHero";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/privacy", "privacy");
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");

  return (
    <>
      <PageHero kicker={t("kicker")} title={t("headline")} lede={t("lede")} />
      <Section>
        <div className="max-w-3xl space-y-8 text-lg leading-8 text-paper-soft">
          {(t.raw("sections") as { title: string; body: string }[]).map((section) => (
            <article key={section.title}>
              <h2 className="font-display text-2xl text-paper">{section.title}</h2>
              <p className="mt-3">{section.body}</p>
            </article>
          ))}
          <p className="text-sm text-paper-dim">{t("disclaimer")}</p>
        </div>
      </Section>
    </>
  );
}
