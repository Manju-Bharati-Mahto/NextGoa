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
  { value: "120+", title: "Global Partners", body: "Universities across seven countries." },
  { value: "Pathways", title: "Programmes", body: "Start in Goa, finish your degree abroad." },
  { value: "Semester", title: "Exchange Programme", body: "A term overseas, credits that transfer." },
];

export function International() {
  return (
    <section id="international" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Eyebrow className="text-ink/70">International Teaser</Eyebrow>
        <h2 className="mt-2 text-center text-4xl font-extrabold tracking-tight text-brand sm:text-5xl">
          Your Degree Can Take You Global
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-7 text-ink/70">
          Through Pathway Programmes, Semester Exchanges, Summer Schools, and Global Internships, PU
          Goa students can start here and finish their degree at partner universities in the USA,
          UK, Australia, New Zealand, Canada, France, and Germany.
        </p>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {countries.map((c) => (
            <li key={c.name} className="flex items-center gap-2 text-sm font-bold text-ink/70">
              <span aria-hidden="true" className="text-lg">
                {c.flag}
              </span>
              {c.name}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="rounded-3xl bg-ocean p-7 text-white shadow-sm">
              <p className="text-3xl font-extrabold">{c.value}</p>
              <h3 className="mt-1 text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-white/85">{c.body}</p>
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
