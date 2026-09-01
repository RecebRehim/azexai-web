"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";

const intentKeys = [
  "general",
  "product",
  "platform",
  "partnership",
  "corporate",
  "human",
  "support",
] as const;

export function ContactForm() {
  const t = useTranslations("contact");
  const params = useSearchParams();
  const preset = params.get("intent") ?? "general";
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [intent, setIntent] = useState(
    intentKeys.includes(preset as (typeof intentKeys)[number]) ? preset : "general",
  );

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
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper-dim">
          {t("name")}
        </span>
        <input name="name" required className="border border-line bg-ink px-4 py-3 text-paper" />
      </label>
      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper-dim">
          {t("email")}
        </span>
        <input name="email" type="email" required className="border border-line bg-ink px-4 py-3 text-paper" />
      </label>
      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper-dim">
          {t("organization")}
        </span>
        <input name="organization" className="border border-line bg-ink px-4 py-3 text-paper" />
      </label>
      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper-dim">
          {t("intent")}
        </span>
        <select
          name="intent"
          value={intent}
          onChange={(e) => setIntent(e.target.value)}
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
        <textarea name="message" required rows={7} className="border border-line bg-ink px-4 py-3 text-paper" />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="border border-signal bg-signal px-6 py-3 font-medium text-[12px] uppercase tracking-[0.16em] text-white disabled:opacity-60"
        >
          {status === "sending" ? t("sending") : t("send")}
        </button>
        {status === "success" && <p className="text-sm text-patina">{t("success")}</p>}
        {status === "error" && <p className="text-sm text-[var(--danger)]">{t("error")}</p>}
      </div>
    </form>
  );
}
