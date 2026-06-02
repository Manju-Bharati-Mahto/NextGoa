"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function StudyAbroadPartners() {
  const [currentFaculty, setCurrentFaculty] = useState("Any faculty");
  const [targetFaculty, setTargetFaculty] = useState("Any faculty");

  const facultyOptions = ["Any faculty", "Engineering", "IT/CS", "Management"];

  return (
    <section className={`bg-[#f9f9f9] pt-25 pb-7 px-4 md:px-8 ${poppins.className}`}>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          Partner Universities
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold text-[#f0424e] mb-4 text-center tracking-tight">
          A global degree, one connected path.
        </h2>
        <p className="text-gray-800 text-center mb-20 max-w-2xl font-medium">
          Browse partner universities, faculties served, and the pathways available
          in each country
        </p>

        {/* Filter Bar */}
        <div className="bg-[#fdfdfd] border border-gray-200 rounded-2xl p-4 w-full max-w-4xl flex flex-col md:flex-row items-end gap-4 shadow-sm mb-12 relative z-20">
          <CustomSelect 
            label="I'm studying / want to study"
            options={facultyOptions}
            value={currentFaculty}
            onChange={setCurrentFaculty}
          />

          <CustomSelect 
            label="Any faculty I'd like to go to"
            options={facultyOptions}
            value={targetFaculty}
            onChange={setTargetFaculty}
          />

          <div className="w-full md:w-auto mt-4 md:mt-0 flex-shrink-0">
            <button className="w-full md:w-auto bg-[#f0424e] hover:bg-[#d63a44] text-white font-medium rounded-lg py-2.5 px-6 flex items-center justify-center transition-colors">
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Find Pathways
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-8 w-full max-w-4xl">
          <CountryCard
            country="USA"
            flagSrc="/abroad/United States Flag.png"
            partnersCount="4"
          />
          <CountryCard
            country="UK"
            flagSrc="/abroad/United Kingdom Flag.png"
            partnersCount="4"
          />
        </div>

        {/* View All */}
        <div className="mt-12">
          <button className="bg-[#f0424e] hover:bg-[#d63a44] text-white font-medium rounded-full py-2.5 px-8 flex items-center justify-center transition-colors shadow-md">
            View all
            <svg
              className="h-4 w-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function CountryCard({
  country,
  flagSrc,
  partnersCount,
}: {
  country: string;
  flagSrc: string;
  partnersCount: string;
}) {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
      {/* Left Info Column */}
      <div className="p-8 md:w-[45%] flex flex-col justify-between relative border-r border-gray-100">
        <div className="absolute top-8 right-8">
          <Image
            src={flagSrc}
            alt={`${country} flag`}
            width={52}
            height={36}
            className="object-contain border border-gray-100"
          />
        </div>

        <div className="mt-2">
          <p className="text-[#2eb8e6] font-semibold text-sm tracking-wide mb-1">
            {partnersCount} Partners
          </p>
          <h4 className="text-4xl font-extrabold text-gray-900 mb-8">{country}</h4>

          <p className="text-sm font-bold text-gray-900 mb-2 tracking-wide">
            FACULTIES SERVED
          </p>
          <p className="text-gray-800 text-[15px] mb-8 font-medium">
            Engineering • IT/CS • Management
          </p>
        </div>

        <div>
          <button className="bg-[#f0424e] hover:bg-[#d63a44] text-white font-bold rounded-full py-2.5 px-6 transition-colors text-sm shadow-sm">
            Explore More
          </button>
        </div>
      </div>

      {/* Right Grid Column */}
      <div className="md:w-[55%] grid grid-cols-2">
        <div className="bg-[#3a0a01] h-40 md:h-auto flex items-center justify-center p-6 border-r border-b border-[#3e1610]">
          <Image
            src="/abroad/Rowan University.png"
            alt="Rowan University"
            width={160}
            height={100}
            className="object-contain"
          />
        </div>
        <div className="bg-[#461d7d] h-40 md:h-auto flex items-center justify-center p-6 border-b border-[#3b1d7d]">
          <Image
            src="/abroad/LSUS Shreveport.png"
            alt="LSUS Shreveport"
            width={160}
            height={100}
            className="object-contain"
          />
        </div>
        <div className="bg-[#1a5634] h-40 md:h-auto flex items-center justify-center p-6 border-r border-[#1f5938]">
          <Image
            src="/abroad/Marywood University.png"
            alt="Marywood University"
            width={160}
            height={100}
            className="object-contain"
          />
        </div>
        <div className="bg-white h-40 md:h-auto flex items-center justify-center p-6">
          <Image
            src="/abroad/Saint Peter's University.png"
            alt="Saint Peter's University"
            width={160}
            height={100}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

function CustomSelect({ label, options, value, onChange }: { label: string, options: string[], value: string, onChange: (val: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex-1 w-full" ref={containerRef}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full border rounded-lg py-2.5 px-4 text-gray-500 bg-white flex justify-between items-center cursor-pointer transition-colors ${isOpen ? 'border-[#f0424e] ring-1 ring-[#f0424e]' : 'border-gray-300 hover:border-gray-400'}`}
        >
          <span className="truncate pr-4">{value}</span>
          <svg className={`flex-shrink-0 h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#f0424e]' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        {isOpen && (
          <div className="absolute z-50 w-full mt-2 bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden py-1 transform origin-top transition-all">
            {options.map((opt) => (
              <div 
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
                className={`py-2.5 px-4 cursor-pointer transition-colors text-sm ${value === opt ? 'bg-[#f0424e]/10 text-[#f0424e] font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
