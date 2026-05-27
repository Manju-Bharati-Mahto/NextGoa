import { Eyebrow } from "./Decor";

/**
 * "Beyond the classroom" — two cyan cards: Research (grant-funded) and
 * Entrepreneurship (incubator). Figures are plain text for AEO/GEO citability.
 */
function PalmMark() {
  return (
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 14v15" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M16 12C12 8 7 9 5 12c4-1 7 0 9 3M16 12c4-4 9-3 11 0-4-1-7 0-9 3M16 12c-1-5 2-9 6-9-2 2-3 5-3 8M16 12c1-5-2-9-6-9 2 2 3 5 3 8"
        stroke="var(--color-ocean)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const cards = [
  {
    badge: "Research",
    badgeClass: "bg-brand text-white",
    title: "Research that funds itself.",
    stats: [
      { value: "₹58 Cr+", label: "Govt grants" },
      { value: "IMR", label: "Internal grants" },
      { value: "APC", label: "Publishing support" },
    ],
    cta: "Explore research →",
  },
  {
    badge: "Entrepreneurship",
    badgeClass: "bg-ink text-white",
    title: "Ventures that ship.",
    stats: [
      { value: "₹20 Cr+", label: "Funding raised" },
      { value: "100+", label: "Startups incubated" },
      { value: "₹40 Cr+", label: "Startup revenue" },
    ],
    cta: "Visit the Incubator →",
  },
];

export function Research() {
  return (
    <section id="research" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex justify-center">
          <PalmMark />
        </div>
        <Eyebrow className="mt-3 text-ink/70">Beyond the classroom</Eyebrow>
        <h2 className="mt-2 text-center text-4xl font-extrabold tracking-tight text-brand sm:text-5xl">
          Research that funds itself. Ventures that ship.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <div key={c.badge} className="rounded-3xl bg-ocean p-8 text-white shadow-sm">
              <span
                className={`inline-block rounded-full px-4 py-1.5 text-xs font-bold ${c.badgeClass}`}
              >
                {c.badge}
              </span>
              <h3 className="mt-5 text-2xl font-extrabold">{c.title}</h3>
              <dl className="mt-6 grid grid-cols-3 gap-4">
                {c.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="text-2xl font-extrabold">{s.value}</dt>
                    <dd className="mt-1 text-xs text-white/80">{s.label}</dd>
                  </div>
                ))}
              </dl>
              <a
                href="#admissions"
                className="mt-7 inline-block rounded-full bg-sunshine px-5 py-2.5 text-sm font-bold text-ink transition-transform hover:scale-[1.03]"
              >
                {c.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
