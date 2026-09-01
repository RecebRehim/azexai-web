"use client";

import { useTranslations } from "next-intl";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("error");

  return (
    <div className="mx-auto max-w-2xl px-6 py-32">
      <p className="kicker">{t("kicker")}</p>
      <h1 className="font-display mt-6 text-4xl">{t("headline")}</h1>
      <button
        type="button"
        onClick={reset}
        className="mt-8 border border-bronze px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-bronze hover:text-bronze-2"
      >
        {t("retry")}
      </button>
    </div>
  );
}
