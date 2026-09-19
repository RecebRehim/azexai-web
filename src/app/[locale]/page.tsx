import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { AccessButton, ButtonLink } from "@/components/ui/ButtonLink";
import { StructureCanvas } from "@/components/brand/StructureCanvas";

export default async function HomePage({ params }: { params: Promise<{locale:string}> }) {
  const { locale } = await params; setRequestLocale(locale);
  const t = await getTranslations("home"); const p = await getTranslations("products"); const c = await getTranslations("common");
  const steps = t.raw("systemSteps") as string[];
  const plus = t.raw("plusServices") as {code:string; title:string; body:string}[];
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 site-grid" />
        <div className="relative mx-auto grid min-h-[680px] max-w-[1280px] items-center gap-14 px-6 py-20 md:px-8 lg:grid-cols-[1.02fr_.98fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="kicker reveal">{t("kicker")}</p>
            <h1 className="font-display mt-6 text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.03] reveal">{t("headline")}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-paper-soft reveal">{t("lede")}</p>
            <div className="mt-10 flex flex-wrap gap-3"><ButtonLink href="/platform">{t("explore")}</ButtonLink><ButtonLink href="/technology" variant="secondary">{t("technology")}</ButtonLink><AccessButton label={t("access")} variant="ghost" /></div>
            <p className="mt-8 text-xs text-paper-dim">{t("heroNote")}</p>
          </div>
          <div className="relative min-h-[420px] lg:min-h-[540px]"><StructureCanvas caption={t("visualCaption")} /></div>
        </div>
      </section>

      <section className="border-b border-line bg-ink-2"><div className="mx-auto grid max-w-[1280px] gap-8 px-6 py-20 md:grid-cols-[.75fr_1.25fr] md:px-8 md:py-28"><div><p className="kicker">{t("problemKicker")}</p><h2 className="font-display mt-5 text-3xl md:text-5xl">{t("problemTitle")}</h2></div><p className="text-lg leading-8 text-paper-soft">{t("problemBody")}</p></div></section>

      <section><div className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-28"><p className="kicker">{t("systemKicker")}</p><h2 className="font-display mt-5 max-w-4xl text-3xl md:text-5xl">{t("systemTitle")}</h2><div className="mt-12 grid gap-px bg-line md:grid-cols-3 lg:grid-cols-6">{steps.map((step,i)=><div key={step} className="bg-ink p-6"><span className="font-mono text-xs text-teal">0{i+1}</span><p className="mt-8 text-sm leading-6">{step}</p></div>)}</div></div></section>

      <section className="border-y border-line bg-ink-2"><div className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-28"><p className="kicker">{p("kicker")}</p><h2 className="font-display mt-5 text-3xl md:text-5xl">{p("headline")}</h2><div className="mt-12 grid gap-px bg-line md:grid-cols-3"><article className="bg-ink p-8"><h3 className="font-display text-2xl" translate="no">Azevsm Index</h3><p className="mt-4 text-paper-soft leading-7">{p("indexLede")}</p><Link className="mt-7 inline-block text-sm text-teal" href="/products/index">{c("explore")}</Link></article><article className="bg-ink p-8"><h3 className="font-display text-2xl" translate="no">Azevsm Institutional Index</h3><p className="mt-4 text-paper-soft leading-7">{p("instLede")}</p><Link className="mt-7 inline-block text-sm text-teal" href="/products/institutional-index">{c("explore")}</Link></article><article className="bg-ink p-8"><h3 className="font-display text-2xl" translate="no">Azevsm Plus</h3><p className="mt-4 text-paper-soft leading-7">{p("plusLede")}</p><Link className="mt-7 inline-block text-sm text-teal" href="/products/plus">{c("explore")}</Link></article></div></div></section>

      <section><div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 md:grid-cols-2 md:px-8 md:py-28"><div><p className="kicker">{t("aiKicker")}</p><h2 className="font-display mt-5 text-3xl md:text-5xl">{t("aiTitle")}</h2></div><div className="text-lg leading-8 text-paper-soft"><p>{t("aiBody")}</p><p className="mt-7 border-l-2 border-teal pl-5">{t("aiBoundary")}</p></div></div></section>

      <section className="border-y border-line bg-ink-2"><div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 md:grid-cols-2 md:px-8 md:py-28"><div><p className="kicker">{t("whiteBoxKicker")}</p><h2 className="font-display mt-5 text-3xl md:text-5xl">{t("whiteBoxTitle")}</h2></div><div><p className="text-lg leading-8 text-paper-soft">{t("whiteBoxBody")}</p><Link href="/white-box" className="mt-7 inline-block text-sm text-teal">{t("learnMore")}</Link></div></div></section>

      <section><div className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-28"><p className="kicker">{t("standardKicker")}</p><h2 className="font-display mt-5 text-3xl md:text-5xl">{t("standardTitle")}</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-paper-soft">{t("standardBody")}</p></div></section>

      <section className="border-y border-line bg-ink-2"><div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 md:grid-cols-2 md:px-8 md:py-28"><div><p className="kicker">{t("trustKicker")}</p><h2 className="font-display mt-5 text-3xl md:text-5xl">{t("trustTitle")}</h2></div><div><p className="text-lg leading-8 text-paper-soft">{t("trustBody")}</p><Link href="/trust" className="mt-7 inline-block text-sm text-teal">{t("learnMore")}</Link></div></div></section>

      <section><div className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-28"><p className="kicker">{t("audienceKicker")}</p><h2 className="font-display mt-5 text-3xl md:text-5xl">{t("audienceTitle")}</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-paper-soft">{t("audienceBody")}</p></div></section>

      <section className="border-t border-line"><div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-20 md:grid-cols-2 md:px-8 md:py-28"><div><p className="kicker">{t("companyKicker")}</p><h2 className="font-display mt-5 text-3xl md:text-5xl">AzevsmAI Systems</h2></div><p className="text-lg leading-8 text-paper-soft">{t("companyBody")}</p></div></section>

      <section className="bg-graphite"><div className="mx-auto flex max-w-[1280px] flex-col gap-7 px-6 py-20 md:px-8 md:py-24"><h2 className="font-display max-w-4xl text-3xl md:text-5xl">{t("closingTitle")}</h2><p className="max-w-2xl text-lg leading-8 text-paper-soft">{t("closingBody")}</p><div><ButtonLink href="/contact?intent=partnership">{t("contact")}</ButtonLink></div></div></section>
    </>
  );
}
