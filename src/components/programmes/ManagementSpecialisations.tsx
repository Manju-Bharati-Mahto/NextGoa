"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ManagementSpecialisations() {
  const [activeTab, setActiveTab] = useState<"bachelors" | "masters">("bachelors");

  return (
    <section className="w-full bg-[#F8F9FA] pb-12 pt-5 sm:pb-16">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-ink mb-2 section-subheading">
            Specialisations
          </h2>
          <h3 className="text-[#E73649] mb-6 section-heading">
            Pick a domain.
          </h3>
          
          {/* Toggle Buttons (Visible mainly on mobile for filtering, or just interactive) */}
        </div>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-6 items-stretch justify-center w-full max-w-5xl mx-auto">
          
          {/* BBA Card */}
          <div 
            className={`w-full md:w-1/2 bg-[#FCE34B] rounded-[24px] p-8 sm:p-10 flex flex-col transition-all duration-300 ${activeTab === "masters" ? "md:opacity-100 hidden md:flex" : "flex"}`}
          >
            <h4 className="font-poppins font-bold text-[28px] sm:text-[32px] text-ink mb-8">
              BBA Specialisations
            </h4>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {["Data Analytics", "Financial Management", "Human Resource", "Marketing", "Logistics & Supply Chain"].map((spec, idx) => (
                <span 
                  key={idx}
                  className="bg-white text-ink font-medium text-[14px] px-5 py-2.5 rounded-full shadow-sm"
                >
                  {spec}
                </span>
              ))}
            </div>
            
            <div className="mt-auto">
              <Link href="#" className="font-bold text-ink text-[15px] flex items-center gap-2 hover:opacity-80 transition-opacity">
                View &rarr;
              </Link>
            </div>
          </div>

          {/* MBA Card */}
          <div 
            className={`w-full md:w-1/2 bg-[#1F1F1F] rounded-[24px] p-8 sm:p-10 flex flex-col transition-all duration-300 ${activeTab === "bachelors" ? "md:opacity-100 hidden md:flex" : "flex"}`}
          >
            <h4 className="font-poppins font-bold text-[28px] sm:text-[32px] text-white mb-8">
              MBA Specialisations
            </h4>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {["Business Analytics", "Finance", "Human Resource", "Marketing", "Operations Management"].map((spec, idx) => (
                <span 
                  key={idx}
                  className="bg-white text-ink font-medium text-[14px] px-5 py-2.5 rounded-full shadow-sm"
                >
                  {spec}
                </span>
              ))}
            </div>
            
            <div className="mt-auto">
              <Link href="#" className="font-bold text-white text-[15px] flex items-center gap-2 hover:opacity-80 transition-opacity">
                View &rarr;
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
