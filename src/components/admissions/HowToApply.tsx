import React from "react";
import Image from "next/image";
import Link from "next/link";

export function HowToApply() {
  return (
    <section className="w-full bg-[#faf9f6] sm: px-4 sm:px-8 xl:px-16 py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-ink mb-2 section-subheading">How to Apply</h2>
          <h3 className="text-brand mb-4 section-heading">Follow These 4 Simple Steps</h3>
          <p className="text-ink section-body">Choose what suits you. Every channel reaches to our admissions team!</p>
        </div>

        {/* Desktop Layout (md and up) */}
        <div className="hidden md:flex flex-col gap-6">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-6 w-full justify-center text-left">
            {/* Yellow Card (Callback) */}
            <div className="relative w-full md:w-[36%] min-h-[250px] rounded-[20px] overflow-hidden shadow-sm flex items-start">
              <img 
                src="/admissions/step2.svg" 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="w-full flex justify-end p-6 sm:pt-12 sm:pr-8 relative z-10">
                <div className="w-[55%]">
                  <h4 className="text-3xl font-semibold text-ink mb-2">Callback</h4>
                  <p className="text-ink/80 text-base leading-relaxed mb-4 pr-2 font-poppins">
                    Drop your details below - a counsellor will call you within 24 hours.
                  </p>
                  <button type="button" data-enquiry-trigger="true" className="inline-block bg-[#00aee8] hover:bg-[#0095c7] text-white text-base font-semibold py-2 px-5 rounded-full transition-colors font-poppins">
                    Request a Callback
                  </button>
                </div>
              </div>
            </div>
            
            {/* Blue Card (Digital) */}
            <div className="relative w-full md:w-[64%] min-h-[250px] rounded-[20px] overflow-hidden shadow-sm flex items-start">
              <img 
                src="/admissions/step3.svg" 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="w-full flex justify-end p-6 sm:pt-12 sm:pr-12 relative z-10">
                <div className="w-[50%]">
                  <h4 className="text-4xl font-semibold text-white mb-3">Digital</h4>
                  <p className="text-white/90 text-lg leading-relaxed mb-5 pr-4 font-poppins">
                    Apply through the official PU Goa admissions portal and upload documents digitally.
                  </p>
                  <a href="http://admissions.paruluniversity.ac.in/" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#ee364f] hover:bg-[#d42d41] text-white text-base font-semibold py-2.5 px-6 rounded-full transition-colors font-poppins">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-6 w-full justify-center text-left">
            {/* Red Card (WhatsApp) */}
            <div className="relative w-full md:w-[64%] min-h-[250px] rounded-[20px] overflow-hidden shadow-sm flex items-start">
              <img 
                src="/admissions/step4.svg" 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="w-full flex justify-end p-6 sm:pt-12 sm:pr-12 relative z-10">
                <div className="w-[45%]">
                  <h4 className="text-4xl font-semibold text-white mb-3">WhatsApp</h4>
                  <p className="text-white/90 text-lg leading-relaxed mb-5 font-poppins">
                    Ask quick questions on programmes, fees or eligibility - instant answers.
                  </p>
                  <a href="https://wa.me/919558210145" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#00b368] hover:bg-[#009657] text-white text-base font-semibold py-2.5 px-6 rounded-full transition-colors font-poppins">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Black Card (Visit Campus) */}
            <div className="relative w-full md:w-[36%] min-h-[250px] rounded-[20px] overflow-hidden shadow-sm flex items-start">
              <img 
                src="/admissions/step1.svg" 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="w-full flex justify-end p-6 sm:pt-12 sm:pr-8 relative z-10">
                <div className="w-[60%]">
                  <h4 className="text-3xl font-semibold text-white mb-2">Visit Campus</h4>
                  <p className="text-white/80 text-base leading-relaxed mb-4 font-poppins">
                    Book a campus tour and apply on the spot with our admissions team.
                  </p>
                  <button data-campus-visit-trigger="true" className="bg-[#fedb2f] hover:bg-[#e5c52a] text-ink text-base font-bold py-2 px-5 rounded-full transition-colors font-poppins">
                    Book Campus Tour!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (below md) */}
        <div className="flex md:hidden flex-col gap-6">
          {/* Yellow Card (Callback) */}
          <div className="relative w-full aspect-[630/372] rounded-[20px] overflow-hidden shadow-sm flex items-center p-4 sm:p-6">
            <Image 
              src="/connect/Group 32874.png" 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover"
            width={1200} height={1200} />
            <div className="w-[52%] relative z-10 flex flex-col items-start text-left ml-auto">
              <h4 className="text-2xl xs:text-3xl font-bold text-ink mb-1 leading-tight">Callback</h4>
              <p className="text-ink/80 text-xs xs:text-sm leading-snug mb-2 pr-1 font-poppins">
                Drop your details below - a counsellor will call you within 24 hours.
              </p>
              <button type="button" data-enquiry-trigger="true" className="inline-block bg-[#00aee8] hover:bg-[#0095c7] text-white text-[10px] xs:text-xs font-semibold py-1.5 px-3 sm:py-2 sm:px-4 rounded-full transition-colors font-poppins w-max">
                Request a Callback
              </button>
            </div>
          </div>

          {/* Blue Card (Digital) */}
          <div className="relative w-full aspect-[630/938] rounded-[20px] overflow-hidden shadow-sm flex flex-col justify-between p-8 sm:p-12">
            <Image 
              src="/connect/Group 32873.png" 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover"
            width={1200} height={1200} />
            <div className="relative z-10 text-left">
              <h4 className="text-5xl sm:text-6xl font-bold text-white mb-4 tracking-tight">Digital</h4>
              <p className="text-white/95 text-lg sm:text-xl leading-relaxed mb-6 max-w-[95%] font-medium font-poppins">
                Apply through the official PU Goa admissions portal and upload documents digitally.
              </p>
              <a href="http://admissions.paruluniversity.ac.in/" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#ee364f] hover:bg-[#d42d41] text-white text-base sm:text-lg font-bold py-3 px-8 rounded-full transition-colors font-poppins w-max">
                Apply Now
              </a>
            </div>
            {/* Transparent spacer to prevent text overlap with the bottom illustration */}
            <div className="h-[30%]"></div>
          </div>

          {/* Red Card (WhatsApp) */}
          <div className="relative w-full aspect-[630/921] rounded-[20px] overflow-hidden shadow-sm flex flex-col justify-between p-8 sm:p-12">
            <Image 
              src="/connect/Group 32871.png" 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover"
            width={1200} height={1200} />
            <div className="relative z-10 text-left">
              <h4 className="text-5xl sm:text-6xl font-bold text-white mb-4 tracking-tight">WhatsApp</h4>
              <p className="text-white/95 text-lg sm:text-xl leading-relaxed mb-6 max-w-[95%] font-medium font-poppins">
                Ask quick questions on programmes, fees or eligibility - instant answers.
              </p>
              <a href="https://wa.me/919558210145" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#00b368] hover:bg-[#009657] text-white text-base sm:text-lg font-bold py-3 px-8 rounded-full transition-colors font-poppins w-max">
                Chat on WhatsApp
              </a>
            </div>
            {/* Transparent spacer to prevent text overlap with the bottom illustration */}
            <div className="h-[30%]"></div>
          </div>

          {/* Black Card (Visit Campus) */}
          <div className="relative w-full aspect-[630/375] rounded-[20px] overflow-hidden shadow-sm flex items-center p-4 sm:p-6">
            <Image 
              src="/connect/Group 32872.png" 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover"
            width={1200} height={1200} />
            <div className="w-[52%] relative z-10 flex flex-col items-start text-left ml-auto">
              <h4 className="text-2xl xs:text-3xl font-bold text-white mb-1 leading-tight">Visit<br/>Campus</h4>
              <p className="text-white/80 text-xs xs:text-sm leading-snug mb-2 font-poppins">
                Book a campus tour and apply on the spot with our admissions team.
              </p>
              <button data-campus-visit-trigger="true" className="bg-[#fedb2f] hover:bg-[#e5c52a] text-ink text-[10px] xs:text-xs font-bold py-1.5 px-3 sm:py-2 sm:px-4 rounded-full transition-colors font-poppins">
                Book Campus Tour!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
