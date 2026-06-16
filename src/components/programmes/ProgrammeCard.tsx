"use client";

import React, { useState } from 'react';
import BrochureModal from './BrochureModal';

type ProgrammeCardProps = {
  title: string;
  duration: string;
  eligibility: string;
  intake: string;
  mode: string;
  isNew?: boolean;
  level?: string;
  tuitionFee?: string;
};

export default function ProgrammeCard({ title, duration, eligibility, intake, mode, isNew, level, tuitionFee }: ProgrammeCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  let themeColor = "#0CAADD"; // Default Blue for Bachelor's
  
  const t = title.toLowerCase();
  const isMaster = t.includes("master") || t.includes("m.tech") || t.includes("m.pharm") || t.includes("mba") || t.includes("m.p.t") || t.includes("m.sc") || t.includes("msc");
  const isDiploma = t.includes("diploma") || t.includes("g.n.m") || t.includes("d.pharm");
  const isLateral = t.includes("lateral");
  
  if (level === "Master's" || isMaster) themeColor = "#E73649"; // Red
  else if (level === "Diploma" || isDiploma) themeColor = "#1C1C1D"; // Black
  else if (level === "Lateral Entry" || isLateral) themeColor = "#E73649"; // Red
  else if (level === "Bachelor's") themeColor = "#0CAADD"; // Blue

  // Only show "New and In-demand" if explicitly true, or automatically if it's a B.Tech specialization (contains "with" and "b.tech")
  const isSpecialization = t.includes("with");
  const isBtech = t.includes("b.tech") || t.includes("btech");
  const displayNew = isNew ?? (isSpecialization && isBtech);

  return (
    <div className="w-full flex-grow flex-shrink basis-[380px] min-w-[320px] max-w-[480px] relative mt-10 flex flex-col group">
      {/* Tab */}
      {displayNew && (
        <div 
          className="absolute -top-[38px] sm:-top-[42px] left-0 text-white font-bold px-8 pt-3 pb-12 rounded-tl-[24px] sm:rounded-tl-[32px] rounded-tr-[20px] text-[16px] sm:text-[18px] z-0 tracking-wide"
          style={{ backgroundColor: themeColor }}
        >
          New and In-demand
        </div>
      )}

      {/* Main Card */}
      <div className="relative z-10 bg-white rounded-[24px] sm:rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col flex-grow p-6 sm:p-7 transition-shadow hover:shadow-lg">
        <h4 className="font-poppins font-bold text-[20px] sm:text-[24px] leading-tight whitespace-pre-line text-ink mb-4">
          {title}
        </h4>
        
        {/* Divider */}
        <div className="w-full h-[2px] bg-ink mb-5"></div>

        {/* Pills */}
        <div className="flex flex-wrap gap-2.5 mb-6">
          <div className="bg-[#FCE34B] text-ink px-3 py-2 rounded-xl text-[13px] sm:text-[14px]">
            Duration: <span className="font-bold">{duration}</span>
          </div>
          <div className="bg-[#FCE34B] text-ink px-3 py-2 rounded-xl text-[13px] sm:text-[14px]">
            Intake: <span className="font-bold">{intake}</span>
          </div>
          <div className="bg-[#FCE34B] text-ink px-3 py-2 rounded-xl text-[13px] sm:text-[14px]">
            Mode: <span className="font-bold">{mode}</span>
          </div>
        </div>

        {/* Eligibility */}
        <div className="text-ink">
          <p className="font-bold text-[14px] sm:text-[15px] mb-1.5 opacity-90">Eligibility</p>
          <p className="text-[14px] sm:text-[15px] leading-snug whitespace-pre-wrap">{eligibility}</p>
        </div>

        <div className="flex-grow"></div>

        {/* Fees */}
        {tuitionFee ? (
          <div className="mt-6 mb-8">
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-ink">
              <p className="text-[13px] sm:text-[14px] mb-1 opacity-90">Tuition fees a year</p>
              <p className="font-bold text-[18px] sm:text-[20px] text-ink leading-snug whitespace-pre-wrap">{tuitionFee}</p>
            </div>
            <p className="text-[#E73649] text-[10px] sm:text-[11px] mt-2 leading-snug font-medium font-poppins">
              *Exclusive homestate scholarship available for Goan domicile students
            </p>
          </div>
        ) : (
          <div className="mb-8"></div>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3 mt-auto">
          <button 
            data-enquiry-trigger="true"
            className="text-white rounded-full px-6 py-2.5 font-bold text-[14px] sm:text-[15px] transition-transform hover:scale-105 shadow-sm"
            style={{ backgroundColor: themeColor }}
          >
            View Details
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="border border-ink text-ink hover:bg-gray-50 rounded-full px-6 py-2.5 font-bold text-[14px] sm:text-[15px] transition-transform hover:scale-105"
          >
            Brochure
          </button>
        </div>
      </div>

      <BrochureModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        programmeTitle={title} 
      />
    </div>
  );
}
