"use client";

import { useEffect, useId, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Logo } from "@/components/brand/Logo";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { AccessButton } from "@/components/ui/ButtonLink";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const id = useId();
  const links = [
    ["/", "home"],
    ["/platform", "platform"],
    ["/products", "products"],
    ["/technology", "technology"],
    ["/white-box", "whiteBox"],
    ["/trust", "trust"],
    ["/company", "company"],
  ] as const;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-ink/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between gap-5 px-5 md:px-8">
        <Link href="/" aria-label="AzevsmAI Systems" translate="no"><Logo compact /></Link>
        <nav className="hidden items-center gap-6 xl:flex" aria-label={t("primary")}>
          {links.map(([href,key]) => (
            <Link key={href} href={href} className={`text-[13px] transition-colors ${pathname === href || (href !== "/" && pathname.startsWith(href + "/")) ? "text-paper" : "text-paper-dim hover:text-paper"}`}>
              {t(key)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link href="/contact?intent=partnership" className="hidden text-[13px] text-paper-dim hover:text-paper md:block">{t("contact")}</Link>
          <AccessButton label={t("access")} className="hidden md:inline-flex !px-4 !py-2.5" />
          <button type="button" onClick={() => setOpen(v=>!v)} aria-expanded={open} aria-controls={id} className="xl:hidden font-mono text-[11px] uppercase tracking-[.16em] text-paper">
            {open ? t("close") : t("menu")}
          </button>
        </div>
      </div>
      {open && (
        <div id={id} className="absolute inset-x-0 top-[76px] max-h-[calc(100dvh-76px)] overflow-auto border-t border-line bg-ink px-6 py-6 xl:hidden">
          <nav className="mx-auto grid max-w-2xl gap-1">
            {links.map(([href,key]) => <Link key={href} href={href} onClick={()=>setOpen(false)} className="border-b border-line py-4 text-lg">{t(key)}</Link>)}
            <Link href="/contact?intent=partnership" onClick={()=>setOpen(false)} className="border-b border-line py-4 text-lg">{t("contact")}</Link>
            <AccessButton label={t("access")} className="mt-5 w-full" />
          </nav>
        </div>
      )}
    </header>
  );
}
