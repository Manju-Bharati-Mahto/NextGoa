"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function CampusLifeHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let currentX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
    let currentY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;
    let targetX = currentX;
    let targetY = currentY;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        targetX = e.clientX - rect.left;
        targetY = e.clientY - rect.top;
      }
    };

    const animate = () => {
      // Smooth lerp
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;

      if (sectionRef.current) {
        sectionRef.current.style.setProperty('--x', `${currentX}px`);
        sectionRef.current.style.setProperty('--y', `${currentY}px`);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#F8FAFC] flex items-center overflow-hidden"
    >
      <style>{`
        @keyframes wavyBlob {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: rotate(0deg) scale(1); }
          34% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; transform: rotate(120deg) scale(1.05); }
          67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; transform: rotate(240deg) scale(0.95); }
          100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: rotate(360deg) scale(1); }
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-5%, 5%); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(5%, -5%); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-5%, -5%); }
        }
      `}</style>

      {/* Cursor Interactive Brand Background with Smooth Wavy Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.35] mix-blend-multiply overflow-hidden">
        {/* Container follows the cursor smoothly */}
        <div 
          className="absolute top-0 left-0 w-full h-full will-change-transform"
          style={{ transform: 'translate(calc(var(--x, 50vw) - 50vw), calc(var(--y, 50vh) - 50vh))' }}
        >
          {/* Blur layer */}
          <div className="absolute inset-0 blur-[120px] sm:blur-[200px] flex items-center justify-center">
            {/* Blue Blob */}
            <div 
              className="absolute w-[100vw] h-[70vw] max-w-[1400px] max-h-[1000px] bg-[#0CAADD]"
              style={{ animation: 'wavyBlob 20s infinite linear, float1 10s infinite ease-in-out' }}
            />
            {/* Red Blob */}
            <div 
              className="absolute w-[90vw] h-[60vw] max-w-[1200px] max-h-[800px] bg-[#E73649] ml-[20vw] mt-[-10vh]"
              style={{ animation: 'wavyBlob 15s infinite linear reverse, float2 12s infinite ease-in-out' }}
            />
            {/* Yellow Blob */}
            <div 
              className="absolute w-[120vw] h-[80vw] max-w-[1600px] max-h-[1200px] bg-[#FCE34B] mr-[20vw] mb-[-20vh]"
              style={{ animation: 'wavyBlob 25s infinite linear, float3 14s infinite ease-in-out' }}
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12 flex flex-col lg:flex-row items-center sm:gap-12 lg:gap-0 sm:py-24 pb-5 pt-20 lg:py-0 gap-0">
        {/* ── Left: Text ── */}
        <div className="flex-1 lg:pr-8 z-10 xl:-translate-x-[100px] 2xl:-translate-x-[150px] pt-10">
          {/* Eyebrow pill */}
          <span className="inline-block bg-[#FEDB2F] text-[#1F1F1F] text-[13px] font-bold px-4 py-1.5 rounded-full mb-6 shadow-sm">
            Campus Life
          </span>

          <h1 className="font-poppins font-bold text-[42px] sm:text-[52px] lg:text-[64px] tracking-tight leading-[1.05] text-[#1F1F1F] mb-5">
            A campus that nurtures and helps students learn and grow.
          </h1>

          <p className="font-[family-name:var(--font-poppins)] text-[16px] sm:text-[18px] text-[#1F1F1F]/60 max-w-md">
            Where Learning and Living Become One With Nature.
          </p>
        </div>

        {/* ── Right: Collage ── */}
        <div className="flex-1 flex items-center justify-center relative w-full mt-8 lg:mt-0 min-h-[350px] sm:min-h-[520px] lg:min-h-[600px] xl:translate-x-[50px]">
          <Image
            src="/camhero.png"
            alt="Campus Life"
            className="w-full h-auto max-w-[100%] sm:max-w-[750px] lg:max-w-[950px] scale-100 lg:scale-110 xl:scale-125 origin-center object-contain relative z-20"
            width={1200} height={1200}
            priority 
          />
        </div>
      </div>
    </section>
  );
}
