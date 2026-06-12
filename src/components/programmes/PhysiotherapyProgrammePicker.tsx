"use client";

import React, { useState } from "react";
import ProgrammeCard from "./ProgrammeCard";

export default function PhysiotherapyProgrammePicker() {
  const [activeLevel, setActiveLevel] = useState<string>("All Programs");
  const [showAll, setShowAll] = useState<boolean>(false);

  const physiotherapyProgrammes = [
    { 
      title: "Bachelor of\nPhysiotherapy (BPT)", 
      duration: "5 Years", 
      eligibility: "10+2 with PCB (50% aggregate).", 
      intake: "100", 
      mode: "Full-time",
      tuitionFee: "₹1,45,000"
    }
  ];

  const currentProgrammes = showAll ? physiotherapyProgrammes : physiotherapyProgrammes.slice(0, 3);

  return (
    <section className="w-full bg-[#FAFAFA] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-ink mb-2 section-subheading">
            Programme Picker
          </h2>
          <h3 className="text-[#0CAADD] mb-10 section-heading">
            Pick your degree level.
          </h3>
          
          {/* Toggles */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {["All Programs"].map((level) => (
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
          {currentProgrammes.map((prog, idx) => (
            <ProgrammeCard
              key={idx}
              title={prog.title}
              duration={prog.duration}
              eligibility={prog.eligibility}
              tuitionFee={prog.tuitionFee}
              intake={prog.intake}
              mode={prog.mode}
            />
          ))}

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
