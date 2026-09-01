"use client";

import { useSearchParams } from "next/navigation";
import { useId, useState } from "react";
import { useTranslations } from "next-intl";
import { intentKeys, site } from "@/lib/site";

export function ContactForm() {
  const t = useTranslations("contact");
  const params = useSearchParams();
  const preset = params.get("intent") ?? "general";
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "unavailable">(
    "idle",
  );
  const [intent, setIntent] = useState(
    intentKeys.includes(preset as (typeof intentKeys)[number]) ? preset : "general",
  );
  const statusId = useId();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          organization: String(data.get("organization") ?? ""),
          intent,
          message,
          website: String(data.get("website") ?? ""),
        }),
      });
      if (res.status === 503) {
        setStatus("unavailable");
        return;
      }
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6" noValidate>
      <label className="sr-only" htmlFor="website">
        {t("honeypot")}
      </label>
      <input
        id="website"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />
      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper-dim">
          {t("name")}
        </span>
        <input
          name="name"
          required
          autoComplete="name"
          className="border border-line bg-ink px-4 py-3 text-paper"
        />
      </label>
      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper-dim">
          {t("email")}
        </span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          spellCheck={false}
          inputMode="email"
          className="border border-line bg-ink px-4 py-3 text-paper"
        />
      </label>
      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper-dim">
          {t("organization")}
        </span>
        <input
          name="organization"
          autoComplete="organization"
          className="border border-line bg-ink px-4 py-3 text-paper"
        />
      </label>
      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper-dim">
          {t("intent")}
        </span>
        <select
          name="intent"
          value={intent}
          onChange={(e) => setIntent(e.target.value)}
          autoComplete="off"
          className="border border-line bg-ink px-4 py-3 text-paper"
        >
          {intentKeys.map((key) => (
            <option key={key} value={key}>
              {t(`intents.${key}`)}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper-dim">
          {t("message")}
        </span>
        <textarea
          name="message"
          required
          rows={7}
          autoComplete="off"
          className="border border-line bg-ink px-4 py-3 text-paper"
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="border border-signal bg-signal px-6 py-3 font-medium text-[12px] uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:bg-signal-2 disabled:opacity-60"
        >
          {status === "sending" ? t("sending") : t("send")}
        </button>
        <div id={statusId} aria-live="polite" className="text-sm">
          {status === "success" && <p className="text-signal-2">{t("success")}</p>}
          {status === "error" && <p className="text-[var(--danger)]">{t("error")}</p>}
          {status === "unavailable" && (
            <p className="text-paper-soft">
              {t("unavailable")}{" "}
              <a href={`mailto:${site.email}`} className="text-bronze hover:text-bronze-2">
                {site.email}
              </a>
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
