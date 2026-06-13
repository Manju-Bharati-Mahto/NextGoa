import React from 'react';
import Image from 'next/image';

export function InternshipsAndPPOs() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#F8F9FA]"
      style={{
        paddingTop: "clamp(5rem, 12.2vw, 600px)",
        paddingBottom: "clamp(5rem, 13.3vw, 600px)"
      }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Middle Solid Blue Background */}
        <div 
          className="absolute inset-x-0 bg-[#0CAADD]" 
          style={{ 
            top: "calc(clamp(50px, 8vw, 500px) - 1.5px)", 
            bottom: "calc(clamp(50px, 8vw, 500px) - 1.5px)" 
          }} 
        />
        {/* Top Wave */}
        <div 
          className="absolute top-0 left-0 right-0 overflow-hidden"
          style={{ height: "clamp(50px, 8vw, 500px)" }}
        >
          <div 
            className="absolute top-0 left-0 w-[400%] h-full animate-wave-flow"
            style={{
              backgroundImage: "url('/88-double.svg?v=3')",
              backgroundSize: "50% auto",
              backgroundPosition: "top left",
              backgroundRepeat: "repeat-x"
            }}
          />
        </div>
        {/* Bottom Wave */}
        <div 
          className="absolute bottom-0 left-0 right-0 overflow-hidden"
          style={{ height: "clamp(50px, 8vw, 500px)" }}
        >
          <div 
            className="absolute bottom-0 left-0 w-[400%] h-full animate-wave-flow"
            style={{
              backgroundImage: "url('/88-double.svg?v=3')",
              backgroundSize: "50% auto",
              backgroundPosition: "bottom left",
              backgroundRepeat: "repeat-x"
            }}
          />
        </div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-white mb-2 section-subheading">Internships & PPOs</h3>
          <h2 className="text-white tracking-tight mb-4 whitespace-normal md:whitespace-nowrap section-heading !text-3xl sm:!text-4xl md:!text-5xl leading-tight">
            Industry exposure begins in Year 1, not Year 4.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] xl:grid-cols-[58%_42%] gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6 lg:gap-8 h-full">
            {/* Where students intern Card */}
            <div className="bg-[#E73649] rounded-[25px] py-12 sm:py-14 lg:py-16 px-6 sm:px-8 lg:px-10 shadow-xl flex-grow flex flex-col justify-center">
              <h4 className="text-white font-poppins font-semibold text-[28px] sm:text-[32px] mb-8 leading-tight">Where students intern</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {/* Microsoft */}
                <div className="bg-white rounded-[10px] h-[88px] flex items-center justify-center p-2 shadow-sm relative overflow-hidden">
                  <Image src="/placements/generated_logos/microsoft_logo_1781222040487.png" alt="Microsoft" fill className="object-contain scale-[1.3] mix-blend-multiply brightness-[1.1] contrast-[1.2]" />
                </div>

                {/* Accenture */}
                <div className="bg-white rounded-[10px] h-[88px] flex items-center justify-center p-2 shadow-sm relative overflow-hidden">
                  <Image src="/placements/generated_logos/accenture_logo_1781222049096.png" alt="Accenture" fill className="object-contain scale-[1.3] mix-blend-multiply brightness-[1.1] contrast-[1.2]" />
                </div>

                {/* Adobe */}
                <div className="bg-white rounded-[10px] h-[88px] flex items-center justify-center p-2 shadow-sm relative overflow-hidden">
                   <Image src="/placements/generated_logos/adobe_logo_1781222059351.png" alt="Adobe" fill className="object-contain scale-[1.3] mix-blend-multiply brightness-[1.1] contrast-[1.2]" />
                </div>

                {/* Amazon */}
                <div className="bg-white rounded-[10px] h-[88px] flex items-center justify-center p-2 shadow-sm relative overflow-hidden">
                  <Image src="/placements/generated_logos/amazon_logo_1781222068278.png" alt="Amazon" fill className="object-contain scale-[1.3] mix-blend-multiply brightness-[1.1] contrast-[1.2]" />
                </div>

                {/* Google */}
                <div className="bg-white rounded-[10px] h-[88px] flex items-center justify-center p-2 shadow-sm relative overflow-hidden">
                  <Image src="/placements/generated_logos/google_logo_1781222078551.png" alt="Google" fill className="object-contain scale-[1.3] mix-blend-multiply brightness-[1.1] contrast-[1.2]" />
                </div>

                {/* Deloitte */}
                <div className="bg-white rounded-[10px] h-[88px] flex items-center justify-center p-2 shadow-sm relative overflow-hidden">
                  <Image src="/placements/generated_logos/deloitte_logo_1781222088859.png" alt="Deloitte" fill className="object-contain scale-[1.3] mix-blend-multiply brightness-[1.1] contrast-[1.2]" />
                </div>
              </div>
            </div>

            {/* Black CTA Card */}
            <div className="bg-[#1F1F1F] rounded-[25px] p-6 lg:p-8 flex flex-col shadow-xl">
              <div className="mb-5">
                <h4 className="text-white font-poppins font-bold text-[24px] sm:text-[28px] leading-tight mb-1">Your faculty. Your future.</h4>
                <p className="text-white/60 font-sans text-[14px]">Get the placement report for your discipline.</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button className="bg-[#0CAADD] text-white px-6 py-3 rounded-full font-poppins text-[14px] font-semibold hover:bg-opacity-90 transition-opacity whitespace-nowrap">Apply Now</button>
                <a href="https://wa.me/919558210145" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#00A859] text-white px-6 py-3 rounded-full font-poppins text-[14px] font-semibold hover:bg-opacity-90 transition-opacity whitespace-nowrap">Chat on WhatsApp</a>
                <button className="bg-[#E73649] text-white px-6 py-3 rounded-full font-poppins text-[14px] font-semibold hover:bg-opacity-90 transition-opacity flex items-center gap-2 whitespace-nowrap">
                  <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  1800 890 9090
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 lg:gap-8 justify-between">
            {/* PPO Card */}
            <div className="bg-[#E73649] rounded-[25px] p-6 sm:p-10 shadow-xl relative overflow-hidden flex-grow flex flex-col justify-center min-h-[220px]">
              <div className="relative z-10 w-full md:w-[60%]">
                <svg className="w-10 h-10 text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <h4 className="text-white font-poppins font-bold text-[32px] mb-3">PPO</h4>
                <p className="text-white/95 font-poppins font-semibold text-[15px] leading-relaxed">
                  A significant share of internship students convert to pre-placement offers. Conversion rate published in the annual placement report.
                </p>
              </div>
              {/* Desktop background */}
              <div className="hidden md:block">
                <Image src="/placements/ppo-shape.svg" alt="PPO Graphic" fill className="object-cover object-right" />
              </div>
            </div>

            {/* Embedded in curriculum Card */}
            <div className="bg-[#242424] rounded-[25px] p-6 sm:p-10 shadow-xl relative overflow-hidden flex-grow flex flex-col justify-center min-h-[220px]">
              <div className="relative z-10 w-full md:w-[60%]">
                <svg className="w-10 h-10 text-[#FEDB2F] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                <h4 className="text-white font-poppins font-bold text-[32px] mb-3">Embedded in curriculum</h4>
                <p className="text-white/80 font-poppins font-semibold text-[15px] leading-relaxed">
                  Internships are part of the programme - not an optional add-on. From Year 1 across faculties.
                </p>
              </div>
              {/* Desktop background */}
              <div className="hidden md:block">
                <Image src="/placements/embedded-shape.svg" alt="Embedded Curriculum Graphic" fill className="object-cover object-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
