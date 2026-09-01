"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Logo } from "@/components/brand/Logo";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { AccessButton } from "@/components/ui/ButtonLink";
import { navItems } from "@/lib/site";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const primary = navItems.filter((item) =>
    ["home", "vsm", "products", "iit3d", "trust", "company", "contact"].includes(item.key),
  );

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/80 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-[4.6rem] max-w-[1400px] items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" aria-label="AzexAI Systems" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {primary.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`text-[11px] uppercase tracking-[0.16em] transition-colors ${
                  active ? "text-bronze" : "text-paper-dim hover:text-paper"
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <div className="hidden md:block">
            <AccessButton label={t("access")} className="!px-4 !py-2.5" />
          </div>
          <button
            type="button"
            className="xl:hidden font-mono text-[11px] uppercase tracking-[0.18em] text-paper"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            {open ? t("close") : t("menu")}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-ink-2 xl:hidden">
          <nav className="mx-auto grid max-w-6xl gap-1 px-6 py-6" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-sm uppercase tracking-[0.14em] text-paper-soft"
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="pt-5">
              <AccessButton label={t("access")} className="w-full" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
