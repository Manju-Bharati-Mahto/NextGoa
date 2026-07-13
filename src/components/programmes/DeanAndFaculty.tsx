"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

import { FacultyMember } from "@/data/programmes/types";

const facultyList: FacultyMember[] = [
  {
    "role": "Associate Professor",
    "name": "Dr. Dhaval Nimavat",
    "degree": "Ph.D.",
    "faculty": "Faculty of Engineering, IT & CS",
    "department": "Engineering ,IT & CS",
    "experience": "17 Years 9 Months",
    "researchArea": "Internet of Things, Cloud Security, iOS Application Development, Android Application Development",
    "image": "/faculties/Dr.-Dhaval-Nimavat.jpg",
    "linkedin": "https://www.linkedin.com/in/dhavalnimavat",
    "orcid": "https://orcid.org/0000-0003-2233-7336"
  },
  {
    "role": "Associate Professor",
    "name": "Dr. K. Vasudevan",
    "degree": "Ph.D.",
    "faculty": "Faculty of Engineering, IT & CS",
    "department": "Engineering ,IT & CS",
    "experience": "16 Years 5 Months",
    "researchArea": "Power Electronics, Renewable Energy and Distribution Generation",
    "image": "/faculties/Dr.-K.-Vasudevan.jpg",
    "linkedin": "https://www.linkedin.com/in/dr-vasudevan-k-m-e-ph-d-a1483549/",
    "orcid": "https://orcid.org/0000-0002-0508-099X"
  },
  {
    "role": "Assistant Professor",
    "name": "Dr. Ashok Baldev Tejwani",
    "degree": "Ph.D.",
    "faculty": "Faculty of Engineering, IT & CS",
    "department": "Engineering ,IT & CS",
    "experience": "18 Years 1 Month",
    "researchArea": "Mathematical Modeling",
    "image": "/faculties/Dr.-Ashok-Baldev-Tejwani.jpg"
  },
  {
    "role": "Assistant Professor",
    "name": "Dr. Radhika Sharma",
    "degree": "Ph.D.",
    "faculty": "Faculty of Engineering, IT & CS",
    "department": "Engineering ,IT & CS",
    "experience": "",
    "researchArea": "Mathematical Modeling",
    "image": "/faculties/Dr.-Radhika-Sharma.jpg"
  },
  {
    "role": "Assistant Professor",
    "name": "Ms. Patta mani chandana",
    "degree": "M.Sc.",
    "faculty": "Faculty of Engineering, IT & CS",
    "department": "Engineering ,IT & CS",
    "experience": "",
    "researchArea": "Mathematical Modeling",
    "image": "/faculties/Ms.-Patta-mani-chandana.jpg"
  },
  {
    "role": "Assistant Professor",
    "name": "Ms. Namratha Singh",
    "degree": "MCA",
    "faculty": "Faculty of Engineering, IT & CS",
    "department": "Engineering ,IT & CS",
    "experience": "",
    "researchArea": "AI  / ML",
    "image": "/faculties/Ms.-Namratha-Singh.jpg",
    "linkedin": "https://www.linkedin.com/in/namratasingh005/"
  },
  {
    "role": "Assistant Professor",
    "name": "Ms. Harsha Dessai",
    "degree": "M.E.(I.T)",
    "faculty": "Faculty of Engineering, IT & CS",
    "department": "Engineering ,IT & CS",
    "experience": "2 Years 10 Months",
    "researchArea": "",
    "image": "/faculties/Ms.-Harsha-Dessai.jpg",
    "linkedin": "https://www.linkedin.com/in/harsha-dessai97"
  },
  {
    "role": "Assistant Professor",
    "name": "Ms. Anupama Biswas",
    "degree": "M.A",
    "faculty": "Faculty of Engineering, IT & CS",
    "department": "Engineering ,IT & CS",
    "experience": "2 Years 4 Months",
    "researchArea": "English Language Education",
    "image": "/faculties/Ms.-Anupama-Biswas.jpg",
    "linkedin": "http://www.linkedin.com/in/anupama-biswas1998"
  },
  {
    "role": "Assistant Professor",
    "name": "Mr. Somnath Bhattacharya",
    "degree": "MCA",
    "faculty": "Faculty of Engineering, IT & CS",
    "department": "Engineering ,IT & CS",
    "experience": "1 Year 9 Months",
    "researchArea": "Data Science with Python",
    "image": "/faculties/Mr.-Somnath-Bhattacharya.jpg"
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
                <Icon icon="mdi:linkedin" className="w-5 h-5 rounded-md" />
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

                {(faculty.linkedin || faculty.orcid) && (
                  <div className="flex gap-2 items-center mt-4 pt-3 border-t border-gray-100">
                    {faculty.orcid && (
                      <a href={faculty.orcid} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 hover:opacity-80 transition-opacity" aria-label="ORCID Profile">
                        <img src="/orchid.svg" alt="ORCID" className="w-6 h-6" />
                      </a>
                    )}
                    {faculty.linkedin && (
                      <a href={faculty.linkedin} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-[#E73649] hover:text-[#c42d3d] transition-colors" aria-label="LinkedIn Profile">
                        <Icon icon="mdi:linkedin" className="w-7 h-7 rounded-md" />
                      </a>
                    )}
                  </div>
                )}
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
