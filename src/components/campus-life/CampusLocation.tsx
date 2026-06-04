"use client";

import { useState } from "react";
import { Icon } from '@iconify/react';

type LocationType = 'airport' | 'train' | 'city';

interface LocationData {
  id: string;
  type: LocationType;
  name: string;
  distance: string;
  time: string;
  pickupTitle: string;
  pickupDesc: string;
}

const locations: LocationData[] = [
  { 
    id: 'dabolim', 
    type: 'airport', 
    name: 'Goa International Airport (Dabolim)', 
    distance: '45km', 
    time: '1h 0m', 
    pickupTitle: 'Campus pick-up available.',
    pickupDesc: 'Friday home drop & Monday return for North Goa hostel students. Statewide bus service across all major towns.'
  },
  { 
    id: 'mopa', 
    type: 'airport', 
    name: 'Manohar International Airport (Mopa)', 
    distance: '78km', 
    time: '1h 50m', 
    pickupTitle: 'Campus pick-up available on request.',
    pickupDesc: 'Special shuttle service arranged at start and end of semesters for outstation hostel students.'
  },
  { 
    id: 'madgaon', 
    type: 'train', 
    name: 'Madgaon Railway Station', 
    distance: '18km', 
    time: '35m', 
    pickupTitle: 'Regular transit available.',
    pickupDesc: 'Frequent university shuttles and public transport available from Madgaon directly to campus.'
  },
  { 
    id: 'karmali', 
    type: 'train', 
    name: 'Karmali Railway Station', 
    distance: '48km', 
    time: '1h 10m', 
    pickupTitle: 'Transit assistance provided.',
    pickupDesc: 'Pre-book our university transport services prior to arrival for a smooth campus transfer.'
  },
  { 
    id: 'panaji', 
    type: 'city', 
    name: 'Panaji', 
    distance: '52km', 
    time: '1h 20m', 
    pickupTitle: 'Daily bus routes active.',
    pickupDesc: 'Dedicated fleet of university buses connecting Panaji and surrounding areas to the campus daily.'
  },
  { 
    id: 'margao', 
    type: 'city', 
    name: 'Margao', 
    distance: '15km', 
    time: '30m', 
    pickupTitle: 'High frequency bus service.',
    pickupDesc: 'Multiple bus trips per day bridging Margao city center with our Quepem campus.'
  },
  { 
    id: 'vasco', 
    type: 'city', 
    name: 'Vasco', 
    distance: '42km', 
    time: '1h 5m', 
    pickupTitle: 'Statewide bus service.',
    pickupDesc: 'Convenient boarding points across Vasco with comfortable daily commute for day scholars.'
  },
];

const getTypeIcon = (type: LocationType) => {
  switch (type) {
    case 'airport': return 'mdi:airplane-takeoff';
    case 'train': return 'mdi:train';
    case 'city': return 'mdi:domain';
  }
};

export function CampusLocation() {
  const [selectedId, setSelectedId] = useState<string>(locations[0].id);
  const selectedLocation = locations.find(loc => loc.id === selectedId) || locations[0];

  return (
    <section className="relative w-full bg-[#F8F8F8] py-20 lg:py-28 overflow-hidden">
      <style>{`
        @keyframes fadeSlideIn {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-slide {
          animation: fadeSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      <div className="max-w-7xl mx-auto sm:px-6 px-4 lg:px-12 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="font-poppins font-semibold text-[20px] sm:text-[24px] text-[#1F1F1F] mb-2">
            Location & Transport
          </h3>
          <h2 className="font-poppins font-bold text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.1] tracking-tight text-[#E73649] mb-4">
            Getting to campus and around Goa.
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-[#1F1F1F]/80 text-[15px] sm:text-[18px] max-w-2xl mx-auto leading-relaxed">
            Pick a hub below to see the distance, drive time and how we can pick you up.
          </p>
        </div>

        {/* Main Content Split */}
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left: Location List */}
          <div className="w-full lg:w-[45%] flex flex-col gap-4">
            {locations.map((loc) => {
              const isSelected = loc.id === selectedId;
              const typeColorClass = 
                loc.type === 'airport' ? 'bg-[#0CAADD] text-white' : 
                loc.type === 'train' ? 'bg-[#E73649] text-white' : 
                'bg-[#FEDB2F] text-[#1F1F1F]';

              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedId(loc.id)}
                  className={`flex-1 w-full flex items-center justify-between p-2 sm:p-3 pr-4 sm:pr-6 rounded-[16px] shadow-sm transition-all duration-300 border ${
                    isSelected 
                      ? 'bg-[#0CAADD] border-[#0CAADD] text-white scale-[1.02] shadow-md' 
                      : 'bg-white border-black/5 text-[#1F1F1F] hover:bg-gray-50 hover:border-black/10'
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Icon Block */}
                    <div className={`w-[48px] h-[48px] shrink-0 flex items-center justify-center rounded-[12px] transition-colors ${
                      isSelected 
                        ? 'bg-white text-[#0CAADD]' 
                        : typeColorClass
                    }`}>
                      <Icon icon={getTypeIcon(loc.type)} className="text-[24px]" />
                    </div>
                    <span className="font-[family-name:var(--font-poppins)] font-medium text-[15px] sm:text-[16px] text-left">
                      {loc.name}
                    </span>
                  </div>
                  <span className="font-[family-name:var(--font-poppins)] text-[14px] sm:text-[16px] ml-4 shrink-0">
                    {loc.distance}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Info Card */}
          <div className="w-full lg:w-[55%] flex flex-col">
            <div className="bg-[#1C1C1C] rounded-[32px] p-4 sm:p-6 h-full shadow-2xl relative">
              {/* Inner Dashed Border (Exact Figma Properties: Dash 8, Gap 8) */}
              <div className="absolute inset-4 sm:inset-6 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <rect 
                    x="1" 
                    y="1" 
                    width="calc(100% - 2px)" 
                    height="calc(100% - 2px)" 
                    rx="24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeDasharray="8 8" 
                  />
                </svg>
              </div>
              
              <div key={selectedLocation.id} className="relative z-10 flex flex-col h-full px-6 sm:px-10 py-8 sm:py-10 animate-fade-slide">
                
                {/* Top Pill */}
                <div className="flex justify-center mb-8">
                  <div className="bg-[#2D2D2D] px-8 py-3 rounded-[12px]">
                    <span className="font-sans font-medium text-[#FEDB2F] tracking-wide text-[16px] sm:text-[18px]">
                      YOUR ROUTE TO PU GOA
                    </span>
                  </div>
                </div>

                {/* Horizontal Divider 1 */}
                <div className="w-full h-[2px] bg-white mb-8"></div>

                {/* Route Section */}
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div className="flex-1">
                    <div className="font-sans text-[#FEDB2F] text-[12px] font-medium tracking-wide mb-2">FROM</div>
                    <div className="font-sans font-bold text-white text-[18px] sm:text-[24px] leading-snug">
                      {selectedLocation.name}
                    </div>
                  </div>
                  
                  {/* Long Arrow */}
                  <div className="shrink-0 flex items-center justify-center px-2 sm:px-4 mt-6">
                    <svg className="w-12 sm:w-20 text-[#FEDB2F]" viewBox="0 0 100 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="6" width="90" height="2" fill="currentColor" />
                      <path d="M100 7L86 0V14L100 7Z" fill="currentColor" />
                    </svg>
                  </div>
                  
                  <div className="flex-1">
                    <div className="font-sans text-[#FEDB2F] text-[12px] font-medium tracking-wide mb-2">TO</div>
                    <div className="font-sans font-bold text-white text-[18px] sm:text-[24px] leading-snug">
                      PU Goa Campus
                    </div>
                  </div>
                </div>

                {/* Horizontal Divider 2 */}
                <div className="w-full h-[2px] bg-white"></div>

                {/* Metrics Section */}
                <div className="flex">
                  <div className="flex-1 pr-6 py-8 border-r-[2px] border-white">
                    <div className="font-sans text-white text-[12px] font-medium tracking-wide mb-3">DISTANCE</div>
                    <div className="font-sans font-semibold text-[#FEDB2F] text-[40px] sm:text-[54px] leading-none">
                      {selectedLocation.distance}
                    </div>
                  </div>
                  <div className="flex-1 pl-6 sm:pl-10 py-8">
                    <div className="font-sans text-white text-[12px] font-medium tracking-wide mb-3">DRIVE TIME</div>
                    <div className="font-sans font-semibold text-[#FEDB2F] text-[40px] sm:text-[54px] leading-none">
                      {selectedLocation.time}
                    </div>
                  </div>
                </div>

                {/* Horizontal Divider 3 */}
                <div className="w-full h-[2px] bg-white mb-8"></div>

                {/* Bottom Pick-up Card */}
                <div className="mt-auto">
                  <div className="bg-[#0CAADD] rounded-[14px] py-3 px-4 sm:py-3 sm:px-6 text-center shadow-lg">
                    <h4 className="font-poppins font-semibold text-white text-[16px] sm:text-[20px] mb-1">
                      {selectedLocation.pickupTitle}
                    </h4>
                    <p className="font-[family-name:var(--font-poppins)] text-white/95 text-[14px] sm:text-[15px] leading-snug max-w-[95%] mx-auto">
                      {selectedLocation.pickupDesc}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom Address Bar */}
        <div className="w-full max-w-[1200px] mt-10">
          <div className="bg-[#222222] rounded-[24px] p-3 sm:p-4 pl-6 sm:pl-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-white/5">
            <p className="font-sans text-white/90 text-[16px] sm:text-[18px] text-center sm:text-left py-2 sm:py-0">
              <span className="text-[#FEDB2F] font-semibold">Campus address:</span> Parul University Goa · Tal. Quepem, Dist. South Goa · near ONGC Betul, Goa
            </p>
            <button className="w-full sm:w-auto shrink-0 bg-[#FEDB2F] hover:bg-white text-[#1F1F1F] font-sans font-bold text-[16px] sm:text-[18px] px-8 py-4 rounded-[12px] transition-colors flex items-center justify-center gap-2">
              Open in Maps
              <Icon icon="mdi:arrow-right" className="text-[22px]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
