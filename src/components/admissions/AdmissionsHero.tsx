
export function AdmissionsHero() {
  return (
    <section 
      id="hero"
      className="relative flex w-full min-h-[100vh] md:min-h-[68.6vw] flex-col items-center justify-start pt-32 overflow-hidden bg-[url('/b3-stretched.webp')] bg-cover bg-top bg-no-repeat"
    >
      {/* Light gradient overlay to ensure text is readable if sky gets too bright */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-7xl px-4 pt-8 sm:px-6 sm:pt-12 lg:pt-16 text-center">
        <span className="inline-block rounded-full bg-brand-yellow px-5 py-1.5 text-[14px] font-medium text-ink shadow-sm mb-5">
          Admissions Open for 2026-27 Academic Year
        </span>

        <h1 className="font-poppins mx-auto w-full max-w-none text-[42px] sm:text-[68px] font-bold leading-[1.1] tracking-tight text-brand">
          From Goa To Global Degree!
        </h1>

        <p className="mx-auto mt-6 max-w-[1100px] text-[18px] sm:text-[22px] font-[family-name:var(--font-poppins)] font-normal leading-relaxed text-ink">
          Stay in touch with your <strong className="font-bold text-ink">GOA</strong>ls as admissions in Parul University Goa are open for the 2026-27 academic year. Whether you are a student, fresh out of Class 12, a diploma holder seeking lateral entry, a graduate ready for postgraduate studies, or a working professional, there is a pathway here for you!
        </p>
      </div>

      <div className="flex-1" />

      {/* Glassy CTA container at bottom of frame (matches landing page hero) */}
      <div className="fixed inset-x-0 bottom-6 sm:bottom-10 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-3 rounded-full bg-white/20 px-4 py-3 backdrop-blur-md shadow-xl border border-white/30">
          <a
            href="#enquiry"
            className="rounded-full bg-brand px-8 py-3.5 text-base font-bold text-white shadow-md transition-colors hover:bg-brand-dark"
          >
            Apply for 2026 &rarr;
          </a>
          <a
            href="#enquiry"
            className="rounded-full bg-white px-8 py-3.5 text-base font-bold text-ink shadow-md transition-colors hover:bg-zinc-50"
          >
            Talk to Counsellor
          </a>
          <a
            href="/parul-goa-brochure-2026.pdf"
            download
            className="rounded-full bg-white px-8 py-3.5 text-base font-bold text-ink shadow-md transition-colors hover:bg-zinc-50"
          >
            Brochure
          </a>
        </div>
      </div>

      {/* Bottom fade to transition smoothly into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#faf9f6] to-transparent pointer-events-none" />
    </section>
  );
}
