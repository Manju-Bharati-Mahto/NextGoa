import { Eyebrow } from "./Decor";

/**
 * "Numbers that matter" — the placement ecosystem in figures. The headline
 * package card + the stat trio. Figures are plain text (cited by AI engines);
 * keep the asterisked "ecosystem" caveat honest.
 */
const stats = [
  { value: "3x", suffix: " ASSOCHAM", label: "Best Placement University, consecutive years" },
  { value: "₹58 Cr+", suffix: "", label: "Government-funded research grants" },
  { value: "120+", suffix: "", label: "Global university partners" },
];

function ChartMark() {
  return (
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="18" width="5" height="10" rx="1" fill="var(--color-ocean)" />
      <rect x="13" y="12" width="5" height="16" rx="1" fill="var(--color-sunshine)" />
      <rect x="22" y="6" width="5" height="22" rx="1" fill="var(--color-brand)" />
    </svg>
  );
}

export function Placements() {
  return (
    <section id="placements" className="bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex justify-center">
          <ChartMark />
        </div>
        <Eyebrow className="mt-3 text-ink/70">NUMBERS THAT MATTER</Eyebrow>
        <h2 className="mt-2 text-center text-4xl font-extrabold tracking-tight text-brand sm:text-5xl">
          The ecosystem in figures.
        </h2>
        <p className="mt-3 text-center text-base text-ink/70">
          Two decades of placement results, distilled.
        </p>

        {/* Headline package card */}
        <div className="relative mt-12 overflow-hidden rounded-3xl bg-brand p-8 text-white shadow-lg sm:p-12">
          <span className="inline-block rounded-full bg-sunshine px-4 py-1.5 text-xs font-bold text-ink">
            Highest package · 2027
          </span>
          <div className="mt-6 flex items-end gap-2">
            <span className="text-7xl font-extrabold leading-none sm:text-8xl">₹60</span>
            <span className="mb-2 text-3xl font-extrabold sm:text-4xl">LPA*</span>
          </div>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/90">
            Awarded to two B.Tech CSE students in a single recruitment cycle — the benchmark the PU
            ecosystem is producing today.
          </p>
          {/* decorative ring */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10" />
        </div>

        {/* Recruiting companies line */}
        <div className="mt-8 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center sm:gap-4">
          <span className="text-5xl font-extrabold text-ink">2,200+</span>
          <span className="text-left text-sm text-ink/70">
            <strong className="block text-ink">Recruiting companies*</strong>
            Across the Parul University ecosystem, every year.
          </span>
        </div>

        {/* Stat trio */}
        <dl className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-zinc-200 bg-white p-6 text-center"
            >
              <dt className="text-3xl font-extrabold text-ink">
                {s.value}
                <span className="text-xl">{s.suffix}</span>
              </dt>
              <dd className="mt-2 text-sm text-ink/60">{s.label}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 text-center text-xs text-ink/40">
          *Figures span the Parul University ecosystem (Goa &amp; Gujarat).
        </p>
      </div>
    </section>
  );
}
