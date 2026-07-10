import React from "react";

export function EventHeader() {
  return (
    <section id="hero"
      className="relative flex w-full min-h-[85vh] md:min-h-[55vw] flex-col items-center justify-start overflow-hidden bg-[url('/b3-down.webp')] bg-cover bg-bottom bg-no-repeat"
    >
      {/* Light gradient overlay to ensure text is readable against the background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-transparent pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-4xl px-4 pt-24 sm:px-6 sm:pt-32 lg:pt-36 text-center">
        {/* Yellow pill badge */}
        <span className="inline-block rounded-full bg-brand-yellow px-5 py-1.5 text-[14px] font-bold text-ink shadow-sm mb-6 uppercase tracking-wider">
          Events at PU Goa
        </span>

        {/* Large heading */}
        <h1 className="mx-auto w-full max-w-none tracking-tight text-brand section-heading drop-shadow-sm">
          PU Goa Events
        </h1>

        {/* Sub-heading description */}
        <p className="mx-auto mt-6 max-w-3xl font-[family-name:var(--font-poppins)] text-lg sm:text-[20px] leading-[1.6] text-ink font-medium drop-shadow-md bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/40">
          Discover upcoming open days, webinars, workshops, fests, hackathons, and guest sessions happening at Parul University Goa.
        </p>
      </div>

      <div className="flex-1" />

      {/* Bottom fade to transition smoothly into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#5B6933] to-transparent pointer-events-none" />
    </section>
  );
}
