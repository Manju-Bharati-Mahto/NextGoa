import React from "react";
import Link from "next/link";

export default function PhdResearchAreas() {
  const areas = [
    {
      title: "B.Tech",
      level: "PhD",
      theme: "red",
      topics: [
        "AI & ML",
        "CYBER SECURITY",
        "DATA SCIENCE",
        "IOT & EMBEDDED",
        "QUANTUM COMPUTING"
      ]
    },
    {
      title: "Pharmacy",
      level: "PhD",
      theme: "blue",
      topics: [
        "DRUG DISCOVERY",
        "PHARMACOLOGY",
        "PHARMACEUTICS",
        "PHARMACOGNOSY",
        "REGULATORY SCIENCES"
      ]
    },
    {
      title: "Management",
      level: "PhD",
      theme: "yellow",
      topics: [
        "FINANCE & FINTECH",
        "MARKETING ANALYTICS",
        "STRATEGY",
        "ORGANISATIONAL BEHAVIOUR",
        "OPERATIONS"
      ]
    },
    {
      title: "Nursing",
      level: "PhD",
      theme: "yellow",
      topics: [
        "COMMUNITY HEALTH",
        "CRITICAL CARE",
        "MATERNAL HEALTH",
        "MENTAL HEALTH NURSING"
      ]
    },
    {
      title: "Allied & Healthcare Sciences",
      level: "PhD",
      theme: "red",
      topics: [
        "BIOTECHNOLOGY",
        "MICROBIOLOGY",
        "PUBLIC HEALTH",
        "CLINICAL RESEARCH"
      ]
    }
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-ink mb-2 section-subheading">
            Research Areas
          </h2>
          <h3 className="text-[#E73649] mb-4 section-heading">
            By discipline.
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 w-full max-w-[1200px] mx-auto">
          {areas.map((area, idx) => {
            const isRed = area.theme === "red";
            const isBlue = area.theme === "blue";
            const isYellow = area.theme === "yellow";
            
            let bgClass = "";
            let textClass = "";
            let borderClass = "";
            let dotClass = "";

            if (isRed) {
              bgClass = "bg-[#E73649]";
              textClass = "text-white";
              borderClass = "border-white/20";
              dotClass = "bg-white";
            } else if (isBlue) {
              bgClass = "bg-[#0CAADD]";
              textClass = "text-white";
              borderClass = "border-white/20";
              dotClass = "bg-white";
            } else if (isYellow) {
              bgClass = "bg-[#FDE047]";
              textClass = "text-ink";
              borderClass = "border-ink/20";
              dotClass = "bg-ink";
            }

            return (
              <div 
                key={idx} 
                className={`w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] rounded-[20px] p-8 sm:p-10 shadow-sm ${bgClass} ${textClass}`}
              >
                <div className="mb-4">
                  <span className={`text-[14px] font-medium opacity-90`}>
                    {area.level}
                  </span>
                  <h4 className="font-poppins font-bold text-[24px] sm:text-[26px] leading-tight mt-1">
                    {area.title}
                  </h4>
                </div>
                
                <div className={`border-t border-b ${borderClass} py-5 mt-6`}>
                  <ul className="space-y-3">
                    {area.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`w-1.5 h-1.5 rounded-full ${dotClass} shrink-0 mt-1.5`} />
                        <span className="text-[13px] sm:text-[14px] font-bold uppercase tracking-wide opacity-90 leading-snug">
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <Link 
            href="#" 
            className="font-bold text-[16px] text-[#E73649] hover:underline underline-offset-4"
          >
            View more &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
