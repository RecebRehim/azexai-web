import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ProcessChain } from "@/components/brand/ProcessChain";
import { BrandLockup } from "@/components/brand/BrandLockup";
import { AccessButton, ButtonLink } from "@/components/ui/ButtonLink";
import { NumberedList } from "@/components/ui/PageHero";
import { plusCodes } from "@/lib/site";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const c = await getTranslations("common");
  const p = await getTranslations("products");

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 site-grid" />
        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 pb-20 pt-24 md:pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28">
          <div>
            <p className="kicker reveal">{t("kicker")}</p>
            <h1 className="font-display mt-6 text-[2.6rem] leading-[1.05] text-paper md:text-[4.4rem] reveal">
              {t("headline")}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-paper-soft reveal">
              {t("lede")}
            </p>
            <div className="mt-10 flex flex-wrap gap-3 reveal">
              <ButtonLink href="/vsm">{c("exploreVsm")}</ButtonLink>
              <AccessButton label={c("accessPlatform")} variant="secondary" />
            </div>
            <div className="mt-14 reveal">
              <ProcessChain />
            </div>
          </div>
          <div className="reveal">
            <BrandLockup />
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <h2 className="font-display text-4xl leading-tight md:text-5xl">{t("statementA")}</h2>
          <div>
            <p className="font-display text-3xl text-bronze">{t("statementB")}</p>
            <p className="mt-6 text-lg leading-8 text-paper-soft">{t("body")}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="kicker">{t("principlesTitle")}</p>
        <div className="mt-8">
          <NumberedList items={t.raw("principles") as string[]} />
        </div>
      </section>

      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="kicker">{t("boundaryKicker")}</p>
          <h2 className="font-display mt-6 max-w-4xl text-4xl leading-tight md:text-5xl">
            {t("boundaryTitle")}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-paper-soft">{t("boundaryBody")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="kicker">{t("productsTitle")}</p>
        <div className="mt-10 grid gap-px bg-line md:grid-cols-3">
          {[
            {
              href: "/products/index",
              name: p("indexName"),
              lede: p("indexLede"),
              cta: c("exploreIndex"),
            },
            {
              href: "/products/institutional-index",
              name: p("instName"),
              lede: p("instLede"),
              cta: c("exploreInstitutional"),
            },
            {
              href: "/products/plus",
              name: p("plusName"),
              lede: p("plusLede"),
              cta: c("explorePlus"),
              codes: true,
            },
          ].map((card) => (
            <article key={card.href} className="bg-ink p-8 md:p-10">
              <h3 className="font-display text-3xl">{card.name}</h3>
              <p className="mt-4 min-h-[4.5rem] text-sm leading-7 text-paper-soft">{card.lede}</p>
              {card.codes && (
                <p className="mt-6 font-mono text-[11px] tracking-[0.16em] text-bronze">
                  {plusCodes.join("  ·  ")}
                </p>
              )}
              <Link
                href={card.href}
                className="mt-8 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-bronze"
              >
                {card.cta} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="kicker">{t("trustTitle")}</p>
          <NumberedList items={t.raw("trustItems") as string[]} />
        </div>
      </section>

      <section className="border-t border-line bg-ink-2">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="kicker">{t("iitTitle")}</p>
            <h2 className="font-display mt-5 text-4xl">{t("iitLede")}</h2>
            <p className="mt-5 text-lg leading-8 text-paper-soft">{t("iitBody")}</p>
            <ButtonLink href="/iit-3d" variant="secondary" className="mt-8">
              IIT 3D
            </ButtonLink>
          </div>
          <div>
            <p className="kicker">{t("scienceTitle")}</p>
            <p className="mt-5 text-lg leading-8 text-paper-soft">{t("scienceBody")}</p>
            <p className="mt-10 kicker">{t("companyTitle")}</p>
            <p className="mt-5 text-lg leading-8 text-paper-soft">{t("companyBody")}</p>
            <ButtonLink href="/company" variant="ghost" className="mt-6">
              {c("aboutCompany")} →
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
