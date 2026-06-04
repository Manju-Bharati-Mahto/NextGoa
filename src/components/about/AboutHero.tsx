import React from "react";

export function AboutHero() {
  return (
    <section 
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-start pt-32 overflow-hidden bg-[url('/abg.webp')] bg-cover bg-center bg-no-repeat"
    >
      {/* Light gradient overlay to ensure text is readable if sky gets too bright */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-7xl px-4 pt-16 sm:px-6 sm:pt-24 lg:pt-32 text-center">
        <span className="inline-block rounded-full bg-brand-yellow px-4 py-1.5 text-xs font-bold text-ink shadow-sm uppercase tracking-wider mb-6">
          About Us
        </span>

        <h1 className="font-poppins mx-auto w-full max-w-none text-[38px] sm:text-[56px] font-bold leading-[1.1] tracking-tight text-ink">
          Goa&apos;s First State <br className="hidden sm:block" />
          <span className="text-brand">Private University.</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-[24px] sm:text-[32px] font-medium font-sans text-ink">
          Established 2025.
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-[18px] font-[family-name:var(--font-poppins)] font-normal text-ink">
          Built on 3 Decades of Excellence at Parul University, Vadodara.
        </p>
      </div>

      <div className="flex-1" />

      {/* Bottom fade to transition smoothly into the next section (white) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
