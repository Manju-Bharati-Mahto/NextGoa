"use client";

import React, { useState } from "react";
import ProgrammeCard from "./ProgrammeCard";

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
  const visibleProgrammes = showAll ? currentProgrammes : currentProgrammes.slice(0, 3);

  return (
    <section className="w-full bg-[#FAFAFA] py-24 sm:py-32 border-t border-gray-150">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-ink mb-2 section-subheading">
            IT &amp; Computer Science
          </h2>
          <h3 className="text-[#0CAADD] mb-10 section-heading">
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
          {visibleProgrammes.map((prog, idx) => (
            <ProgrammeCard
              key={idx}
              title={prog.title}
              duration={prog.duration}
              eligibility={prog.eligibility}
              intake={prog.intake}
              mode={prog.mode}
            />
          ))}
        </div>

        {/* View All / View Less Button */}
        {currentProgrammes.length > 3 && (
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
