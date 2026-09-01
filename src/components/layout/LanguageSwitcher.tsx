"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/routing";

const labels: Record<Locale, string> = {
  az: "AZ",
  ru: "RU",
  en: "EN",
};

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("nav");

  return (
    <div className="flex items-center gap-1 font-mono text-[11px] tracking-[0.18em]" role="group" aria-label={t("language")}>
      {locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => router.replace(pathname, { locale: code })}
            className={`px-1.5 py-1 transition-colors duration-200 ${
              active ? "text-bronze" : "text-paper-dim hover:text-paper"
            }`}
            aria-current={active ? "true" : undefined}
            lang={code}
          >
            {labels[code]}
          </button>
        );
      })}
    </div>
  );
}
