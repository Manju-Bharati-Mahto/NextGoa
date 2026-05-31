import React from "react";

export function AdmissionsHero() {
  return (
    <section 
      id="hero"
      className="relative flex flex-col items-center justify-start pt-32 pb-24 sm:pt-40 sm:pb-32 bg-brand-white"
    >
      <div className="relative z-10 w-full max-w-7xl px-4 text-center mt-12 sm:mt-16">
        <span className="inline-block rounded-full bg-brand-yellow px-4 py-1.5 text-xs font-bold text-ink shadow-sm uppercase tracking-wider mb-6">
          Admissions Open for 2026-27 Academic Year
        </span>

        <h1 className="font-sans mx-auto w-full max-w-4xl text-[38px] sm:text-[56px] font-bold leading-[1.1] tracking-tight text-brand">
          From Goa To Global Degree!
        </h1>

        <p className="mx-auto mt-6 max-w-4xl text-[16px] sm:text-[18px] leading-[1.65] font-[family-name:var(--font-poppins)] font-normal text-ink">
          Stay in touch with your <strong>GOA</strong>ls as admissions in Parul University Goa are open for the 2026-27 academic year. Whether you are a student, fresh out of Class 12, a diploma holder seeking lateral entry, a graduate ready for postgraduate studies, or a working professional, there is a pathway here for you!
        </p>
      </div>
    </section>
  );
}
