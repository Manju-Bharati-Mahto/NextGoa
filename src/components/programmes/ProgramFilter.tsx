"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

const allCourses = [
  {
    id: 1,
    title: "B.Tech Computer Science & Engineering",
    description: "Specializations in AI, Machine Learning, Cyber Security.",
    level: "Bachelor's",
    field: "Engineering",
    mode: "Full-Time",
    entranceTest: "JEE- main",
    image: "/programmes/ARVR Innovation Lab.png",
    href: "/programmes/engineering",
  },
  {
    id: 2,
    title: "MBA",
    description: "Master of Business Administration with global specializations.",
    level: "Master's",
    field: "Management",
    mode: "Full-Time",
    entranceTest: "CAT",
    image: "/programmes/Interactive Classroom Session.png",
    href: "/programmes/management-studies",
  },
  {
    id: 3,
    title: "B.Sc Nursing",
    description: "Professional nursing program with clinical practice.",
    level: "Bachelor's",
    field: "Nursing",
    mode: "Full-Time",
    entranceTest: "PU Goa Enterance",
    image: "/programmes/Clinical Simulation Learning.png",
    href: "/programmes/nursing",
  },
  {
    id: 4,
    title: "B.Pharm",
    description: "Bachelor of Pharmacy.",
    level: "Bachelor's",
    field: "Pharmacy",
    mode: "Full-Time",
    entranceTest: "PU Goa Enterance",
    image: "/programmes/Pharmaceutical Lab Practice.png",
    href: "/programmes/pharmacy",
  },
  {
    id: 5,
    title: "Ph.D in Engineering",
    description: "Doctoral research program.",
    level: "Doctral",
    field: "Engineering",
    mode: "Full-Time",
    entranceTest: "GATE",
    image: "/programmes/Library Learning Experience.png",
    href: "/programmes/phd",
  },
  {
    id: 6,
    title: "BHMCT",
    description: "Bachelor of Hotel Management and Catering Technology.",
    level: "Bachelor's",
    field: "Hotel Management",
    mode: "Full-Time",
    entranceTest: "PU Goa Enterance",
    image: "/programmes/Digital Classroom Excellence.png",
    href: "/programmes/hotel-management",
  },
  {
    id: 7,
    title: "Bachelor of Physiotherapy (BPT)",
    description: "Comprehensive physiotherapy program.",
    level: "Bachelor's",
    field: "Physiotherapy",
    mode: "Full-Time",
    entranceTest: "PU Goa Enterance",
    image: "/programmes/Physiotherapy Training.png",
    href: "/programmes/physiotherapy",
  },
  {
    id: 8,
    title: "B.Sc Allied Health Sciences",
    description: "Specializations in Medical Lab Technology, Radiology, etc.",
    level: "Bachelor's",
    field: "Allied Health",
    mode: "Full-Time",
    entranceTest: "PU Goa Enterance",
    image: "/programmes/Advanced Science Research.png",
    href: "/programmes/allied-and-health-sciences",
  },
  {
    id: 9,
    title: "Diploma in Pharmacy",
    description: "D.Pharm program.",
    level: "Diploma",
    field: "Pharmacy",
    mode: "Full-Time",
    entranceTest: "PU Goa Enterance",
    image: "/programmes/Pharmaceutical Lab Practice.png",
    href: "/programmes/pharmacy",
  },
  {
    id: 10,
    title: "Ph.D in Management",
    description: "Doctoral research program in business and management.",
    level: "Doctral",
    field: "Management",
    mode: "Full-Time",
    entranceTest: "UCG net",
    image: "/programmes/Library Learning Experience.png",
    href: "/programmes/phd",
  },
  {
    id: 11,
    title: "BBA",
    description: "Bachelor of Business Administration.",
    level: "Bachelor's",
    field: "Management",
    mode: "Full-Time",
    entranceTest: "PU Goa Enterance",
    image: "/programmes/Interactive Classroom Session.png",
    href: "/programmes/management-studies",
  },
  {
    id: 12,
    title: "B.Tech (Lateral Entry)",
    description: "Direct second-year admission for diploma holders.",
    level: "Bachelor's",
    field: "Engineering",
    mode: "Lateral entry",
    entranceTest: "PU Goa Enterance",
    image: "/programmes/ARVR Innovation Lab.png",
    href: "/programmes/engineering",
  },
  {
    id: 13,
    title: "Diploma in Engineering",
    description: "3-year polytechnic diploma program.",
    level: "Diploma",
    field: "Engineering",
    mode: "Full-Time",
    entranceTest: "PU Goa Enterance",
    image: "/programmes/ARVR Innovation Lab.png",
    href: "/programmes/engineering",
  },
  {
    id: 14,
    title: "M.Tech",
    description: "Master of Technology with advanced specializations.",
    level: "Master's",
    field: "Engineering",
    mode: "Full-Time",
    entranceTest: "GATE",
    image: "/programmes/ARVR Innovation Lab.png",
    href: "/programmes/engineering",
  },
  {
    id: 15,
    title: "GNM (General Nursing and Midwifery)",
    description: "Diploma in nursing.",
    level: "Diploma",
    field: "Nursing",
    mode: "Full-Time",
    entranceTest: "PU Goa Enterance",
    image: "/programmes/Clinical Simulation Learning.png",
    href: "/programmes/nursing",
  },
  {
    id: 16,
    title: "M.Sc Nursing",
    description: "Postgraduate nursing program.",
    level: "Master's",
    field: "Nursing",
    mode: "Full-Time",
    entranceTest: "PU Goa Enterance",
    image: "/programmes/Clinical Simulation Learning.png",
    href: "/programmes/nursing",
  },
  {
    id: 17,
    title: "M.Pharm",
    description: "Master of Pharmacy.",
    level: "Master's",
    field: "Pharmacy",
    mode: "Full-Time",
    entranceTest: "GPAT",
    image: "/programmes/Pharmaceutical Lab Practice.png",
    href: "/programmes/pharmacy",
  },
  {
    id: 18,
    title: "Master of Physiotherapy (MPT)",
    description: "Advanced physiotherapy program.",
    level: "Master's",
    field: "Physiotherapy",
    mode: "Full-Time",
    entranceTest: "PU Goa Enterance",
    image: "/programmes/Physiotherapy Training.png",
    href: "/programmes/physiotherapy",
  },
  {
    id: 19,
    title: "M.Sc Allied Health Sciences",
    description: "Postgraduate studies in allied health.",
    level: "Master's",
    field: "Allied Health",
    mode: "Full-Time",
    entranceTest: "PU Goa Enterance",
    image: "/programmes/Advanced Science Research.png",
    href: "/programmes/allied-and-health-sciences",
  },
  {
    id: 20,
    title: "Diploma in Hotel Management",
    description: "Diploma program for hospitality.",
    level: "Diploma",
    field: "Hotel Management",
    mode: "Full-Time",
    entranceTest: "PU Goa Enterance",
    image: "/programmes/Digital Classroom Excellence.png",
    href: "/programmes/hotel-management",
  }
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
    Field: "All",
    Mode: "All",
    "Entrance Test": "All",
  });

  const handleFilterChange = (category: string, value: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const filteredCourses = useMemo(() => {
    return allCourses.filter(course => {
      if (activeFilters.Level !== "All" && course.level !== activeFilters.Level) return false;
      if (activeFilters.Field !== "All" && course.field !== activeFilters.Field) return false;
      if (activeFilters.Mode !== "All" && course.mode !== activeFilters.Mode) return false;
      if (activeFilters["Entrance Test"] !== "All" && course.entranceTest !== activeFilters["Entrance Test"]) return false;
      return true;
    });
  }, [activeFilters]);

  return (
    <section id="program-filter" className="py-20 bg-[#F9F9F9] font-[family-name:var(--font-poppins)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-ink mb-2 section-subheading">
            Find Your Program
          </h2>
          <h3 className="text-[#ED383F] mb-4 section-heading">
            Build your shortlist in seconds.
          </h3>
          <p className="text-ink/80 max-w-lg mx-auto leading-relaxed section-body">
            Pick a level, a field, or the entrance test you've taken,
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
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ED383F]">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                  </svg>
                  <h3 className="text-2xl font-semibold text-ink font-poppins">Filters</h3>
                </div>
                <button
                  onClick={() => setActiveFilters({ Level: "All", Field: "All", Mode: "All", "Entrance Test": "All" })}
                  className="text-sm font-semibold text-ink/60 hover:text-[#ED383F] transition-colors underline underline-offset-4"
                >
                  Reset
                </button>
              </div>

              <div className="space-y-12 max-h-[350px] overflow-y-auto sm:max-h-none sm:overflow-visible pr-2">
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
          <div className="flex-1 w-full">
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {filteredCourses.map((prog) => {
                  return (
                    <div key={prog.id} className="bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-3 border-gray-200 flex flex-col group hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all h-full">
                      <div className="relative h-[220px] w-full overflow-hidden">
                        <Image
                          src={prog.image}
                          alt={prog.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col items-start bg-white z-10 relative">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-[#ED383F] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                            {prog.level}
                          </span>
                          <span className="bg-[#0EB1E1] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                            {prog.field}
                          </span>
                        </div>
                        <h4 className="text-[20px] font-semibold text-ink mb-2 font-poppins leading-snug">
                          {prog.title}
                        </h4>
                        <p className="text-[14px] text-ink/70 leading-relaxed font-medium mb-6 flex-1">
                          {prog.description}
                        </p>
                        <Link href={prog.href} className="inline-flex items-center text-[#ED383F] font-bold text-sm hover:text-[#c72d33] transition-colors mt-auto">
                          View details <span className="ml-1">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white rounded-[24px] p-12 text-center border-[1.7px] border-gray-200 flex flex-col items-center justify-center min-h-[400px]">
                <h4 className="text-2xl font-semibold text-ink mb-2">No programmes found</h4>
                <p className="text-ink/70">Try adjusting your filters to see more results.</p>
                <button 
                  onClick={() => setActiveFilters({ Level: "All", Field: "All", Mode: "All", "Entrance Test": "All" })}
                  className="mt-6 bg-[#0EB1E1] text-white font-medium px-6 py-2.5 rounded-full hover:bg-[#0BA1CD] transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
