import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/brand/Logo";
import { AccessButton } from "@/components/ui/ButtonLink";
import { footerGroups, site } from "@/lib/site";

export async function Footer() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/" aria-label="AzexAI Systems" translate="no">
              <Logo />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-paper-soft">{t("tagline")}</p>
            <div className="mt-8">
              <AccessButton label={nav("access")} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.key}>
                <p className="kicker mb-4">{t(group.key)}</p>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-paper-soft transition-colors duration-200 hover:text-bronze"
                      >
                        {item.key === "partnership" || item.key === "human"
                          ? t(item.key)
                          : nav(item.key)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 hairline" />
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-xs leading-6 text-paper-dim">{t("methodology")}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] tracking-[0.12em] text-paper-dim">
            <Link href="/privacy" className="hover:text-paper">
              {t("privacy")}
            </Link>
            <Link href="/terms" className="hover:text-paper">
              {t("terms")}
            </Link>
            <p>
              © {year} {site.name}. {t("rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
