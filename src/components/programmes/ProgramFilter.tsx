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
  { id: 1, title: "Diploma in Engineering", description: "3-year polytechnic diploma program.", level: "Diploma", field: "B.Tech", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/diploma_eng.png", href: "/faculty/engineering" },
  { id: 2, title: "General Nursing and Midwifery (G.N.M)", description: "3-year diploma in nursing.", level: "Diploma", field: "B.Sc. Nursing", mode: "Full-Time", entranceTest: "PUCET", image: "/programmes/cards/gnm_nursing.png", href: "/faculty-of-nursing" },

  // BACHELOR'S
  { id: 3, title: "B.Tech Computer Science & Engineering", description: "Bachelor of Technology with various specializations.", level: "Bachelor's", field: "B.Tech", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/btech_cs.png", href: "/faculty/engineering" },
  { id: 4, title: "B.Tech - Lateral Entry", description: "Direct second-year admission.", level: "Bachelor's", field: "B.Tech", mode: "Lateral entry", entranceTest: "PU Goa Entrance", image: "/programmes/cards/btech_lateral.png", href: "/faculty/engineering" },
  { id: 5, title: "Bachelor of Business Administration (BBA)", description: "Undergraduate degree in business administration.", level: "Bachelor's", field: "MBA", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bba_student.png", href: "/faculty-of-management-studies" },
  { id: 6, title: "BBA Honours (NEP 2020)", description: "4-year honors program with specializations.", level: "Bachelor's", field: "MBA", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bba_hons.png", href: "/faculty-of-management-studies" },
  { id: 7, title: "Bachelor of Pharmacy (B.Pharm.)", description: "Undergraduate pharmacy program.", level: "Bachelor's", field: "B.Pharm", mode: "Full-Time", entranceTest: "PUCET", image: "/programmes/cards/bpharm.png", href: "/faculty-of-pharmacy" },
  { id: 8, title: "B.Pharm. - Lateral Entry", description: "Direct second-year admission to pharmacy.", level: "Bachelor's", field: "B.Pharm", mode: "Lateral entry", entranceTest: "PUCET", image: "/programmes/cards/bpharm_lateral.png", href: "/faculty-of-pharmacy" },
  { id: 9, title: "Bachelor of Science in Nursing", description: "Professional nursing degree.", level: "Bachelor's", field: "B.Sc. Nursing", mode: "Full-Time", entranceTest: "PUCET", image: "/programmes/cards/bsc_nursing.png", href: "/faculty-of-nursing" },
  { id: 10, title: "Post Basic B.Sc Nursing (PB-B.Sc.)", description: "Post basic nursing program.", level: "Bachelor's", field: "B.Sc. Nursing", mode: "Full-Time", entranceTest: "PUCET", image: "/programmes/cards/pb_bsc_nursing.png", href: "/faculty-of-nursing" },
  { id: 11, title: "Bachelor of Physiotherapy (BPT)", description: "Comprehensive physiotherapy program.", level: "Bachelor's", field: "BPT", mode: "Full-Time", entranceTest: "PUCET", image: "/programmes/cards/bpt_physio.png", href: "/faculty-of-physiotherapy" },
  { id: 12, title: "BHMCT", description: "Bachelor of Hotel Management and Catering Technology.", level: "Bachelor's", field: "BHMCT", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bhmct.png", href: "/faculty-of-hotel-management" },
  { id: 13, title: "Bachelor of Science - Hotel Management", description: "B.Sc degree in hospitality.", level: "Bachelor's", field: "BHMCT", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bsc_hm.png", href: "/faculty-of-hotel-management" },
  { id: 14, title: "B.Sc Hons. - Hotel Management", description: "4-year honors program.", level: "Bachelor's", field: "BHMCT", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bsc_hm_hons.png", href: "/faculty-of-hotel-management" },
  { id: 15, title: "Bachelor of Anaesthesia & Operation Theatre Technology", description: "Allied healthcare bachelor's degree.", level: "Bachelor's", field: "B.AOTT", mode: "Full-Time", entranceTest: "PUCET", image: "/programmes/cards/baott.png", href: "/faculty/allied-healthcare" },
  { id: 16, title: "Bachelor of Medical Laboratory Science (BMLS)", description: "Allied healthcare bachelor's degree.", level: "Bachelor's", field: "B.AOTT", mode: "Full-Time", entranceTest: "PUCET", image: "/programmes/cards/bmls.png", href: "/faculty/allied-healthcare" },
  { id: 23, title: "Bachelor of Computer Applications (BCA)", description: "3-year undergraduate IT program.", level: "Bachelor's", field: "BCA", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bca_students.png", href: "/faculty/it-cs" },
  { id: 24, title: "BCA Honours (NEP 2020)", description: "4-year honors program with specializations.", level: "Bachelor's", field: "BCA", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/bca_students.png", href: "/faculty/it-cs" },
  { id: 26, title: "Bachelor of Science (B.Sc.)", description: "3-year science degree in Biotech & Microbiology.", level: "Bachelor's", field: "B.Sc", mode: "Full-Time", entranceTest: "PUCET", image: "/programmes/cards/bsc_applied_science.png", href: "/faculty/applied-sciences" },
  { id: 27, title: "Bachelor of Science - Honors (B.Sc. Hons.) (NEP 2020)", description: "4-year honors program in Biotech & Microbiology.", level: "Bachelor's", field: "B.Sc", mode: "Full-Time", entranceTest: "PUCET", image: "/programmes/cards/bsc_hons_applied_science.png", href: "/faculty/applied-sciences" },

  // MASTER'S
  { id: 17, title: "Master of Business Administration (MBA)", description: "Postgraduate management degree.", level: "Master's", field: "MBA", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/mba.png", href: "/faculty-of-management-studies" },
  { id: 25, title: "Master of Computer Applications (MCA)", description: "Postgraduate IT and software program.", level: "Master's", field: "MCA", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/mca_students.png", href: "/faculty/it-cs" },
  { id: 28, title: "Master of Science (M.Sc.)", description: "2-year master's in Biotech & Microbiology.", level: "Master's", field: "B.Sc", mode: "Full-Time", entranceTest: "PUCET", image: "/programmes/cards/msc_applied_science.png", href: "/faculty/applied-sciences" },
  { id: 29, title: "M.Tech in Computer Engineering", description: "Master of Technology program.", level: "Master's", field: "B.Tech", mode: "Full-Time", entranceTest: "PU Goa Entrance", image: "/programmes/cards/phd_engineering.png", href: "/faculty/engineering" },

  // DOCTORAL
  { id: 18, title: "Ph.D in Engineering", description: "Doctoral research program.", level: "Doctoral", field: "Ph.D", mode: "Full-Time", entranceTest: "PUCET", image: "/programmes/cards/phd_engineering.png", href: "/faculty/doctorate-programs" },
  { id: 19, title: "Ph.D in Management", description: "Doctoral research program.", level: "Doctoral", field: "Ph.D", mode: "Full-Time", entranceTest: "PUCET", image: "/programmes/cards/phd_management.png", href: "/faculty/doctorate-programs" },
  { id: 20, title: "Ph.D in Pharmacy", description: "Doctoral research program.", level: "Doctoral", field: "Ph.D", mode: "Full-Time", entranceTest: "PUCET", image: "/programmes/cards/phd_pharmacy.png", href: "/faculty/doctorate-programs" },
  { id: 21, title: "Ph.D in Nursing", description: "Doctoral research program.", level: "Doctoral", field: "Ph.D", mode: "Full-Time", entranceTest: "PUCET", image: "/programmes/cards/phd_nursing.png", href: "/faculty/doctorate-programs" },
  { id: 22, title: "Ph.D in Allied and Healthcare Sciences", description: "Doctoral research program.", level: "Doctoral", field: "Ph.D", mode: "Full-Time", entranceTest: "PUCET", image: "/programmes/cards/phd_allied_health.png", href: "/faculty/doctorate-programs" }
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
    "PUCET"
  ],
};

const FACULTY_INFO: Record<string, { name: string; desc: string; icon: React.ComponentType<any>; image: string }> = {
  "/faculty/engineering": { 
    name: "Engineering & Technology", 
    desc: "The finest technical exposure in the field of technology.", 
    icon: EngineeringIcon, 
    image: "/programmes/ARVR Innovation Lab.png"
  },
  "/faculty/it-cs": { 
    name: "Information Technology & Computer Science", 
    desc: "Shaping the digital future with advanced computing.", 
    icon: ITIcon, 
    image: "/programmes/Digital Classroom Excellence.png"
  },
  "/faculty-of-management-studies": { 
    name: "Management Studies", 
    desc: "Where tomorrow's industry leaders are shaped.", 
    icon: ManagementIcon, 
    image: "/programmes/Interactive Classroom Session.png"
  },
  "/faculty-of-hotel-management": { 
    name: "Hotel Management", 
    desc: "Where Goa's world becomes your classroom.", 
    icon: HotelIcon, 
    image: "/programmes/hotel_management.jpg"
  },
  "/faculty/applied-sciences": { 
    name: "Applied Sciences", 
    desc: "Where science serves humanity.", 
    icon: AppliedSciencesIcon, 
    image: "/programmes/applied_sciences.jpg"
  },
  "/faculty-of-nursing": { 
    name: "Nursing", 
    desc: "Where dedication becomes healing.", 
    icon: NursingIcon, 
    image: "/programmes/Clinical Simulation Learning.png"
  },
  "/faculty-of-pharmacy": { 
    name: "Pharmacy", 
    desc: "From molecule to medicine — pharmacy that transforms lives.", 
    icon: PharmacyIcon, 
    image: "/programmes/Pharmaceutical Lab Practice.png"
  },
  "/faculty-of-physiotherapy": { 
    name: "Physiotherapy", 
    desc: "Where movement meets recovery.", 
    icon: PhysiotherapyIcon, 
    image: "/programmes/Physiotherapy Training.png"
  },
  "/faculty/allied-healthcare": { 
    name: "Allied and Healthcare Sciences", 
    desc: "Where science serves humanity.", 
    icon: AlliedHealthIcon, 
    image: "/programmes/Advanced Science Research.png"
  },
  "/faculty/doctorate-programs": { 
    name: "Doctorate Programs", 
    desc: "For those who push the boundaries of what is known.", 
    icon: DoctoralIcon, 
    image: "/programmes/Library Learning Experience.png"
  }
};

function DropdownFilter({
  category,
  options,
  selectedValue,
  onChange
}: {
  category: string;
  options: string[];
  selectedValue: string;
  onChange: (val: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-[85%] sm:w-[300px] lg:w-full shrink-0">
      <label className="block text-[12px] lg:text-[14px] font-semibold text-ink/70 mb-1.5 lg:mb-2.5 font-poppins uppercase tracking-wider">
        {category}
      </label>

      {/* Mobile view: Native select to prevent overflow clipping */}
      <div className="relative lg:hidden w-full">
        <select
          value={selectedValue}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-white border border-gray-300 rounded-[12px] px-3 py-2.5 text-[14px] font-semibold text-ink shadow-sm focus:outline-none focus:border-[#ED383F] bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2371717a%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1rem_1rem] bg-[position:right_0.8rem_center] bg-no-repeat pr-8 cursor-pointer"
        >
          {options.indexOf(selectedValue) === -1 && (
            <option value={selectedValue}>{selectedValue}</option>
          )}
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop view: Premium custom dropdown */}
      <div className="hidden lg:block w-full">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between bg-white border border-gray-300 rounded-[14px] px-4 py-3.5 text-[15px] font-semibold text-ink shadow-sm hover:border-[#ED383F] focus:outline-none transition-all duration-200"
        >
          <span className="truncate pr-2">{selectedValue}</span>
          <svg
            className={`w-5 h-5 text-ink/40 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <>
            <div className="fixed inset-0 z-30" onClick={() => setIsOpen(false)} />
            <ul className="absolute left-0 right-0 mt-2 z-40 max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-[14px] shadow-lg py-2 focus:outline-none scrollbar-thin">
              {options.indexOf(selectedValue) === -1 && (
                <li key={selectedValue}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(selectedValue);
                      setIsOpen(false);
                    }}
                    className="w-full text-left px-4 py-2.5 text-[15px] bg-[#ED383F]/10 text-[#ED383F] font-bold"
                  >
                    {selectedValue}
                  </button>
                </li>
              )}
              {options.map((option) => (
                <li key={option}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(option);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-[15px] transition-colors ${
                      selectedValue === option
                        ? "bg-[#ED383F]/10 text-[#ED383F] font-bold"
                        : "text-ink/80 hover:bg-gray-100 hover:text-ink"
                    }`}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

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
    <section id="program-filter" className="lg: bg-[#F9F9F9] font-sans py-16 sm:py-24">
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
            <div className="bg-[#F5F5F5] rounded-[24px] p-4 sm:p-6 lg:p-8 border-[1.7px] border-gray-300 w-full">
              <div className="flex items-center justify-between mb-4 lg:mb-8">
                <div className="flex items-center gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ED383F]">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                  </svg>
                  <h3 className="text-xl lg:text-2xl font-semibold text-ink font-poppins">Filters</h3>
                </div>
                <button
                  onClick={() => setActiveFilters({ Level: "All", Field: "All", Mode: "All", "Entrance Test": "All" })}
                  className="text-sm font-semibold text-ink/60 hover:text-[#ED383F] transition-colors underline underline-offset-4"
                >
                  Reset
                </button>
              </div>

              <div className="flex flex-row lg:flex-col gap-4 lg:space-y-5 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 scrollbar-none w-full shrink-0">
                {Object.entries(filterOptions).map(([category, options]) => (
                  <DropdownFilter
                    key={category}
                    category={category}
                    options={options}
                    selectedValue={activeFilters[category]}
                    onChange={(val) => handleFilterChange(category, val)}
                  />
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
