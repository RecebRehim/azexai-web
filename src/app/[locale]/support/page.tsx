import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero, Section } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { OpenAssistantButton } from "@/components/support/SupportAssistant";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/support", "support");
}

export default async function SupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("support");
  const c = await getTranslations("common");

  return (
    <>
      <PageHero kicker={t("kicker")} title={t("headline")} lede={t("lede")} />
      <Section>
        <div className="grid gap-px bg-line md:grid-cols-2">
          <article className="bg-ink p-8 md:p-12">
            <p className="kicker">{t("assistantTitle")}</p>
            <p className="mt-5 text-lg leading-8 text-paper-soft">{t("assistantBody")}</p>
            <p className="mt-4 text-sm leading-7 text-paper-dim">{t("assistantLimit")}</p>
            <div className="mt-8">
              <OpenAssistantButton label={t("openAssistant")} />
            </div>
          </article>
          <article className="bg-ink p-8 md:p-12">
            <p className="kicker">{t("humanTitle")}</p>
            <p className="mt-5 text-lg leading-8 text-paper-soft">{t("humanBody")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact?intent=support">{c("contactSupport")}</ButtonLink>
              <ButtonLink href="/contact?intent=human" variant="secondary">
                {c("humanSupport")}
              </ButtonLink>
            </div>
          </article>
        </div>
      </Section>
    </>
  );
}
