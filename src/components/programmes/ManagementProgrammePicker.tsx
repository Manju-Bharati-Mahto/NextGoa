"use client";

import React, { useState } from "react";

export default function ManagementProgrammePicker() {
  const [activeLevel, setActiveLevel] = useState<string>("Bachelor's");
  const [showAll, setShowAll] = useState<boolean>(false);

  const programmes: Record<string, any[]> = {
    "Bachelor's": [
      { 
        title: "Bachelor of Business\nAdministration (BBA)", 
        duration: "3 Years", 
        eligibility: "10+2 in any stream with English from a recognized board.", 
        intake: "120", 
        mode: "Full-time",
        specialisations: []
      },
      ...["General", "Data Analytics", "Financial Management", "Human Resource", "Marketing", "Logistics and Supply Chain Management"].map(spec => ({
        title: `BBA Honours (NEP 2020)\n${spec}`, 
        duration: "4 Years", 
        eligibility: "10+2 in any stream with English from a recognized board.", 
        intake: "60", 
        mode: "Full-time",
        specialisations: []
      }))
    ],
    "Master's": [
      ...["General", "Business Analytics", "Finance", "Human Resource", "Marketing", "Operations Management"].map(spec => ({
        title: `Master of Business\nAdministration (MBA) - ${spec}`, 
        duration: "2 Years", 
        eligibility: "Graduation with 50% (45% for Reserved category) from a recognized university.", 
        intake: "60", 
        mode: "Full-time",
        specialisations: []
      }))
    ]
  };

  const currentProgrammes = programmes[activeLevel] || [];
  const visibleProgrammes = showAll ? currentProgrammes : currentProgrammes.slice(0, 2);

  return (
    <section className="w-full bg-[#FAFAFA] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-ink font-semibold text-[22px] sm:text-[26px] tracking-wide mb-2">
            Programme Picker
          </h2>
          <h3 className="font-poppins font-bold text-[36px] sm:text-[48px] leading-[1.1] tracking-tight text-[#E73649] mb-10">
            Pick your degree level.
          </h3>
          
          {/* Toggles */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {["Bachelor's", "Master's"].map((level) => (
              <button
                key={level}
                onClick={() => {
                  setActiveLevel(level);
                  setShowAll(false);
                }}
                className={`rounded-full px-8 py-2.5 font-bold text-sm sm:text-base transition-all duration-200 border ${
                  activeLevel === level
                    ? "bg-[#0CAADD] text-white border-[#0CAADD] shadow-md shadow-[#0CAADD]/20"
                    : "bg-transparent text-ink border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 w-full mx-auto items-stretch">
          {visibleProgrammes.map((prog, idx) => {
            const isYellow = idx % 2 === 0;

            return (
              <div 
                key={idx}
                className={`w-full md:w-[calc(50%-1.25rem)] rounded-[24px] p-8 sm:p-10 flex flex-col ${
                  isYellow ? "bg-[#FCE34B] text-ink" : "bg-[#E73649] text-white"
                }`}
              >
                <h4 className="font-poppins font-bold text-[28px] sm:text-[32px] leading-tight mb-8 whitespace-pre-line">
                  {prog.title}
                </h4>

                <div className="grid grid-cols-2 gap-y-8 mb-8">
                  <div>
                    <p className={`text-[15px] mb-1.5 opacity-90 font-medium ${isYellow ? "text-ink" : "text-white"}`}>Duration</p>
                    <p className="font-bold text-[18px] sm:text-[20px]">{prog.duration}</p>
                  </div>
                  <div>
                    <p className={`text-[15px] mb-1.5 opacity-90 font-medium ${isYellow ? "text-ink" : "text-white"}`}>Eligibility</p>
                    <p className="font-bold text-[14px] sm:text-[15px] leading-snug max-w-[250px]">{prog.eligibility}</p>
                  </div>
                  <div>
                    <p className={`text-[15px] mb-1.5 opacity-90 font-medium ${isYellow ? "text-ink" : "text-white"}`}>Intake</p>
                    <p className="font-bold text-[18px] sm:text-[20px]">{prog.intake}</p>
                  </div>
                  <div>
                    <p className={`text-[15px] mb-1.5 opacity-90 font-medium ${isYellow ? "text-ink" : "text-white"}`}>Mode</p>
                    <p className="font-bold text-[18px] sm:text-[20px]">{prog.mode}</p>
                  </div>
                </div>

                {prog.specialisations && prog.specialisations.length > 0 && (
                  <div className={`border-t pt-6 mb-10 flex-grow ${isYellow ? "border-ink/10" : "border-white/20"}`}>
                    <p className={`text-base mb-3.5 opacity-80 font-medium ${isYellow ? "text-ink" : "text-white"}`}>Specialisations</p>
                    <div className="flex flex-wrap gap-2.5">
                      {prog.specialisations.map((spec: string, sIdx: number) => (
                        <span 
                          key={sIdx}
                          className={`text-[12px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider ${
                            isYellow ? "bg-white text-ink" : "bg-white/20 text-white"
                          }`}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {(!prog.specialisations || prog.specialisations.length === 0) && (
                  <div className="flex-grow"></div>
                )}

                <div className="flex flex-wrap items-center gap-4 mt-auto">
                  <button className={`rounded-full px-7 py-2.5 font-bold text-[15px] transition-transform hover:scale-105 ${
                    isYellow ? "bg-[#E73649] text-white" : "bg-[#FCE34B] text-ink"
                  }`}>
                    View Details &rarr;
                  </button>
                  <button className={`rounded-full px-7 py-2.5 font-bold text-[15px] transition-transform hover:scale-105 border ${
                    isYellow ? "border-ink text-ink hover:bg-ink/5" : "border-white text-white hover:bg-white/10"
                  }`}>
                    Brochure
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {!showAll && currentProgrammes.length > 2 && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAll(true)}
              className="font-bold text-[#E73649] hover:underline text-[15px] cursor-pointer"
            >
              View all &rarr;
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
