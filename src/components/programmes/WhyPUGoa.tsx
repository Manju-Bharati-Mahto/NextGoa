"use client";

import React from "react";
import { WaveBandBg } from "@/components/landing/WaveBand";

export default function WhyPUGoa() {
  return (
    <section className="relative overflow-hidden z-10 w-full bg-[linear-gradient(to_bottom,#FAFAFA_50%,#BAE6FD_50%)]">
      {/* Background wave band */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <WaveBandBg band="#E73649" accent="#C92B3C" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12 py-24 sm:py-36 flex flex-col items-start justify-center">
        
        <h2 className="text-white font-medium text-lg sm:text-xl mb-3 tracking-wide">
          Why PU Goa
        </h2>
        
        <h3 className="font-poppins font-bold text-[40px] sm:text-[56px] leading-[1.1] tracking-tight text-[#FDE047] mb-16 max-w-2xl">
          Engineering with an unfair advantage.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
          {/* Card 1 */}
          <div className="bg-[#FDE047] rounded-[24px] p-8 sm:p-10 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow">
            <span className="text-ink text-[14px] font-medium mb-2 opacity-90">
              ONGC &middot; Industry 4.0
            </span>
            <h4 className="font-poppins font-bold text-[24px] sm:text-[28px] text-ink mb-4 leading-tight">
              Live Industrial<br />Corridor
            </h4>
            <p className="text-ink/90 text-[15px] sm:text-[16px] leading-relaxed">
              Campus next to ONGC Betul. Real plant visits, India Energy Week 2026 access, working professionals as guest faculty.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FDE047] rounded-[24px] p-8 sm:p-10 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow">
            <span className="text-ink text-[14px] font-medium mb-2 opacity-90">
              Future-ready
            </span>
            <h4 className="font-poppins font-bold text-[24px] sm:text-[28px] text-ink mb-4 leading-tight">
              NEP 2020 +<br />Industry-aligned
            </h4>
            <p className="text-ink/90 text-[15px] sm:text-[16px] leading-relaxed">
              Curriculum re-engineered for AI-first careers. Multidisciplinary credits, internships baked in, choice-based learning.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FDE047] rounded-[24px] p-8 sm:p-10 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow">
            <span className="text-ink text-[14px] font-medium mb-2 opacity-90">
              6 countries
            </span>
            <h4 className="font-poppins font-bold text-[24px] sm:text-[28px] text-ink mb-4 leading-tight">
              Global<br />Pathways
            </h4>
            <p className="text-ink/90 text-[15px] sm:text-[16px] leading-relaxed">
              2+2, 1+1, 3+1+1 routes to USA, UK, Germany, Australia, New Zealand and France with named partner universities.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
