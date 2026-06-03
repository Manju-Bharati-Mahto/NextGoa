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
    <section 
      className="relative overflow-hidden z-10 w-full"
      style={{ backgroundImage: `linear-gradient(to bottom, ${topBgColor} 50%, transparent 50%)` }}
    >
      {/* Background Wavy Image from Figma */}
      <img
        src={
          themeColor.waveBand.toUpperCase() === "#E73649"
            ? "/Group 32864.png"
            : themeColor.waveBand.toUpperCase() === "#1F1F1F"
            ? "/Group 32865.png"
            : "/Group 32863.png"
        }
        alt=""
        className="absolute inset-0 w-full h-full object-cover md:object-fill z-0 pointer-events-none"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12 py-24 sm:py-32 text-center flex flex-col items-center">
        <h2 className="text-white font-semibold text-lg sm:text-xl mb-4 tracking-wide">
          Career Outcomes
        </h2>
        
        <h3 className="font-poppins font-bold text-[40px] sm:text-[56px] leading-[1.1] tracking-tight text-sunshine mb-6">
          {data.heading || "Where this degree takes you."}
        </h3>
        
        {!data.hideSubheadingAndTopRolesTitle && (
          <>
            <p className="font-poppins text-white/90 text-sm sm:text-base max-w-3xl mb-16 leading-relaxed">
              {data.subheading || "Roles, recruiters and global Master's destinations our graduates build careers around."}
            </p>

            <h4 className="text-white font-bold text-[32px] sm:text-[40px] mb-10 tracking-tight">
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
