import { getTranslations, setRequestLocale } from "next-intl/server";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero, Section } from "@/components/ui/PageHero";

export default async function InstitutionalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("institutional");
  const c = await getTranslations("common");

  return (
    <>
      <PageHero kicker={t("kicker")} title={t("headline")} lede={t("lede")}>
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-bronze">{t("label")}</p>
        <p className="mt-6 max-w-3xl font-mono text-[12px] leading-7 tracking-[0.08em] text-paper-dim">
          {t("flow")}
        </p>
      </PageHero>
      <Section>
        <div className="grid gap-16">
          <article>
            <p className="kicker">{t("damTitle")}</p>
            <h2 className="font-display mt-4 text-4xl">{t("damLede")}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-paper-soft">{t("damBody")}</p>
          </article>
          <article>
            <p className="kicker">{t("iitTitle")}</p>
            <h2 className="font-display mt-4 text-4xl">{t("iitLede")}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-paper-soft">{t("iitBody")}</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-paper-dim">{t("iitNote")}</p>
            <ButtonLink href="/iit-3d" variant="secondary" className="mt-8">
              IIT 3D
            </ButtonLink>
          </article>
          <article>
            <p className="kicker">{t("whiteTitle")}</p>
            <h2 className="font-display mt-4 text-4xl">{t("whiteLede")}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-paper-soft">{t("whiteBody")}</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-paper-dim">{t("whiteNote")}</p>
          </article>
          <article className="border border-line p-8 md:p-12">
            <p className="kicker">{t("boundaryTitle")}</p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-paper-soft">{t("boundaryBody")}</p>
            <ButtonLink href="/contact?intent=product" className="mt-8">
              {c("exploreInstitutional")}
            </ButtonLink>
          </article>
        </div>
      </Section>
    </>
  );
}
