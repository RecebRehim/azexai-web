"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Logo } from "@/components/brand/Logo";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { AccessButton } from "@/components/ui/ButtonLink";
import { companyNav, productNav } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({
  href,
  children,
  onClick,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const pathname = usePathname();
  const active = isActive(pathname, href.split("?")[0]);
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-[13px] tracking-[0.08em] transition-colors duration-200 ${
        active ? "text-bronze" : "text-paper-dim hover:text-paper"
      } ${className}`}
    >
      {children}
    </Link>
  );
}

function DesktopMenu({
  label,
  items,
  active,
}: {
  label: string;
  items: readonly { href: string; key: string }[];
  active: boolean;
}) {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className={`text-[13px] tracking-[0.08em] transition-colors duration-200 ${
          active || open ? "text-bronze" : "text-paper-dim hover:text-paper"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
      </button>
      {open && (
        <div
          id={id}
          role="menu"
          className="absolute left-0 top-full z-50 mt-3 min-w-[14rem] border border-line bg-ink-2 py-2 shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-[13px] text-paper-soft transition-colors duration-200 hover:bg-ink-3 hover:text-paper"
            >
              {t(item.key)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const productsActive = productNav.some((item) => isActive(pathname, item.href));
  const companyActive = companyNav.some((item) => isActive(pathname, item.href));

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/80 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" aria-label="AzexAI Systems" translate="no" onClick={() => setOpen(false)}>
          <Logo compact />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label={t("primary")}>
          <NavLink href="/vsm">{t("vsm")}</NavLink>
          <DesktopMenu label={t("products")} items={productNav} active={productsActive} />
          <NavLink href="/trust">{t("trust")}</NavLink>
          <DesktopMenu label={t("company")} items={companyNav} active={companyActive} />
          <NavLink href="/contact">{t("contact")}</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <div className="hidden md:block">
            <AccessButton label={t("access")} className="!px-4 !py-2" />
          </div>
          <button
            type="button"
            className="lg:hidden font-mono text-[12px] uppercase tracking-[0.16em] text-paper"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? t("close") : t("menu")}
          >
            {open ? t("close") : t("menu")}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-x-0 top-16 bottom-0 z-40 bg-ink/70 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div
          id={menuId}
          className="absolute inset-x-0 top-16 z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-ink-2 lg:hidden"
        >
          <nav className="mx-auto grid max-w-6xl gap-1 px-6 py-6" aria-label={t("menu")}>
            <NavLink href="/vsm" onClick={() => setOpen(false)} className="border-b border-line py-3 uppercase">
              {t("vsm")}
            </NavLink>
            <p className="pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-bronze">{t("products")}</p>
            {productNav.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3"
              >
                {t(item.key)}
              </NavLink>
            ))}
            <NavLink href="/trust" onClick={() => setOpen(false)} className="border-b border-line py-3 uppercase">
              {t("trust")}
            </NavLink>
            <p className="pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-bronze">{t("company")}</p>
            {companyNav.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3"
              >
                {t(item.key)}
              </NavLink>
            ))}
            <NavLink href="/contact" onClick={() => setOpen(false)} className="border-b border-line py-3 uppercase">
              {t("contact")}
            </NavLink>
            <div className="pt-5">
              <AccessButton label={t("access")} className="w-full" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
