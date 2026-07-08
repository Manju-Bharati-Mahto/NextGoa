"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Eyebrow } from "@/components/landing/Decor";

interface Props {
  data: any;
}

export function Leadership({ data }: Props) {
  const [experts, setExperts] = useState<any[]>([]);

  const [activeBadge, setActiveBadge] = useState(
    data.sections?.[0]?.category || "",
  );

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
      .filter((expert: any) => {
        try {
          const categories =
            typeof expert.category === "string"
              ? JSON.parse(expert.category)
              : expert.category;

          return categories.includes(data.expert_category);
        } catch {
          return false;
        }
      })
      .sort((a: any, b: any) => a.sort_order - b.sort_order);
  }, [experts, data.expert_category]);

  const currentBadge = useMemo(() => {
    return (
      data.sections?.find((item: any) => item.category === activeBadge) || {}
    );
  }, [data.sections, activeBadge]);
  return (
    <section
      id="leadership"
      className="bg-[#F8F8F8] px-6 overflow-hidden scroll-mt-24 md:scroll-mt-32 py-10 sm:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Eyebrow className="text-ink">{data.eyebrow}</Eyebrow>
          <h2 className="mt-2 text-center text-brand section-heading">
            {data.heading}
          </h2>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {data.sections?.map((item: any) => (
              <button
                key={item.category}
                onClick={() => setActiveBadge(item.category)}
                className={`rounded-full px-6 py-2 text-sm transition ${
                  activeBadge === item.category
                    ? "bg-brand text-white"
                    : "bg-brand/5 text-brand hover:bg-brand/10"
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>

          <h3 className="mt-12 text-ink section-subheading">
            {currentBadge.heading}
          </h3>

          <p className="mt-2 text-ink/80 section-body">
            {currentBadge.description}
          </p>
        </div>

        <div className="space-y-12">
          {filteredExperts.map((expert, index) => {
            const content =
              typeof expert.content === "string"
                ? JSON.parse(expert.content)
                : expert.content;

            const reverse = index % 2 === 1;

            return (
              <div key={expert.id}>
                <div
                  className={`flex flex-col gap-6 items-stretch md:gap-8 ${
                    reverse ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Image */}

                  <div className="w-full md:w-[40%] flex-shrink-0">
                    <div className="relative aspect-[4/3] md:aspect-auto md:h-full w-full overflow-hidden rounded-[20px] shadow-lg">
                      <Image
                        src={content.image || "/placeholder.png"}
                        alt={content.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Card */}

                  <div
                    className={`w-full md:w-[60%] rounded-[20px] p-8 sm:p-12 text-white shadow-lg relative overflow-hidden flex flex-col justify-center ${
                      reverse ? "bg-[#0CAADD]" : "bg-brand"
                    }`}
                  >
                    <div className="relative z-10">
                      <h4 className="font-poppins font-semibold text-[32px] sm:text-[40px] leading-tight">
                        {content.name}
                      </h4>

                      <p className="mt-1 text-[16px] sm:text-[18px] text-white/90">
                        {content.designation}
                      </p>

                      <div className="my-6 h-px w-full bg-white/30" />

                      <p className="text-[15px] sm:text-[16px] leading-relaxed text-white/95">
                        {content.description}
                      </p>

                      {content.social_links?.length > 0 && (
                        <div className="mt-8 flex flex-wrap gap-4">
                          {content.social_links.map(
                            (social: any, socialIndex: number) => (
                              <a
                                key={socialIndex}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-110"
                              >
                                <img
                                  src={`/${social.platform}-icon.svg`}
                                  alt={social.platform}
                                  className="h-12 w-12 rounded-[16px]"
                                />
                              </a>
                            ),
                          )}
                        </div>
                      )}
                    </div>

                    <img
                      src="/award.svg"
                      alt=""
                      className="absolute -right-8 -bottom-8 w-[200px] sm:w-[250px] opacity-10 pointer-events-none"
                    />
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
