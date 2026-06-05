"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const facultyData = {
  'Engineering & CS': {
    roles: ['Software Engineer', 'Cyber Analyst', 'AI/ML Engineer', 'Cloud Architect'],
    destinations: ['MS USA', 'MS Germany', 'MEng Canada', 'IITs']
  },
  'Management': {
    roles: ['Business Analyst', 'Financial Manager', 'Marketing Strategist', 'HR Consultant'],
    destinations: ['MBA UK', 'MIM France', 'MBA USA', 'IIMs']
  },
  'Pharmacy': {
    roles: ['Clinical Pharmacist', 'Research Scientist', 'Regulatory Affairs', 'Quality Assurance'],
    destinations: ['MPharm UK', 'PharmD USA', 'MS Australia', 'NIPER']
  },
  'Nursing': {
    roles: ['Registered Nurse', 'Clinical Nurse Specialist', 'Nurse Educator', 'Healthcare Manager'],
    destinations: ['MSc UK', 'Nursing Canada', 'MS USA', 'AIIMS']
  },
  'Physiotherapy': {
    roles: ['Sports Physiotherapist', 'Rehabilitation Specialist', 'Orthopedic PT', 'Clinical Researcher'],
    destinations: ['MPT UK', 'MS Australia', 'DPT USA', 'Top Institutes']
  },
  'Allied Health': {
    roles: ['Lab Technologist', 'Radiographer', 'Dietician', 'Public Health Officer'],
    destinations: ['MPH UK', 'MSc Canada', 'Global Health Europe', 'Top Universities']
  },
  'Hotel Management': {
    roles: ['Hotel Manager', 'Executive Chef', 'Event Coordinator', 'Guest Relations'],
    destinations: ['MSc Switzerland', 'Hospitality UK', 'MBA France', 'Top Institutes']
  },
  'PhD': {
    roles: ['Research Scientist', 'University Professor', 'R&D Director', 'Postdoctoral Fellow'],
    destinations: ['PostDoc USA', 'Research UK', 'Fellowship Germany', 'Top Global Labs']
  }
};

type FacultyName = keyof typeof facultyData;
const tabs: FacultyName[] = [
  'Engineering & CS', 'Management', 'Pharmacy', 'Nursing', 
  'Physiotherapy', 'Allied Health', 'Hotel Management', 'PhD'
];

export function OutcomesByFaculty() {
  const [activeTab, setActiveTab] = useState<FacultyName>('Engineering & CS');

  const { roles, destinations } = facultyData[activeTab];

  return (
    <section className="bg-[#F8F9FA] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-[#333333] mb-2 section-subheading">By Faculty</h3>
          <h2 className="text-[#F14646] mb-4 section-heading">Outcomes by faculty.</h2>
          <p className="text-[#666666] max-w-2xl mx-auto section-body">
            Every faculty has its own recruiter network and graduate destinations. Pick yours.
          </p>
        </div>

        {/* Tabs */}
        <div className="w-full overflow-x-auto scrollbar-hide -mx-4 px-4 sm:-mx-8 sm:px-8 md:mx-0 md:px-0 py-1.5 mb-10">
          <div className="flex flex-nowrap md:flex-wrap md:justify-center gap-3 min-w-max md:min-w-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full font-sans text-[15px] transition-colors shrink-0 whitespace-nowrap ${
                  activeTab === tab 
                    ? 'bg-[#F14646] text-white shadow-sm' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#007BFF] hover:text-[#007BFF]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[4.5fr_6.5fr] gap-6 lg:gap-8 mb-16 items-stretch">
          
          {/* Left Card */}
          <div className="bg-[#FCFCFC] rounded-[24px] border border-gray-200 p-6 lg:p-8 shadow-sm flex flex-col justify-between">
            {/* Top Recruiters */}
            <div className="mb-4">
              <h4 className="text-[#1A1A1A] font-poppins font-semibold text-[19px] mb-3 text-center">Top recruiters</h4>
              <div className="w-full relative h-16 sm:h-20">
                <Image 
                  src="/placements/169.svg" 
                  alt="Top Recruiters" 
                  fill 
                  className="object-contain object-center" 
                />
              </div>
            </div>

            {/* Roles */}
            <div className="mb-4">
              <h4 className="text-[#1A1A1A] font-poppins font-semibold text-[19px] mb-3 text-center">Roles</h4>
              <div className="flex flex-wrap justify-center gap-2.5">
                {roles.map((role) => (
                  <span key={role} className="px-3.5 py-1.5 rounded-full border border-gray-300 text-gray-700 text-xs font-sans tracking-wide">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Higher studies destinations */}
            <div>
              <h4 className="text-[#1A1A1A] font-poppins font-semibold text-[19px] mb-3 text-center">Higher studies destinations</h4>
              <div className="flex flex-wrap justify-center gap-2.5">
                {destinations.map((dest) => (
                  <span key={dest} className="px-3.5 py-1.5 rounded-full bg-[#FFEBEB] text-[#F14646] text-xs font-medium font-sans">
                    {dest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="w-full flex items-center justify-center">
             <Image 
               src="/placements/suhani.svg" 
               alt="Suhani Shah Alumni Snapshot" 
               width={655}
               height={345}
               className="w-full h-auto object-contain"
             />
          </div>

        </div>

        {/* Footnote */}
        <p className="text-center text-gray-400 font-sans text-sm">
          *Across the Parul University ecosystem.
        </p>

      </div>
    </section>
  );
}
