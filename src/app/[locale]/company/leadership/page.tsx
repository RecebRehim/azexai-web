import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero, Section } from "@/components/ui/PageHero";

export default async function LeadershipPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("leadership");

  return (
    <>
      <PageHero kicker={t("kicker")} title={t("headline")} lede={t("lede")} />
      <Section>
        <div className="border border-dashed border-line-strong p-10 md:p-16">
          <p className="kicker">Public record</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-paper-soft">{t("empty")}</p>
        </div>
      </Section>
    </>
  );
}
