import { Eyebrow } from "./Decor";

/**
 * "International Teaser" — global pathways. Countries are listed as plain text
 * (good for AEO); the cards summarise the three routes abroad.
 */
const countries = [
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇬🇧", name: "UK" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇳🇿", name: "New Zealand" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇫🇷", name: "France" },
  { flag: "🇩🇪", name: "Germany" },
];

const cards = [
  { value: "120+", title: "Global Partners" },
  { value: "Pathways", title: "Programs" },
  { value: "Semester", title: "Exchange Program" },
];

export function International() {
  return (
    <section id="international" className="relative overflow-hidden bg-[#F8F8F8]">
      {/* Top gradient that stops before the map */}
      <div className="absolute inset-x-0 top-0 h-[350px] sm:h-[450px] bg-gradient-to-b from-[#CBEFFD] to-[#F8F8F8] z-0 pointer-events-none" />
      
      {/* Palm trees in the bottom corners */}
      <img
        src="/tree-left.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[250px] lg:bottom-[300px] left-0 z-0 hidden h-64 w-auto sm:block lg:h-80"
      />
      <img
        src="/tree-right.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[250px] lg:bottom-[300px] right-0 z-0 hidden h-64 w-auto sm:block lg:h-80"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <Eyebrow className="text-ink">International Teaser</Eyebrow>
        <h2 className="mt-2 text-center font-sans font-bold text-[38px] sm:text-[56px] leading-[1.05] tracking-tight text-brand">
          Your Degree Can Take You Global
        </h2>
        <p className="mx-auto mt-4 max-w-6xl text-center font-[family-name:var(--font-poppins)] font-normal text-base sm:text-lg text-ink leading-relaxed">
          Through Pathway Programmes, Semester Exchanges, Summer Schools, and Global Internships, PU
          Goa students can start here and finish their degree at partner universities in the USA, UK,
          Australia, New Zealand, Canada, France, and Germany.
        </p>

        {/* Dotted world map with country flags */}
        <img
          src="/world-map.svg"
          alt="World map highlighting Parul University Goa's partner countries"
          className="mx-auto mt-10 w-full max-w-6xl"
        />

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {countries.map((c) => (
            <li
              key={c.name}
              className="rounded-full border border-ink/15 bg-white/70 px-5 py-2 text-xs font-bold uppercase tracking-wide text-ink/70"
            >
              {c.name}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="flex min-h-[210px] flex-col items-center justify-center rounded-3xl bg-ocean px-6 py-10 text-center text-white shadow-sm"
            >
              <p className="font-sans font-bold text-5xl sm:text-6xl leading-none tracking-tight">{c.value}</p>
              <h3 className="mt-3 font-sans font-medium text-[24px] sm:text-[32px] leading-tight tracking-tight text-white/90">{c.title}</h3>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center">
          <a
            href="#admissions"
            className="inline-block rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
          >
            Explore Global Opportunities →
          </a>
        </p>
      </div>
    </section>
  );
}
