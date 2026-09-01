import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero, Section } from "@/components/ui/PageHero";
import { AccessButton } from "@/components/ui/ButtonLink";
import { plusCodes } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/products/plus", "plus");
}

export default async function PlusPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("plus");
  const c = await getTranslations("common");

  return (
    <>
      <PageHero kicker={t("kicker")} title={t("headline")} lede={t("lede")} />
      <Section>
        <p className="max-w-3xl text-lg leading-8 text-paper-soft">{t("each")}</p>
        <div className="mt-12 grid grid-cols-2 gap-px bg-line sm:grid-cols-4 md:grid-cols-7">
          {plusCodes.map((code) => (
            <article key={code} className="bg-ink px-4 py-10 text-center">
              <p className="font-mono text-lg tracking-[0.14em] text-bronze" translate="no">
                {code}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <p className="kicker">{t("independenceTitle")}</p>
            <p className="mt-5 text-lg leading-8 text-paper-soft">{t("independenceBody")}</p>
          </div>
          <div>
            <p className="kicker">{t("presentationTitle")}</p>
            <p className="mt-5 text-lg leading-8 text-paper-soft">{t("presentationBody")}</p>
          </div>
        </div>
        <p className="mt-12 text-paper-soft">{t("asProduct")}</p>
        <div className="mt-10">
          <AccessButton label={c("primaryAction")} />
        </div>
      </Section>
    </>
  );
}
