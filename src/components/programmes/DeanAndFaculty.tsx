"use client";

import React from "react";
import Image from "next/image";

const facultyList = [
  {
    role: "ASSOCIATE PROFESSOR",
    name: "Faculty Member",
    degree: "Ph.D., AI/ML",
    specialities: "Artificial Intelligence, Deep Learning",
    image: "/faculties/Engineering/Faculty.jpg",
  },
  {
    role: "ASSOCIATE PROFESSOR",
    name: "Faculty Member",
    degree: "Ph.D., AI/ML",
    specialities: "Artificial Intelligence, Deep Learning",
    image: "/faculties/Engineering/Faculty2.jpg",
  },
  {
    role: "ASSOCIATE PROFESSOR",
    name: "Faculty Member",
    degree: "Ph.D., AI/ML",
    specialities: "Artificial Intelligence, Deep Learning",
    image: "/faculties/Engineering/Faculty3.jpg",
  },
  {
    role: "ASSOCIATE PROFESSOR",
    name: "Faculty Member",
    degree: "Ph.D., AI/ML",
    specialities: "Artificial Intelligence, Deep Learning",
    image: "/faculties/Engineering/Faculty4.jpg",
  },
];

export default function DeanAndFaculty() {
  return (
    <section className="w-full bg-[#FAFAFA] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        
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
              
              <button className="bg-[#FCE34B] hover:bg-[#f8db27] text-ink font-bold text-[15px] px-8 py-3 rounded-full transition-colors w-max flex items-center gap-2">
                Explore More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mid Heading */}
        <div className="text-center mb-12">
          <h2 className="text-ink section-subheading">
            Research areas
          </h2>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {facultyList.map((faculty, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[16px] border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-row h-[180px]"
            >
              {/* Left: Faculty Image Placeholder */}
              <div className="w-[140px] sm:w-[160px] h-full bg-gray-200 shrink-0 relative">
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
                
                <h4 className="font-bold text-ink text-[20px] sm:text-[22px] font-poppins leading-tight mb-1">
                  {faculty.name}
                </h4>
                
                <p className="text-[#0CAADD] font-bold text-[13px] sm:text-[14px] mb-4">
                  {faculty.degree}
                </p>
                
                <hr className="border-gray-200 mb-3 w-full" />
                
                <p className="text-gray-500 text-[12px] sm:text-[13px] leading-snug">
                  {faculty.specialities}
                </p>
              </div>
            </div>
          ))}
        </div>

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
