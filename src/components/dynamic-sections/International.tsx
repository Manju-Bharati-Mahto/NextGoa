import { Eyebrow } from "./Decor";
import Link from "next/link";

interface InternationalProps {
  data: {
    eyebrow?: string;
    heading?: string;
    description?: string;

    buttonText?: string;
    buttonLink?: string;

    worldMap?: string;

    countries?: {
      name: string;
    }[];

    cards?: {
      value: string;
      title: string;
    }[];
  };
}

export function International({ data }: InternationalProps) {
  const countries = data?.countries || [];
  const cards = data?.cards || [];
  return (
    <section
      id="international"
      className="relative overflow-hidden bg-[#F8F8F8] py-10 sm:py-0"
    >
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

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20 pb-10">
        <Eyebrow className="text-ink">{data?.eyebrow}</Eyebrow>
        <h2
          className="mt-2 text-center section-heading text-brand"
          dangerouslySetInnerHTML={{ __html: data?.heading || "" }}
        />
        <p
          className="mx-auto mt-4 max-w-6xl text-center section-body text-ink"
          dangerouslySetInnerHTML={{ __html: data?.description || "" }}
        />

        {/* Dotted world map with country flags */}
        <img src={data?.worldMap || "/world-map.svg"} alt="World map highlighting Parul University Goa's partner countries" className="mx-auto mt-10 w-full max-w-6xl" />

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {countries.map((c, index) => (
            <li
              key={index}
              className="rounded-full border border-ink/15 bg-white/70 px-4 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base font-bold uppercase tracking-normal sm:tracking-wide text-ink/70"
            >
              {c.name}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`flex min-h-[140px] sm:min-h-[210px] flex-col items-center justify-center rounded-[20px] bg-ocean px-3 py-6 sm:px-6 sm:py-10 text-center text-white shadow-sm ${
                i === 2 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <p className="font-sans font-bold text-3xl sm:text-5xl leading-none tracking-tight">
                {c.value}
              </p>
              <h3 className="mt-2 sm:mt-3 font-poppins font-semibold text-sm sm:text-2xl leading-tight tracking-tight text-white/90">
                {c.title}
              </h3>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center">
          <Link
            href={data?.buttonLink || "#"}
            data-track
            data-track-event="cta_click"
            data-track-text={data?.buttonText || "Explore Global Opportunities"}
            data-track-header="NA"
            className="inline-block rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
          >
            {data?.buttonText}
          </Link>
        </p>
      </div>
    </section>
  );
}
