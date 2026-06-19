"use client";

import React, { useState } from 'react';

const READINESS_DATA = [
  {
    title: "For all students",
    color: "black",
    items: [
      "NEP 2020 curriculum",
      "Industry mentor network",
      "Placement training",
      "Mock interviews",
      "Aptitude prep",
      "Resume + LinkedIn workshops"
    ]
  },
  {
    title: "For Engineering & CS",
    color: "blue",
    items: [
      "Hackathons",
      "Coding competitions",
      "Industry projects",
      "Cloud certifications",
      "LinkedIn Learning access"
    ]
  },
  {
    title: "For Healthcare",
    subtitle: "(Pharmacy / Nursing / BPT / AHS)",
    color: "yellow",
    items: [
      "Hospital postings",
      "Clinical training",
      "Industry visits",
      "Council exam prep"
    ]
  },
  {
    title: "For Management &\nHospitality",
    color: "red",
    items: [
      "Live consulting projects",
      "Case competitions",
      "Industry guest lectures",
      "International exchange"
    ]
  }
];

const colorStyles = {
  black: { bg: "bg-[#1F1F1F]", text: "text-white" },
  blue: { bg: "bg-[#0CAADD]", text: "text-white" },
  yellow: { bg: "bg-[#FEDB2F]", text: "text-[#1F1F1F]" },
  red: { bg: "bg-[#E73649]", text: "text-white" },
};

export function CareerReadiness() {
  const [openCardIdx, setOpenCardIdx] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#F5F6F8] py-10 sm:py-5">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <div className="max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-8 xl:px-12">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-black mb-2 section-subheading">Career Readiness</h3>
          <h2 className="text-[#F13C4D] section-heading">How PU Goa prepares you.</h2>
        </div>

        {/* Grid Container */}
        <div className="w-full relative mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 pb-12 pt-4 px-2">
            {READINESS_DATA.map((card, idx) => {
              const isOpen = openCardIdx === idx;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col h-auto min-h-full bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 w-full"
                >
                  {/* Card Header */}
                  <div 
                    onClick={() => setOpenCardIdx(prev => prev === idx ? null : idx)}
                    className={`${colorStyles[card.color as keyof typeof colorStyles].bg} ${colorStyles[card.color as keyof typeof colorStyles].text} p-5 flex flex-col justify-center items-center text-center min-h-[100px] relative cursor-pointer md:cursor-default transition-colors`}
                  >
                    <h4 className="font-poppins font-semibold text-[22px] leading-tight whitespace-pre-line relative z-10 pr-6 md:pr-0">{card.title}</h4>
                    {card.subtitle && (
                      <p className="text-sm font-medium opacity-90 mt-1.5 relative z-10 pr-6 md:pr-0">{card.subtitle}</p>
                    )}
                    {/* Chevron for mobile */}
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 md:hidden">
                      <svg className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div 
                    className={`flex-grow bg-white grid transition-all duration-300 ease-in-out md:!grid-rows-[1fr] md:!opacity-100 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden flex flex-col">
                      <div className="p-4 lg:p-6 flex-grow h-full">
                        <ul className="divide-y divide-gray-100 h-full flex flex-col">
                          {card.items.map((item, itemIdx) => (
                            <li 
                              key={itemIdx} 
                              className="flex items-center gap-4 py-3 sm:py-4"
                            >
                              <div className="w-6 h-6 rounded-full bg-[#10b981]/15 flex items-center justify-center shrink-0">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></div>
                              </div>
                              <p className="text-[#333333] font-medium text-[15px] sm:text-[16px] leading-snug text-left">
                                {item}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
