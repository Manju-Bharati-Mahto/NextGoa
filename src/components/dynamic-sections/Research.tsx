import { Eyebrow } from "./Decor";
import Link from "next/link";

interface ResearchProps {
  data: {
    eyebrow?: string;
    heading?: string;

    cards?: {
      badge: string;
      badgeClass: string;
      description: string;
      cta: string;
      link: string;
      stats: {
        value: string;
        label: string;
      }[];
    }[];
  };
}


export function Research({ data, }: ResearchProps) {
  const cards = data?.cards || [];
  return (
    <section id="research" className="bg-brand-white py-10 sm:py-0">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex justify-center">
          <img src="/Fade1.svg" alt="" aria-hidden="true" className="h-[97px] w-auto" />
        </div>
        <Eyebrow className="mt-3 text-ink"> {data.eyebrow}</Eyebrow>
        <h2 className="mt-2 text-center section-heading text-brand">
          {data.heading}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <div
              key={c.badge}
              className="flex flex-col justify-between rounded-[32px] bg-ocean p-6 sm:p-8 md:p-10 text-white shadow-sm"
            >
              <div>
                <span
                  className={`inline-block font-poppins rounded-full px-5 py-1.5 text-[18px] sm:text-[20px] font-semibold tracking-wide ${c.badgeClass}`}
                >
                  {c.badge}
                </span>
                <p
                  className="mt-6 font-poppins text-[17px] sm:text-[20px] leading-relaxed text-white/95"
                  dangerouslySetInnerHTML={{
                    __html: c.description,
                  }}
                />
              </div>

              <div>
                <dl className="mt-8 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
                  <div className="flex flex-col">
                    <dt className="font-[family-name:var(--font-poppins)] text-lg sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-white leading-none tracking-tight whitespace-nowrap">
                      {c.stats[0].value}
                    </dt>
                    <dd className="mt-2 font-[family-name:var(--font-poppins)] text-xs sm:text-sm text-white/90 leading-tight">
                      {c.stats[0].label}
                    </dd>
                  </div>
                  <div className="h-10 w-px bg-white/25" aria-hidden="true" />
                  <div className="flex flex-col pl-2 sm:pl-4">
                    <dt className="font-[family-name:var(--font-poppins)] text-lg sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-white leading-none tracking-tight whitespace-nowrap">
                      {c.stats[1].value}
                    </dt>
                    <dd className="mt-2 font-[family-name:var(--font-poppins)] text-xs sm:text-sm text-white/90 leading-tight">
                      {c.stats[1].label}
                    </dd>
                  </div>
                  <div className="h-10 w-px bg-white/25" aria-hidden="true" />
                  <div className="flex flex-col pl-2 sm:pl-4">
                    <dt className="font-[family-name:var(--font-poppins)] text-lg sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-white leading-none tracking-tight whitespace-nowrap">
                      {c.stats[2].value}
                    </dt>
                    <dd className="mt-2 font-[family-name:var(--font-poppins)] text-xs sm:text-sm text-white/90 leading-tight">
                      {c.stats[2].label}
                    </dd>
                  </div>
                </dl>

                <div className="mt-8">
                  <Link
                    href={c.link || "#"}
                    target={c.link?.startsWith("http") ? "_blank" : undefined}
                    rel={c.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                    data-track
                    data-track-event="cta_click"
                    data-track-text={c.cta}
                    data-track-header={c.badge}
                    className="inline-block rounded-full bg-sunshine px-5 py-2.5 font-[family-name:var(--font-poppins)] text-[18px] font-bold text-ink transition-transform hover:scale-[1.03]"
                  >
                    {c.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
