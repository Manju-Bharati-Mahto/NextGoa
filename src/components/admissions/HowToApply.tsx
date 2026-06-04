import React from "react";
import Image from "next/image";

export function HowToApply() {
  return (
    <section className="w-full bg-[#faf9f6] py-20 px-4 sm:px-8 xl:px-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-ink mb-2 section-subheading">How to Apply</h2>
          <h3 className="text-brand mb-4 section-heading">Follow These 4 Simple Steps</h3>
          <p className="text-ink section-body">Choose what suits you. Every channel reaches to our admissions team!</p>
        </div>

        <div className="flex flex-col gap-6">
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
                  <h4 className="text-3xl font-semibold text-ink mb-2 font-poppins">Callback</h4>
                  <p className="text-ink/80 text-base leading-relaxed mb-4 pr-2">
                    Drop your details below - a counsellor will call you within 24 hours.
                  </p>
                  <button className="bg-[#00aee8] hover:bg-[#0095c7] text-white text-base font-semibold py-2 px-5 rounded-full transition-colors">
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
                  <h4 className="text-4xl font-semibold text-white mb-3 font-poppins">Digital</h4>
                  <p className="text-white/90 text-lg leading-relaxed mb-5 pr-4">
                    Apply through the official PU Goa admissions portal and upload documents digitally.
                  </p>
                  <button className="bg-[#ee364f] hover:bg-[#d42d41] text-white text-base font-semibold py-2.5 px-6 rounded-full transition-colors">
                    Apply Now
                  </button>
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
                  <h4 className="text-4xl font-semibold text-white mb-3 font-poppins">WhatsApp</h4>
                  <p className="text-white/90 text-lg leading-relaxed mb-5">
                    Ask quick questions on programmes, fees or eligibility - instant answers.
                  </p>
                  <button className="bg-[#00b368] hover:bg-[#009657] text-white text-base font-semibold py-2.5 px-6 rounded-full transition-colors">
                    Chat on WhatsApp
                  </button>
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
                  <h4 className="text-3xl font-semibold text-white mb-2 font-poppins">Visit Campus</h4>
                  <p className="text-white/80 text-base leading-relaxed mb-4">
                    Book a campus tour and apply on the spot with our admissions team.
                  </p>
                  <button className="bg-[#fedb2f] hover:bg-[#e5c52a] text-ink text-base font-bold py-2 px-5 rounded-full transition-colors">
                    Book Campus Tour!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
