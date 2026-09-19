import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/brand/Logo";
import { AccessButton } from "@/components/ui/ButtonLink";
import { footerGroups, site } from "@/lib/site";

export async function Footer() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <Link href="/" aria-label="AzevsmAI Systems" translate="no"><Logo /></Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-paper-soft">{t("tagline")}</p>
            <AccessButton label={nav("access")} className="mt-7" />
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {footerGroups.map(group => <div key={group.key}>
              <p className="kicker mb-4">{t(group.key)}</p>
              <ul className="space-y-3">{group.items.map(item => <li key={item.href}><Link href={item.href} className="text-sm text-paper-soft hover:text-paper">{item.key === "partnership" || item.key === "human" ? t(item.key) : nav(item.key)}</Link></li>)}</ul>
            </div>)}
          </div>
        </div>
        <div className="mt-16 border-t border-line pt-7 flex flex-col gap-4 md:flex-row md:justify-between">
          <p className="max-w-2xl text-xs leading-6 text-paper-dim">{t("methodology")}</p>
          <div className="flex flex-wrap gap-5 text-xs text-paper-dim">
            <Link href="/privacy">{t("privacy")}</Link><Link href="/terms">{t("terms")}</Link><Link href="/cookies">{t("cookies")}</Link><Link href="/security">{t("security")}</Link><Link href="/accessibility">{t("accessibility")}</Link>
            <span>© {new Date().getFullYear()} {site.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
