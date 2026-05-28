/**
 * Dark stats band beneath the hero. Plain, crawlable text (good for SEO/AEO —
 * these numbers are the kind of facts AI engines cite). Edit the figures here.
 */
const stats = [
  { value: "2,200+", label: "Recruiting companies*" },
  { value: "120+", label: "Global university partners" },
  { value: "58 Cr+", label: "Govt-funded research" },
];

export function StatsBar() {
  return (
    <section id="stats" className="bg-ink-warm">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <dl className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:divide-x sm:divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="font-[family-name:var(--font-poppins)] text-5xl font-semibold text-brand-bright">{s.value}</dt>
              <dd className="mt-2 text-sm font-medium text-white/70">{s.label}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 text-center text-xs text-white/40">
          *Across the Parul University ecosystem.
        </p>
      </div>
    </section>
  );
}
