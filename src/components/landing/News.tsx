import { Eyebrow } from "./Decor";

/**
 * "News & stories" — three story cards. Card images are gradient placeholders
 * (drop real thumbnails at /public/news/*.jpg and swap in <Image>). Category
 * badges are colour-coded; titles/links become real article routes later.
 */
const stories = [
  {
    tag: "Innovation",
    tagClass: "bg-brand text-white",
    title: "PU Goa Hackathon 2026 - 48 hours, 60 teams, 9 deployed prototypes.",
    body: "From medical scheduling to coastal-tourism analytics, students built real solutions.",
  },
  {
    tag: "Alumni",
    tagClass: "bg-ocean text-white",
    title: "From BHMCT to The Leela: Aman's two-year journey to property operations.",
    body: "How training pairs hands-on career years — without a single skip in between.",
  },
  {
    tag: "Industry",
    tagClass: "bg-ink text-white",
    title: "Engineering students visit ONGC Betul during India Energy Week 2026.",
    body: "A first-hand look at offshore operations, processing platforms, and energy supply chains.",
  },
];

export function News() {
  return (
    <section id="news" className="bg-brand-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Eyebrow className="text-ink">News &amp; stories</Eyebrow>
        <h2 className="mt-2 text-center font-sans font-bold text-[38px] sm:text-[56px] leading-[1.05] tracking-tight text-brand">
          What&apos;s happening on campus.
        </h2>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <li
              key={s.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] bg-gradient-to-br from-emerald-500 via-emerald-700 to-emerald-900">
                <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_25%_70%,#bbf7d0_0,transparent_45%)]" />
              </div>
              <div className="p-7">
                <span
                  className={`inline-block rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide ${s.tagClass}`}
                >
                  {s.tag}
                </span>
                <h3 className="mt-4 font-sans text-xl font-bold leading-snug tracking-tight text-ink">{s.title}</h3>
                <p className="mt-3 font-[family-name:var(--font-poppins)] text-[15px] leading-relaxed text-ink/70">{s.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center">
          <a href="#news" className="text-sm font-bold text-brand hover:text-brand-dark">
            All news →
          </a>
        </p>
      </div>
    </section>
  );
}
