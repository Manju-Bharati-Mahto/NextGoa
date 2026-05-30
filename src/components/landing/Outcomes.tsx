import { Eyebrow } from "./Decor";

/**
 * "Outcomes" recruiter wall. The design shows brand logos; we render the names
 * as a muted, monochrome wordmark wall instead of fabricating trademarked logo
 * images. The copy keeps it honest ("indicative recruiter list"). Drop real
 * permitted logo SVGs into /public and swap the spans for <Image> when available.
 */
const row1Logos = [
  "/companies/Frame 174.png",
  "/companies/Frame 175.png",
  "/companies/Frame 176.png",
  "/companies/Frame 177.png",
  "/companies/Frame 177-1.png",
  "/companies/Frame 178.png",
  "/companies/Frame 179.png",
  "/companies/Frame 180.png",
  "/companies/Frame 181.png",
];

const row2Logos = [
  "/companies/Frame 181-1.png",
  "/companies/Frame 182.png",
  "/companies/Frame 183.png",
  "/companies/Frame 184.png",
  "/companies/Frame 185.png",
  "/companies/Frame 186.png",
  "/companies/Frame 187.png",
  "/companies/Frame 188.png",
  "/companies/Frame 189.png",
  "/companies/Frame 190.png",
];

const row1 = [...row1Logos, ...row1Logos];
const row2 = [...row2Logos, ...row2Logos];

export function Outcomes() {
  return (
    <section className="bg-brand-white">
      {/* Constrained Header Container */}
      <div className="mx-auto max-w-5xl px-6 pt-20">
        <Eyebrow className="text-ink">Outcomes</Eyebrow>
        <h2 className="mt-2 text-center font-sans font-bold text-[38px] sm:text-[56px] leading-[1.05] tracking-tight text-brand">
          Where graduates go by sector, not by accident.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center font-[family-name:var(--font-poppins)] font-normal text-base sm:text-lg text-ink leading-relaxed">
          Recruiters return year after year because graduates arrive job-ready. Indicative
          recruiter list across the Parul University ecosystem.
        </p>
      </div>

      {/* Edge-to-Edge Carousel Container */}
      <div className="mt-12 overflow-hidden w-full relative">
        {/* Faded line above */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#1F1F1F]/20 to-transparent" />

        {/* Carousel Rows Wrapper */}
        <div className="py-8 flex flex-col gap-8 relative">
          {/* Fade overlays on sides for a premium depth look */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#F8F8F8] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#F8F8F8] to-transparent z-10 pointer-events-none" />

          {/* Row 1: Left scrolling */}
          <div className="w-full overflow-hidden flex">
            <div className="animate-marquee flex w-max items-center">
              {row1.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Recruiter logo"
                  className="h-12 sm:h-16 w-auto object-contain mx-6 sm:mx-8 max-w-none hover:scale-105 transition-transform duration-200"
                />
              ))}
            </div>
          </div>

          {/* Row 2: Right scrolling */}
          <div className="w-full overflow-hidden flex">
            <div className="animate-marquee-reverse flex w-max items-center">
              {row2.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Recruiter logo"
                  className="h-12 sm:h-16 w-auto object-contain mx-6 sm:mx-8 max-w-none hover:scale-105 transition-transform duration-200"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Faded line below */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#1F1F1F]/20 to-transparent" />
      </div>

      {/* Constrained Footer Container */}
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-10">
        <p className="text-center">
          <a
            href="#admissions"
            className="text-sm font-bold text-brand hover:text-brand-dark"
          >
            Full placements report →
          </a>
        </p>
      </div>
    </section>
  );
}
