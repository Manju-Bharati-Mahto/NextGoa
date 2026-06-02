"use client";

import React, { useState } from "react";
import Image from "next/image";

const programmes = [
  {
    id: 1,
    category: "Engineering & CS",
    description: "The finest technical exposure in the field of technology.",
    count: 8,
    image: "/programmes/ARVR Innovation Lab.png",
  },
  {
    id: 2,
    category: "Management Studies",
    description: "Where tomorrow's industry leaders are shaped.",
    count: 2,
    image: "/programmes/Interactive Classroom Session.png",
  },
  {
    id: 3,
    category: "Pharmacy",
    description: "From molecule to medicine — pharmacy that transforms lives.",
    count: 2,
    image: "/programmes/Pharmaceutical Lab Practice.png",
  },
  {
    id: 4,
    category: "Nursing",
    description: "Where dedication becomes healing.",
    count: 8,
    image: "/programmes/Clinical Simulation Learning.png",
  },
  {
    id: 5,
    category: "Physiotherapy",
    description: "Where movement meets recovery.",
    count: 1,
    image: "/programmes/Physiotherapy Training.png",
  },
  {
    id: 6,
    category: "Allied and Health Sciences",
    description: "Where science serves humanity.",
    count: 6,
    image: "/programmes/Advanced Science Research.png",
  },
  {
    id: 7,
    category: "Hotel Management",
    description: "Where dedication becomes healing.",
    count: 6,
    image: "/programmes/Digital Classroom Excellence.png",
  },
  {
    id: 8,
    category: "PhD",
    description: "For those who push the boundaries of what is known.",
    count: 5,
    image: "/programmes/Library Learning Experience.png",
  },
];

const filterOptions = {
  Level: ["All", "Diploma", "Bachelor's", "Master's", "Doctral"],
  Field: [
    "All",
    "Engineering",
    "Management",
    "Pharmacy",
    "Nursing",
    "Physiotherapy",
    "Allied Health",
    "Hotel Management",
    "Research",
  ],
  Mode: ["All", "Full-Time", "Lateral entry"],
  "Entrance Test": [
    "All",
    "JEE- main",
    "CAT",
    "MAT",
    "CMAT",
    "GPAT",
    "GATE",
    "UCG net",
    "PU Goa Enterance",
  ],
};

export default function ProgramFilter() {
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({
    Level: "All",
    Field: "Management",
    Mode: "All",
    "Entrance Test": "All",
  });

  const handleFilterChange = (category: string, value: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  return (
    <section className="py-20 bg-[#F9F9F9] font-[family-name:var(--font-poppins)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-ink font-poppins">
            Find your programme
          </h2>
          <h3 className="text-4xl sm:text-[2.75rem] font-semibold text-[#ED383F] mb-4 tracking-tight leading-tight font-poppins">
            Build your shortlist in seconds.
          </h3>
          <p className="text-sm sm:text-[15px] text-ink/80 max-w-lg mx-auto leading-relaxed">
            Pick a level, a field, or the entrance test you&apos;ve taken,
            <br className="hidden sm:block" /> results update instantly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center max-w-6xl mx-auto">
          {/* Sidebar */}
          <div className="w-full lg:w-[320px] shrink-0 space-y-6 lg:sticky lg:top-24">
            {/* Summary Card */}
            <div className="bg-[#0EB1E1] text-white rounded-[24px] p-8 text-center shadow-md">
              <h4 className="text-[26px] sm:text-3xl font-semibold mb-6 leading-[1.2] font-poppins">
                8 faculties<br />28 programmes<br />match
              </h4>
              <button className="bg-sunshine text-ink text-[15px] font-bold py-3.5 px-6 rounded-full w-full hover:bg-yellow-400 transition-colors shadow-sm">
                Help me choose
              </button>
            </div>

            {/* Filter Panel */}
            <div className="bg-[#F5F5F5] rounded-[24px] p-8 border-[1.7px] border-gray-300">
              <div className="flex items-center gap-3 mb-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ED383F]">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
                <h3 className="text-2xl font-semibold text-ink font-poppins">Filters</h3>
              </div>

              <div className="space-y-12">
                {Object.entries(filterOptions).map(([category, options]) => (
                  <div key={category}>
                    <h4 className="text-xl sm:text-[22px] font-semibold text-ink mb-5 border-b-[1.7px] border-gray-200 pb-4 font-poppins">{category}</h4>
                    <div className="space-y-4">
                      {options.map((option) => (
                        <label key={option} className="flex items-center gap-4 cursor-pointer group">
                          <div className="relative flex items-center justify-center w-[20px] h-[20px]">
                            <input
                              type="radio"
                              name={category}
                              value={option}
                              checked={activeFilters[category] === option}
                              onChange={() => handleFilterChange(category, option)}
                              className="peer appearance-none w-[20px] h-[20px] rounded-full border border-gray-300 bg-white checked:border-[#ED383F] checked:bg-white transition-all cursor-pointer"
                            />
                            {/* Inner dot for checked state */}
                            <div className="absolute w-2.5 h-2.5 rounded-full bg-[#ED383F] opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                          </div>
                          <span className={`text-[16px] ${activeFilters[category] === option ? 'text-ink font-medium' : 'text-ink/70'} group-hover:text-ink transition-colors`}>
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {programmes.map((prog) => (
              <div key={prog.id} className="bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-3 border-gray-200 flex flex-col group hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all">
                <div className="relative h-[260px] w-full overflow-hidden">
                  <Image
                    src={prog.image}
                    alt={prog.category}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col items-start bg-white z-10 relative">
                  <div className="bg-[#ED383F] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                    {prog.count} PROGRAMMES
                  </div>
                  <h4 className="text-xl sm:text-[22px] font-semibold text-ink mb-2 font-poppins">
                    {prog.category}
                  </h4>
                  <p className="text-[14px] text-ink/70 leading-relaxed font-medium">
                    {prog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
