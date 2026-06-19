import React from "react";

export default function GatewaySection() {
  return (
    <section className="sm: px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto font-[family-name:var(--font-poppins)] py-16 sm:py-24">
      <div 
        className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-cover bg-center py-20 sm:py-28 px-6 sm:px-12 text-center"
        style={{ backgroundImage: "url('/programmes/Gateway to Excellence.png')" }}
      >
        {/* Dark Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <span className="bg-[#FFD523] text-ink font-bold px-6 py-2.5 rounded-full text-[16px] sm:text-[16px] mb-6 shadow-sm">
            Admissions Open 2026
          </span>
          
          <h2 className="text-white mb-6 section-heading">
            Ready to apply, Or still deciding?
          </h2>
          
          <p className="text-white/95 max-w-4xl mx-auto section-body">
            Submit your application for 2026-27, talk to an admissions counsellor, or download the master brochure
            with fees, eligibility and entrance details for every programme.
          </p>
        </div>
      </div>
    </section>
  );
}
