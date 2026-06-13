"use client";

import React, { useState, useEffect } from 'react';

interface DownloadBrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DownloadBrochureModal({ isOpen, onClose }: DownloadBrochureModalProps) {
  const [step, setStep] = useState(1);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStep(1);
      setSelectedProgram("");
      setSelectedTimeline("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful download/submit
    
    // Trigger brochure download
    const link = document.createElement('a');
    link.href = '/documents/Prospectus_AY_2026_27.pdf';
    link.download = 'Prospectus A.Y. 2026-27.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert("Thank you! Your brochure is downloading.");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-gray-100">
          <div
            className="h-full bg-[#e73649] transition-all duration-300 ease-in-out"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        <div className="p-6 sm:p-8">
          <div className="mb-8">
            <span className="text-[#e73649] font-bold text-sm tracking-wider uppercase mb-2 block font-poppins">
              Step {step} of 3
            </span>
            <h3 className="text-2xl font-bold text-ink leading-tight">
              {step === 1 && "What program are you interested in?"}
              {step === 2 && "When do you plan to start?"}
              {step === 3 && "Where should we send the brochure?"}
            </h3>
          </div>

          {step === 1 && (
            <div className="flex flex-col gap-3">
              {['Undergraduate (B.Tech, BBA, etc.)', 'Postgraduate (MBA, etc.)', 'Diploma / Certificate', 'PhD / Research'].map((prog) => (
                <button
                  key={prog}
                  onClick={() => {
                    setSelectedProgram(prog);
                    handleNext();
                  }}
                  className="w-full text-left px-5 py-4 rounded-xl border-2 border-gray-100 hover:border-[#e73649] hover:bg-red-50/50 transition-all font-medium text-ink group flex justify-between items-center"
                >
                  {prog}
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-[#e73649] transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-3">
              {['This Year (2026)', 'Next Year (2027)', '2028 or later', 'Still Deciding'].map((time) => (
                <button
                  key={time}
                  onClick={() => {
                    setSelectedTimeline(time);
                    handleNext();
                  }}
                  className="w-full text-left px-5 py-4 rounded-xl border-2 border-gray-100 hover:border-[#e73649] hover:bg-red-50/50 transition-all font-medium text-ink group flex justify-between items-center"
                >
                  {time}
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-[#e73649] transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              ))}
              <button
                onClick={() => setStep(1)}
                className="mt-4 text-sm text-gray-500 hover:text-ink transition-colors font-medium text-center"
              >
                Go Back
              </button>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#e73649]/20 focus:border-[#e73649] transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#e73649]/20 focus:border-[#e73649] transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#e73649]/20 focus:border-[#e73649] transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <button
                  type="submit"
                  className="w-full bg-[#e73649] hover:bg-[#ff3148] text-white font-medium text-lg py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors font-poppins"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Download Brochure
                </button>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-sm text-gray-500 hover:text-ink transition-colors font-medium text-center"
                >
                  Go Back
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
