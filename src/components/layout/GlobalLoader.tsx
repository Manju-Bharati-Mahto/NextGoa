"use client";

import React, { useEffect, useState } from "react";

export function GlobalLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide loader after 2.5 seconds (gives time for animation to finish)
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Completely remove from DOM after fade out
      setTimeout(() => {
        setShow(false);
      }, 500); 
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-[#0caadd] flex items-center overflow-hidden transition-opacity duration-500 ease-in-out ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Container for the bus animation */}
      <div className="relative w-full h-[300px]">
        {/* Drive across screen right to left */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 left-1/2"
          style={{ 
            animation: "driveLeft 4s cubic-bezier(0.5, 0, 0.2, 1) forwards"
          }}
        >
          {/* Slight bounce to simulate driving/engine starting */}
          <div style={{ animation: "bounceDrive 0.2s infinite alternate" }}>
            <img 
              src="/images/load.svg" 
              alt="Loading..." 
              className="w-[250px] md:w-[400px] lg:w-[500px] -scale-x-100" // Flipped horizontally so it faces left
            />
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes driveLeft {
          0% {
            transform: translate(30vw, -50%); /* Start on right side within frame */
          }
          15% {
            transform: translate(30vw, -50%); /* Stay a bit (start engine) */
          }
          100% {
            transform: translate(-100vw, -50%); /* Drive off to the left */
          }
        }
        @keyframes bounceDrive {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-3px);
          }
        }
      `}} />
    </div>
  );
}
