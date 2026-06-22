"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { DeanData } from "@/data/programmes/types";

export function DynamicDeanAndFaculty({ data }: { data: DeanData }) {
  const [showAll, setShowAll] = useState(false);
  const displayedFaculties = data.faculty ? (showAll ? data.faculty : data.faculty.slice(0, 3)) : [];

  return (
    <section className="w-full bg-[#FAFAFA] py-8 sm:py-12">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-12">
        
        {/* Top Heading */}
        <div className="text-center mb-8">
          <h2 className="text-ink section-heading">
            Dean & Faculty
          </h2>
        </div>

        {/* Dean Banner */}
        <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto rounded-[24px] overflow-hidden shadow-md mb-12 bg-white">
          {/* Left: Image Placeholder */}
          <div className="w-full md:w-[45%] h-[300px] md:h-auto bg-gray-200 relative shrink-0">
            {data.image && (
              <Image
                src={data.image}
                alt={data.name}
                fill
                className="object-cover object-top"
              />
            )}
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
                {data.name}
              </h3>
              <p className="text-white/90 text-[16px] sm:text-[18px] font-medium">
                {data.role}
              </p>
              
              <hr className="border-white/20 my-6 w-full" />
              
              <p className="text-white/95 text-[15px] sm:text-[16px] leading-relaxed max-w-lg mb-8">
                {data.bio}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {data.orcid && (
                  <a 
                    href={data.orcid} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white hover:bg-gray-100 text-[#CF4055] px-6 py-3 rounded-full transition-colors w-max flex items-center gap-3 font-semibold"
                  >
                    <img src="/orchid.svg" alt="ORCID" className="w-5 h-5" />
                    View ORCID Profile
                  </a>
                )}
                {data.linkedin && (
                  <a 
                    href={data.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white hover:bg-gray-100 text-[#CF4055] px-6 py-3 rounded-full transition-colors w-max flex items-center gap-3 font-semibold"
                  >
                    <Icon icon="mdi:linkedin" className="w-5 h-5 rounded-md" />
                    Connect on LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {data.faculty && data.faculty.length > 0 && (
          <>
            {/* Mid Heading */}
            <div className="text-center mb-12">
              <h2 className="text-ink section-subheading">
                Teaching Faculties
              </h2>
            </div>

            {/* Faculty Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
              {displayedFaculties.map((facultyItem, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-[16px] border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row h-auto items-stretch"
                >
                  {/* Left: Faculty Image Placeholder */}
                  <div className="w-full sm:w-[180px] lg:w-[240px] min-h-[240px] sm:min-h-full bg-gray-200 shrink-0 relative">
                    {facultyItem.image && (
                      <Image
                        src={facultyItem.image}
                        alt={facultyItem.name}
                        fill
                        className="object-cover object-top"
                      />
                    )}
                  </div>
                  
                  {/* Right: Faculty Details */}
                  <div className="p-5 sm:p-6 flex flex-col justify-center flex-grow">
                    <span className="bg-[#E73649] text-white text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full w-max mb-3 uppercase tracking-wide">
                      {facultyItem.role}
                    </span>
                    
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-ink text-[20px] sm:text-[22px] font-poppins leading-tight">
                        {facultyItem.name}
                      </h4>
                    </div>
                    
                    <p className="text-[#0CAADD] font-bold text-[13px] sm:text-[14px] mb-4">
                      {facultyItem.degree}
                    </p>
                    
                    <hr className="border-gray-200 mb-3 w-full" />
                    
                    <div className="flex flex-col gap-1.5 text-gray-600 text-[12px] sm:text-[13px] leading-snug">
                      {facultyItem.faculty && (
                        <p><strong className="text-gray-800">Faculty:</strong> {facultyItem.faculty}</p>
                      )}
                      {facultyItem.department && (
                        <p><strong className="text-gray-800">Department:</strong> {facultyItem.department}</p>
                      )}
                      {facultyItem.experience && (
                        <p><strong className="text-gray-800">Experience:</strong> {facultyItem.experience}</p>
                      )}
                      {facultyItem.researchArea && (
                        <p><strong className="text-gray-800">Research Area:</strong> {facultyItem.researchArea}</p>
                      )}
                    </div>

                    {(facultyItem.linkedin || facultyItem.orcid) && (
                      <div className="flex gap-2 items-center mt-4 pt-3 border-t border-gray-100">
                        {facultyItem.orcid && (
                          <a href={facultyItem.orcid} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 hover:opacity-80 transition-opacity" aria-label="ORCID Profile">
                            <img src="/orchid.svg" alt="ORCID" className="w-6 h-6" />
                          </a>
                        )}
                        {facultyItem.linkedin && (
                          <a href={facultyItem.linkedin} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-[#E73649] hover:text-[#c42d3d] transition-colors" aria-label="LinkedIn Profile">
                            <Icon icon="mdi:linkedin" className="w-7 h-7 rounded-md" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {data.faculty.length > 3 && (
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
          </>
        )}

      </div>
    </section>
  );
}
