import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function StudyAbroadCTA() {
  return (
    <section className={`pb-24 bg-[#f8f8f8] px-4 sm:px-6 lg:px-8 w-full ${poppins.className}`} style={poppins.style}>
      <div
        className="relative w-full max-w-[1400px] mx-auto rounded-[24px] sm:rounded-[32px] overflow-hidden bg-cover bg-center py-20 sm:py-24 px-6 sm:px-12 text-center shadow-lg"
        style={{ backgroundImage: "url('/programmes/Gateway to Excellence.png')" }}
      >
        {/* Dark Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <span className="bg-[#FFD523] text-black font-semibold px-6 py-2.5 rounded-full text-[14px] sm:text-[16px] mb-8 shadow-sm">
            Admissions Open 2026
          </span>

          <h2 className="text-white text-3xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-8 leading-tight">
            Apply for 2026-27 and begin your Global Placement Story!
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-5 gap-3 w-full sm:w-auto">
            <a
              href="#enquiry"
              className="w-full sm:w-auto block sm:inline-block text-center bg-[#eb3b47] text-white px-8 py-3.5 rounded-full font-bold text-[16px] shadow-md hover:bg-[#d6323c] transition-colors whitespace-nowrap"
              style={{ letterSpacing: '0.3px' }}
            >
              Apply Now
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto block sm:inline-block text-center bg-white/20 border border-white/40 backdrop-blur-md text-white px-8 py-3.5 rounded-full font-bold text-[16px] shadow-md hover:bg-white/30 transition-colors whitespace-nowrap"
              style={{ letterSpacing: '0.3px' }}
            >
              Chat on WhatsApp
            </a>
            <a
              href="tel:18008909090"
              className="w-full sm:w-auto flex sm:inline-flex bg-white/20 border border-white/40 backdrop-blur-md text-white px-8 py-3.5 rounded-full font-bold text-[16px] shadow-md hover:bg-white/30 transition-colors items-center justify-center gap-2 whitespace-nowrap"
              style={{ letterSpacing: '0.3px' }}
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              1800 890 9090
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
