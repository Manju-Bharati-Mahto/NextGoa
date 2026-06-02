import Link from "next/link";
import { cta } from "@/lib/navigation";

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative flex min-h-screen flex-col items-center justify-start pt-32 overflow-hidden bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
    >
      {/* Hero content */}
      <div className="relative z-10 w-full max-w-7xl px-4 pt-16 sm:px-6 sm:pt-24 lg:pt-32 text-center">
        <h1 className="font-[family-name:var(--font-poppins)] mx-auto w-full max-w-none text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem] lg:whitespace-nowrap">
          For <span className="text-brand">GOA</span>L Getters, For Unstoppables.
          <br />
          <span className="text-brand">For Futures That Refuse Average</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm font-semibold text-ink sm:text-lg font-[family-name:var(--font-poppins)]">
          Goa&apos;s first State Private University, backed by two decades of teaching, research, and placements at Parul University in Gujarat.
        </p>

        <span className="mt-8 inline-block rounded-full bg-sunshine px-6 py-2 text-base sm:text-sm font-bold text-ink shadow-sm font-[family-name:var(--font-poppins)]">
          Admissions Open · 2026
        </span>
      </div>

      {/* spacer to push the CTA bottom bar down if needed */}
      <div className="flex-1" />

      {/* Fixed glassy CTA container at bottom of frame */}
      <div className="fixed inset-x-0 bottom-6 sm:bottom-10 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto font-[family-name:var(--font-poppins)] flex flex-row items-center justify-center gap-2 sm:gap-3 rounded-[2rem] sm:rounded-full bg-white/20 px-2 sm:px-4 py-2 sm:py-3 backdrop-blur-md shadow-xl border border-white/30">
          <Link
            href={cta.apply}
            className="rounded-full bg-brand px-4 sm:px-8 py-2.5 sm:py-3.5 text-[15px] sm:text-base font-bold text-white shadow-md transition-colors hover:bg-brand-dark whitespace-nowrap"
          >
            Apply for 2026 &rarr;
          </Link>
          <Link
            href={cta.counsellor}
            className="rounded-full bg-white px-4 sm:px-8 py-2.5 sm:py-3.5 text-[15px] sm:text-base font-bold text-ink shadow-md transition-colors hover:bg-zinc-50 whitespace-nowrap"
          >
            Talk to Counsellor
          </Link>
          <a
            href={cta.brochure}
            download
            className="hidden sm:inline-flex rounded-full bg-white px-8 py-3.5 text-lg font-bold text-ink shadow-md transition-colors hover:bg-zinc-50 whitespace-nowrap"
          >
            Brochure
          </a>
        </div>
      </div>
    </section>
  );
}
