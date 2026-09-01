import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero, Section } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("research");

  return (
    <>
      <PageHero kicker={t("kicker")} title={t("headline")} lede={t("lede")} />
      <Section>
        <div className="border border-line p-10 md:p-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze">01</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-paper-soft">{t("empty")}</p>
        </div>
        <ButtonLink href="/insights" variant="secondary" className="mt-10">
          Insights
        </ButtonLink>
      </Section>
    </>
  );
}
