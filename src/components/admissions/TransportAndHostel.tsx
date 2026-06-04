"use client";

import React from "react";

export function TransportAndHostel() {
  return (
    <section className="w-full bg-[#fedb2f] py-20 px-4 sm:px-8 xl:px-16">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Side: Transport */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-rounded font-bold text-ink text-[20px]">
              directions_bus
            </span>
            <span className="font-sans font-bold text-[14px] tracking-[0.15em] text-ink uppercase">
              Transport
            </span>
          </div>
          
          <h2 className="font-poppins font-bold text-[36px] sm:text-[44px] lg:text-[48px] text-ink leading-[1.1] mb-6 tracking-tight">
            Getting here is not a problem.
          </h2>
          
          <p className="font-[family-name:var(--font-poppins)] text-ink/80 text-[16px] sm:text-[18px] leading-relaxed mb-8 max-w-[500px]">
            PU Goa operates a structured bus service covering the entire state - Panaji,
            Margao, Vasco, Mapusa, Ponda, Pernem, Bicholim, Canacona and more.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {["Pernem", "Mapusa", "Panjim", "Ponda", "Margao", "Vasco", "Bicholim", "Canacona", "Quepem"].map((city) => (
              <span 
                key={city}
                className="bg-white text-ink font-bold text-[13px] px-4 py-2 rounded-full shadow-sm"
              >
                {city}
              </span>
            ))}
            <span className="bg-ink text-white font-bold text-[13px] px-4 py-2 rounded-full shadow-sm">
              + many more
            </span>
          </div>
        </div>

        {/* Right Side: Hostel Card */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white rounded-[24px] p-8 sm:p-10 shadow-lg border border-gray-50">
            <div className="flex items-start sm:items-center gap-3 mb-6">
              <span className="material-symbols-rounded text-[#ee364f] text-[28px]">
                home
              </span>
              <h3 className="font-poppins font-semibold text-[22px] sm:text-[24px] text-ink leading-tight">
                Hostel · Boys & Girls · AC, 3-sharing
              </h3>
            </div>
            
            <p className="font-[family-name:var(--font-poppins)] text-gray-500 text-[16px] leading-relaxed mb-8">
              On-campus residential blocks are available. Female blocks
              have separate residences with 24×7 security, biometric access,
              female wardens and CCTV monitoring.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-rounded text-[#ee364f] text-[20px]">
                  verified_user
                </span>
                <span className="font-[family-name:var(--font-poppins)] text-gray-600 text-[15px] font-medium">
                  24×7 Security
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-rounded text-[#ee364f] text-[20px]">
                  engineering
                </span>
                <span className="font-[family-name:var(--font-poppins)] text-gray-600 text-[15px] font-medium">
                  Female wardens
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-rounded text-[#ee364f] text-[20px]">
                  directions_car
                </span>
                <span className="font-[family-name:var(--font-poppins)] text-gray-600 text-[15px] font-medium">
                  Weekend home drop
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-rounded text-[#ee364f] text-[20px]">
                  cleaning_services
                </span>
                <span className="font-[family-name:var(--font-poppins)] text-gray-600 text-[15px] font-medium">
                  Mess + housekeeping
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
