import React from "react";
import { Eyebrow } from "@/components/landing/Decor";

interface VisionMissionProps {
  data: {
    heading?: string;
    title?: string;
    vision?: {
      title?: string;
      description?: string;
    };
    mission?: {
      title?: string;
      description?: string;
    };
    pills?: string[];
  };
}


export function VisionMission({ data }: VisionMissionProps) {
  const pills = data?.pills || [];

  return (
    <section id="vision-mission" className="bg-brand-white sm: px-6 scroll-mt-24 md:scroll-mt-32 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center">
          
           {data?.heading && (
            <h2 className="text-ink section-subheading">
            {data.heading}
          </h2>
          )}
          {data?.title && (
            <h3 className="mt-2 text-brand section-heading">
            {data.title}
          </h3>
          )}
          
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Vision Card */}
          <div className="flex flex-col rounded-[24px] bg-brand-black p-8 sm:p-10 text-white shadow-lg text-center sm:text-left items-center sm:items-start">
            <img src="/mission.svg" alt="Vision Icon" className="h-20 w-20 object-contain mb-6" />
            <h4 className="font-poppins text-[32px] font-semibold mb-4">{data?.vision?.title}</h4>
            
            <p
              className="text-white/90 section-body"
              dangerouslySetInnerHTML={{
                __html: data?.vision?.description || "",
              }}
            />
          </div>

          {/* Mission Card */}
          <div className="flex flex-col rounded-[24px] bg-brand-blue p-8 sm:p-10 text-white shadow-lg text-center sm:text-left items-center sm:items-start">
            <img src="/vision.svg" alt="Mission Icon" className="h-20 w-20 object-contain mb-6" />
            <h4 className="font-poppins text-[32px] font-semibold mb-4">{data?.mission?.title}</h4>
             <p
              className="text-white/95 section-body"
              dangerouslySetInnerHTML={{
                __html: data?.mission?.description || "",
              }}
            />
            
          </div>
        </div>

        {/* Pills / Tags */}
        {pills.length > 0 && (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
           {pills.map((pill, index) => (
              <span
                key={index}
                className="rounded-full bg-black/5 px-5 py-2 font-[family-name:var(--font-poppins)] text-sm sm:text-sm font-bold text-ink border border-black/10 transition-colors hover:bg-black/10"
              >
                {pill}
              </span>
            ))}
          
        </div>
        )}
      </div>
    </section>
  );
}
