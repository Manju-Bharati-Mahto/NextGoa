"use client";

import React from "react";

export type LabItem = {
  title: string;
  image?: string;
  description?: string;
};

type InteractiveLabsLayoutProps = {
  title: string;
  subtitle?: string;
  description?: string;
  labs: LabItem[];
};

export function InteractiveLabsLayout({ 
  title, 
  subtitle = "Labs & Hands-on Learning", 
  description, 
  labs 
}: InteractiveLabsLayoutProps) {
  // We'll extract up to 4 images from the labs array for the 4 frames
  const imagesToShow = labs.filter(lab => lab.image).slice(0, 4);

  return (
    <section className="hidden md:block w-full bg-gradient-to-b from-[#EAF7FD] to-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h3 className="text-[#E73649] text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h3>
          {description && (
            <p className="text-ink/80 max-w-2xl mx-auto text-lg leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row w-full mx-auto min-h-[600px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-[32px] overflow-hidden border border-gray-100 bg-white">
          
          {/* Left Sidebar */}
          <div className="w-full lg:w-[500px] flex flex-col shrink-0">
            {/* Top Red Block */}
            <div className="bg-[#CF4055] p-8 md:p-14 flex-shrink-0">
              <h2 className="text-white text-4xl font-bold leading-tight max-w-[300px]">
                {subtitle}
              </h2>
            </div>
            
            {/* Bottom Blue Block (List) */}
            <div className="bg-[#12B2E6] flex-grow p-8 md:p-14 flex flex-col gap-8">
              {labs.map((lab, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-5 text-left"
                >
                  {/* Green Blinking Dot Bullet */}
                  <div className="relative w-8 h-8 rounded-full bg-white flex-shrink-0 flex items-center justify-center shadow-sm">
                    <div className="w-4 h-4 rounded-full bg-[#10B981] animate-pulse"></div>
                  </div>
                  {/* Text */}
                  <span className="text-white text-[19px] md:text-[21px] font-medium leading-snug">
                    {lab.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Main Area (Yellow) */}
          <div className="bg-[#FFDE16] flex-grow p-6 sm:p-8 md:p-12">
            <div className="w-full h-full min-h-[500px] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {imagesToShow.map((lab, i) => (
                <div key={i} className="bg-[#1C1C1C] rounded-[24px] sm:rounded-[32px] overflow-hidden relative shadow-lg">
                  {lab.image && (
                    <img 
                      src={lab.image} 
                      alt={lab.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500" 
                    />
                  )}
                </div>
              ))}
              {/* Fill remaining boxes with empty black frames if there are less than 4 images */}
              {Array.from({ length: Math.max(0, 4 - imagesToShow.length) }).map((_, i) => (
                <div key={`empty-${i}`} className="bg-[#1C1C1C] rounded-[24px] sm:rounded-[32px] overflow-hidden relative shadow-lg">
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
