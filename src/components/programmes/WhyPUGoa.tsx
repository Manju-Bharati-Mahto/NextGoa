"use client";

import React from "react";

export default function WhyPUGoa() {
  return (
    <section 
      className="relative overflow-hidden z-10 w-full bg-[linear-gradient(to_bottom,#FAFAFA_50%,#BAE6FD_50%)]"
      style={{
        paddingTop: "clamp(5rem, 12.2vw, 600px)",
        paddingBottom: "clamp(5rem, 13.3vw, 600px)"
      }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Middle Solid Red Background */}
        <div 
          className="absolute inset-x-0 bg-[#E73649]" 
          style={{ 
            top: "calc(clamp(50px, 8vw, 500px) - 1.5px)", 
            bottom: "calc(clamp(50px, 8vw, 500px) - 1.5px)" 
          }} 
        />
        {/* Top Wave */}
        <div 
          className="absolute top-0 left-0 right-0 overflow-hidden"
          style={{ height: "clamp(50px, 8vw, 500px)" }}
        >
          <img
            src="/89.svg"
            alt=""
            className="absolute top-0 left-0 w-full h-auto"
          />
        </div>
        {/* Bottom Wave */}
        <div 
          className="absolute bottom-0 left-0 right-0 overflow-hidden"
          style={{ height: "clamp(50px, 8vw, 500px)" }}
        >
          <img
            src="/89.svg"
            alt=""
            className="absolute bottom-0 left-0 w-full h-auto"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12 flex flex-col items-start justify-center">
        
        <h2 className="text-white mb-3 section-subheading">
          Why PU Goa
        </h2>
        
        <h3 className="text-[#FDE047] mb-16 max-w-2xl section-heading">
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
