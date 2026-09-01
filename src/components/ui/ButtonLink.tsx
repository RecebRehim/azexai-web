import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-signal text-white hover:bg-signal-2 border border-signal shadow-[0_0_24px_rgba(26,90,160,0.35)]",
  secondary:
    "border border-line-strong text-paper hover:border-bronze hover:text-bronze-2 bg-transparent",
  ghost: "text-paper-soft hover:text-bronze border-b border-transparent hover:border-bronze rounded-none px-0",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const cls = `inline-flex items-center justify-center gap-2 px-5 py-3 text-[12px] font-medium uppercase tracking-[0.16em] transition-colors duration-300 ${styles[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function AccessButton({
  label,
  variant = "primary",
  className = "",
}: {
  label: string;
  variant?: Variant;
  className?: string;
}) {
  if (site.platformUrl) {
    return (
      <ButtonLink href={site.platformUrl} variant={variant} className={className} external>
        {label}
      </ButtonLink>
    );
  }
  return (
    <ButtonLink href="/contact?intent=platform" variant={variant} className={className}>
      {label}
    </ButtonLink>
  );
}
