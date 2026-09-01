import Image from "next/image";

export function BrandLockup() {
  return (
    <figure className="relative overflow-hidden border border-line bg-ink-2">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(43,127,212,0.28),transparent_58%)]" />
      <Image
        src="/brand/logo.jpg"
        alt="AzexAI Systems"
        width={853}
        height={1024}
        priority
        className="relative mx-auto h-auto w-full max-w-md object-contain"
      />
    </figure>
  );
}
