"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { CareerOutcomesData } from "@/data/programmes/types";

export function DynamicCareerOutcomes({ 
  data, 
  themeColor,
  topBgColor = "#FDE047",
  isPhdLayout = false
}: { 
  data: CareerOutcomesData,
  themeColor: { waveBand: string; waveAccent: string; cardBg: string; cardText: string; },
  topBgColor?: string,
  isPhdLayout?: boolean
}) {
  return (
    <section className="relative overflow-hidden z-10 w-full"
      style={{ 
        backgroundImage: `linear-gradient(to bottom, ${topBgColor} 50%, transparent 50%)`,
        paddingTop: "clamp(4rem, 8.5vw, 400px)",
        paddingBottom: "clamp(4rem, 9.5vw, 400px)"
      }}
    >
      {/* Background Wavy Image from Figma */}
      {themeColor.waveBand.toUpperCase() === "#E73649" ? (
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
            <div 
            className="absolute top-0 left-0 w-[400%] h-full animate-wave-flow"
            style={{
              backgroundImage: "url('/89-double.svg?v=3')",
              backgroundSize: "50% auto",
              backgroundPosition: "top left",
              backgroundRepeat: "repeat-x"
            }}
          />
          </div>
          {/* Bottom Wave */}
          <div 
            className="absolute bottom-0 left-0 right-0 overflow-hidden"
            style={{ height: "clamp(50px, 8vw, 500px)" }}
          >
            <div 
            className="absolute bottom-0 left-0 w-[400%] h-full animate-wave-flow"
            style={{
              backgroundImage: "url('/89-double.svg?v=3')",
              backgroundSize: "50% auto",
              backgroundPosition: "bottom left",
              backgroundRepeat: "repeat-x"
            }}
          />
          </div>
        </div>
      ) : themeColor.waveBand.toUpperCase() === "#FEDB2F" ? (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Middle Solid Yellow Background */}
          <div 
            className="absolute inset-x-0 bg-[#FEDB2F]" 
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
            <div 
              className="absolute top-0 left-0 w-[400%] h-full animate-wave-flow"
              style={{
                backgroundImage: "url('/87-double.svg?v=3')",
                backgroundSize: "50% auto",
                backgroundPosition: "top left",
                backgroundRepeat: "repeat-x"
              }}
            />
          </div>
          {/* Bottom Wave */}
          <div 
            className="absolute bottom-0 left-0 right-0 overflow-hidden"
            style={{ height: "clamp(50px, 8vw, 500px)" }}
          >
            <div 
              className="absolute bottom-0 left-0 w-[400%] h-full animate-wave-flow"
              style={{
                backgroundImage: "url('/87-double.svg?v=3')",
                backgroundSize: "50% auto",
                backgroundPosition: "bottom left",
                backgroundRepeat: "repeat-x"
              }}
            />
          </div>
        </div>
      ) : themeColor.waveBand.toUpperCase() === "#1F1F1F" ? (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Middle Solid Black Background */}
          <div 
            className="absolute inset-x-0 bg-[#1F1F1F]" 
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
            <div 
              className="absolute top-0 left-0 w-[400%] h-full animate-wave-flow"
              style={{
                backgroundImage: "url('/90-double.svg?v=3')",
                backgroundSize: "50% auto",
                backgroundPosition: "top left",
                backgroundRepeat: "repeat-x"
              }}
            />
          </div>
          {/* Bottom Wave */}
          <div 
            className="absolute bottom-0 left-0 right-0 overflow-hidden"
            style={{ height: "clamp(50px, 8vw, 500px)" }}
          >
            <div 
              className="absolute bottom-0 left-0 w-[400%] h-full animate-wave-flow"
              style={{
                backgroundImage: "url('/90-double.svg?v=3')",
                backgroundSize: "50% auto",
                backgroundPosition: "bottom left",
                backgroundRepeat: "repeat-x"
              }}
            />
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Middle Solid Blue Background */}
          <div 
            className="absolute inset-x-0 bg-[#0CAADD]" 
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
            style={{ height: "clamp(50px, 8vw, 500px)" }}
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
      )}

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12 text-center flex flex-col items-center">
        <h2 className="text-white mb-4 section-subheading">
          Career Outcomes
        </h2>
        
        <h3 className="text-sunshine mb-4 section-heading">
          {data.heading || "Where this degree takes you."}
        </h3>
        
        {!data.hideSubheadingAndTopRolesTitle && (
          <>
            <p className="text-white/90 max-w-3xl mb-10 section-body">
              {data.subheading || "Roles, recruiters and global Master's destinations our graduates build careers around."}
            </p>

            <h4 className="text-white font-bold text-[32px] sm:text-[40px] mb-8 tracking-tight">
              Top job roles
            </h4>
          </>
        )}

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 w-full">
          {data.topRoles.map((role, idx) => (
            isPhdLayout ? (
              <div 
                key={idx} 
                className="w-full lg:w-[calc(50%-1.5rem)] bg-[#F8F9FA] rounded-[24px] p-4 sm:p-5 lg:p-6 flex items-center gap-4 sm:gap-5 lg:gap-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div 
                  className="bg-white border-2 w-[90px] h-[90px] rounded-2xl flex items-center justify-center shrink-0"
                  style={{ borderColor: `${themeColor.cardBg}33` }} // 20% opacity
                >
                  <Icon icon={role.icon} style={{ color: themeColor.cardBg }} className="text-[48px]" />
                </div>
                <div className="flex flex-col items-start justify-center text-left">
                  <h5 className="font-bold text-[20px] sm:text-[22px] text-ink mb-2 font-poppins leading-tight">
                    {role.title}
                  </h5>
                  <span className="inline-block border border-ink/80 text-ink/90 text-[11px] sm:text-[12px] font-semibold px-4 py-1 rounded-full uppercase tracking-widest">
                    {role.tag}
                  </span>
                </div>
              </div>
            ) : (
              <div 
                key={idx} 
                className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] bg-[#F8F9FA] rounded-[24px] p-4 sm:p-5 lg:p-6 flex items-center gap-4 sm:gap-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div 
                  className="w-[80px] h-[80px] rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: themeColor.cardBg }}
                >
                  <Icon icon={role.icon} className="text-white text-[40px]" />
                </div>
                <div className="flex flex-col items-start justify-center text-left">
                  <h5 className="font-bold text-[18px] sm:text-[20px] text-ink mb-2 font-poppins leading-tight">
                    {role.title}
                  </h5>
                  <span className="inline-block border border-ink/80 text-ink/90 text-[11px] sm:text-[12px] font-semibold px-4 py-1 rounded-full uppercase tracking-widest">
                    {role.tag}
                  </span>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
