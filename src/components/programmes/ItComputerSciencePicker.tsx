"use client";

import React, { useState } from "react";

type Programme = {
  title: string;
  duration: string;
  eligibility: string;
  intake: string;
  mode: string;
  isNew?: boolean;
};

export default function ItComputerSciencePicker() {
  const [activeLevel, setActiveLevel] = useState<string>("Bachelor's");
  const [showAll, setShowAll] = useState<boolean>(false);

  const bcaEligibility = "Passed 12th in any stream (Science/Commerce/Arts) with English and Maths or Statistics. If not in 12th, checked in 10th.";
  const mcaEligibility = "Passed Graduation with minimum 50% for Open Category and 45% for Reserved Category from a recognized university.";

  const specialisationsList = [
    "Artificial Intelligence",
    "Cyber Security",
    "Artificial Intelligence and Data Science",
    "Artificial Intelligence and Machine Learning",
    "Quantum Computing in Artificial Intelligence"
  ];

  const bcaProgrammes: Programme[] = [
    {
      title: "Bachelor of Computer Application (BCA)\nGeneral",
      duration: "3 Years",
      eligibility: bcaEligibility,
      intake: "120",
      mode: "Full-time"
    },
    ...specialisationsList.map(spec => ({
      title: `Bachelor of Computer Application (BCA)\nwith ${spec}`,
      isNew: true,
      duration: "3 Years",
      eligibility: bcaEligibility,
      intake: "120",
      mode: "Full-time"
    })),
    {
      title: "Bachelor of Computer Application - Honors (BCA Hons.)\nGeneral (NEP 2020)",
      duration: "4 Years",
      eligibility: bcaEligibility,
      intake: "120",
      mode: "Full-time"
    },
    ...specialisationsList.map(spec => ({
      title: `Bachelor of Computer Application - Honors (BCA Hons.)\nwith ${spec} (NEP 2020)`,
      isNew: true,
      duration: "4 Years",
      eligibility: bcaEligibility,
      intake: "120",
      mode: "Full-time"
    }))
  ];

  const mcaProgrammes: Programme[] = [
    {
      title: "Master of Computer Application (MCA)\nGeneral",
      duration: "2 Years",
      eligibility: mcaEligibility,
      intake: "60",
      mode: "Full-time"
    },
    ...specialisationsList.map(spec => ({
      title: `Master of Computer Application (MCA)\nwith ${spec}`,
      isNew: true,
      duration: "2 Years",
      eligibility: mcaEligibility,
      intake: "60",
      mode: "Full-time"
    }))
  ];

  const programmeData: Record<string, Programme[]> = {
    "Bachelor's": bcaProgrammes,
    "Master's": mcaProgrammes
  };

  const currentProgrammes = programmeData[activeLevel] || [];
  const visibleProgrammes = showAll ? currentProgrammes : currentProgrammes.slice(0, 2);

  return (
    <section className="w-full bg-[#FAFAFA] py-24 sm:py-32 border-t border-gray-150">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-ink font-semibold text-[20px] sm:text-[24px] tracking-wide mb-2">
            IT &amp; Computer Science
          </h2>
          <h3 className="font-poppins font-bold text-[36px] sm:text-[48px] leading-[1.1] tracking-tight text-[#0CAADD] mb-10">
            Faculty of IT &amp; Computer Science
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
                className="w-full md:w-[calc(50%-1.25rem)] rounded-[24px] overflow-hidden flex flex-col bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-shadow hover:shadow-lg"
              >
                {/* Top Section */}
                <div className={`p-6 sm:p-8 ${isYellow ? "bg-[#FCE34B] text-ink" : "bg-[#0CAADD] text-white"}`}>
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1.5 text-[11px] font-bold uppercase rounded-full tracking-[0.15em] ${isYellow ? "bg-[#0CAADD] text-white" : "bg-[#FCE34B] text-ink"}`}>
                      {prog.isNew ? "Specialised Track" : "Core Programme"}
                    </span>
                  </div>
                  <h4 className="font-poppins font-bold text-[20px] sm:text-[24px] leading-snug whitespace-pre-line">
                    {prog.title}
                  </h4>
                </div>

                {/* Bottom Section */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow text-ink">
                  <div className="grid grid-cols-2 gap-y-5 mb-6">
                    <div>
                      <p className="text-[14px] uppercase tracking-wider mb-1 opacity-50 font-bold">Duration</p>
                      <p className="font-bold text-[17px]">{prog.duration}</p>
                    </div>
                    <div>
                      <p className="text-[14px] uppercase tracking-wider mb-1 opacity-50 font-bold">Eligibility</p>
                      <p className="font-bold text-[17px] leading-snug max-w-[250px] whitespace-pre-wrap">{prog.eligibility}</p>
                    </div>
                    <div>
                      <p className="text-[14px] uppercase tracking-wider mb-1 opacity-50 font-bold">Intake</p>
                      <p className="font-bold text-[17px]">{prog.intake}</p>
                    </div>
                    <div>
                      <p className="text-[14px] uppercase tracking-wider mb-1 opacity-50 font-bold">Mode</p>
                      <p className="font-bold text-[17px]">{prog.mode}</p>
                    </div>
                  </div>

                  <div className="flex-grow"></div>

                  <div className="flex flex-wrap items-center gap-4 mt-auto">
                    <button className="bg-[#E73649] text-white rounded-full px-7 py-2.5 font-bold text-[15px] transition-transform hover:scale-105">
                      View Details &rarr;
                    </button>
                    <button className="border border-gray-300 hover:bg-gray-50 rounded-full px-7 py-2.5 font-bold text-[15px] transition-transform hover:scale-105">
                      Brochure
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All / View Less Button */}
        {currentProgrammes.length > 2 && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="font-bold text-[#E73649] hover:underline text-[15px] cursor-pointer"
            >
              {showAll ? "View less \u2190" : "View all \u2192"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
