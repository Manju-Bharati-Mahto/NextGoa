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
    <section id="vision-mission" className="bg-brand-white sm: px-6 scroll-mt-24 md:scroll-mt-32 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-ink section-subheading">
            Our Direction
          </h2>
          <h3 className="mt-2 text-brand section-heading">
            Vision and Mission.
          </h3>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Vision Card */}
          <div className="flex flex-col rounded-[24px] bg-brand-black p-8 sm:p-10 text-white shadow-lg text-center sm:text-left items-center sm:items-start">
            <img src="/mission.svg" alt="Vision Icon" className="h-20 w-20 object-contain mb-6" />
            <h4 className="font-poppins text-[32px] font-semibold mb-4">Vision</h4>
            <p className="text-white/90 section-body">
              To build a globally connected and industry-aligned State&apos;s First
              Private University in Goa where students from anywhere in the world
              can shape the careers and lives they choose.
            </p>
          </div>

          {/* Mission Card */}
          <div className="flex flex-col rounded-[24px] bg-brand-blue p-8 sm:p-10 text-white shadow-lg text-center sm:text-left items-center sm:items-start">
            <img src="/vision.svg" alt="Mission Icon" className="h-20 w-20 object-contain mb-6" />
            <h4 className="font-poppins text-[32px] font-semibold mb-4">Mission</h4>
            <p className="text-white/95 section-body">
              We deliver NEP 2020-aligned programmes across eight faculties,
              supported by hands-on labs, real industry exposure on Goa&apos;s coast,
              international pathways across 7 countries, and the 30 years&apos;+
              ecosystem of Parul University, Vadodara.
            </p>
          </div>
        </div>

        {/* Pills / Tags */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {pills.map((pill) => (
            <span
              key={pill}
              className="rounded-full bg-black/5 px-5 py-2 font-[family-name:var(--font-poppins)] text-sm sm:text-sm font-bold text-ink border border-black/10 transition-colors hover:bg-black/10"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
