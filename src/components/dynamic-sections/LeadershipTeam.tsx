"use client";

import { useEffect, useMemo, useState } from "react";
import { Icon } from "@iconify/react";

interface Props {
  data: any;
}

export function LeadershipTeam({ data }: Props) {
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
    .filter((item) => {
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
    .sort((a, b) => a.sort_order - b.sort_order);
}, [experts, data.expert_category]);

  return (
    <section className="bg-[#F8F8F8] px-6 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-ink section-heading">{data.heading}</h2>
          <p className="mt-2 text-ink/80 section-body">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {filteredExperts.map((expert: any) => {
            const content =
              typeof expert.content === "string"
                ? JSON.parse(expert.content)
                : expert.content;

            return (
              <div
                key={expert.id}
                className="flex flex-col rounded-[20px] bg-white shadow-sm border border-zinc-200/60 overflow-hidden"
              >
                <div className="relative h-[380px] w-full bg-gradient-to-t from-[#D6F0FA] to-transparent overflow-hidden">
                  <div className="absolute inset-0 flex justify-evenly opacity-[0.04]">
                    <div className="w-px h-full bg-black" />
                    <div className="w-px h-full bg-black" />
                    <div className="w-px h-full bg-black" />
                    <div className="w-px h-full bg-black" />
                  </div>

                  {content.image && (
                    <img
                      src={content.image}
                      alt={content.name}
                      className="absolute inset-0 w-full h-full object-cover object-top z-10"
                    />
                  )}
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="mb-3">
                    <span className="inline-block rounded-full bg-[#E73649] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                      LEADERSHIP
                    </span>
                  </div>

                  <h3 className="font-poppins font-semibold text-[22px] sm:text-[26px]">
                    {content.name}
                  </h3>

                  <p className="text-[#E73649] font-bold mt-1">
                    {content.designation}
                  </p>

                  <div className="w-full h-px bg-zinc-200/80 my-5" />

                  {content.tagline && (
                    <div className="mb-3">
                      <span className="inline-block rounded-full bg-[#0CAADD] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                        {content.tagline}
                      </span>
                    </div>
                  )}

                  <p className="text-ink/80 mt-auto">{content.description}</p>

                  {content.social_links?.length > 0 && (
                    <div className="mt-6 flex gap-3">
                      {content.social_links.map(
                        (social: any, index: number) => (
                          <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon
                              icon={`mdi:${social.platform}`}
                              className="w-8 h-8 text-[#E73649]"
                            />
                          </a>
                        ),
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
