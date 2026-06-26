"use client";

import React from "react";

interface Guide {
  title: string;
  description: string;
  topBg: string;
  titleColor: string;
  iconColor: string;
  buttonBg: string;
  buttonText: string;
  buttonHoverBg: string;
}

const guides: Guide[] = [
  {
    title: "PU Goa 2026 Prospectus",
    description: "Campus Overview, Campus Living, Advanced Laboratories, Campus Facilites & Events and Extra Curricular Life.",
    topBg: "bg-ocean",
    titleColor: "text-white",
    iconColor: "text-white",
    buttonBg: "bg-ocean text-white",
    buttonHoverBg: "hover:bg-ocean-deep",
    buttonText: "Download Prospectus &rarr;",
  },
  {
    title: "PU Goa 2026 Admissions Handbook",
    description: "Eligibility, fees, scholarships, and the application process across every faculty.",
    topBg: "bg-sunshine",
    titleColor: "text-ink",
    iconColor: "text-ink",
    buttonBg: "bg-sunshine text-ink",
    buttonHoverBg: "hover:bg-sunshine-deep",
    buttonText: "Download Handbook &rarr;",
  },
  {
    title: "Study Abroad Pathways Guide",
    description: "2+2, 1+1, 3+1+1 pathways across our partner countries - costs, partners and outcomes.",
    topBg: "bg-brand",
    titleColor: "text-white",
    iconColor: "text-white",
    buttonBg: "bg-brand text-white",
    buttonHoverBg: "hover:bg-brand-dark",
    buttonText: "Download Guide &rarr;",
  },
];

function FileIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function FreeGuides() {
  return (
    <section className="bg-brand-white border-t border-black/5 py-12 sm:py-16">
      <div className="mx-auto max-w-[1680px] px-6 sm:px-10 flex flex-col items-center">
        
        {/* Title Block */}
        <div className="text-center max-w-5xl mb-10">
          <p className="font-sans font-bold text-sm uppercase tracking-[0.15em] text-ink/60">
            Free Guides
          </p>
          <h2 className="mt-2 text-center text-brand section-heading">
            Download free guides straight to your inbox.
          </h2>
          <p className="mt-4 text-ink/70 section-body px-4 md:px-0">
            Our most popular admissions, programme and pathway guides. One email, one PDF, zero spam.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {guides.map((guide, idx) => (
            <div
              key={idx}
              className="flex flex-col overflow-hidden rounded-[32px] bg-white shadow-lg border border-black/5 h-full min-h-[380px] hover:shadow-xl transition-shadow duration-300"
            >
              {/* Top part */}
              <div className={`p-8 flex items-center gap-4 ${guide.topBg} min-h-[130px]`}>
                <div className={`flex-shrink-0 ${guide.iconColor}`}>
                  <FileIcon className="w-9 h-9" />
                </div>
                <h3 className={`font-poppins text-xl sm:text-2xl font-bold leading-tight tracking-tight ${guide.titleColor}`}>
                  {guide.title}
                </h3>
              </div>

              {/* Bottom part */}
              <div className="p-8 flex flex-col justify-between flex-grow text-left">
                <p className="font-[family-name:var(--font-poppins)] text-base sm:text-[17px] leading-relaxed text-ink/80">
                  {guide.description}
                </p>
                <div className="mt-8">
                  <a
                    href="/documents/Prospectus_AY_2026_27.pdf"
                    download="Prospectus A.Y. 2026-27.pdf"
                    className={`inline-flex items-center gap-2 rounded-full px-7 py-3 text-[16px] font-bold tracking-wide shadow-sm transition-all hover:scale-[1.02] cursor-pointer ${guide.buttonBg} ${guide.buttonHoverBg}`}
                  >
                    <span dangerouslySetInnerHTML={{ __html: guide.buttonText }} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
