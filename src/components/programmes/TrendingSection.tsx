"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

import {
  EngineeringIcon,
  NursingIcon,
  ManagementIcon,
  HotelIcon
} from "../landing/FacultyIcons";

const trendingCourses = [
  {
    course: "B.Tech CSE",
    tags: ["12 Seats Left", "Most Applied"],
    icon: EngineeringIcon,
    href: "/faculty/engineering",
  },
  {
    course: "B.Sc. Nursing",
    tags: ["5 Seats Left", "High Demand"],
    icon: NursingIcon,
    href: "/faculty/nursing",
  },
  {
    course: "MBA",
    tags: ["18 Seats Left", "Top Placement"],
    icon: ManagementIcon,
    href: "/faculty/management-studies",
  },
  {
    course: "BHMCT",
    tags: ["8 Seats Left", "Fast Filling"],
    icon: HotelIcon,
    href: "/faculty/hotel-management",
  }
];

export default function TrendingSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % trendingCourses.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      setActiveIndex((prev) => (prev === trendingCourses.length - 1 ? 0 : prev + 1));
    } else if (distance < -minSwipeDistance) {
      setActiveIndex((prev) => (prev === 0 ? trendingCourses.length - 1 : prev - 1));
    }
  };

  const activeCourse = trendingCourses[activeIndex];

  return (
    <section className="relative z-20 w-full lg:min-h-[600px] flex items-center bg-transparent -mt-12 sm:-mt-24 lg:-mt-5 lg: py-16 sm:py-24"
      style={{ 
        paddingTop: "clamp(3rem, 8vw, 120px)", 
        paddingBottom: "clamp(2.5rem, 7vw, 110px)" 
      }}
    >
      {/* Background Red Wavy Image */}
            <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Middle Solid Red Background */}
        <div 
          className="absolute inset-x-0 bg-[#E73649]" 
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
              backgroundImage: "url('/89-double.svg?v=3')",
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
              backgroundImage: "url('/89-double.svg?v=3')",
              backgroundSize: "50% auto",
              backgroundPosition: "bottom left",
              backgroundRepeat: "repeat-x"
            }}
          />
        </div>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-4 lg:gap-0 items-center">
          {/* Left Column */}
          <div className="flex flex-col text-white lg:pr-4 relative z-10">
            <h2 className="section-subheading text-white">Trending now</h2>
            <h3 className="text-[#FFD523] mt-2 leading-[1.1] section-heading">
              Limited seats for<br/>2026-27
            </h3>
            
            {/* Card Section */}
            <div className="mt-0 sm:mt-2 w-full max-w-[800px]">
              <div className="flex justify-end mb-3 pr-2">
                <a href="#program-filter" className="text-sm font-medium font-[family-name:var(--font-poppins)] text-white/90 hover:text-white flex items-center gap-1 transition-colors">
                  View all <span>&rarr;</span>
                </a>
              </div>
              
              <div 
                className="bg-white rounded-[24px] p-6 sm:px-10 sm:py-8 text-ink shadow-2xl relative overflow-hidden min-h-[240px] flex flex-col justify-center select-none"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Dynamic SVG watermark */}
                <div key={`icon-${activeIndex}`} className="absolute -right-4 -top-4 sm:-right-4 sm:-top-4 pointer-events-none transition-all duration-500 w-[140px] h-[140px] sm:w-[240px] sm:h-[240px] opacity-[0.4] flex items-center justify-end animate-fade-in">
                  <activeCourse.icon 
                    className="w-full h-full object-contain" 
                    style={{ color: '#E5E5E5', '--svg-stroke': '#FFFFFF' } as React.CSSProperties} 
                  />
                </div>

                {/* Animated content wrapper */}
                <div key={activeIndex} className="animate-fade-in relative z-10">
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-5">
                    {activeCourse.tags.map((tag, idx) => (
                      <span key={idx} className="bg-sunshine text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest text-ink">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h4 className="text-3xl sm:text-[38px] font-semibold tracking-tight mb-6 font-[family-name:var(--font-poppins)]">{activeCourse.course}</h4>
                  
                  <a href={activeCourse.href} className="bg-[#0EB1E1] hover:bg-[#0BA1CD] transition-colors text-white text-[14px] font-medium px-6 py-2.5 rounded-full flex items-center gap-2 w-max">
                    Apply Now <span>&rarr;</span>
                  </a>
                </div>
              </div>
              
              {/* Pagination Dots */}
              <div className="flex items-center gap-2 mt-8 pl-4">
                {trendingCourses.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-[#FFD523]' : 'w-2 bg-white/40 hover:bg-white/60'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="hidden lg:flex justify-end relative h-full lg:mt-0 lg:-ml-16 z-0 pointer-events-none">
              <Image 
                src="/programmes/trending-right.png" 
                alt="Trending programmes"
                className="w-full max-w-[500px] object-contain drop-shadow-2xl"
              width={1200} height={1200} />
          </div>
        </div>
      </div>
    </section>
  );
}
