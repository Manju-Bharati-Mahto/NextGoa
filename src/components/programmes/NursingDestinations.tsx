import React from "react";
import { Icon } from "@iconify/react";

export default function NursingDestinations() {
  const destinations = [
    {
      country: "UAE",
      desc: "Dubai, Abu Dhabi hospital chains",
      flag: "flag:ae-4x3"
    },
    {
      country: "Saudi Arabia",
      desc: "MOH and private hospitals",
      flag: "flag:sa-4x3"
    },
    {
      country: "UK",
      desc: "NHS via OSCE pathway",
      flag: "flag:gb-4x3"
    },
    {
      country: "Oman",
      desc: "Ministry of Health postings",
      flag: "flag:om-4x3"
    }
  ];

  return (
    <section className="relative overflow-hidden z-10 w-full bg-[#fafafa]">
            <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Middle Solid Blue Background */}
        <div 
          className="absolute inset-x-0 bg-[#0CAADD]" 
          style={{ 
            top: "calc(clamp(50px, 8vw, 120px) - 1.5px)", 
            bottom: "calc(clamp(50px, 8vw, 120px) - 1.5px)" 
          }} 
        />
        {/* Top Wave */}
        <div 
          className="absolute top-0 left-0 right-0 overflow-hidden"
          style={{ height: "clamp(50px, 8vw, 120px)" }}
        >
          <div 
            className="absolute top-0 left-0 w-[400%] h-full animate-wave-flow"
            style={{
              backgroundImage: "url('/88-double.svg?v=3')",
              backgroundSize: "50% auto",
              backgroundPosition: "top left",
              backgroundRepeat: "repeat-x"
            }}
          />
        </div>
        {/* Bottom Wave */}
        <div 
          className="absolute bottom-0 left-0 right-0 overflow-hidden"
          style={{ height: "clamp(50px, 8vw, 120px)" }}
        >
          <div 
            className="absolute bottom-0 left-0 w-[400%] h-full animate-wave-flow"
            style={{
              backgroundImage: "url('/88-double.svg?v=3')",
              backgroundSize: "50% auto",
              backgroundPosition: "bottom left",
              backgroundRepeat: "repeat-x"
            }}
          />
        </div>
      </div>

      <div 
        className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12"
        style={{
          paddingTop: "calc(clamp(50px, 8vw, 120px) + 3rem)",
          paddingBottom: "calc(clamp(50px, 8vw, 120px) + 3rem)"
        }}
      >
        
        <h2 className="text-[#FCE34B] mb-2 section-subheading">
          Global Opportunities
        </h2>
        <h3 className="text-white mb-8 section-heading">
          Explore international destinations.
        </h3>

        <div className="flex flex-wrap justify-start gap-6 sm:gap-8 w-full mb-8">
          {destinations.map((dest, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[20px] p-6 sm:p-8 flex flex-col items-start shadow-sm w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)]"
            >
              <div className="mb-6 rounded-md overflow-hidden border border-gray-100 shrink-0 w-[60px] sm:w-[80px]">
                <Icon icon={dest.flag} className="w-full h-auto block" />
              </div>
              <h4 className="font-bold text-[22px] sm:text-[24px] text-ink mb-2 leading-tight">
                {dest.country}
              </h4>
              <p className="text-ink/80 text-[14px] sm:text-[15px] leading-snug">
                {dest.desc}
              </p>
            </div>
          ))}
        </div>

        <div>
          <a href="#" className="inline-block bg-[#E73649] text-white font-bold text-[16px] sm:text-[18px] px-8 py-3.5 rounded-full transition-transform hover:scale-105 shadow-md">
            Explore all pathways &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
