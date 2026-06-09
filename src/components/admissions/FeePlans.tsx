"use client";

import React, { useState, useEffect } from "react";
import { DynamicCourseCardBg } from "./DynamicCourseCardBg";

interface Course {
  name: string;
  price: string;
  tags: string[];
  color: string;
  textColor?: string;
  type: string;
}

const COURSES: Course[] = [
  {
    name: "B.Tech (CSE & specialisations)",
    price: "₹1,25,000 - ₹1,45,000",
    tags: ["AI", "ML", "DATA SCIENCE", "CYBER SECURITY", "QUANTUM AI"],
    color: "#ee364f",
    textColor: "text-white",
    type: "tech",
  },
  {
    name: "BBA (All specialisations)",
    price: "approx ₹95,000",
    tags: ["FINANCE", "HR", "MARKETING", "BUSINESS ANALYTICS"],
    color: "#0caadd",
    textColor: "text-white",
    type: "business",
  },
  {
    name: "MBA (All specialisations)",
    price: "₹1,50,000 - ₹1,80,000",
    tags: ["FINANCE", "HR", "MARKETING", "OPERATIONS"],
    color: "#fedb2f",
    textColor: "text-ink",
    type: "business",
  },
  {
    name: "B.Sc. Nursing & BPT",
    price: "approx ₹1,10,000",
    tags: ["NURSING", "PHYSIOTHERAPY", "CLINICAL"],
    color: "#ee364f",
    textColor: "text-white",
    type: "medical",
  },
  {
    name: "B.Pharm & B.Pharm (LE)",
    price: "approx ₹1,05,000",
    tags: ["PHARMACY", "LATERAL ENTRY"],
    color: "#0caadd",
    textColor: "text-white",
    type: "pharmacy",
  },
];

export function FeePlans() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<Course>(COURSES[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredCourses = COURSES.filter((course) => {
    // Remove all non-alphanumeric characters for robust comparison (so "btech" matches "B.Tech")
    const normalize = (str: string) => str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const q = normalize(searchQuery);
    return (
      normalize(course.name).includes(q) ||
      course.tags.some(tag => normalize(tag).includes(q))
    );
  });

  return (
    <section className="w-full bg-[#faf9f6] py-20 px-4 sm:px-8 xl:px-16">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-ink mb-2 section-subheading">Fees · 2026-27</h2>
          <h3 className="text-[#ee364f] mb-4 section-heading">
            Flexible Fee Plans!
          </h3>
          <p className="text-ink max-w-2xl mx-auto section-body">
            Annual tuition for every programme. Hostel, mess and transport are billed separately.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-[24px] p-6 sm:p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-10">
          
          {/* Left Column (Search) */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h4 className="font-poppins font-semibold text-[28px] sm:text-[32px] text-ink mb-6 text-center">
              Search your course to know
            </h4>
            
            <div className="relative mb-6">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                  type="text"
                  placeholder="e.g. B.Tech"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsDropdownOpen(true);
                  }}
                  onFocus={() => setIsDropdownOpen(true)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && isDropdownOpen && filteredCourses.length > 0) {
                      const course = filteredCourses[0];
                      setSelectedCourse(course);
                      setSearchQuery(course.name);
                      setIsDropdownOpen(false);
                      (e.target as HTMLInputElement).blur(); // Remove focus to fully commit the selection
                    }
                  }}
                  className="w-full bg-[#f4f4f4] text-ink rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand font-medium"
                />
              </div>

              {/* Dropdown Results */}
              {isDropdownOpen && searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden z-20">
                  {filteredCourses.length > 0 ? (
                    filteredCourses.map((course, idx) => (
                      <button
                        key={idx}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0 font-medium text-ink transition-colors"
                        onClick={() => {
                          setSelectedCourse(course);
                          setSearchQuery(course.name);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {course.name}
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-gray-500 text-sm">No courses found.</div>
                  )}
                </div>
              )}
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 border border-brand-yellow/50 rounded-xl p-6 mt-4">
              <p className="font-[family-name:var(--font-poppins)] font-medium text-[16px] sm:text-[18px] text-ink leading-relaxed">
                <span className="font-bold text-black">Disclaimer:</span> Tuition fees may vary depending on the Country / State
                in which the candidate has passed their qualifying examination.
              </p>
            </div>
          </div>

          {/* Right Column (Dynamic Card) */}
          <div className="w-full md:w-1/2">
            <div 
              className="relative w-full aspect-[483/277] min-h-[280px] rounded-[24px] overflow-hidden shadow-md flex flex-col justify-center p-6 sm:p-8"
              style={{ backgroundColor: selectedCourse.color }}
            >
              {/* Custom SVG Icon as Background Decor */}
              <DynamicCourseCardBg color={selectedCourse.color} type={selectedCourse.type} />

              {/* Text Content */}
              <div className={`relative z-10 ${selectedCourse.textColor} h-full flex flex-col justify-between`}>
                <div>
                  <h4 className="text-xl sm:text-2xl font-semibold mb-3 pr-12 leading-tight font-poppins drop-shadow-sm">
                    {selectedCourse.name}
                  </h4>
                  
                  <div className="h-px w-full bg-current opacity-20 mb-3" />
                  
                  <div className="flex items-baseline gap-1.5 flex-wrap mb-4">
                    <span className="text-2xl sm:text-[32px] font-bold tracking-tight leading-tight drop-shadow-sm">
                      {selectedCourse.price}
                    </span>
                    <span className="text-xs sm:text-sm opacity-90 font-medium whitespace-nowrap">
                      {selectedCourse.price.includes('approx') ? 'estimated per year' : '/ year'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {selectedCourse.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="bg-white text-ink text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
