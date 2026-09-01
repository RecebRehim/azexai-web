"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-32">
      <p className="kicker">Error</p>
      <h1 className="font-display mt-6 text-4xl">The page could not be rendered.</h1>
      <button
        type="button"
        onClick={reset}
        className="mt-8 border border-bronze px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-bronze"
      >
        Retry
      </button>
    </div>
  );
}
