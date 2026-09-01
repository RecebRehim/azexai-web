import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero, Section } from "@/components/ui/PageHero";
import { AccessButton } from "@/components/ui/ButtonLink";

export default async function IndexProductPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("index");
  const c = await getTranslations("common");

  return (
    <>
      <PageHero kicker={t("kicker")} title={t("headline")} lede={t("lede")} />
      <Section>
        <div className="grid gap-px bg-line md:grid-cols-2">
          <article className="bg-ink p-8 md:p-12">
            <p className="kicker">{t("standardTitle")}</p>
            <p className="mt-6 font-display text-3xl leading-snug">{t("standardBody")}</p>
          </article>
          <article className="bg-ink p-8 md:p-12">
            <p className="kicker">{t("premiumTitle")}</p>
            <p className="mt-6 font-display text-3xl leading-snug">{t("premiumBody")}</p>
          </article>
        </div>
        <p className="mt-12 max-w-2xl text-lg leading-8 text-paper-soft">{t("note")}</p>
        <div className="mt-10">
          <AccessButton label={c("primaryAction")} />
        </div>
      </Section>
    </>
  );
}
