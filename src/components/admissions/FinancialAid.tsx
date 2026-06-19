"use client";

import React, { useState } from "react";

export function FinancialAid() {

  return (
    <section className="w-full bg-[#f8f8f8] px-4 sm:px-8 xl:px-16 py-10 sm:py-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <h2 className="text-[#e73649] text-center mb-12 section-heading">
          Financial Aid &amp; Payment Options
        </h2>

        {/* Desktop Layout (md and up) */}
        <div className="hidden md:flex flex-col md:flex-row gap-4 lg:gap-6 mb-12 justify-center items-stretch">
          {/* Card 1: Online Payment */}
          <div className="w-full md:w-[50.86%] flex-shrink-0 relative aspect-[590/230]">
            <img 
              src="/admissions/payment-1.svg" 
              alt="Online Payment Options background" 
              className="absolute inset-0 w-full h-full object-fill pointer-events-none"
            />
            <div className="relative z-10 w-full h-full flex flex-col justify-start items-end p-6 sm:p-8">
              <div className="w-[50%] sm:w-[45%] xl:w-[42%] flex flex-col h-full">
                <div>
                  <h4 className="font-semibold text-white text-[24px] sm:text-[28px] mb-2 leading-tight">Online Payment</h4>
                  <p className="font-poppins text-white text-[14px] sm:text-[16px] leading-[1.4]">
                    Drop your details below - a counsellor will call you within 24 hours.
                  </p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  <span className="bg-white text-ink text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase font-poppins">Card</span>
                  <span className="bg-white text-ink text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase font-poppins">UPI</span>
                  <span className="bg-white text-ink text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase font-poppins">Net Banking</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card 2: Education Loans */}
          <div className="w-full md:w-[24.57%] flex-shrink-0 relative aspect-[285/230]">
            <img 
              src="/admissions/payment-2.svg" 
              alt="Education Loans background" 
              className="absolute inset-0 w-full h-full object-fill pointer-events-none"
            />
            <div className="relative z-10 w-full h-full p-6 sm:p-8 flex flex-col justify-start">
              <div>
                <h4 className="font-semibold text-white text-[24px] sm:text-[28px] mb-2 leading-tight">Education<br />Loans</h4>
                <p className="font-poppins text-white text-[14px] sm:text-[16px] leading-[1.4] pr-2">
                  Drop your details below - a counsellor will call you within 24 hours.
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2 pt-4">
                <span className="bg-white text-ink text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase font-poppins">HDFC</span>
                <span className="bg-white text-ink text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase font-poppins">Avanse</span>
                <span className="bg-white text-ink text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 rounded-full uppercase font-poppins">Auxilo</span>
              </div>
            </div>
          </div>
          
          {/* Card 3: Instalment Plans */}
          <div className="w-full md:w-[24.57%] flex-shrink-0 relative aspect-[285/230]">
            <img 
              src="/admissions/payment-3.svg" 
              alt="Instalment Plans background" 
              className="absolute inset-0 w-full h-full object-fill pointer-events-none"
            />
            <div className="relative z-10 w-full h-full p-6 sm:p-8 flex flex-col justify-start">
              <div>
                <h4 className="font-semibold text-ink text-[24px] sm:text-[28px] mb-3 leading-tight">Instalment<br />Plans</h4>
                <p className="font-poppins text-ink text-[14px] sm:text-[16px] leading-[1.4] pr-2">
                  Available where<br />applicable
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (below md) */}
        <div className="flex md:hidden flex-col gap-6 mb-12">
          {/* Card 1: Online Payment */}
          <div className="w-full relative aspect-[324/448] rounded-[24px] overflow-hidden shadow-sm flex flex-col justify-start p-6 sm:p-10">
            <img 
              src="/fees/456.svg" 
              alt="Online Payment Options background" 
              className="absolute inset-0 w-full h-full object-fill pointer-events-none"
            />
            {/* Left aligned text and tags container */}
            <div className="w-full max-w-[90%] relative z-10 text-left pt-6 flex flex-col gap-4">
              <div>
                <h4 className="font-bold text-white text-[28px] xs:text-3xl sm:text-5xl mb-2 leading-tight whitespace-nowrap">Online Payment</h4>
                <p className="font-poppins text-white/95 text-base sm:text-lg leading-relaxed">
                  Drop your details below - a counsellor will call you within 24 hours.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pb-4">
                <span className="bg-white text-ink text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full uppercase font-poppins whitespace-nowrap">Card</span>
                <span className="bg-white text-ink text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full uppercase font-poppins whitespace-nowrap">UPI</span>
                <span className="bg-white text-ink text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full uppercase font-poppins whitespace-nowrap">Net Banking</span>
              </div>
            </div>
          </div>

          {/* Card 2: Education Loans */}
          <div className="w-full relative bg-[#0CAADD] min-h-[180px] rounded-[24px] overflow-hidden shadow-sm flex flex-col justify-between p-6 sm:p-10">
            <div className="relative z-10 text-left pt-2">
              <h4 className="font-bold text-white text-3xl sm:text-5xl mb-2 leading-tight">Education Loans</h4>
              <p className="font-poppins text-white/95 text-sm sm:text-lg leading-relaxed mb-4">
                Drop your details below - a counsellor will call you within 24 hours.
              </p>
            </div>
            <div className="relative z-10 flex flex-wrap gap-2">
              <span className="bg-white text-ink text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full uppercase font-poppins">HDFC</span>
              <span className="bg-white text-ink text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full uppercase font-poppins">Avanse</span>
              <span className="bg-white text-ink text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full uppercase font-poppins">Auxilo</span>
            </div>
          </div>

          {/* Card 3: Instalment Plans */}
          <div className="w-full relative bg-[#FEDB2F] min-h-[180px] rounded-[24px] overflow-hidden shadow-sm flex flex-col justify-between p-6 sm:p-10">
            {/* CSS Pattern to replace SVG background */}
            <div className="absolute -bottom-10 -right-10 w-[200px] h-[200px] pointer-events-none z-0 opacity-40">
              <div className="absolute top-0 right-10 w-[120px] h-[120px] rounded-full bg-white/50 mix-blend-overlay"></div>
              <div className="absolute bottom-10 right-0 w-[120px] h-[120px] rounded-full bg-white/50 mix-blend-overlay"></div>
            </div>
            <div className="relative z-10 text-left pt-2">
              <h4 className="font-bold text-ink text-3xl sm:text-5xl mb-2.5 leading-tight">Instalment Plans</h4>
              <p className="font-poppins text-ink/85 text-sm sm:text-xl leading-relaxed">
                Available where<br />applicable
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        {/* <div className="bg-[#1f1f1f] rounded-2xl p-6 sm:px-6 sm:py-3 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 overflow-hidden">
          <p className="font-poppins text-white text-sm sm:text-base xl:text-lg text-center md:text-left whitespace-normal md:whitespace-nowrap md:truncate">
            <span className="font-bold">Refund policy:</span> Fee refunds processed in line with UGC norms. Read the full refund policy in the prospectus.
          </p>
          <button 
            data-brochure-trigger="true"
            className="w-full md:w-auto justify-center flex-shrink-0 bg-[#e73649] hover:bg-[#ff3148] text-white font-medium text-base sm:text-lg py-3 px-6 rounded-xl flex items-center gap-2 transition-colors font-poppins"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Fees Brochure
          </button>
        </div> */}
      </div>
    </section>
  );
}
