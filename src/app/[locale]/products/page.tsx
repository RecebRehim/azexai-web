import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero, Section } from "@/components/ui/PageHero";
import { plusCodes } from "@/lib/site";

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("products");
  const c = await getTranslations("common");

  return (
    <>
      <PageHero kicker={t("kicker")} title={t("headline")} lede={t("lede")} />
      <Section className="!pt-0">
        <div className="grid gap-px bg-line">
          <article className="bg-ink px-0 py-14 md:grid md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <h2 className="font-display text-4xl">{t("indexName")}</h2>
            <div>
              <p className="text-lg leading-8 text-paper-soft">{t("indexLede")}</p>
              <ul className="mt-6 space-y-3 text-paper-soft">
                {(t.raw("indexPoints") as string[]).map((item) => (
                  <li key={item} className="border-l border-bronze pl-4">{item}</li>
                ))}
              </ul>
              <ButtonLink href="/products/index" variant="secondary" className="mt-8">
                {c("exploreIndex")}
              </ButtonLink>
            </div>
          </article>
          <article className="bg-ink px-0 py-14 md:grid md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <h2 className="font-display text-4xl">{t("instName")}</h2>
            <div>
              <p className="text-lg leading-8 text-paper-soft">{t("instLede")}</p>
              <ul className="mt-6 space-y-3 text-paper-soft">
                {(t.raw("instPoints") as string[]).map((item) => (
                  <li key={item} className="border-l border-bronze pl-4">{item}</li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-paper-dim">{t("instNote")}</p>
              <ButtonLink href="/products/institutional-index" variant="secondary" className="mt-8">
                {c("exploreInstitutional")}
              </ButtonLink>
            </div>
          </article>
          <article className="bg-ink px-0 py-14 md:grid md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <h2 className="font-display text-4xl">{t("plusName")}</h2>
            <div>
              <p className="text-lg leading-8 text-paper-soft">{t("plusLede")}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {plusCodes.map((code) => (
                  <Link
                    key={code}
                    href="/products/plus"
                    className="border border-line px-4 py-2 font-mono text-sm tracking-[0.14em] text-bronze hover:border-bronze"
                  >
                    {code}
                  </Link>
                ))}
              </div>
              <ButtonLink href="/products/plus" variant="secondary" className="mt-8">
                {c("explorePlus")}
              </ButtonLink>
            </div>
          </article>
        </div>
      </Section>
    </>
  );
}
