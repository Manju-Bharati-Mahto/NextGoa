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

        <p className="mx-auto mt-6 max-w-2xl text-sm font-medium text-ink sm:text-lg">
          Goa&apos;s first State Private University, backed by two decades of teaching, research, and placements at Parul University in Gujarat.
        </p>

        <span className="mt-8 inline-block rounded-full bg-sunshine px-6 py-2 text-sm font-bold text-ink shadow-sm">
          Admissions Open · 2026
        </span>
      </div>

      {/* spacer to push the CTA bottom bar down if needed */}
      <div className="flex-1" />

    </section>
  );
}
