import { Eyebrow } from "./Decor";

/**
 * "Outcomes" recruiter wall. The design shows brand logos; we render the names
 * as a muted, monochrome wordmark wall instead of fabricating trademarked logo
 * images. The copy keeps it honest ("indicative recruiter list"). Drop real
 * permitted logo SVGs into /public and swap the spans for <Image> when available.
 */
const recruiters = [
  "Cisco",
  "TCS",
  "HDFC Life",
  "Zomato",
  "Reliance",
  "Adani",
  "Blinkit",
  "Bisleri",
  "H&M",
  "Vero Moda",
  "Titan",
  "Pantaloons",
  "Only",
  "Livspace",
  "Amazon",
];

export function Outcomes() {
  return (
    <section className="bg-zinc-50">
      <div className="mx-auto max-w-5xl px-6 pb-20">
        <Eyebrow className="text-ink/70">Outcomes</Eyebrow>
        <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-brand sm:text-4xl">
          Where graduates go by sector, not by accident.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base text-ink/70">
          Recruiters return year after year because graduates arrive job-ready. An indicative
          recruiter list across the Parul University ecosystem.
        </p>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
          {recruiters.map((r) => (
            <li
              key={r}
              className="text-xl font-extrabold tracking-tight text-ink/40 transition-colors hover:text-ink/70 sm:text-2xl"
            >
              {r}
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center">
          <a
            href="#admissions"
            className="text-sm font-bold text-brand hover:text-brand-dark"
          >
            Full placements report →
          </a>
        </p>
      </div>
    </section>
  );
}
