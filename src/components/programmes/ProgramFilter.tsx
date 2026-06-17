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
  AppliedSciencesIcon,
  ITIcon
} from "../landing/FacultyIcons";

const allCourses = [
  // DIPLOMA
  { id: 1, title: "Diploma in Engineering", description: "3-year polytechnic diploma program.", level: "Diploma", field: "B.Tech", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/diploma_eng.png", href: "/programs/engineering" },
  { id: 2, title: "General Nursing and Midwifery (G.N.M)", description: "3-year diploma in nursing.", level: "Diploma", field: "B.Sc. Nursing", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/gnm_nursing.png", href: "/programs/nursing" },

  // BACHELOR'S
  { id: 3, title: "B.Tech Computer Science & Engineering", description: "Bachelor of Technology with various specializations.", level: "Bachelor's", field: "B.Tech", mode: "Full-Time", entranceTest: "PUCET", image: "/programmes/cards/btech_cs.png", href: "/programs/engineering" },
  { id: 4, title: "B.Tech - Lateral Entry", description: "Direct second-year admission.", level: "Bachelor's", field: "B.Tech", mode: "Lateral entry", entranceTest: "PU Goa Entrance", image: "/programmes/cards/btech_lateral.png", href: "/programs/engineering" },
  { id: 5, title: "Bachelor of Business Administration (BBA)", description: "Undergraduate degree in business administration.", level: "Bachelor's", field: "MBA", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bba_student.png", href: "/programs/management-studies" },
  { id: 6, title: "BBA Honours (NEP 2020)", description: "4-year honors program with specializations.", level: "Bachelor's", field: "MBA", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bba_hons.png", href: "/programs/management-studies" },
  { id: 7, title: "Bachelor of Pharmacy (B.Pharm.)", description: "Undergraduate pharmacy program.", level: "Bachelor's", field: "B.Pharm", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bpharm.png", href: "/programs/pharmacy" },
  { id: 8, title: "B.Pharm. - Lateral Entry", description: "Direct second-year admission to pharmacy.", level: "Bachelor's", field: "B.Pharm", mode: "Lateral entry", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bpharm_lateral.png", href: "/programs/pharmacy" },
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
  { id: 29, title: "M.Tech in Computer Engineering", description: "Master of Technology program.", level: "Master's", field: "B.Tech", mode: "Full-Time", entranceTest: "PUCET", image: "/programmes/cards/phd_engineering.png", href: "/programs/engineering" },

  // DOCTORAL
  { id: 18, title: "Ph.D in Engineering", description: "Doctoral research program.", level: "Doctoral", field: "Ph.D", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/phd_engineering.png", href: "/programs/doctorate-programs" },
  { id: 19, title: "Ph.D in Management", description: "Doctoral research program.", level: "Doctoral", field: "Ph.D", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/phd_management.png", href: "/programs/doctorate-programs" },
  { id: 20, title: "Ph.D in Pharmacy", description: "Doctoral research program.", level: "Doctoral", field: "Ph.D", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/phd_pharmacy.png", href: "/programs/doctorate-programs" },
  { id: 21, title: "Ph.D in Nursing", description: "Doctoral research program.", level: "Doctoral", field: "Ph.D", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/phd_nursing.png", href: "/programs/doctorate-programs" },
  { id: 22, title: "Ph.D in Allied and Healthcare Sciences", description: "Doctoral research program.", level: "Doctoral", field: "Ph.D", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/phd_allied_health.png", href: "/programs/doctorate-programs" }
];

const filterOptions = {
  Level: ["All", "Diploma", "Bachelor's", "Master's", "Doctoral"],
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
    "Ph.D"
  ],
  Mode: ["All", "Full-Time", "Lateral entry"],
  "Entrance Test": [
    "All",
    "PUCET",
    "PU Goa Entrance"
  ],
};

const FACULTY_INFO: Record<string, { name: string; desc: string; icon: React.ComponentType<any>; image: string }> = {
  "/programs/engineering": { 
    name: "Engineering & Technology", 
    desc: "The finest technical exposure in the field of technology.", 
    icon: EngineeringIcon, 
    image: "/programmes/ARVR Innovation Lab.png"
  },
  "/programs/it-cs": { 
    name: "Information Technology & Computer Science", 
    desc: "Shaping the digital future with advanced computing.", 
    icon: ITIcon, 
    image: "/programmes/Digital Classroom Excellence.png"
  },
  "/programs/management-studies": { 
    name: "Management Studies", 
    desc: "Where tomorrow's industry leaders are shaped.", 
    icon: ManagementIcon, 
    image: "/programmes/Interactive Classroom Session.png"
  },
  "/programs/hotel-management": { 
    name: "Hotel Management", 
    desc: "Where Goa's world becomes your classroom.", 
    icon: HotelIcon, 
    image: "/programmes/hotel_management.jpg"
  },
  "/programs/applied-sciences": { 
    name: "Applied Sciences", 
    desc: "Where science serves humanity.", 
    icon: AppliedSciencesIcon, 
    image: "/programmes/applied_sciences.jpg"
  },
  "/programs/nursing": { 
    name: "Nursing", 
    desc: "Where dedication becomes healing.", 
    icon: NursingIcon, 
    image: "/programmes/Clinical Simulation Learning.png"
  },
  "/programs/pharmacy": { 
    name: "Pharmacy", 
    desc: "From molecule to medicine — pharmacy that transforms lives.", 
    icon: PharmacyIcon, 
    image: "/programmes/Pharmaceutical Lab Practice.png"
  },
  "/programs/physiotherapy": { 
    name: "Physiotherapy", 
    desc: "Where movement meets recovery.", 
    icon: PhysiotherapyIcon, 
    image: "/programmes/Physiotherapy Training.png"
  },
  "/programs/allied-health": { 
    name: "Allied and Health Sciences", 
    desc: "Where science serves humanity.", 
    icon: AlliedHealthIcon, 
    image: "/programmes/Advanced Science Research.png"
  },
  "/programs/doctorate-programs": { 
    name: "Doctorate Programs", 
    desc: "For those who push the boundaries of what is known.", 
    icon: DoctoralIcon, 
    image: "/programmes/Library Learning Experience.png"
  }
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
      
      const matchField = activeFilters.Field === "All" || (() => {
        const option = activeFilters.Field;
        if (course.field === option) return true;
        
        const titleLower = course.title.toLowerCase();
        const optionLower = option.toLowerCase();
        
        if (option === "B.Sc") {
          return titleLower.includes("b.sc") && !titleLower.includes("nursing");
        }
        
        return titleLower.includes(optionLower);
      })();
      
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
    <section className="py-20 lg:py-20 bg-[#F9F9F9] font-sans">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold text-[#ED383F] mb-6 font-poppins leading-tight">
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
                {groupedFaculties.length === 10 ? 9 : groupedFaculties.length} faculties<br />{filteredCourses.length} programmes<br />match
              </h4>
              <button data-enquiry-trigger="true" className="bg-[#FCE34B] text-ink text-[15px] font-bold py-3.5 px-6 rounded-full w-full hover:bg-yellow-400 transition-colors shadow-sm">
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
                      {options.map((option) => {
                        const isActive = activeFilters[category] === option;
                        return (
                          <label key={option} className="flex items-center gap-4 cursor-pointer group w-full">
                            <div className="relative flex items-center justify-center w-[20px] h-[20px] shrink-0">
                              <input
                                type="radio"
                                name={category}
                                value={option}
                                checked={isActive}
                                onChange={() => handleFilterChange(category, option)}
                                className="peer appearance-none w-[20px] h-[20px] rounded-full border border-gray-300 bg-white checked:border-[#ED383F] checked:bg-white transition-all cursor-pointer"
                              />
                              {/* Inner dot for checked state */}
                              <div className="absolute w-2.5 h-2.5 rounded-full bg-[#ED383F] opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                            </div>
                            <span className={`text-[16px] ${isActive ? 'text-ink font-medium' : 'text-ink/70'} group-hover:text-ink transition-colors`}>
                              {option}
                            </span>
                          </label>
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
                  const queryParams = new URLSearchParams();
                  if (activeFilters.Level !== "All") {
                    const cleanLevel = activeFilters.Level.replace(/'/g, "");
                    queryParams.append("level", cleanLevel);
                  }
                  if (activeFilters.Field !== "All") queryParams.append("field", activeFilters.Field);
                  if (activeFilters.Mode !== "All") {
                    queryParams.append("mode", activeFilters.Mode);
                    if (activeFilters.Mode === "Lateral entry" && activeFilters.Level === "All") {
                      queryParams.append("level", "Lateral Entry");
                    }
                  }
                  if (activeFilters["Entrance Test"] !== "All") queryParams.append("entrance", activeFilters["Entrance Test"]);
                  
                  const queryString = queryParams.toString();
                  const finalHref = queryString ? `${href}?${queryString}` : href;

                  return (
                    <Link
                      key={href}
                      href={finalHref}
                      className="bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-[3px] border-zinc-200 flex flex-col group hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all h-full"
                    >
                      <div className="relative h-[220px] sm:h-[240px] w-full overflow-hidden shrink-0">
                        <Image
                          src={info.image || courses[0]?.image || "/programmes/cards/btech_cs.png"}
                          alt={info.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col items-start bg-white z-10 relative">
                        <div className="bg-[#ED383F] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                          {courses.length} PROGRAMME{courses.length !== 1 && 'S'}
                        </div>
                        <h4 className="text-[20px] sm:text-[22px] font-bold text-ink mb-2 font-poppins leading-tight">
                          {info.name}
                        </h4>
                        <p className="text-[14px] text-ink/70 leading-relaxed font-medium mb-6 flex-1">
                          {info.desc}
                        </p>
                        <div className="inline-flex items-center text-[#ED383F] font-bold text-sm group-hover:text-[#c72d33] transition-colors mt-auto">
                          View details <span className="ml-1">&rarr;</span>
                        </div>
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
