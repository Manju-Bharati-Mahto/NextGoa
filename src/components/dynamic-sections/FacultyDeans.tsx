"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface Props {
  data: any;
}

export function FacultyDeans({ data }: Props) {
  const [experts, setExperts] = useState<any[]>([]);

  useEffect(() => {
    loadExperts();
  }, []);

  async function loadExperts() {
    const res = await fetch("/api/experts");

    const result = await res.json();

    if (result.success) {
      setExperts(result.data);
    }
  }
  const filteredExperts = useMemo(() => {
    return experts
      .filter((item: any) => {
        try {
          const categories =
            typeof item.category === "string"
              ? JSON.parse(item.category)
              : item.category;

          return categories.includes(data.expert_category);
        } catch {
          return false;
        }
      })
      .sort((a: any, b: any) => a.sort_order - b.sort_order);
  }, [experts, data.expert_category]);

  return (
    <section className="bg-[#F8F8F8] px-6 py-10 sm:pt-12 sm:pb-18">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-ink section-heading">{data.heading}</h2>
          <p className="mt-2 text-ink/80 section-body">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredExperts.map((expert: any, idx: number) => {
            const dean =
              typeof expert.content === "string"
                ? JSON.parse(expert.content)
                : expert.content;

            
              const isLastOdd = idx === filteredExperts.length - 1 && filteredExperts.length % 2 !== 0;
            return (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row rounded-[20px] bg-white shadow-sm border border-zinc-200/60 overflow-hidden ${
                  isLastOdd
                    ? "md:col-span-2 md:w-[calc(50%-16px)] md:mx-auto"
                    : "w-full"
                }`}
              >
                {/* Image Section */}
                <div className="relative w-full h-[180px] sm:h-auto sm:w-[30%] bg-gradient-to-b from-[#EBF8FD] to-[#D6F0FA] flex-shrink-0 flex items-end justify-center overflow-hidden">
                  {dean.image && (
                    <Image
                      src={dean.image}
                      alt={dean.name}
                      fill
                      className="object-cover object-top"
                    />
                  )}
                </div>

                {/* Text Body */}
                <div className="relative p-6 sm:p-8 flex flex-col flex-1 justify-center">
                  {/* Red Dean Badge */}
                  <div className="mb-3">
                    <span className="inline-block rounded-full bg-[#E73649] px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wide text-white">
                      {dean.tagline}
                    </span>
                  </div>

                  <h3 className="font-poppins font-semibold text-[22px] sm:text-[24px] leading-tight text-[#1F1F1F]">
                    {dean.name}
                  </h3>
                  <p className="font-sans font-bold text-[14px] sm:text-[15px] text-[#0CAADD] mt-1">
                    {dean.designation}
                  </p>

                  {/* Separator */}
                  <div className="w-full h-px bg-zinc-200/80 my-4" />

                  {/* Stats & LinkedIn */}
                  <div className="flex flex-row items-center justify-between">
                    <p className="font-[family-name:var(--font-poppins)] text-[12px] sm:text-[13px] leading-[1.6] text-ink/50 pr-4">
                      {dean.tagline2}
                    </p>
                    <div className="flex gap-2 items-center">
                      {dean.social_links?.map((social: any, index: number) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-80"
                        >
                          {social.platform === "orcid" ? (
                            <img
                              src="/orchid.svg"
                              className="w-6 h-6"
                              alt="ORCID"
                            />
                          ) : (
                            <Icon
                              icon={`mdi:${social.platform}`}
                              className="w-7 h-7 text-[#E73649]"
                            />
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
