import { ButtonLink } from "@/components/ui/ButtonLink";

export function EmptyRecord({
  kicker,
  body,
  href = "/contact",
  cta,
}: {
  kicker: string;
  body: string;
  href?: string;
  cta?: string;
}) {
  return (
    <div className="border border-dashed border-line-strong bg-ink-2 p-10 md:p-16">
      <p className="kicker">{kicker}</p>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-paper-soft">{body}</p>
      {cta && (
        <div className="mt-10">
          <ButtonLink href={href} variant="secondary">
            {cta}
          </ButtonLink>
        </div>
      )}
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute inset-0 site-grid opacity-70" />
      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-24 md:pb-24 md:pt-32">
        <p className="kicker reveal">{kicker}</p>
        <h1 className="font-display mt-6 max-w-4xl text-[clamp(2rem,5vw,3.75rem)] leading-[1.08] text-paper reveal">
          {title}
        </h1>
        {lede && (
          <p className="mt-7 max-w-2xl text-[1.05rem] leading-8 text-paper-soft reveal">
            {lede}
          </p>
        )}
        {children && <div className="mt-10 reveal">{children}</div>}
      </div>
    </header>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-6 py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="divide-y divide-line border-y border-line">
      {items.map((item, i) => (
        <li key={item} className="grid grid-cols-[4.5rem_1fr] items-baseline gap-4 py-5 md:grid-cols-[6rem_1fr]">
          <span className="font-mono text-[11px] tracking-[0.18em] text-bronze tabular-nums">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-lg text-paper md:text-xl">{item}</span>
        </li>
      ))}
    </ol>
  );
}
