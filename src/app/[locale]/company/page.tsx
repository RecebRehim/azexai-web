import { getTranslations, setRequestLocale } from "next-intl/server";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero, Section } from "@/components/ui/PageHero";

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("company");

  return (
    <>
      <PageHero kicker={t("kicker")} title={t("headline")} lede={t("lede")} />
      <Section>
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="kicker">{t("aboutTitle")}</p>
            <p className="mt-5 text-lg leading-8 text-paper-soft">{t("aboutBody")}</p>
          </div>
          <div>
            <p className="kicker">{t("systemTitle")}</p>
            <p className="mt-5 text-lg leading-8 text-paper-soft">{t("systemBody")}</p>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap gap-3">
          <ButtonLink href="/company/leadership" variant="secondary">
            Leadership
          </ButtonLink>
          <ButtonLink href="/company/partnerships" variant="secondary">
            Partnerships
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
