"use client";

import React, { useState } from "react";
import Image from "next/image";

import { FacultyMember } from "@/data/programmes/types";

const facultyList: FacultyMember[] = [
  {
    "role": "Associate Professor",
    "name": "Dr. K. Vasudevan",
    "degree": "Ph.D.",
    "faculty": "Faculty of Engineering, IT & CS",
    "department": "Engineering ,IT & CS",
    "experience": "16 Years",
    "researchArea": "Power Electronics, Renewable Energy and Distribution Generation Experience: 16 Years 5 Months",
    "image": "/faculties/Dr.-K.-Vasudevan.jpg"
  },
  {
    "role": "Associate Professor",
    "name": "Dr. Sujit Kr Singh",
    "degree": "Ph.D.",
    "faculty": "Faculty of Engineering, IT & CS",
    "department": "Engineering ,IT & CS",
    "experience": "13 Years",
    "researchArea": "AIML, Deep Learning",
    "image": "/faculties/Dr.-Sujit-Kr-Singh.jpg"
  },
  {
    "role": "Associate Professor",
    "name": "Dr. Dhaval Nimavat",
    "degree": "Ph.D.",
    "faculty": "Faculty of Engineering, IT & CS",
    "department": "Engineering ,IT & CS",
    "experience": "17 Years",
    "researchArea": "Internet of Things, Cloud Security, iOS Application Development, Android Application Development",
    "image": "/faculties/Dr.-Dhaval-Nimavat.jpg"
  },
  {
    "role": "Assistant Professor",
    "name": "Dr. Ashok Baldev Tejwani",
    "degree": "Ph.D.",
    "faculty": "Faculty of Engineering, IT & CS",
    "department": "Engineering ,IT & CS",
    "experience": "18 Years",
    "researchArea": "Mathematical Modeling",
    "image": "/faculties/Dr.-Ashok-Baldev-Tejwani.jpg"
  },
  {
    "role": "Assistant Professor",
    "name": "Dr. Radhika Sharma",
    "degree": "Ph.D.",
    "faculty": "Faculty of Engineering, IT & CS",
    "department": "Engineering ,IT & CS",
    "researchArea": "Mathematical Modeling",
    "image": "/faculties/Dr.-Radhika-Sharma.jpg"
  }
];

export default function DeanAndFaculty() {
  const [showAll, setShowAll] = useState(false);
  const displayedFaculties = showAll ? facultyList : facultyList.slice(0, 3);

  return (
    <section className="w-full bg-[#FAFAFA] sm: py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-12">
        
        {/* Top Heading */}
        <div className="text-center mb-12">
          <h2 className="text-ink section-heading">
            Dean & Faculty
          </h2>
        </div>

        {/* Dean Banner */}
        <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto rounded-[24px] overflow-hidden shadow-md mb-20 bg-white">
          {/* Left: Image Placeholder */}
          <div className="w-full md:w-[45%] h-[300px] md:h-auto bg-gray-200 relative shrink-0">
            <Image
              src="/faculties/Engineering/Dean.jpg"
              alt="Dr. Anuradha Pillai"
              fill
              className="object-cover object-top"
            />
          </div>
          
          {/* Right: Content */}
          <div className="w-full md:w-[55%] bg-[#E73649] p-8 sm:p-12 relative flex flex-col justify-center overflow-hidden">
            
            {/* Background SVG Watermark */}
            <div className="absolute right-[-40px] bottom-[-20px] w-[280px] h-[280px] opacity-[0.15] pointer-events-none">
              <Image 
                src="/award.svg" 
                alt="Award Watermark" 
                fill 
                className="object-contain"
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-white font-bold text-[28px] sm:text-[36px] font-poppins leading-tight mb-2">
                Dr. Anuradha Pillai
              </h3>
              <p className="text-white/90 text-[16px] sm:text-[18px] font-medium">
                Dean of Engineering, IT and Computer Science
              </p>
              
              <hr className="border-white/20 my-6 w-full" />
              
              <p className="text-white/95 text-[15px] sm:text-[16px] leading-relaxed max-w-lg mb-8">
                Bringing over two decades of academic and industry leadership in computing, software engineering and AI research. Committed to building one of India's most application-focused engineering schools at PU Goa.
              </p>
              
              <a 
                href="https://in.linkedin.com/in/dr-anuradha-pillai-a35539318/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white hover:bg-gray-100 text-[#CF4055] px-6 py-3 rounded-full transition-colors w-max flex items-center gap-3 font-semibold"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Mid Heading */}
        <div className="text-center mb-12">
          <h2 className="text-ink section-subheading">
            Teaching Faculties
          </h2>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
          {displayedFaculties.map((faculty, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[16px] border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row h-auto items-stretch"
            >
              {/* Left: Faculty Image Placeholder */}
              <div className="w-full sm:w-[180px] lg:w-[240px] min-h-[240px] sm:min-h-full bg-gray-200 shrink-0 relative">
                {faculty.image && (
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    fill
                    className="object-cover object-top"
                  />
                )}
              </div>
              
              {/* Right: Faculty Details */}
              <div className="p-5 sm:p-6 flex flex-col justify-center flex-grow">
                <span className="bg-[#E73649] text-white text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full w-max mb-3 uppercase tracking-wide">
                  {faculty.role}
                </span>
                
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-ink text-[20px] sm:text-[22px] font-poppins leading-tight">
                    {faculty.name}
                  </h4>
                  {faculty.linkedin && (
                    <a href={faculty.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:text-[#005582] transition-colors shrink-0">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                </div>
                
                <p className="text-[#0CAADD] font-bold text-[13px] sm:text-[14px] mb-4">
                  {faculty.degree}
                </p>
                
                <hr className="border-gray-200 mb-3 w-full" />
                
                <div className="flex flex-col gap-1.5 text-gray-600 text-[12px] sm:text-[13px] leading-snug">
                  {faculty.faculty && (
                    <p><strong className="text-gray-800">Faculty:</strong> {faculty.faculty}</p>
                  )}
                  {faculty.department && (
                    <p><strong className="text-gray-800">Department:</strong> {faculty.department}</p>
                  )}
                  {faculty.experience && (
                    <p><strong className="text-gray-800">Experience:</strong> {faculty.experience}</p>
                  )}
                  {faculty.researchArea && (
                    <p><strong className="text-gray-800">Research Area:</strong> {faculty.researchArea}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {facultyList.length > 3 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-[#E73649] hover:bg-[#CF4055] text-white px-8 py-3 rounded-full transition-colors font-semibold text-[15px]"
            >
              {showAll ? "View Less Faculties" : "View All Faculties"}
            </button>
          </div>
        )}

        {/* Footer Text */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-gray-400 font-medium text-[13px] sm:text-[14px]">
            Full faculty directory available through the admissions office.
          </p>
        </div>

      </div>
    </section>
  );
}
