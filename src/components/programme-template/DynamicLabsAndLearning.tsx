"use client";

import React from "react";
import { LabsData } from "@/data/programmes/types";

export function DynamicLabsAndLearning({ data }: { data: LabsData }) {
  const colors = ["bg-[#E73649]", "bg-[#FDE047]", "bg-[#0CAADD]", "bg-[#0CAADD]", "bg-[#252525]"];

  return (
    <section className="w-full bg-[#FAFAFA] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-ink mb-2 section-subheading">
            {data.subtitle || "Labs & Hands-on Learning"}
          </h2>
          <h3 className="text-[#E73649] mb-4 section-heading">
            {data.title}
          </h3>
          {data.description && (
            <p className="text-ink/80 max-w-2xl mx-auto section-body">
              {data.description}
            </p>
          )}
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 w-full max-w-[1000px] mx-auto">
          {data.features.map((lab, idx) => {
            const bgClass = colors[idx % colors.length];
            const isYellow = bgClass === "bg-[#FDE047]";
            
            return (
              <div 
                key={idx} 
                className="w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.5rem)] flex flex-col rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 min-h-[340px]"
              >
                {/* Top Half */}
                <div className={`${lab.image ? 'bg-gray-100' : bgClass} flex-grow p-6 sm:p-8 flex flex-col justify-end relative overflow-hidden`}>
                  {lab.image && (
                    <>
                      <img src={lab.image} alt={lab.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </>
                  )}
                  
                  {lab.description && (
                    <p className={`text-[15px] sm:text-[16px] leading-relaxed relative z-10 mt-auto ${lab.image ? 'text-white' : (isYellow ? "text-ink" : "text-white")} font-medium`}>
                      {lab.description}
                    </p>
                  )}
                </div>
                
                {/* Bottom White Half */}
                <div className="bg-white p-6 sm:p-8 h-[120px] flex items-center">
                  <h4 className="font-poppins font-bold text-[18px] sm:text-[20px] text-ink leading-tight">
                    {lab.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
