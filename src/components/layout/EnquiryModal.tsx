"use client";

import { useEffect, useState } from "react";

export function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest("a");
      // If the link points exactly to #enquiry (or has it at the end)
      if (target && target.getAttribute("href")?.endsWith("#enquiry")) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener("click", handleClick);
    
    if (typeof window !== "undefined" && window.location.hash === "#enquiry") {
      setIsOpen(true);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const close = () => {
    setIsOpen(false);
    if (window.location.hash === "#enquiry") {
      window.history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  };

  // Prevent scroll when modal is open
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={close} 
        aria-hidden="true" 
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-[500px] rounded-[24px] bg-white p-8 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200 max-h-[100dvh] overflow-y-auto">
        <button 
          onClick={close}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <h2 className="mb-8 text-center font-sans text-3xl font-bold tracking-tight text-ink">
          Request a callback
        </h2>

        <form className="space-y-5 font-[family-name:var(--font-poppins)]" onSubmit={(e) => { e.preventDefault(); close(); }}>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="name" className="text-[14px] font-medium text-ink">Name*</label>
              <input type="text" id="name" required className="w-full rounded-md border border-gray-200 bg-[#FAFAFA] px-4 py-2.5 outline-none focus:border-[#11B1E3] focus:ring-1 focus:ring-[#11B1E3] transition-all" />
            </div>
            <div className="space-y-1">
              <label htmlFor="mobile" className="text-[14px] font-medium text-ink">Mobile Number*</label>
              <input type="tel" id="mobile" required className="w-full rounded-md border border-gray-200 bg-[#FAFAFA] px-4 py-2.5 outline-none focus:border-[#11B1E3] focus:ring-1 focus:ring-[#11B1E3] transition-all" />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="text-[14px] font-medium text-ink">Email*</label>
            <input type="email" id="email" required className="w-full rounded-md border border-gray-200 bg-[#FAFAFA] px-4 py-2.5 outline-none focus:border-[#11B1E3] focus:ring-1 focus:ring-[#11B1E3] transition-all" />
          </div>

          <div className="space-y-1 relative">
            <label htmlFor="programme" className="text-[14px] font-medium text-ink">Programme of Interest *</label>
            <select id="programme" required className="w-full appearance-none rounded-md border border-gray-200 bg-[#FAFAFA] px-4 py-2.5 text-ink outline-none focus:border-[#11B1E3] focus:ring-1 focus:ring-[#11B1E3] transition-all">
              <option value="" disabled selected hidden className="text-gray-400">Select a programme</option>
              <option value="engineering">Engineering, IT & CS</option>
              <option value="management">Management Studies</option>
              <option value="pharmacy">Pharmacy</option>
              <option value="nursing">Nursing</option>
              <option value="hotel-management">Hotel Management</option>
              <option value="physiotherapy">Physiotherapy</option>
            </select>
            {/* Custom dropdown arrow to match the design better */}
            <div className="pointer-events-none absolute right-4 top-[38px] text-gray-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="marks" className="text-[14px] font-medium text-ink">Class 12 / Last %</label>
              <input type="text" id="marks" className="w-full rounded-md border border-gray-200 bg-[#FAFAFA] px-4 py-2.5 outline-none focus:border-[#11B1E3] focus:ring-1 focus:ring-[#11B1E3] transition-all" />
            </div>
            <div className="space-y-1">
              <label htmlFor="city" className="text-[14px] font-medium text-ink">Your City *</label>
              <input type="text" id="city" required className="w-full rounded-md border border-gray-200 bg-[#FAFAFA] px-4 py-2.5 outline-none focus:border-[#11B1E3] focus:ring-1 focus:ring-[#11B1E3] transition-all" />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="help" className="text-[14px] font-medium text-ink">How can we help? <span className="text-gray-400 font-normal">(optional)</span></label>
            <textarea id="help" rows={3} className="w-full resize-none rounded-md border border-gray-200 bg-[#FAFAFA] px-4 py-2.5 outline-none focus:border-[#11B1E3] focus:ring-1 focus:ring-[#11B1E3] transition-all"></textarea>
          </div>

          <button type="submit" className="mt-2 w-full rounded-full bg-[#11B1E3] py-3.5 font-bold text-white transition-colors hover:bg-[#11B1E3]/90 text-[18px]">
            Request a Callback
          </button>
          
          <p className="mt-4 text-center text-[11px] text-gray-400">
            We'll only use this to respond to your enquiry. No spam. No sharing.
          </p>
        </form>
      </div>
    </div>
  );
}
