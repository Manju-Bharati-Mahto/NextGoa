"use client";

import React, { useState } from "react";

type ApplicantType = "all" | "ug" | "pg" | "international";

type ChecklistItem = {
  main: string;
  sub?: string;
};

type ApplicantData = {
  academic: ChecklistItem[];
  identity: ChecklistItem[];
  supporting: ChecklistItem[];
};

const DATA: Record<ApplicantType, ApplicantData> = {
  ug: {
    academic: [
      { main: "Class 10 Mark Sheet & Certificate" },
      { main: "Class 12 Mark Sheet & Certificate", sub: "Or Diploma for lateral entry" },
      { main: "Transfer Certificate from last institution" },
      { main: "Migration Certificate", sub: "If applicable" },
    ],
    identity: [
      { main: "Aadhaar card or government-issued photo ID" },
      { main: "Six recent passport-size photographs" },
    ],
    supporting: [
      { main: "Category certificate (SC/ST/OBC/EWS)" },
      { main: "Domicile certificate (Goa applicants)" },
    ]
  },
  pg: {
    academic: [
      { main: "Class 10 Mark Sheet & Certificate" },
      { main: "Class 12 Mark Sheet & Certificate", sub: "Or Diploma for lateral entry" },
      { main: "Graduation Certificate & Transcripts" },
      { main: "Transfer Certificate from last institution" },
      { main: "Migration Certificate", sub: "If applicable" },
    ],
    identity: [
      { main: "Aadhaar card or government-issued photo ID" },
      { main: "Six recent passport-size photographs" },
    ],
    supporting: [
      { main: "Category certificate (SC/ST/OBC/EWS)" },
      { main: "Domicile certificate (Goa applicants)" },
    ]
  },
  international: {
    academic: [
      { main: "Transfer Certificate from last institution" },
    ],
    identity: [
      { main: "Six recent passport-size photographs" },
      { main: "Passport copy" },
    ],
    supporting: [
      { main: "Transcript evaluation report" },
      { main: "No-Objection letter", sub: "Where applicable" },
    ]
  },
  all: {
    academic: [
      { main: "Class 10 Mark Sheet & Certificate" },
      { main: "Class 12 Mark Sheet & Certificate", sub: "Or Diploma for lateral entry" },
      { main: "Graduation Certificate & Transcripts" },
      { main: "Transfer Certificate from last institution" },
      { main: "Migration Certificate", sub: "If applicable" },
    ],
    identity: [
      { main: "Aadhaar card or government-issued photo ID" },
      { main: "Passport copy (International)" },
      { main: "Six recent passport-size photographs" },
    ],
    supporting: [
      { main: "Category certificate (SC/ST/OBC/EWS)" },
      { main: "Domicile certificate (Goa applicants)" },
      { main: "Transcript evaluation report (International)" },
    ]
  }
};

export function DocumentsChecklist() {
  const [activeTab, setActiveTab] = useState<ApplicantType>("ug");
  
  const currentData = DATA[activeTab];

  return (
    <section className="w-full bg-[#fcfcfc] py-20 px-4 sm:px-8 xl:px-16">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-ink mb-2 section-subheading">
            Documents checklist
          </h2>
          <h3 className="text-[#ee364f] mb-4 section-heading">
            What to bring on admission day.
          </h3>
          <p className="text-ink/80 section-body">
            Grouped by purpose, filtered by your applicant type. Tick items off as you prepare.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-gray-200 bg-white p-1.5 shadow-sm">
            {(["all", "ug", "pg", "international"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-6 py-2 text-[14px] font-semibold transition-colors ${
                  activeTab === tab ? "bg-[#e73649] text-white" : "text-ink hover:bg-gray-50"
                }`}
              >
                {tab === "all" ? "All applicants" : tab === "ug" ? "UG" : tab === "pg" ? "PG" : "International"}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          
          {/* Card 1: Academic Records */}
          <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col h-full border border-gray-100">
            <div className="bg-[#fb4155] p-5 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="currentColor" className="text-white">
                <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/>
              </svg>
              <h3 className="text-white font-poppins font-semibold text-[22px]">Academic Records</h3>
            </div>
            <div className="p-4 lg:p-6 flex-grow">
              <ul className="divide-y divide-gray-100">
                {currentData.academic.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 py-3 sm:py-4">
                    <div className="w-6 h-6 rounded-full bg-[#10b981]/15 flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></div>
                    </div>
                    <div>
                      <p className="text-ink font-medium text-[16px] leading-snug">
                        {item.main} {item.sub && <span className="text-ink/60 font-normal text-[14px]">({item.sub})</span>}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: Identity & Photos */}
          <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col h-full border border-gray-100">
            <div className="bg-[#FEDB2F] p-5 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="currentColor" className="text-ink">
                <path d="M480-120q-125-34-192.5-132T220-466v-214l260-96 260 96v214q0 116-67.5 214T480-120Zm-60-246 226-226-42-42-184 184-86-86-42 42 128 128Z"/>
              </svg>
              <h3 className="text-ink font-poppins font-semibold text-[22px]">Identity & Photos</h3>
            </div>
            <div className="p-4 lg:p-6 flex-grow">
              <ul className="divide-y divide-gray-100">
                {currentData.identity.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 py-3 sm:py-4">
                    <div className="w-6 h-6 rounded-full bg-[#10b981]/15 flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></div>
                    </div>
                    <div>
                      <p className="text-ink font-medium text-[16px] leading-snug">
                        {item.main} {item.sub && <span className="text-ink/60 font-normal text-[14px]">({item.sub})</span>}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 3: Supporting */}
          <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col h-full border border-gray-100">
            <div className="bg-[#0caadd] p-5 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="currentColor" className="text-white">
                <path d="M480-200 160-360v-109l320 160 320-160v109L480-200Zm0-156L160-516l320-160 320 160-320 160Z"/>
              </svg>
              <h3 className="text-white font-poppins font-semibold text-[22px]">Supporting</h3>
            </div>
            <div className="p-4 lg:p-6 flex-grow">
              <ul className="divide-y divide-gray-100">
                {currentData.supporting.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 py-3 sm:py-4">
                    <div className="w-6 h-6 rounded-full bg-[#10b981]/15 flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></div>
                    </div>
                    <div>
                      <p className="text-ink font-medium text-[16px] leading-snug">
                        {item.main} {item.sub && <span className="text-ink/60 font-normal text-[14px]">({item.sub})</span>}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row mt-8 shadow-sm rounded-[24px]">
          {/* Left Box */}
          <div className="bg-white border border-gray-200 md:border-r-0 rounded-t-[24px] md:rounded-tr-none md:rounded-l-[24px] p-6 lg:p-8 flex items-start gap-4 flex-grow md:w-[60%]">
            <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="currentColor" className="text-[#0caadd] mt-1 shrink-0">
              <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
            </svg>
            <div>
              <h4 className="font-poppins font-semibold text-[18px] text-ink mb-1">Originals required:</h4>
              <p className="font-[family-name:var(--font-poppins)] text-[14px] lg:text-[15px] text-ink/80 leading-relaxed">
                All originals must be presented for physical verification at the time of admission. Self-attested photocopies are also accepted for upload.
              </p>
            </div>
          </div>

          {/* Right Box */}
          <div className="bg-[#e73649] rounded-b-[24px] md:rounded-bl-none md:rounded-r-[24px] p-6 lg:p-8 flex flex-col items-center justify-center text-center shadow-sm md:w-[40%]">
            <h4 className="font-poppins font-semibold text-[24px] sm:text-[28px] text-white mb-4">Quick reference</h4>
            <button className="bg-[#FEDB2F] hover:bg-[#e5c52a] text-ink font-bold text-[15px] sm:text-[16px] px-6 py-3 rounded-full flex items-center gap-3 transition-colors shadow-sm w-full sm:w-auto justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor">
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/>
              </svg>
              Download printable checklist (PDF)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
