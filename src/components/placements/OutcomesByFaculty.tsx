"use client";

import React, { useState } from 'react';
import Image from 'next/image';

type FacultyName =
  | 'Engineering & CS'
  | 'Management'
  | 'Pharmacy'
  | 'Allied and Healthcare Sciences'
  | 'Hotel Management'
  | 'Diploma Engineering';

interface FacultyData {
  companies: { src: string; alt: string }[];
  highestPackage: string;
  avgPackage: string;
  recruiters: string;
}

const facultyData: Record<FacultyName, FacultyData> = {
  'Engineering & CS': {
    companies: [
      { src: '/dept-companies/engineering/TCS_Logo_(cropped).jpg',        alt: 'TCS' },
      { src: '/dept-companies/engineering/Microsoft_logo_(2012).svg.png', alt: 'Microsoft' },
      { src: '/dept-companies/engineering/Accenture.png',                 alt: 'Accenture' },
      { src: '/dept-companies/engineering/IBM.png',                       alt: 'IBM' },
      { src: '/dept-companies/engineering/Capgemini.png',                 alt: 'Capgemini' },
      { src: '/dept-companies/engineering/Cognizant.png',                 alt: 'Cognizant' },
      { src: '/dept-companies/engineering/WIPRO.png',                     alt: 'Wipro' },
      { src: '/dept-companies/engineering/HCL Tech.png',                  alt: 'HCL Tech' },
      { src: '/dept-companies/engineering/DELOITTE.png',                  alt: 'Deloitte' },
      { src: '/dept-companies/engineering/PWC.png',                       alt: 'PwC' },
      { src: '/dept-companies/engineering/Servicenow.png',                alt: 'ServiceNow' },
      { src: '/dept-companies/engineering/Mastek.png',                    alt: 'Mastek' },
      { src: '/dept-companies/engineering/Simform.png',                   alt: 'Simform' },
      { src: '/dept-companies/engineering/Sophos.png',                    alt: 'Sophos' },
    ],
    highestPackage: '60 LPA',
    avgPackage: '8-9 LPA',
    recruiters: '350+',
  },
  'Management': {
    companies: [
      { src: '/dept-companies/management/HDFC_Life_Logo.svg.png',        alt: 'HDFC Life' },
      { src: '/dept-companies/management/ZOMATO.png',                    alt: 'Zomato' },
      { src: '/dept-companies/management/Blinkit.png',                   alt: 'Blinkit' },
      { src: '/dept-companies/management/Berger.jpg',                    alt: 'Berger' },
      { src: '/dept-companies/management/PANTALOONS.png',                alt: 'Pantaloons' },
      { src: '/dept-companies/management/Bajaj Finance Limited.png',     alt: 'Bajaj Finance' },
      { src: '/dept-companies/management/IndusInd_Bank_SVG_Logo.svg.png',alt: 'IndusInd Bank' },
      { src: '/dept-companies/management/GODREJ.png',                    alt: 'Godrej' },
      { src: '/dept-companies/management/DMart.png',                     alt: 'DMart' },
      { src: '/dept-companies/management/SWIGGY.png',                    alt: 'Swiggy' },
      { src: '/dept-companies/management/Haldiram_s_2024_Logo.svg.png',  alt: "Haldiram's" },
      { src: '/dept-companies/management/Odoo-Logo.wine.png',            alt: 'Odoo' },
    ],
    highestPackage: '18 LPA',
    avgPackage: '5.5 LPA',
    recruiters: '200+',
  },
  'Pharmacy': {
    companies: [
      { src: '/dept-companies/pharmacy/Sun Pharma.png',                   alt: 'Sun Pharma' },
      { src: '/dept-companies/pharmacy/GSK.png',                          alt: 'GSK' },
      { src: '/dept-companies/pharmacy/Alembic Pharmaceutical.png',       alt: 'Alembic' },
      { src: '/dept-companies/pharmacy/Zydus_Lifesciences.svg.png',       alt: 'Zydus' },
      { src: '/dept-companies/pharmacy/Piramal Pharma Ltd.png',           alt: 'Piramal Pharma' },
      { src: '/dept-companies/pharmacy/Intas Pharma.jfif',                alt: 'Intas Pharma' },
      { src: '/dept-companies/pharmacy/cadila-pharmaceuticals6224.jpg',   alt: 'Cadila' },
    ],
    highestPackage: '12 LPA',
    avgPackage: '4.5 LPA',
    recruiters: '80+',
  },
  'Allied and Healthcare Sciences': {
    companies: [
      { src: '/dept-companies/allied/Alembic Pharmaceutical.png',  alt: 'Alembic' },
      { src: '/dept-companies/allied/Asian Paints.png',             alt: 'Asian Paints' },
      { src: '/dept-companies/allied/Piramal Pharma Ltd.png',       alt: 'Piramal Pharma' },
      { src: '/dept-companies/allied/Reliance Industries.png',      alt: 'Reliance' },
      { src: '/dept-companies/allied/Sun Pharma.png',               alt: 'Sun Pharma' },
      { src: '/dept-companies/allied/The_Lupin_Logo.svg.png',       alt: 'Lupin' },
      { src: '/dept-companies/allied/ZYDUS H.png',                  alt: 'Zydus' },
    ],
    highestPackage: '10 LPA',
    avgPackage: '4 LPA',
    recruiters: '60+',
  },
  'Hotel Management': {
    companies: [
      { src: '/dept-companies/hotel/Taj Hotel.png',                          alt: 'Taj Hotels' },
      { src: '/dept-companies/hotel/JW Marriott.png',                        alt: 'JW Marriott' },
      { src: '/dept-companies/hotel/Hyatt-Place-Logo.png',                   alt: 'Hyatt' },
      { src: '/dept-companies/hotel/Westin_Hotels_&_Resorts_logo.svg.png',   alt: 'Westin' },
      { src: '/dept-companies/hotel/Crone Plaza.jpg',                        alt: 'Crowne Plaza' },
      { src: '/dept-companies/hotel/Radisson Blue Fujairah.png',             alt: 'Radisson Blu' },
      { src: '/dept-companies/hotel/the_zuri_hotels__resorts_logo.jpg',      alt: 'Zuri Hotels' },
    ],
    highestPackage: '8 LPA',
    avgPackage: '3.5 LPA',
    recruiters: '50+',
  },
  'Diploma Engineering': {
    companies: [
      { src: '/dept-companies/diploma/LnT.png',                  alt: 'L&T' },
      { src: '/dept-companies/diploma/SIEMENS.png',              alt: 'Siemens' },
      { src: '/dept-companies/diploma/Reliance Industries.png',  alt: 'Reliance' },
      { src: '/dept-companies/diploma/GODREJ.png',               alt: 'Godrej' },
      { src: '/dept-companies/diploma/Atlas Copco.png',          alt: 'Atlas Copco' },
      { src: '/dept-companies/diploma/Daikin.png',               alt: 'Daikin' },
      { src: '/dept-companies/diploma/AMNS India.png',           alt: 'AMNS India' },
    ],
    highestPackage: '8 LPA',
    avgPackage: '3.5 LPA',
    recruiters: '80+',
  },
};

const tabs: FacultyName[] = [
  'Engineering & CS',
  'Management',
  'Pharmacy',
  'Allied and Healthcare Sciences',
  'Hotel Management',
  'Diploma Engineering',
];

export function OutcomesByFaculty() {
  const [activeTab, setActiveTab] = useState<FacultyName>('Engineering & CS');
  const data = facultyData[activeTab];

  return (
    <section className="bg-[#F0F2F5] sm: sm: px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-[#333333] mb-2 section-subheading">By faculty</h3>
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
                className={`px-6 py-3 rounded-full font-sans text-[17px] sm:text-[18px] transition-colors shrink-0 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-[#0CAADD] text-white shadow-sm'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#0CAADD] hover:text-[#0CAADD]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Main Card */}
        <div className="relative sm:mb-16 w-full mx-auto pt-8 lg:pt-12 px-8 lg:px-12 pb-4">
          {/* Faded Background Layer */}
          <div
            className="absolute inset-0 rounded-[24px] pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, #EAECEF 0%, #FFFFFF 30%, #FFFFFF 100%)',
              borderTop: '1px solid #D1D5DB',
              borderLeft: '1px solid #D1D5DB',
              borderRight: '1px solid #D1D5DB',
              WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
            }}
          />

          {/* Content Wrapper */}
          <div className="relative z-10 max-w-5xl mx-auto">
            {/* Card Title */}
            <h3 className="text-center text-[#E73649] font-sans font-bold text-[32px] sm:text-[44px] lg:text-[56px] tracking-tight mb-10">
              Placement Record 2025-26
            </h3>

            {/* Company Logos Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-x-8 gap-y-8 items-center justify-items-center mt-12 sm:mt-16">
              {data.companies.map((company) => (
                <div
                  key={company.alt}
                  className="relative w-full h-16 sm:h-20"
                >
                  <Image
                    src={company.src}
                    alt={company.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 25vw, (max-width: 1024px) 14vw, 10vw"
                  />
                </div>
              ))}
            </div>

            {/* Disclaimer Text */}
            <p className="text-center text-base sm:text-lg text-gray-500 font-sans opacity-80 my-16 sm:my-14">
              *Across the Parul University ecosystem.
            </p>

            {/* Stats Row */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 rounded-2xl overflow-hidden bg-white relative z-20"
              style={{ border: '1.5px solid #E5E7EB', boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}
            >
              {/* Highest Package */}
              <div className="flex flex-col items-center justify-center py-10 px-6 sm:py-14 sm:px-8">
                <span className="text-[#444444] font-sans text-xl sm:text-2xl font-semibold mb-3 text-center">
                  Highest Package
                </span>
                <span className="text-[#0CAADD] font-poppins font-bold text-[52px] sm:text-6xl xl:text-[72px] leading-none tracking-tight">
                  {data.highestPackage}
                </span>
              </div>

              {/* Average Package */}
              <div
                className="flex flex-col items-center justify-center py-10 px-6 sm:py-14 sm:px-8 border-y-[1.5px] sm:border-y-0 sm:border-x-[1.5px] border-[#E5E7EB]"
              >
                <span className="text-[#444444] font-sans text-xl sm:text-2xl font-semibold mb-3 text-center">
                  Average Package
                </span>
                <span className="text-[#0CAADD] font-poppins font-bold text-[52px] sm:text-6xl xl:text-[72px] leading-none tracking-tight">
                  {data.avgPackage}
                </span>
              </div>

              {/* Recruiters */}
              <div className="flex flex-col items-center justify-center py-10 px-6 sm:py-14 sm:px-8">
                <span className="text-[#444444] font-sans text-xl sm:text-2xl font-semibold mb-3 text-center">
                  Recruiters
                </span>
                <span className="text-[#0CAADD] font-poppins font-bold text-[52px] sm:text-6xl xl:text-[72px] leading-none tracking-tight">
                  {data.recruiters}
                </span>
              </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
