import Image from "next/image";
import Link from "next/link";
import { Wave } from "./Decor";
import { cta } from "@/lib/navigation";

/**
 * Closing call-to-action. A dark, photo-backed card on a cream wash, then a
 * cyan wave that hands off into the (cyan) footer. Reuses the campus render with
 * a dark overlay so the white copy stays legible.
 */
export function FinalCta() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
        <div className="relative isolate overflow-hidden rounded-[2rem] shadow-xl">
          <Image
            src="/hero-campus.webp"
            alt=""
            fill
            sizes="(min-width: 1152px) 1088px, 100vw"
            className="-z-10 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-ink/65" />

          <div className="px-6 py-20 text-center sm:py-24">
            <span className="inline-block rounded-full bg-sunshine px-4 py-1.5 text-xs font-bold text-ink">
              Admissions Open · 2026
            </span>
            <h2 className="mt-5 text-center font-sans font-bold text-[38px] sm:text-[56px] leading-[1.05] tracking-tight text-white">
              Ready to begin?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center font-[family-name:var(--font-poppins)] font-normal text-base sm:text-lg text-white leading-relaxed">
              Admissions are open for the 2026 academic year. Explore programmes, check eligibility,
              and take the first step toward a life worth talking about.
            </p>
            <Link
              href={cta.apply}
              className="mt-8 inline-block rounded-full bg-brand px-8 py-4 text-base font-bold text-white shadow-lg transition-colors hover:bg-brand-dark"
            >
              Apply for 2026 →
            </Link>
          </div>
        </div>
      </div>

      <Wave top="var(--color-cream)" bottom="var(--color-ocean)" />
    </section>
  );
}
