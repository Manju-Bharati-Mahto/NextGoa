import React from "react";

export function StoriesHeader() {
  return (
    <section 
      id="hero"
      className="relative flex w-full min-h-[100vh] md:min-h-[68.6vw] flex-col items-center justify-start pt-32 overflow-hidden bg-[url('/story-bg.png')] bg-cover bg-center bg-no-repeat"
    >
      {/* Light gradient overlay to ensure text is readable if background gets too bright */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-7xl px-4 pt-8 sm:px-6 sm:pt-12 lg:pt-16 text-center">
        {/* Yellow pill badge */}
        <span className="inline-block rounded-full bg-brand-yellow px-5 py-1.5 text-[14px] font-medium text-ink shadow-sm mb-5 uppercase tracking-wider">
          Stories from PU Goa
        </span>

        {/* Large heading */}
        <h1 className="font-poppins mx-auto w-full max-w-none text-[38px] sm:text-[56px] font-bold leading-[1.1] tracking-tight text-brand">
          PU Goa Stories-News, Academics, Placements, Research and more.
        </h1>

        {/* Sub-heading description */}
        <p className="mx-auto mt-6 max-w-[1100px] text-[16px] sm:text-[20px] font-[family-name:var(--font-poppins)] font-normal leading-relaxed text-ink/90">
          Everything happening at Parul University Goa, told in real time. Industry visits, placement wins, research breakthroughs, student life and admissions guides — across every faculty.
        </p>
      </div>

      <div className="flex-1" />

      {/* Bottom fade to transition smoothly into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#5B6933] to-transparent pointer-events-none" />
    </section>
  );
}
