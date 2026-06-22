"use client";

import React, { useState } from "react";
import ProgrammeCard from "./ProgrammeCard";

export default function PhdProgrammePicker() {
  const [activeLevel, setActiveLevel] = useState<string>("Ph. D.");

  const [showAll, setShowAll] = useState(false);

  const commonEligibility = "Candidates must have completed a 1-year/2-semester Master's degree after a 4-year Bachelor's degree, or a 2-year Master's degree after a 3-year Bachelor's degree, with at least 55% aggregate marks or equivalent grade. Alternatively, candidates with a 4-year Bachelor's degree must have a minimum of 75% marks in aggregate. Candidates who have cleared the M.Phil. programme with at least 55% marks are also eligible.";

  const phdProgrammes = [
    { title: "Doctor of Philosophy -\nBiotechnology", duration: "3 Years", eligibility: "Master's Degree with 55% aggregate", modalEligibility: commonEligibility, tuitionFee: "₹1,25,000", intake: "As per norms", mode: "Full-time / Part-time" },
    { title: "Doctor of Philosophy -\nMicrobiology", duration: "3 Years", eligibility: "Master's Degree with 55% aggregate", modalEligibility: commonEligibility, tuitionFee: "₹1,25,000", intake: "As per norms", mode: "Full-time / Part-time" },
    { title: "Doctor of Philosophy -\nInformation Technology", duration: "3 Years", eligibility: "Master's Degree with 55% aggregate", modalEligibility: commonEligibility, tuitionFee: "₹1,25,000", intake: "As per norms", mode: "Full-time / Part-time" },
    { title: "Doctor of Philosophy -\nInformation Technology & Computer Science", duration: "3 Years", eligibility: "Master's Degree with 55% aggregate", modalEligibility: commonEligibility, tuitionFee: "₹1,25,000", intake: "As per norms", mode: "Full-time / Part-time" },
    { title: "Doctor of Philosophy -\nComputer Science & Engineering", duration: "3 Years", eligibility: "Master's Degree with 55% aggregate", modalEligibility: commonEligibility, tuitionFee: "₹1,25,000", intake: "As per norms", mode: "Full-time / Part-time" },
    { title: "Doctor of Philosophy -\nFinance", duration: "3 Years", eligibility: "Master's Degree with 55% aggregate", modalEligibility: commonEligibility, tuitionFee: "₹1,25,000", intake: "As per norms", mode: "Full-time / Part-time" },
    { title: "Doctor of Philosophy -\nHuman Resource", duration: "3 Years", eligibility: "Master's Degree with 55% aggregate", modalEligibility: commonEligibility, tuitionFee: "₹1,25,000", intake: "As per norms", mode: "Full-time / Part-time" },
    { title: "Doctor of Philosophy -\nPharmaceutical Chemistry", duration: "3 Years", eligibility: "Master's Degree with 55% aggregate", modalEligibility: commonEligibility, tuitionFee: "₹1,25,000", intake: "As per norms", mode: "Full-time / Part-time" },
    { title: "Doctor of Philosophy -\nPharmaceutics", duration: "3 Years", eligibility: "Master's Degree with 55% aggregate", modalEligibility: commonEligibility, tuitionFee: "₹1,25,000", intake: "As per norms", mode: "Full-time / Part-time" },
    { title: "Doctor of Philosophy -\nPharmaceutical Technology", duration: "3 Years", eligibility: "Master's Degree with 55% aggregate", modalEligibility: commonEligibility, tuitionFee: "₹1,25,000", intake: "As per norms", mode: "Full-time / Part-time" },
    { title: "Doctor of Philosophy -\nPharmaceutical Quality Assurance", duration: "3 Years", eligibility: "Master's Degree with 55% aggregate", modalEligibility: commonEligibility, tuitionFee: "₹1,25,000", intake: "As per norms", mode: "Full-time / Part-time" },
    { title: "Doctor of Philosophy -\nPharmacology", duration: "3 Years", eligibility: "Master's Degree with 55% aggregate", modalEligibility: commonEligibility, tuitionFee: "₹1,25,000", intake: "As per norms", mode: "Full-time / Part-time" },
    { title: "Doctor of Philosophy -\nPharmacognosy", duration: "3 Years", eligibility: "Master's Degree with 55% aggregate", modalEligibility: commonEligibility, tuitionFee: "₹1,25,000", intake: "As per norms", mode: "Full-time / Part-time" },
    { title: "Doctor of Philosophy -\nNursing", duration: "3 Years", eligibility: "Master's Degree with 55% aggregate", modalEligibility: commonEligibility, tuitionFee: "₹1,25,000", intake: "As per norms", mode: "Full-time / Part-time" },
  ];

  const displayedProgrammes = showAll ? phdProgrammes : phdProgrammes.slice(0, 6);

  return (
    <section className="w-full bg-[#FAFAFA] py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-ink mb-2 section-subheading">
            Doctorate
          </h2>
          <h3 className="text-[#E73649] mb-6 section-heading">
            Pick your Ph.D Programme.
          </h3>
          
          {/* Toggles */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {["Ph. D."].map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
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
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 w-full mx-auto items-stretch transition-all duration-500">
          {displayedProgrammes.map((prog, idx) => (
            <ProgrammeCard
              key={idx}
              title={prog.title}
              duration={prog.duration}
              eligibility={prog.eligibility}
              intake={prog.intake}
              mode={prog.mode}
              tuitionFee={prog.tuitionFee}
              level="Master's"
              isViewDetails={true}
              modalEligibility={prog.modalEligibility}
              enquiryValue="phd"
              note="A relaxation of 5% of marks, from 55% to 50%, or an equivalent relaxation of grade, may be allowed for those belonging to SC/ST/OBC (non-creamy layer)/ differently-abled, economically weaker section (EWS) and other categories of candidates as per the decision of the Commission from time to time."
            />
          ))}
        </div>

        {!showAll && phdProgrammes.length > 6 && (
          <div className="text-center mt-8">
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
