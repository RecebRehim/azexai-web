export function CubeMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="azex-blue" x1="18" y1="18" x2="102" y2="102">
          <stop stopColor="#2b7fd4" />
          <stop offset="1" stopColor="#133b69" />
        </linearGradient>
        <linearGradient id="azex-gold" x1="40" y1="36" x2="80" y2="88">
          <stop stopColor="#e4c57a" />
          <stop offset="1" stopColor="#a0854f" />
        </linearGradient>
      </defs>
      <path
        d="M60 14 L104 40 L104 80 L60 106 L16 80 L16 40 Z"
        stroke="url(#azex-blue)"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <path d="M16 40 L60 66 L104 40" stroke="url(#azex-blue)" strokeWidth="3.2" />
      <path d="M60 66 L60 106" stroke="url(#azex-blue)" strokeWidth="3.2" />
      <path
        d="M60 38 L82 51 L82 72 L60 85 L38 72 L38 51 Z"
        stroke="url(#azex-gold)"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M38 51 L60 64 L82 51" stroke="url(#azex-gold)" strokeWidth="2.4" />
      <path d="M60 64 L60 85" stroke="url(#azex-gold)" strokeWidth="2.4" />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3 text-paper">
      <CubeMark className={compact ? "h-8 w-8" : "h-10 w-10"} />
      <span className="leading-none">
        <span className="block font-display text-[15px] font-semibold tracking-[0.28em]">
          ΛZEXΛI
        </span>
        {!compact && (
          <span className="mt-1.5 flex items-center gap-2 font-display text-[9px] font-medium tracking-[0.42em] text-bronze">
            <span className="h-px w-3 bg-bronze" aria-hidden />
            SYSTEMS
            <span className="h-px w-3 bg-bronze" aria-hidden />
          </span>
        )}
      </span>
    </span>
  );
}
