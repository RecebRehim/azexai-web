import { getTranslations, setRequestLocale } from "next-intl/server";
import { StructureCanvas } from "@/components/brand/StructureCanvas";
import { PageHero, Section } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default async function Iit3dPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("iit3d");

  return (
    <>
      <PageHero kicker={t("kicker")} title={t("headline")} lede={t("lede")} />
      <Section>
        <StructureCanvas caption={t("visualCaption")} />
        <p className="mt-12 max-w-3xl text-lg leading-8 text-paper-soft">{t("body")}</p>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-paper-dim">{t("note")}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/products/institutional-index" variant="secondary">
            Institutional Index
          </ButtonLink>
          <ButtonLink href="/trust" variant="ghost">
            Trust →
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
