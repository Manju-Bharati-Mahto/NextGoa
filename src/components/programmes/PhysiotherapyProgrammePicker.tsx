"use client";

import React, { useState } from "react";

export default function PhysiotherapyProgrammePicker() {
  const [activeLevel, setActiveLevel] = useState<string>("All Programmes");
  const [showAll, setShowAll] = useState<boolean>(false);

  const physiotherapyProgrammes = [
    { 
      title: "Bachelor of\nPhysiotherapy (BPT)", 
      duration: "5 Years", 
      eligibility: "10+2 with PCB (50% aggregate).", 
      intake: "100", 
      mode: "Full-time" 
    }
  ];

  const currentProgrammes = showAll ? physiotherapyProgrammes : physiotherapyProgrammes.slice(0, 2);

  return (
    <section className="w-full bg-[#FAFAFA] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-ink font-semibold text-[22px] sm:text-[26px] tracking-wide mb-2">
            Programme Picker
          </h2>
          <h3 className="font-poppins font-bold text-[36px] sm:text-[48px] leading-[1.1] tracking-tight text-[#0CAADD] mb-10">
            Pick your degree level.
          </h3>
          
          {/* Toggles */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {["All Programmes"].map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
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
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 w-full max-w-5xl mx-auto items-stretch">
          {currentProgrammes.map((prog, idx) => {
            const isYellow = idx % 2 === 0;

            return (
              <div 
                key={idx}
                className={`w-full md:w-[calc(50%-1.25rem)] rounded-[24px] p-8 sm:p-10 flex flex-col h-full ${
                  isYellow ? "bg-[#FCE34B] text-ink" : "bg-[#E73649] text-white"
                }`}
              >
                <h4 className="font-poppins font-bold text-[28px] sm:text-[32px] leading-tight mb-8 whitespace-pre-line">
                  {prog.title}
                </h4>

                <div className="grid grid-cols-2 gap-y-8 mb-12 flex-grow">
                  <div>
                    <p className={`text-[15px] mb-1.5 opacity-90 font-medium ${isYellow ? "text-ink" : "text-white"}`}>Duration</p>
                    <p className="font-bold text-[18px] sm:text-[20px]">{prog.duration}</p>
                  </div>
                  <div>
                    <p className={`text-[15px] mb-1.5 opacity-90 font-medium ${isYellow ? "text-ink" : "text-white"}`}>Eligibility</p>
                    <p className="font-bold text-[14px] sm:text-[15px] leading-snug max-w-[250px] whitespace-pre-wrap">{prog.eligibility}</p>
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

                <div className="flex flex-wrap items-center gap-4 mt-auto pt-6 border-t border-black/5">
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

          {/* Important Notes Box (Side-by-side) */}
          <div className="rounded-[24px] bg-white border border-gray-200 p-8 sm:p-10 flex flex-col justify-center text-ink/70 text-[15px] sm:text-[17px] leading-relaxed h-full shadow-sm">
            <p className="mb-6">
              <strong className="text-ink font-bold">Eligibility Note:</strong> Candidate must have passed Senior Secondary (10+2) or equivalent with Physics, Chemistry & Biology (or Botany & Zoology) with 50% aggregate with Practical. However, in respect of the candidates belonging to Scheduled Castes, Schedule Tribes, PwBD/PwD or Other Backward Classes (NCL), the minimum marks obtained in Physics, Chemistry and Biology taken together in the qualifying examination shall be 40% marks instead of 50% marks for Unreserved and general - EWS Candidates. English Subject remains essential and to be passed too.
            </p>
            <p>
              <strong className="text-ink font-bold">Admission Note:</strong> Admission will be granted based on the entrance examination conducted by the University.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
