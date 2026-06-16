
export function AdmissionsHero() {
  return (
    <section
      id="hero"
      className="relative flex w-full min-h-[75vh] sm:min-h-[85vh] md:min-h-[68.6vw] flex-col items-center justify-start pt-32 overflow-hidden bg-white md:bg-[url('/b3-stretched.webp')] bg-cover bg-top bg-no-repeat"
    >
      {/* Light gradient overlay to ensure text is readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none hidden md:block" />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-7xl px-4 pt-8 sm:px-6 sm:pt-12 lg:pt-16 text-center">
        <span className="inline-block rounded-full bg-brand-yellow px-5 py-1.5 text-[14px] font-medium text-ink shadow-sm mb-5">
          Admissions Open for 2026-27 Academic Year
        </span>

        <h1 className="font-poppins mx-auto w-full max-w-[1200px] text-[36px] sm:text-[48px] md:text-[56px] font-bold leading-[1.1] tracking-tight text-brand">
          From Goa’s vibrant shores to global opportunities, your journey starts here.
        </h1>

        <p className="mx-auto mt-6 max-w-[1100px] text-[18px] sm:text-[22px] font-[family-name:var(--font-poppins)] font-normal leading-relaxed text-ink ">
         Admissions for 2026–27 are now open at Parul University Goa. Whether you’re a school graduate, diploma entrant, postgraduate aspirant, or a working professional balancing studies and a career, your next big move starts here, with an education that opens doors across the world.
        </p>
      </div>

      <div className="flex-1" />

      {/* Bottom fade to transition smoothly into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#faf9f6] to-transparent pointer-events-none" />
    </section>
  );
}
