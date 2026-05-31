import React from "react";
import { Eyebrow } from "@/components/landing/Decor";

const pills = [
  "NOT-FOR-PROFIT",
  "STUDENT-FIRST",
  "INDUSTRY-ALIGNED",
  "GLOBALLY CONNECTED",
  "NEP 2020",
  "RESEARCH-LED",
];

export function VisionMission() {
  return (
    <section className="bg-brand-white py-20 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-sans font-medium text-[32px] text-ink leading-tight">
            Our Direction
          </h2>
          <h3 className="mt-2 font-sans font-bold text-[56px] text-brand leading-[1.05] tracking-tight">
            Vision and Mission.
          </h3>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Vision Card */}
          <div className="flex flex-col rounded-[24px] bg-brand-black p-10 text-white shadow-lg">
            <img src="/mission.svg" alt="Vision Icon" className="h-20 w-20 object-contain mb-6" />
            <h4 className="font-sans text-[32px] font-medium mb-4">Vision</h4>
            <p className="font-[family-name:var(--font-poppins)] text-white/90 text-[18px] leading-relaxed">
              To build a globally connected and industry-aligned State&apos;s First
              Private University in Goa where students from anywhere in the world
              can shape the careers and lives they choose.
            </p>
          </div>

          {/* Mission Card */}
          <div className="flex flex-col rounded-[24px] bg-brand-blue p-10 text-white shadow-lg">
            <img src="/vision.svg" alt="Mission Icon" className="h-20 w-20 object-contain mb-6" />
            <h4 className="font-sans text-[32px] font-medium mb-4">Mission</h4>
            <p className="font-[family-name:var(--font-poppins)] text-white/95 text-[18px] leading-relaxed">
              We deliver NEP 2020-aligned programmes across eight faculties,
              supported by hands-on labs, real industry exposure on Goa&apos;s coast,
              international pathways across 7 countries, and the 20 years&apos;+
              ecosystem of Parul University, Vadodara.
            </p>
          </div>
        </div>

        {/* Pills / Tags */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {pills.map((pill) => (
            <span
              key={pill}
              className="rounded-full bg-black/5 px-5 py-2 font-[family-name:var(--font-poppins)] text-xs sm:text-sm font-bold text-ink border border-black/10 transition-colors hover:bg-black/10"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
