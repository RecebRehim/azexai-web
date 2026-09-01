import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { NumberedList, PageHero, Section } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/trust", "trust");
}

export default async function TrustPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("trust");
  const nav = await getTranslations("nav");

  return (
    <>
      <PageHero kicker={t("kicker")} title={t("headline")} lede={t("lede")} />
      <Section>
        <NumberedList items={t.raw("items") as string[]} />
        <p className="mt-12 max-w-3xl font-display text-3xl leading-snug">{t("order")}</p>
      </Section>
      <section className="border-t border-line bg-ink-2">
        <Section>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="kicker">{t("explainTitle")}</p>
              <p className="mt-5 text-lg leading-8 text-paper-soft">{t("explainBody")}</p>
            </div>
            <div>
              <p className="kicker">{t("validationTitle")}</p>
              <p className="mt-5 text-lg leading-8 text-paper-soft">{t("validationBody")}</p>
            </div>
          </div>
          <ButtonLink href="/technology" variant="secondary" className="mt-12">
            {nav("technology")}
          </ButtonLink>
        </Section>
      </section>
    </>
  );
}
