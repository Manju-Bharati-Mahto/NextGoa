"use client";

import React, { useState } from "react";

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
    { title: "B.Tech. Artificial Intelligence & Data Science", duration: "4 yrs", eligibility: "10+2 PCM", intake: "120", mode: "Full-time", specialisations: ["MACHINE LEARNING", "BIG DATA"] },
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

  const btechEligibility = "10+2 Science (Physics & Maths compulsory) with Chem/CS/IT + 45% (40% Reserved).";

  const programmeData: Record<string, any[]> = {
    "Diploma": [
      { 
        title: "Diploma in Engineering (D.E.)\nComputer Engineering", 
        duration: "3 Years", 
        eligibility: "10th Pass with English, Maths, and Science from a recognized board.", 
        intake: "120", 
        mode: "Full-time", 
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
        specialisations: [] 
      },
      ...[
        "Artificial Intelligence and Machine Learning",
        "Artificial Intelligence and Data Science",
        "Artificial Intelligence",
        "Cyber Security",
        "Quantum Computing in AI"
      ].map(spec => ({
        title: `B.Tech. Computer Science and Engineering\nwith ${spec}`,
        isNew: true,
        duration: "4 Years",
        eligibility: btechEligibility,
        intake: "120",
        mode: "Full-time",
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
        specialisations: [] 
      }
    ]
  };

  const currentProgrammes = programmeData[activeLevel] || [];
  const visibleProgrammes = showAll ? currentProgrammes : currentProgrammes.slice(0, 2);

  return (
    <section className="w-full bg-[#FAFAFA] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-ink mb-2 section-subheading">
            Programme picker
          </h2>
          <h3 className="text-[#E73649] mb-10 section-heading">
            Pick your degree level.
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
                <div className={`p-6 sm:p-8 ${isYellow ? "bg-[#FCE34B] text-ink" : "bg-[#E73649] text-white"}`}>
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1.5 text-[11px] font-bold uppercase rounded-full tracking-[0.15em] ${isYellow ? "bg-[#E73649] text-white" : "bg-[#FCE34B] text-ink"}`}>
                      New and In-Demand
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
