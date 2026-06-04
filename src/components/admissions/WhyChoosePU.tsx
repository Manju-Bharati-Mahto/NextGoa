"use client";

import React from "react";
import { TwoThousandPlusIcon } from "@/components/landing/TwoThousandPlusIcon";

export function WhyChoosePU() {
  return (
    <section className="w-full bg-[#fcfcfc] py-20 px-4 sm:px-8 xl:px-16 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="mb-12 text-[#ee364f] section-heading">
          Why students choose PU Goa.
        </h2>
        
        {/* Top Cards Grid */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-6 mb-16">
          {/* Blue Card */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="/images/admissions/why-choose-1.svg" 
              alt="120+ Partner Universities" 
              className="w-full max-w-[584px] object-contain drop-shadow-sm" 
            />
          </div>
          {/* Red/Image Card */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <img 
              src="/images/admissions/why-choose-2.svg" 
              alt="NAAC A++ Ecosystem" 
              className="w-full max-w-[584px] object-contain drop-shadow-sm" 
            />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10">
          <div className="flex items-center justify-center flex-shrink-0">
            <TwoThousandPlusIcon className="h-[60px] md:h-[80px] lg:h-[90px] w-auto" />
          </div>
          
          <div className="hidden md:block w-[1.5px] h-[60px] bg-gray-300"></div>
          
          <div className="text-center md:text-left">
            <h3 className="font-poppins font-semibold text-[28px] md:text-[32px] lg:text-[40px] text-ink leading-tight mb-1">
              Recruiting companies*
            </h3>
            <p className="font-[family-name:var(--font-poppins)] text-gray-500 text-[16px] md:text-[18px] lg:text-[20px]">
              Across the Parul University ecosystem, every year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
