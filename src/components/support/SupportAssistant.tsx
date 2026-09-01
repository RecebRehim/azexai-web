"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { assistantAnswers, matchAssistant } from "@/lib/assistant";
import type { Locale } from "@/i18n/routing";

type Msg = { role: "user" | "assistant"; text: string };

export function SupportAssistant({ openByDefault = false }: { openByDefault?: boolean }) {
  const t = useTranslations("assistant");
  const locale = useLocale() as Locale;
  const [open, setOpen] = useState(openByDefault);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>(() => [
    { role: "assistant", text: t("greeting") },
  ]);

  const loc = useMemo(() => (locale === "az" || locale === "ru" ? locale : "en"), [locale]);

  function send() {
    const q = input.trim();
    if (!q) return;
    const key = matchAssistant(q);
    const answer = key ? assistantAnswers[key][loc] : t("fallback");
    setMessages((m) => [...m, { role: "user", text: q }, { role: "assistant", text: answer }]);
    setInput("");
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 border border-signal bg-ink-3 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-bronze shadow-[0_12px_40px_rgba(26,90,160,0.35)] hover:border-bronze"
      >
        {t("title")}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-end bg-ink/50 p-0 md:p-6">
          <div className="flex h-[min(720px,100dvh)] w-full max-w-md flex-col border border-line bg-ink-2">
            <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4">
              <div>
                <p className="kicker">{t("title")}</p>
                <p className="mt-2 text-sm leading-6 text-paper-soft">{t("subtitle")}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper-dim"
              >
                ×
              </button>
            </div>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {messages.map((m, i) => (
                <div
                  key={`${m.role}-${i}`}
                  className={m.role === "user" ? "ml-8 text-right" : "mr-4"}
                >
                  <p
                    className={`inline-block px-4 py-3 text-sm leading-6 ${
                      m.role === "user"
                        ? "border border-line text-paper"
                        : "bg-ink-3 text-paper-soft"
                    }`}
                  >
                    {m.text}
                  </p>
                </div>
              ))}
            </div>
            <p className="px-5 text-[11px] leading-5 text-paper-dim">{t("disclaimer")}</p>
            <form
              className="mt-3 flex gap-2 border-t border-line p-4"
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("placeholder")}
                className="flex-1 border border-line bg-ink px-3 py-2 text-sm text-paper placeholder:text-paper-dim"
              />
              <button
                type="submit"
                className="border border-signal bg-signal px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white"
              >
                {t("send")}
              </button>
            </form>
            <div className="border-t border-line px-5 py-3">
              <Link
                href="/contact?intent=human"
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-bronze"
                onClick={() => setOpen(false)}
              >
                {t("human")} →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
