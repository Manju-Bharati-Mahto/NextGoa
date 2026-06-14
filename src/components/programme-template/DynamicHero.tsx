"use client";

import Image from "next/image";
import { HeroData } from "@/data/programmes/types";

export function DynamicHero({ data }: { data: HeroData }) {
  return (
    <section className="relative w-full min-h-[700px] lg:min-h-[850px] bg-white flex items-center overflow-hidden pt-[120px] lg:pt-[160px]">
      <div className="absolute inset-0 z-0">
        <Image 
          src={data.backgroundImage} 
          alt={data.title} 
          fill 
          className={`object-cover ${data.imagePosition || 'object-right lg:object-center'}`}  
          priority 
        />
        {/* Gradients to blend image seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent w-full md:w-[65%]"></div>
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-[800px] flex flex-col items-start text-left">
          {/* Yellow Badge */}
          <span className="inline-block bg-[#FCE34B] text-ink text-[12px] sm:text-[14px] font-medium px-5 py-1.5 rounded-full mb-6">
            {data.badge}
          </span>

          {/* Main Heading */}
          <h1 className="font-poppins font-bold text-[40px] sm:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight text-ink">
            {data.title.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                <br className="hidden sm:block" />
              </span>
            ))}
            <span className="text-[#E73649]">{data.highlight}</span>
          </h1>

          {/* Sub-heading */}
          <p className="mt-6 text-[16px] sm:text-[18px] text-ink/80 font-medium">
            {data.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
