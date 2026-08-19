import { Eyebrow } from "./Decor";
import Link from "next/link";
/**
 * "Outcomes" recruiter wall. The design shows brand logos; we render the names
 * as a muted, monochrome wordmark wall instead of fabricating trademarked logo
 * images. The copy keeps it honest ("Leading recruiters"). Drop real
 * permitted logo SVGs into /public and swap the spans for <Image> when available.
 */


interface RecruitersProps {
  data: {
    eyebrow?: string;
    heading?: string;
    description?: string;

    buttonText?: string;
    buttonLink?: string;

    row1?: {
      image: string;
    }[];

    row2?: {
      image: string;
    }[];
  };
}
export function Recruiters({ data, }: RecruitersProps) {
  const row1 = [ ...(data?.row1 || []), ...(data?.row1 || []), ];
  const row2 = [ ...(data?.row2 || []), ...(data?.row2 || []), ];
  return (
    <section className="bg-brand-white py-10 sm:py-0">
      {/* Constrained Header Container */}
      <div className="mx-auto max-w-5xl px-6 sm:pt-10 pt-5">
        <Eyebrow className="text-ink">{data.eyebrow}</Eyebrow>
        <h2 className="mt-2 text-center section-heading text-brand">
         {data.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center section-body text-ink">
         {data.description}
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
              {row1.map((logo, i) => (
                <div key={i} className="w-32 sm:w-48 h-12 sm:h-16 mx-4 sm:mx-6 flex items-center justify-center shrink-0">
                  <img
                    src={logo.image}
                    alt="Recruiter logo"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-200"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right scrolling */}
          <div className="w-full overflow-hidden flex">
            <div className="animate-marquee-reverse flex w-max items-center">
              {row2.map((logo, i) => (
                <div key={i} className="w-32 sm:w-48 h-12 sm:h-16 mx-4 sm:mx-6 flex items-center justify-center shrink-0">
                  <img
                   src={logo.image}
                    alt="Recruiter logo"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-200"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Faded line below */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#1F1F1F]/20 to-transparent" />
      </div>

      {/* Constrained Footer Container */}
      <div className="mx-auto max-w-5xl px-6 pb-10 pt-10 flex justify-center">
        <Link
          href={data.buttonLink || "#"}
          data-track
          data-track-event="placements_click"
          data-track-text={data.buttonText || "Full placement report"}
          data-track-header={data.eyebrow || "Outcomes"}
          className="inline-flex items-center justify-center bg-[#FEDB2F] hover:bg-[#e5c52a] text-black font-bold text-[15px] sm:text-[16px] px-8 py-3.5 rounded-full transition-colors shadow-sm"
        >
          {data.buttonText}
        </Link>
      </div>
    </section>
  );
}
