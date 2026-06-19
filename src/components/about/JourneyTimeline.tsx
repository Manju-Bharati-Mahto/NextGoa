"use client";

import { useRef } from "react";

const milestones = [
  {
    year: "2009",
    label: "FOUNDATION",
    description:
      "Parul University, Vadodara established under the Gujarat Private Universities Act.",
  },
  {
    year: "2018",
    label: "ACCREDITATION",
    description:
      "Parul University, Vadodara conferred NAAC A++ in its first cycle.",
  },
  {
    year: "2020",
    label: "LEGISLATION",
    description:
      "Goa Private Universities Act passed, laying the legal foundation for PU Goa.",
  },
  {
    year: "2023",
    label: "PLACEMENTS",
    description:
      "Parul University ecosystem crosses 2,200+ recruiting companies and 60 LPA highest package.",
  },
  {
    year: "2024",
    label: "GLOBAL REACH",
    description:
      "Parul University, Vadodara reaches 120+ global partner universities across 7 countries.",
  },
  {
    year: "2025",
    label: "APPROVAL",
    description:
      "PU Goa becomes the first State Private University approved under the Goa Act.",
  },
  {
    year: "2025",
    label: "INAUGURATION",
    description:
      "Inauguration graced by Hon'ble Chief Minister Dr. Pramod Sawant.",
  },
  {
    year: "2025",
    label: "OATH CEREMONY",
    description:
      "Oath-taking ceremony graced by Health Minister Shri Vishwajit Rane.",
  },
];

export function JourneyTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 640 ? 340 : 280; // card width based on breakpoint
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="overflow-hidden bg-brand-white py-10 sm:pt-18">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">  
        <div className="text-left">
          <p className="text-ink section-subheading">
            Journey
          </p>
          <h2 className="mt-4 text-brand section-heading max-w-5xl">
            From Vadodara To Goa,
            <br className="hidden sm:block" />
            Milestones That Thrive Our Story!
          </h2>
          <p className="mt-4 max-w-4xl text-ink section-body">
            30+ Years of building India&apos;s most recognised private university
            ecosystem and bringing it to Goa&apos;s coast.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4 shrink-0 pb-2">
          <button
            onClick={() => scroll("left")}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border border-zinc-200 transition-colors hover:bg-brand/5 text-ink hover:text-brand"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-brand shadow-md transition-colors hover:bg-brand-dark text-white"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="relative mt-10 w-full sm:mt-17 group">
        {/* Fading edges for smooth scroll appearance */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-brand-white to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-brand-white to-transparent sm:w-40" />

        <div
          ref={scrollRef}
          className="scrollbar-hide snap-x snap-mandatory overflow-x-auto overflow-y-hidden pb-12 pt-12 -webkit-overflow-scrolling-touch"
        >
          <div className="relative flex w-max min-w-full items-center px-6 sm:px-12 h-[550px]">
            {/* Continuous gradient timeline line */}
            <div className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 bg-gradient-to-r from-brand-blue-guideline/10 via-brand-blue-guideline to-brand/10" />

            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <article
                  key={`${item.year}-${item.label}-${index}`}
                  className="relative flex w-[280px] sm:w-[340px] shrink-0 snap-center flex-col items-center group/card cursor-default"
                >
                  {/* Center Node / Dot */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border-[3px] border-brand flex items-center justify-center transition-all duration-300 group-hover/card:scale-125 group-hover/card:shadow-[0_0_20px_rgba(231,54,73,0.4)]">
                    <div className="w-2.5 h-2.5 bg-brand-blue-guideline rounded-full transition-all duration-300 group-hover/card:bg-brand" />
                  </div>

                  {/* Vertical Connector Line */}
                  <div
                    className={`absolute left-1/2 w-[2px] bg-brand-blue-guideline/30 transition-all duration-300 group-hover/card:bg-brand/60 ${isEven ? 'bottom-1/2 h-20' : 'top-1/2 h-20'
                      }`}
                  />

                  {/* Milestone Card */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-[260px] sm:w-[290px] bg-white rounded-[20px] p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-black/5 transition-all duration-500 group-hover/card:shadow-[0_12px_40px_rgb(0,0,0,0.12)] ${isEven
                        ? 'bottom-[calc(50%+5rem)] group-hover/card:-translate-y-3'
                        : 'top-[calc(50%+5rem)] group-hover/card:translate-y-3'
                      }`}
                  >
                    {/* Small pointer triangle on the card */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-black/5 transform rotate-45 ${isEven ? 'bottom-[-8.5px] border-b border-r' : 'top-[-8.5px] border-t border-l'
                        }`}
                    />

                    <div className="relative z-10 flex flex-col items-start text-left">
                      <span className="font-poppins text-[36px] sm:text-[42px] font-black text-brand tracking-tight leading-none mb-3">
                        {item.year}
                      </span>
                      <span className="inline-block px-3.5 py-1.5 bg-brand-blue-guideline/10 text-brand-blue-guideline text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] rounded-full mb-4">
                        {item.label}
                      </span>
                      <p className="font-[family-name:var(--font-poppins)] text-[14px] sm:text-[15px] font-medium leading-relaxed text-ink/85">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>


    </section>
  );
}
