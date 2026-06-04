"use client";

import React, { useState } from "react";
import { SpecialisationsData } from "@/data/programmes/types";

export function DynamicSpecialisations({ data }: { data: SpecialisationsData }) {
  const [activeSpec, setActiveSpec] = useState(data.items[0]);

  if (!data.items || data.items.length === 0) return null;

  return (
    <section className="w-full bg-[#F8F9FA] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-ink mb-2 section-subheading">
            Specialisations
          </h2>
          <h3 className="text-[#E73649] mb-4 section-heading">
            Multiple futures. One degree.
          </h3>
          <p className="text-ink/80 max-w-2xl mx-auto section-body">
            {data.description} Tap a specialisation to see what you'll learn, the tools you'll use and the careers it opens up.
          </p>
        </div>

        {/* Horizontal scrollable toggles wrapper for mobile, wraps on desktop */}
        <div className="w-full overflow-x-auto scrollbar-hide mb-10 pb-4">
          <div className="flex sm:flex-wrap items-center justify-start sm:justify-center gap-3 sm:gap-4 min-w-max sm:minw-0 px-4 sm:px-0 mx-auto">
            {data.items.map((spec) => {
              const isActive = activeSpec.id === spec.id;
              return (
                <button
                  key={spec.id}
                  onClick={() => setActiveSpec(spec)}
                  className={`rounded-full px-6 sm:px-8 py-3 font-bold text-sm sm:text-[15px] transition-all duration-200 border whitespace-nowrap ${
                    isActive
                      ? "bg-[#FCE34B] text-ink border-[#FCE34B] shadow-sm"
                      : "bg-transparent text-ink border-gray-300 hover:border-gray-400 hover:bg-white"
                  }`}
                >
                  {spec.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-[24px] border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 sm:p-12 w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
            
            {/* What you'll learn */}
            <div className="md:pr-8 md:border-r border-gray-100 flex flex-col">
              <h4 className="font-bold text-[18px] sm:text-[20px] text-ink mb-4">What you'll learn</h4>
              <p className="text-ink/80 text-[15px] sm:text-[16px] leading-relaxed">
                {activeSpec.learn}
              </p>
            </div>

            {/* Skills */}
            <div className="md:px-8 md:border-r border-gray-100 flex flex-col">
              <h4 className="font-bold text-[18px] sm:text-[20px] text-ink mb-4">Skills</h4>
              <ul className="list-disc list-outside ml-5 text-ink/80 text-[15px] sm:text-[16px] space-y-2">
                {activeSpec.skills.map((skill, idx) => (
                  <li key={idx} className="pl-1 leading-relaxed">{skill}</li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="md:px-8 md:border-r border-gray-100 flex flex-col">
              <h4 className="font-bold text-[18px] sm:text-[20px] text-ink mb-4">Tools</h4>
              <ul className="list-disc list-outside ml-5 text-ink/80 text-[15px] sm:text-[16px] space-y-2">
                {activeSpec.tools.map((tool, idx) => (
                  <li key={idx} className="pl-1 leading-relaxed">{tool}</li>
                ))}
              </ul>
            </div>

            {/* Careers */}
            <div className="md:pl-8 flex flex-col">
              <h4 className="font-bold text-[18px] sm:text-[20px] text-ink mb-4">Careers</h4>
              <ul className="list-disc list-outside ml-5 text-ink/80 text-[15px] sm:text-[16px] space-y-2">
                {activeSpec.careers.map((career, idx) => (
                  <li key={idx} className="pl-1 leading-relaxed">{career}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
