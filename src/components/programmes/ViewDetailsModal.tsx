"use client";

import React, { useEffect } from "react";

type ViewDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  programmeTitle: string;
  eligibility?: string;
  duration?: string;
  note?: string;
};

export default function ViewDetailsModal({ isOpen, onClose, programmeTitle, eligibility, duration, note }: ViewDetailsModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 text-left">
      <div className="absolute inset-0 bg-[#0A2540]/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-[900px] bg-white rounded-[24px] shadow-2xl z-10 flex flex-col overflow-hidden max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full p-2 text-gray-500 bg-gray-100 hover:bg-gray-200 transition-all"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Content */}
        <div className="p-8 sm:p-12 overflow-y-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 leading-tight font-poppins text-ink pr-10">
            {programmeTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="md:col-span-2 space-y-6">
              {eligibility && (
                <div>
                  <h3 className="font-bold text-[18px] mb-3 text-ink">Eligibility Criteria:</h3>
                  <div className="text-[14px] leading-relaxed text-gray-700 whitespace-pre-wrap">
                    {eligibility}
                  </div>
                </div>
              )}

              {note && (
                <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                  <p className="text-[14px] leading-relaxed font-medium text-ink whitespace-pre-wrap">
                    <span className="font-bold text-[#0CAADD]">Note:</span> {note}
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-6 bg-gray-50 p-6 rounded-[20px] h-fit border border-gray-100">
              {duration && (
                <div>
                  <h4 className="font-bold text-[13px] uppercase tracking-wider mb-1 text-ink/50">Duration</h4>
                  <p className="font-bold text-[18px] text-ink">{duration}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
