import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProcessChain } from "@/components/brand/ProcessChain";
import { AccessButton } from "@/components/ui/ButtonLink";
import { NumberedList, PageHero, Section } from "@/components/ui/PageHero";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/vsm", "vsm");
}

export default async function VsmPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("vsm");
  const c = await getTranslations("common");

  return (
    <>
      <PageHero kicker={t("kicker")} title={t("headline")} lede={t("lede")}>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze">{t("title")}</p>
      </PageHero>
      <Section>
        <p className="font-display max-w-4xl text-3xl leading-snug md:text-4xl">{t("statement")}</p>
        <div className="mt-16">
          <p className="kicker">{t("doesTitle")}</p>
          <div className="mt-8">
            <NumberedList items={t.raw("does") as string[]} />
          </div>
        </div>
      </Section>
      <section className="border-y border-line bg-ink-2">
        <Section>
          <p className="kicker">{t("aiTitle")}</p>
          <h2 className="font-display mt-6 max-w-3xl text-4xl">{t("aiLede")}</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-paper-soft">{t("aiBody")}</p>
        </Section>
      </section>
      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="kicker">{t("modelTitle")}</p>
            <p className="mt-5 text-lg leading-8 text-paper-soft">{t("modelBody")}</p>
          </div>
          <div>
            <p className="kicker">{t("orderTitle")}</p>
            <p className="mt-5 text-lg leading-8 text-paper-soft">{t("orderBody")}</p>
          </div>
        </div>
        <div className="mt-16">
          <ProcessChain />
        </div>
      </Section>
      <section className="border-t border-line bg-ink-2">
        <Section>
          <p className="kicker">{t("accessTitle")}</p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-paper-soft">{t("accessBody")}</p>
          <div className="mt-8">
            <AccessButton label={c("primaryAction")} />
          </div>
        </Section>
      </section>
    </>
  );
}
