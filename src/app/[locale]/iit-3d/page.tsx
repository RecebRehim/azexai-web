import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { StructureCanvas } from "@/components/brand/StructureCanvas";
import { PageHero, Section } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/iit-3d", "iit3d");
}

export default async function Iit3dPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("iit3d");
  const nav = await getTranslations("nav");

  return (
    <>
      <PageHero kicker={t("kicker")} title={t("headline")} lede={t("lede")} />
      <Section>
        <StructureCanvas caption={t("visualCaption")} />
        <p className="mt-12 max-w-3xl text-lg leading-8 text-paper-soft">{t("body")}</p>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-paper-dim">{t("note")}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/products/institutional-index" variant="secondary">
            {nav("institutional")}
          </ButtonLink>
          <ButtonLink href="/trust" variant="ghost">
            {nav("trust")}
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
