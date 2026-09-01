import { getTranslations } from "next-intl/server";
import { processChain } from "@/lib/site";

export async function ProcessChain({ className = "" }: { className?: string }) {
  const t = await getTranslations("chain");

  return (
    <ol
      className={`flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-bronze ${className}`}
    >
      {processChain.map((key, i) => (
        <li key={key} className="flex items-center gap-3">
          {i > 0 && <span className="text-paper-dim/50" aria-hidden>→</span>}
          <span>{t(key)}</span>
        </li>
      ))}
    </ol>
  );
}
