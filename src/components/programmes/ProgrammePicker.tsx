"use client";

import React, { useState, useEffect } from "react";
import ProgrammeCard from "./ProgrammeCard";

type Programme = {
  title: string;
  duration: string;
  eligibility: string;
  intake: string;
  mode: string;
  specialisations: string[];
};

const programmeData: Record<string, Programme[]> = {
  Diploma: [
    { title: "Diploma in Computer Engineering", duration: "3 yrs", eligibility: "10th Pass", intake: "120", mode: "Full-time", specialisations: ["SOFTWARE", "NETWORKING"] },
    { title: "Diploma in Mechanical Engineering", duration: "3 yrs", eligibility: "10th Pass", intake: "120", mode: "Full-time", specialisations: ["CAD", "MANUFACTURING"] },
    { title: "Diploma in Civil Engineering", duration: "3 yrs", eligibility: "10th Pass", intake: "120", mode: "Full-time", specialisations: ["CONSTRUCTION", "DESIGN"] },
    { title: "Diploma in Electrical Engineering", duration: "3 yrs", eligibility: "10th Pass", intake: "120", mode: "Full-time", specialisations: ["POWER", "ELECTRONICS"] },
  ],
  "Bachelor's": [
    { title: "B.Tech. Computer Science & Engineering", duration: "4 yrs", eligibility: "10+2 PCM", intake: "120", mode: "Full-time", specialisations: ["AI", "CYBER SECURITY", "AI & DS", "AI & ML", "QUANTUM"] },
    { title: "B.Tech. AI & Data Science", duration: "4 yrs", eligibility: "10+2 PCM", intake: "120", mode: "Full-time", specialisations: ["MACHINE LEARNING", "BIG DATA"] },
    { title: "B.Tech. Information Technology", duration: "4 yrs", eligibility: "10+2 PCM", intake: "120", mode: "Full-time", specialisations: ["CLOUD", "NETWORKING"] },
    { title: "B.Tech. Aerospace Engineering", duration: "4 yrs", eligibility: "10+2 PCM", intake: "120", mode: "Full-time", specialisations: ["AERODYNAMICS", "SPACE"] },
  ],
  "Master's": [
    { title: "M.Tech. Computer Engineering", duration: "2 yrs", eligibility: "B.E./B.Tech 50%", intake: "60", mode: "Full-time", specialisations: ["AI", "SOFTWARE ENG"] },
    { title: "M.Tech. Structural Engineering", duration: "2 yrs", eligibility: "B.E./B.Tech 50%", intake: "60", mode: "Full-time", specialisations: ["DESIGN", "CONSTRUCTION"] },
    { title: "M.Tech. Automation and Robotics", duration: "2 yrs", eligibility: "B.E./B.Tech 50%", intake: "60", mode: "Full-time", specialisations: ["MECHATRONICS", "CONTROL"] },
    { title: "M.Tech. Thermal Engineering", duration: "2 yrs", eligibility: "B.E./B.Tech 50%", intake: "60", mode: "Full-time", specialisations: ["ENERGY", "FLUID"] },
  ]
};

export default function ProgrammePicker() {
  const [activeLevel, setActiveLevel] = useState<string>("Bachelor's");
  const [showAll, setShowAll] = useState<boolean>(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let levelParam = urlParams.get('level');
    if (levelParam === 'Bachelors') levelParam = "Bachelor's";
    if (levelParam === 'Masters') levelParam = "Master's";
    if (levelParam) {
      setActiveLevel(levelParam);
    }
  }, []);

  const btechEligibility = "10+2 Science (Physics & Maths compulsory) with Chem/CS/IT + 45% (40% Reserved).";

  const programmeData: Record<string, any[]> = {
    "Diploma": [
      { 
        title: "Diploma in Engineering (D.E.)\nComputer Engineering", 
        duration: "3 Years", 
        eligibility: "10th Pass with English, Maths, and Science from a recognized board.", 
        intake: "120", 
        mode: "Full-time", 
        tuitionFee: "₹65,000",
        specialisations: [] 
      }
    ],
    "Bachelor's": [
      { 
        title: "B.Tech.\nComputer Science and Engineering", 
        duration: "4 Years", 
        eligibility: btechEligibility, 
        intake: "120", 
        mode: "Full-time", 
        tuitionFee: "₹1,45,000",
        specialisations: [] 
      },
      ...[
        "AI and Machine Learning",
        "AI and Data Science",
        "AI",
        "Cyber Security",
        "Quantum Computing in AI"
      ].map(spec => ({
        title: `B.Tech. Computer Science and Engineering\nwith ${spec}`,
        isNew: true,
        duration: "4 Years",
        eligibility: btechEligibility,
        intake: "120",
        mode: "Full-time",
        tuitionFee: "₹1,45,000",
        specialisations: []
      }))
    ],
    "Lateral Entry": [
      { 
        title: "B.Tech. - Lateral Entry\nComputer Science and Engineering", 
        duration: "3 Years", 
        eligibility: "Diploma Engineering with 45% (40% Reserved). Direct admission to 2nd year B.Tech.", 
        intake: "120", 
        mode: "Full-time", 
        tuitionFee: "₹1,45,000",
        specialisations: [] 
      }
    ]
  };

  const currentProgrammes = programmeData[activeLevel] || [];
  const visibleProgrammes = showAll ? currentProgrammes : currentProgrammes.slice(0, 3);

  return (
    <section className="w-full bg-[#FAFAFA] sm: py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-ink mb-2 section-subheading">
            Engineering &amp; Technology
          </h2>
          <h3 className="text-[#E73649] mb-10 section-heading">
            Pick your Engineering Programme.
          </h3>
          
          {/* Toggles */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {["Diploma", "Bachelor's", "Lateral Entry"].map((level) => (
              <button
                key={level}
                onClick={() => {
                  setActiveLevel(level);
                  setShowAll(false);
                }}
                className={`rounded-full px-8 sm:px-10 py-3.5 sm:py-4 font-bold text-[16px] sm:text-[18px] transition-all duration-200 border ${
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
              isNew={prog.isNew}
            />
          ))}
        </div>

        {!showAll && currentProgrammes.length > 3 && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAll(true)}
              className="border-2 border-[#E73649] text-[#E73649] hover:bg-[#E73649] hover:text-white rounded-full px-12 py-3 font-bold text-[17px] transition-all inline-flex items-center justify-center gap-2"
            >
              View all &rarr;
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
