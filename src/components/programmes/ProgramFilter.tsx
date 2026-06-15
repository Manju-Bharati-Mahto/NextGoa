"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  EngineeringIcon,
  ManagementIcon,
  PharmacyIcon,
  NursingIcon,
  HotelIcon,
  PhysiotherapyIcon,
  AlliedHealthIcon,
  DoctoralIcon,
  AppliedSciencesIcon
} from "../landing/FacultyIcons";

const allCourses = [
  // DIPLOMA
  { id: 1, title: "Diploma in Engineering", description: "3-year polytechnic diploma program.", level: "Diploma", field: "B.Tech", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/diploma_eng.png", href: "/programs/engineering" },
  { id: 2, title: "General Nursing and Midwifery (G.N.M)", description: "3-year diploma in nursing.", level: "Diploma", field: "B.Sc. Nursing", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/gnm_nursing.png", href: "/programs/nursing" },

  // BACHELOR'S
  { id: 3, title: "B.Tech Computer Science & Engineering", description: "Bachelor of Technology with various specializations.", level: "Bachelor's", field: "B.Tech", mode: "Full-Time", entranceTest: "PUCET", image: "/programmes/cards/btech_cs.png", href: "/programs/engineering" },
  { id: 4, title: "B.Tech - Lateral Entry", description: "Direct second-year admission.", level: "Bachelor's", field: "B.Tech", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/btech_lateral.png", href: "/programs/engineering" },
  { id: 5, title: "Bachelor of Business Administration (BBA)", description: "Undergraduate degree in business administration.", level: "Bachelor's", field: "MBA", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bba_student.png", href: "/programs/management-studies" },
  { id: 6, title: "BBA Honours (NEP 2020)", description: "4-year honors program with specializations.", level: "Bachelor's", field: "MBA", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bba_hons.png", href: "/programs/management-studies" },
  { id: 7, title: "Bachelor of Pharmacy (B.Pharm.)", description: "Undergraduate pharmacy program.", level: "Bachelor's", field: "B.Pharm", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bpharm.png", href: "/programs/pharmacy" },
  { id: 8, title: "B.Pharm. - Lateral Entry", description: "Direct second-year admission to pharmacy.", level: "Bachelor's", field: "B.Pharm", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bpharm_lateral.png", href: "/programs/pharmacy" },
  { id: 9, title: "Bachelor of Science in Nursing", description: "Professional nursing degree.", level: "Bachelor's", field: "B.Sc. Nursing", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bsc_nursing.png", href: "/programs/nursing" },
  { id: 10, title: "Post Basic B.Sc Nursing (PB-B.Sc.)", description: "Post basic nursing program.", level: "Bachelor's", field: "B.Sc. Nursing", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/pb_bsc_nursing.png", href: "/programs/nursing" },
  { id: 11, title: "Bachelor of Physiotherapy (BPT)", description: "Comprehensive physiotherapy program.", level: "Bachelor's", field: "BPT", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bpt_physio.png", href: "/programs/physiotherapy" },
  { id: 12, title: "BHMCT", description: "Bachelor of Hotel Management and Catering Technology.", level: "Bachelor's", field: "BHMCT", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bhmct.png", href: "/programs/hotel-management" },
  { id: 13, title: "Bachelor of Science - Hotel Management", description: "B.Sc degree in hospitality.", level: "Bachelor's", field: "BHMCT", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bsc_hm.png", href: "/programs/hotel-management" },
  { id: 14, title: "B.Sc Hons. - Hotel Management", description: "4-year honors program.", level: "Bachelor's", field: "BHMCT", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bsc_hm_hons.png", href: "/programs/hotel-management" },
  { id: 15, title: "Bachelor of Anaesthesia & Operation Theatre Technology", description: "Allied healthcare bachelor's degree.", level: "Bachelor's", field: "B.AOTT", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/baott.png", href: "/programs/allied-health" },
  { id: 16, title: "Bachelor of Medical Laboratory Science (BMLS)", description: "Allied healthcare bachelor's degree.", level: "Bachelor's", field: "B.AOTT", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bmls.png", href: "/programs/allied-health" },
  { id: 23, title: "Bachelor of Computer Applications (BCA)", description: "3-year undergraduate IT program.", level: "Bachelor's", field: "BCA", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bca_students.png", href: "/programs/it-cs" },
  { id: 24, title: "BCA Honours (NEP 2020)", description: "4-year honors program with specializations.", level: "Bachelor's", field: "BCA", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bca_students.png", href: "/programs/it-cs" },
  { id: 26, title: "Bachelor of Science (B.Sc.)", description: "3-year science degree in Biotech & Microbiology.", level: "Bachelor's", field: "B.Sc", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bsc_applied_science.png", href: "/programs/applied-sciences" },
  { id: 27, title: "Bachelor of Science - Honors (B.Sc. Hons.) (NEP 2020)", description: "4-year honors program in Biotech & Microbiology.", level: "Bachelor's", field: "B.Sc", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bsc_hons_applied_science.png", href: "/programs/applied-sciences" },

  // MASTER'S
  { id: 17, title: "Master of Business Administration (MBA)", description: "Postgraduate management degree.", level: "Master's", field: "MBA", mode: "Full-Time", entranceTest: "PUCET", image: "/programmes/cards/mba.png", href: "/programs/management-studies" },
  { id: 25, title: "Master of Computer Applications (MCA)", description: "Postgraduate IT and software program.", level: "Master's", field: "MCA", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/mca_students.png", href: "/programs/it-cs" },
  { id: 28, title: "Master of Science (M.Sc.)", description: "2-year master's in Biotech & Microbiology.", level: "Master's", field: "B.Sc", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/msc_applied_science.png", href: "/programs/applied-sciences" },

  // DOCTRAL
  { id: 18, title: "Ph.D in Engineering", description: "Doctoral research program.", level: "Doctral", field: "Ph.D", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/phd_engineering.png", href: "/programs/doctorate-programs" },
  { id: 19, title: "Ph.D in Management", description: "Doctoral research program.", level: "Doctral", field: "Ph.D", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/phd_management.png", href: "/programs/doctorate-programs" },
  { id: 20, title: "Ph.D in Pharmacy", description: "Doctoral research program.", level: "Doctral", field: "Ph.D", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/phd_pharmacy.png", href: "/programs/doctorate-programs" },
  { id: 21, title: "Ph.D in Nursing", description: "Doctoral research program.", level: "Doctral", field: "Ph.D", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/phd_nursing.png", href: "/programs/doctorate-programs" },
  { id: 22, title: "Ph.D in Allied and Healthcare Sciences", description: "Doctoral research program.", level: "Doctral", field: "Ph.D", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/phd_allied_health.png", href: "/programs/doctorate-programs" }
];

const filterOptions = {
  Level: ["All", "Diploma", "Bachelor's", "Master's", "Doctral"],
  Field: [
    "All",
    "B.Tech",
    "BCA",
    "MCA",
    "MBA",
    "B.Pharm",
    "B.Sc. Nursing",
    "BPT",
    "B.AOTT",
    "BHMCT",
    "B.Sc",
    "Ph.D",
  ],
  Mode: ["All", "Full-Time", "Lateral entry"],
  "Entrance Test": [
    "PUCET",
  ],
};

const FACULTY_INFO: Record<string, { name: string; desc: string; icon: React.ComponentType<any> }> = {
  "/programs/engineering": { name: "Engineering & Technology", desc: "The finest technical exposure in the field of technology.", icon: EngineeringIcon },
  "/programs/it-cs": { name: "Information Technology & Computer Science", desc: "Shaping the digital future with advanced computing.", icon: EngineeringIcon },
  "/programs/management-studies": { name: "Management Studies", desc: "Where tomorrow's industry leaders are shaped.", icon: ManagementIcon },
  "/programs/hotel-management": { name: "Hotel Management", desc: "Where Goa's world becomes your classroom.", icon: HotelIcon },
  "/programs/applied-sciences": { name: "Applied Sciences", desc: "Where science serves humanity.", icon: AppliedSciencesIcon },
  "/programs/nursing": { name: "Nursing", desc: "Where dedication becomes healing.", icon: NursingIcon },
  "/programs/pharmacy": { name: "Pharmacy", desc: "From molecule to medicine — pharmacy that transforms lives.", icon: PharmacyIcon },
  "/programs/physiotherapy": { name: "Physiotherapy", desc: "Where movement meets recovery.", icon: PhysiotherapyIcon },
  "/programs/allied-health": { name: "Allied and Health Sciences", desc: "Where science serves humanity.", icon: AlliedHealthIcon },
  "/programs/doctorate-programs": { name: "Doctorate Programs", desc: "For those who push the boundaries of what is known.", icon: DoctoralIcon }
};

export default function ProgramFilter() {
  const [activeFilters, setActiveFilters] = useState<{ [key: string]: string }>({
    Level: "All",
    Field: "All",
    Mode: "All",
    "Entrance Test": "All"
  });

  const handleFilterChange = (category: string, option: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      [category]: prev[category] === option ? "All" : option
    }));
  };

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const matchLevel = activeFilters.Level === "All" || course.level === activeFilters.Level;
      const matchField = activeFilters.Field === "All" || course.field === activeFilters.Field;
      const matchMode = activeFilters.Mode === "All" || course.mode === activeFilters.Mode;
      const matchEntrance = activeFilters["Entrance Test"] === "All" || course.entranceTest === activeFilters["Entrance Test"];
      return matchLevel && matchField && matchMode && matchEntrance;
    });
  }, [activeFilters]);

  const groupedFaculties = useMemo(() => {
    const groups: Record<string, typeof allCourses> = {};
    filteredCourses.forEach(course => {
      if (!groups[course.href]) {
        groups[course.href] = [];
      }
      groups[course.href].push(course);
    });
    
    const facultyOrder = Object.keys(FACULTY_INFO);
    
    return Object.entries(groups)
      .map(([href, courses]) => ({
        href,
        courses,
        info: FACULTY_INFO[href] || { name: href.split('/').pop() || '', desc: "Explore our programmes", icon: EngineeringIcon }
      }))
      .sort((a, b) => {
        const indexA = facultyOrder.indexOf(a.href);
        const indexB = facultyOrder.indexOf(b.href);
        return (indexA !== -1 ? indexA : Infinity) - (indexB !== -1 ? indexB : Infinity);
      });
  }, [filteredCourses]);

  return (
    <section className="py-20 lg:py-28 bg-[#FAFAFA] font-sans">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-ink mb-6 font-poppins leading-tight">
            Find the right <span className="text-[#0EB1E1]">fit for you.</span>
          </h3>
          <p className="text-ink/80 max-w-lg mx-auto leading-relaxed section-body">
            Pick a level, a field, or the entrance test you've taken,
            <br className="hidden sm:block" /> results update instantly.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-8 w-full">
          {/* Summary Card - Full Row */}
          <div className="bg-[#0EB1E1] text-white rounded-[24px] p-6 md:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <h4 className="text-[24px] sm:text-3xl font-semibold leading-[1.2] font-poppins text-center md:text-left m-0">
              {groupedFaculties.length === 10 ? 9 : groupedFaculties.length} faculties, {filteredCourses.length} programmes match
            </h4>
            <button data-enquiry-trigger="true" className="flex items-center justify-center gap-2 bg-sunshine text-ink text-[15px] sm:text-[16px] font-bold py-3.5 px-8 rounded-full hover:bg-yellow-400 transition-colors shadow-sm w-full md:w-auto shrink-0 whitespace-nowrap">
              Help me choose
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 11.5L11.5 4.5M11.5 4.5H6.5M11.5 4.5V9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center max-w-6xl mx-auto">
          {/* Sidebar */}
          <div className="w-full lg:w-[320px] shrink-0 space-y-6 lg:sticky lg:top-24">

            {/* Filter Panel */}
            <div className="bg-white rounded-[28px] p-8 shadow-sm ring-1 ring-black/5">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-[24px] sm:text-[28px] font-bold text-ink font-poppins">Filters</h3>
                <button
                  onClick={() => setActiveFilters({ Level: "All", Field: "All", Mode: "All", "Entrance Test": "All" })}
                  className="text-[13px] sm:text-[14px] font-bold text-ink/50 hover:text-ink transition-colors tracking-widest uppercase"
                >
                  RESET
                </button>
              </div>

              <div className="space-y-8">
                {Object.entries(filterOptions).map(([category, options]) => (
                  <div key={category}>
                    <h4 className="text-[12px] sm:text-[13px] font-bold tracking-[0.15em] text-ink/50 uppercase mb-4 font-poppins">{category}</h4>
                    <div className="flex flex-wrap gap-2.5 sm:gap-3">
                      {options.map((option) => {
                        const isActive = activeFilters[category] === option;
                        return (
                          <button
                            key={option}
                            onClick={() => handleFilterChange(category, option)}
                            className={`rounded-full px-5 py-2.5 sm:px-6 text-[15px] sm:text-[16px] font-medium transition-all ${isActive
                                ? "bg-[#1A1A1A] text-white border border-[#1A1A1A] shadow-sm"
                                : "bg-white text-ink/70 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                              }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="flex-1 w-full">
            {groupedFaculties.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {groupedFaculties.map(({ href, courses, info }) => {
                  const Icon = info.icon;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className="group relative flex flex-col justify-between rounded-[20px] bg-white p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-zinc-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md h-full"
                    >
                      <div className="flex items-start gap-4 sm:gap-5">
                        <div className={`flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl transition-colors group-hover:bg-[#0EB1E1] group-hover:text-white ${
                          href === "/programs/it-cs" 
                            ? "bg-[#0EB1E1] text-white" 
                            : "bg-[#0EB1E1]/5 text-[#0EB1E1]"
                        }`}>
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                        </div>
                        <div className="flex-1 mt-0.5 sm:mt-1.5">
                          <h4 className="font-poppins text-[19px] sm:text-[22px] font-bold text-ink leading-tight mb-2 transition-colors">
                            {info.name}
                          </h4>
                          <p className="text-[14px] sm:text-[15px] font-medium text-ink/70 leading-relaxed">
                            {info.desc}
                          </p>
                        </div>
                      </div>
                      <div className="mt-8 sm:mt-10 flex items-center justify-between border-t border-zinc-100 pt-5">
                        <span className="font-poppins text-[13px] sm:text-[14px] font-bold uppercase tracking-wide text-[#E74C5E]">
                          {courses.length} PROGRAMME{courses.length !== 1 && 'S'}
                        </span>
                        <svg className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] text-zinc-400 group-hover:text-ink/60 transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </div>
                    </Link>
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
