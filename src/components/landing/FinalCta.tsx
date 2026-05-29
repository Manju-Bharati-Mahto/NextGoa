import Image from "next/image";

/**
 * Closing call-to-action. A dark, photo-backed card on a cream wash, then a
 * cyan wave that hands off into the (cyan) footer. Reuses the campus render with
 * a dark overlay so the white copy stays legible.
 */
export function FinalCta() {
  return (
    <section className="bg-gradient-to-t from-[#FFEA84] to-[#F8F8F8]">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-20">
        <div className="relative isolate overflow-hidden rounded-[20px] shadow-xl">
          <Image
            src="/hero-campus.webp"
            alt=""
            fill
            sizes="(min-width: 1152px) 1088px, 100vw"
            className="-z-10 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/80 via-ink/55 to-ink/30" />

          <div className="px-6 py-20 text-center sm:py-28">
            <span className="inline-block rounded-full bg-sunshine px-5 py-2 text-sm font-bold text-ink">
              Admissions Open 2026
            </span>
            <h2 className="mt-6 text-center font-sans font-bold text-[44px] sm:text-[64px] leading-[1.05] tracking-tight text-white">
              Ready to begin?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center font-[family-name:var(--font-poppins)] font-normal text-base sm:text-lg text-white leading-relaxed">
              Admissions are open for the 2026 academic year. Explore programmes, check eligibility,
              and take the first step toward a life worth talking about.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
