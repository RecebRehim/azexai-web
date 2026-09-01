import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero, Section } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "/company/partnerships", "partnerships");
}

export default async function PartnershipsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("partnerships");
  const c = await getTranslations("common");

  return (
    <>
      <PageHero kicker={t("kicker")} title={t("headline")} lede={t("lede")} />
      <Section>
        <ul className="grid gap-px bg-line sm:grid-cols-2 md:grid-cols-4">
          {(t.raw("types") as string[]).map((item) => (
            <li key={item} className="bg-ink px-6 py-10">
              <p className="font-display text-2xl">{item}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <ButtonLink href="/contact?intent=partnership">{c("partnershipInquiry")}</ButtonLink>
        </div>
      </Section>
    </>
  );
}
