"use client";

import React, { useState } from "react";
import ProgrammeCard from "./ProgrammeCard";

export default function AppliedSciencesProgrammePicker() {
  const [activeLevel, setActiveLevel] = useState<string>("Bachelor's");
  const [showAll, setShowAll] = useState<boolean>(false);

  const programmes: Record<string, any[]> = {
    "Bachelor's": [
      ...["Biotechnology", "Microbiology"].map(spec => ({
        title: `Bachelor of Science (B.Sc.)\n${spec}`, 
        duration: "3 Years", 
        eligibility: "Candidate shall have passed 12th Examination in Science stream from a recognized board.", 
        intake: "60", 
        mode: "Full-time",
        tuitionFee: "₹85,000",
        specialisations: []
      })),
      ...["Biotechnology", "Microbiology"].map(spec => ({
        title: `Bachelor of Science - Honors (B.Sc. Hons.) (NEP 2020)\n${spec}`, 
        duration: "4 Years", 
        eligibility: "Candidate shall have passed 12th Examination in Science stream from a recognized board.", 
        intake: "60", 
        mode: "Full-time",
        tuitionFee: "₹85,000",
        specialisations: []
      }))
    ],
    "Master's": [
      ...["Biotechnology", "Microbiology"].map(spec => ({
        title: `Master of Science (M.Sc.)\n${spec}`, 
        duration: "2 Years", 
        eligibility: `Candidate shall have passed B.Sc in ${spec}/Life Sciences from a recognized university.`, 
        intake: "30", 
        mode: "Full-time",
        tuitionFee: "₹1,10,000",
        specialisations: []
      }))
    ]
  };

  const currentProgrammes = programmes[activeLevel] || [];
  const visibleProgrammes = showAll ? currentProgrammes : currentProgrammes.slice(0, 3);

  return (
    <section className="w-full bg-[#FAFAFA] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-ink mb-2 section-subheading">
            Programme Picker
          </h2>
          <h3 className="text-[#E73649] mb-10 section-heading">
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
          {visibleProgrammes.map((prog, idx) => (
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
        </div>

        {!showAll && currentProgrammes.length > 3 && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAll(true)}
              className="border-2 border-[#E73649] text-[#E73649] hover:bg-[#E73649] hover:text-white rounded-full px-12 py-3 font-bold text-[17px] transition-all inline-flex items-center justify-center gap-2"
            >
              View all programmes &rarr;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
