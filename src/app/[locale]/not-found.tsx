import { getTranslations } from "next-intl/server";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  const c = await getTranslations("common");

  return (
    <div className="mx-auto max-w-3xl px-6 py-32">
      <p className="kicker">{t("kicker")}</p>
      <h1 className="font-display mt-6 text-5xl">{t("headline")}</h1>
      <p className="mt-6 text-lg leading-8 text-paper-soft">{t("body")}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/">{t("home")}</ButtonLink>
        <ButtonLink href="/vsm" variant="secondary">
          {c("exploreVsm")}
        </ButtonLink>
      </div>
    </div>
  );
}
