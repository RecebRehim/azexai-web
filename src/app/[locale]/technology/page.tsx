import { getTranslations, setRequestLocale } from "next-intl/server";
import { NumberedList, PageHero, Section } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default async function TechnologyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("technology");
  const c = await getTranslations("common");

  return (
    <>
      <PageHero kicker={t("kicker")} title={t("headline")} lede={t("lede")} />
      <Section>
        <NumberedList items={t.raw("items") as string[]} />
        <p className="mt-14 max-w-3xl font-display text-3xl leading-snug md:text-4xl">
          {t("purpose")}
        </p>
      </Section>
      <section className="border-t border-line bg-ink-2">
        <Section>
          <p className="kicker">{t("protectedTitle")}</p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-paper-soft">{t("protectedBody")}</p>
          <p className="mt-8 text-sm text-paper-dim">{c("protectedNote")}</p>
          <ButtonLink href="/research" variant="secondary" className="mt-10">
            Research
          </ButtonLink>
        </Section>
      </section>
    </>
  );
}
