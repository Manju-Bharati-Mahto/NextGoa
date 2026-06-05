"use client";

import { WhyData } from "@/data/programmes/types";

export function DynamicWhyPUGoa({ 
  data,
  themeColor
}: { 
  data: WhyData,
  themeColor: { waveBand: string; waveAccent: string; cardBg: string; cardText: string; }
}) {
  return (
    <section className="relative overflow-hidden z-10 w-full bg-[#FAFAFA]">
      {/* Background Wavy Image from Figma */}
      {themeColor.waveBand.toUpperCase() === "#E73649" ? (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Middle Solid Red Background */}
          <div 
            className="absolute inset-x-0 bg-[#E73649]" 
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
            <img
              src="/89.svg"
              alt=""
              className="absolute top-0 left-0 w-full h-auto"
            />
          </div>
          {/* Bottom Wave */}
          <div 
            className="absolute bottom-0 left-0 right-0 overflow-hidden"
            style={{ height: "clamp(50px, 8vw, 120px)" }}
          >
            <img
              src="/89.svg"
              alt=""
              className="absolute bottom-0 left-0 w-full h-auto"
            />
          </div>
        </div>
      ) : themeColor.waveBand.toUpperCase() === "#FEDB2F" ? (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Middle Solid Yellow Background */}
          <div 
            className="absolute inset-x-0 bg-[#FEDB2F]" 
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
            <img
              src="/87.svg"
              alt=""
              className="absolute top-0 left-0 w-full h-auto"
            />
          </div>
          {/* Bottom Wave */}
          <div 
            className="absolute bottom-0 left-0 right-0 overflow-hidden"
            style={{ height: "clamp(50px, 8vw, 120px)" }}
          >
            <img
              src="/87.svg"
              alt=""
              className="absolute bottom-0 left-0 w-full h-auto"
            />
          </div>
        </div>
      ) : themeColor.waveBand.toUpperCase() === "#1F1F1F" ? (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Middle Solid Black Background */}
          <div 
            className="absolute inset-x-0 bg-[#1F1F1F]" 
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
            <img
              src="/90.svg"
              alt=""
              className="absolute top-0 left-0 w-full h-auto"
            />
          </div>
          {/* Bottom Wave */}
          <div 
            className="absolute bottom-0 left-0 right-0 overflow-hidden"
            style={{ height: "clamp(50px, 8vw, 120px)" }}
          >
            <img
              src="/90.svg"
              alt=""
              className="absolute bottom-0 left-0 w-full h-auto"
            />
          </div>
        </div>
      ) : (
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
            <img
              src="/88.svg"
              alt=""
              className="absolute top-0 left-0 w-full h-auto"
            />
          </div>
          {/* Bottom Wave */}
          <div 
            className="absolute bottom-0 left-0 right-0 overflow-hidden"
            style={{ height: "clamp(50px, 8vw, 120px)" }}
          >
            <img
              src="/88.svg"
              alt=""
              className="absolute bottom-0 left-0 w-full h-auto"
            />
          </div>
        </div>
      )}

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12 py-24 sm:py-36 flex flex-col items-start justify-center">
        
        <h2 className="text-white mb-3 section-subheading">
          {data.title}
        </h2>
        
        <h3 className="text-[#FDE047] mb-16 max-w-2xl section-heading">
          {data.subtitle}
        </h3>

        <div className="flex flex-wrap justify-start gap-6 sm:gap-8 w-full">
          {data.cards.map((card, idx) => (
            <div 
              key={idx} 
              className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(25%-1.5rem)] bg-[#FDE047] rounded-[24px] p-8 sm:p-10 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-ink text-[14px] font-medium mb-2 opacity-90">
                {card.badge}
              </span>
              <h4 className="font-poppins text-ink font-bold text-[24px] sm:text-[28px] mb-4 leading-tight whitespace-pre-line">
                {card.title}
              </h4>
              <p className="text-ink/90 text-[15px] sm:text-[16px] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
