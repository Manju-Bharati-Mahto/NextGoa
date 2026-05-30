import { Eyebrow } from "./Decor";

/**
 * "Beyond the classroom" — two cyan cards: Research (grant-funded) and
 * Entrepreneurship (incubator). Figures are plain text for AEO/GEO citability.
 */
const cards = [
  {
    badge: "Research",
    badgeClass: "bg-brand text-white",
    description:
      "₹58 Cr+ in government-funded research, internal IMR grants for early-career scholars, and APC support for Scopus/Web of Science publications. PU Goa PhD scholars plug into this network from day one.",
    stats: [
      { value: "₹58 Cr+", label: "Govt funding" },
      { value: "IMR", label: "Internal grants" },
      { value: "APC", label: "Publishing support" },
    ],
    cta: "Explore research →",
  },
  {
    badge: "Entrepreneurship",
    badgeClass: "bg-brand text-white",
    description:
      "₹20 Cr+ in startup funding raised by student-led ventures, ₹40 Cr+ in revenue generated, & a Shark Tank India winner among them. The incubation cell is open across every faculty from agri-tech to hospitality concepts.",
    stats: [
      { value: "₹20 Cr+", label: "Startup funding" },
      { value: "100+", label: "Mentors" },
      { value: "₹40 Cr+", label: "Startup revenue" },
    ],
    cta: "Visit the incubator →",
  },
];

export function Research() {
  return (
    <section id="research" className="bg-brand-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex justify-center">
          <img src="/Fade1.svg" alt="" aria-hidden="true" className="h-[97px] w-auto" />
        </div>
        <Eyebrow className="mt-3 text-ink">Beyond the classroom</Eyebrow>
        <h2 className="mt-2 text-center font-sans font-bold text-[38px] sm:text-[56px] leading-[1.05] tracking-tight text-brand">
          Research that funds itself. Ventures that ship.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <div
              key={c.badge}
              className="flex flex-col justify-between rounded-[32px] bg-ocean p-6 sm:p-8 md:p-10 text-white shadow-sm"
            >
              <div>
                <span
                  className={`inline-block rounded-full px-4 py-1 text-xs font-semibold tracking-wide ${c.badgeClass}`}
                >
                  {c.badge}
                </span>
                <p className="mt-6 font-[family-name:var(--font-poppins)] font-normal text-base sm:text-[18px] leading-relaxed text-white/95">
                  {c.description}
                </p>
              </div>

              <div>
                <dl className="mt-8 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
                  <div className="flex flex-col">
                    <dt className="font-[family-name:var(--font-poppins)] text-2xl sm:text-[28px] md:text-[32px] font-bold text-white leading-none tracking-tight">
                      {c.stats[0].value}
                    </dt>
                    <dd className="mt-2 font-[family-name:var(--font-poppins)] text-xs sm:text-sm text-white/90 leading-tight">
                      {c.stats[0].label}
                    </dd>
                  </div>
                  <div className="h-10 w-px bg-white/25" aria-hidden="true" />
                  <div className="flex flex-col pl-2 sm:pl-4">
                    <dt className="font-[family-name:var(--font-poppins)] text-2xl sm:text-[28px] md:text-[32px] font-bold text-white leading-none tracking-tight">
                      {c.stats[1].value}
                    </dt>
                    <dd className="mt-2 font-[family-name:var(--font-poppins)] text-xs sm:text-sm text-white/90 leading-tight">
                      {c.stats[1].label}
                    </dd>
                  </div>
                  <div className="h-10 w-px bg-white/25" aria-hidden="true" />
                  <div className="flex flex-col pl-2 sm:pl-4">
                    <dt className="font-[family-name:var(--font-poppins)] text-2xl sm:text-[28px] md:text-[32px] font-bold text-white leading-none tracking-tight">
                      {c.stats[2].value}
                    </dt>
                    <dd className="mt-2 font-[family-name:var(--font-poppins)] text-xs sm:text-sm text-white/90 leading-tight">
                      {c.stats[2].label}
                    </dd>
                  </div>
                </dl>

                <div className="mt-8">
                  <a
                    href="#admissions"
                    className="inline-block rounded-full bg-sunshine px-5 py-2.5 font-[family-name:var(--font-poppins)] text-xs sm:text-sm font-bold text-ink transition-transform hover:scale-[1.03]"
                  >
                    {c.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
