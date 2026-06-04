import React from 'react';

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
  return (
    <section className="w-full bg-[#F5F6F8] py-16 sm:py-24">
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
            {READINESS_DATA.map((card, idx) => (
              <div 
                key={idx} 
                className="flex flex-col h-auto min-h-full bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 w-full"
              >
                {/* Card Header */}
                <div className={`${colorStyles[card.color as keyof typeof colorStyles].bg} ${colorStyles[card.color as keyof typeof colorStyles].text} p-5 flex flex-col justify-center items-center text-center min-h-[100px] relative`}>
                  <h4 className="font-poppins font-semibold text-[22px] leading-tight whitespace-pre-line relative z-10">{card.title}</h4>
                  {card.subtitle && (
                    <p className="text-sm font-medium opacity-90 mt-1.5 relative z-10">{card.subtitle}</p>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-4 lg:p-6 flex-grow bg-white">
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
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
