"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export type PartnerDetails = {
  name: string;
  src: string;
  bg: string;
  scale?: string;
  details?: {
    faculties: string[];
    pathways: string[];
    desc: string;
  };
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  partner: PartnerDetails | null;
};

export default function PartnerDetailsModal({ isOpen, onClose, partner }: Props) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when open
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

  if (!isOpen || !partner) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 ${poppins.className}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div 
        className="relative bg-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#f0424e]"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header - Partner Logo */}
        <div 
          className="w-full h-40 sm:h-48 flex items-center justify-center p-8 relative border-b border-gray-100"
          style={{ backgroundColor: partner.bg === 'white' ? '#f8f9fa' : partner.bg }}
        >
          <div className="relative w-full max-w-[280px] h-full flex items-center justify-center">
            <Image
              src={partner.src}
              alt={partner.name}
              fill
              className={`object-contain ${partner.scale || 'scale-100'}`}
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{partner.name}</h2>
          
          {partner.details ? (
            <>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                {partner.details.desc}
              </p>

              <div className="space-y-8">
                {/* Faculties Section */}
                <div>
                  <h3 className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#f0424e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Faculties Served
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {partner.details.faculties.map((faculty, idx) => (
                      <span 
                        key={idx}
                        className="bg-blue-50 text-blue-700 font-semibold px-4 py-1.5 rounded-full text-sm border border-blue-100"
                      >
                        {faculty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pathways Section */}
                <div>
                  <h3 className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#f0424e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    Available Pathways
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {partner.details.pathways.map((pathway, idx) => (
                      <span 
                        key={idx}
                        className="bg-red-50 text-[#f0424e] font-semibold px-4 py-1.5 rounded-full text-sm border border-red-100"
                      >
                        {pathway}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p className="text-gray-500 italic">Detailed information about courses and pathways is not available at the moment. Please contact our counsellors.</p>
          )}

          {/* Action Footer */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-end">
            <button 
              onClick={onClose}
              className="px-6 py-2.5 text-gray-600 font-semibold hover:bg-gray-100 rounded-full transition-colors"
            >
              Cancel
            </button>
            <a 
              href="#enquiry"
              onClick={onClose}
              data-enquiry-trigger="true"
              className="bg-[#f0424e] text-white font-bold px-8 py-2.5 rounded-full hover:bg-[#d63a44] transition-colors shadow-sm text-center"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
