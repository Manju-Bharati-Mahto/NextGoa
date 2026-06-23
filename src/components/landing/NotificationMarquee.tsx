"use client";

import React from "react";

const TeardropAsterisk = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="mx-6 flex-shrink-0">
    <g transform="translate(12, 12)">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <path key={deg} transform={`rotate(${deg})`} d="M -1.5 -2.5 C -2.5 -7.5, -1 -11, 0 -11.5 C 1 -11, 2.5 -7.5, 1.5 -2.5 C 1 -0.5, 0 0, 0 0 C 0 0, -1 -0.5, -1.5 -2.5 Z" />
      ))}
    </g>
  </svg>
);

export function NotificationMarquee() {
  const notificationText = "Notification No. 038 – Revision in the Calendar of Events for Admission to Ph.D. Programmes for the Academic Year 2026–27";
  
  return (
    <div className="w-full bg-[#E73649] text-white py-4 sm:py-5 overflow-hidden relative border-y border-[#d32f41]">
      <div className="flex whitespace-nowrap animate-marquee items-center">
        {/* We repeat the content multiple times to ensure a seamless infinite scroll loop */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center">
            <a 
              href="/notifications/Notification_038_Revision-in-the-calender-of-events-for-admission-to-Ph.D-Programmes-2026-27.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-[16px] sm:text-[20px] tracking-wide cursor-pointer"
            >
              {notificationText}
            </a>
            <TeardropAsterisk />
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-marquee {
          display: inline-flex;
          animation: marquee 90s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
