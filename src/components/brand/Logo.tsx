export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3 text-paper" translate="no">
      <svg className={compact ? "h-8 w-8" : "h-9 w-9"} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="5" y="5" width="38" height="38" rx="9" stroke="currentColor" strokeWidth="1.5" opacity=".45" />
        <path d="M12 28 19 15l6 10 5-7 7 10" stroke="#2E8C88" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="19" cy="15" r="2.4" fill="#255A78" />
        <circle cx="30" cy="18" r="2.4" fill="#2E8C88" />
      </svg>
      <span className="leading-none">
        <span className="block font-display text-[15px] font-semibold tracking-[0.08em]">AzevsmAI</span>
        {!compact && <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.26em] text-paper-dim">Systems</span>}
      </span>
    </span>
  );
}
