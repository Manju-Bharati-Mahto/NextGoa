import Image from "next/image";
import Link from "next/link";
import { cta } from "@/lib/navigation";

/**
 * Landing hero (matches the Figma "Landing page" export):
 *  - Sky-blue backdrop that blends out of the header.
 *  - Headline "For GOAl Getters…" (GOA + second line in brand red).
 *  - Yellow "Admissions Open · 2026" pill.
 *  - Full-width campus-gate render with three CTA pills overlapping its base.
 *
 * Intro animation (pure CSS, reduced-motion aware — see globals.css): the big
 * "Parul® University Goa" lockup shows first, swipes left + fades, then the
 * hero content fades up. All content lives in the DOM throughout (opacity only),
 * so crawlers and AI engines always see it. `id="hero"` is the scroll target
 * StickyApplyBar observes.
 */

/** The big centred brand lockup shown in the intro frame. */
function IntroLockup() {
  return (
    <div className="flex flex-col items-center leading-none">
      <div className="flex items-start">
        <span className="text-6xl font-extrabold tracking-tight text-ink sm:text-8xl">
          Parul
        </span>
        <sup className="mt-2 text-2xl font-bold text-ink sm:text-4xl">®</sup>
      </div>
      <span className="mt-2 text-5xl font-light tracking-tight text-ink sm:text-7xl">
        University
      </span>
      <span className="mt-6 rounded-2xl bg-brand px-8 py-2 text-4xl font-extrabold text-white sm:text-6xl">
        Goa
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      {/* Sky backdrop — blends out of the header into the section below */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky via-sky-light to-white" />

      {/* Intro frame — decorative, swipes left + fades out */}
      <div
        aria-hidden="true"
        className="hero-intro pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6 text-center"
      >
        <IntroLockup />
      </div>

      {/* Hero content — fades up after the intro */}
      <div className="hero-content mx-auto max-w-6xl px-6 pt-16 sm:pt-20">
        <div className="text-center">
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            For <span className="text-brand">GOA</span>l Getters, For Unstoppables.
            <br />
            <span className="text-brand">For Futures That Refuse Average</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium text-ink/75 sm:text-lg">
            Goa&apos;s first State Private University, backed by two decades of teaching,
            research, and placements at Parul University in Gujarat.
          </p>

          <span className="mt-6 inline-block rounded-full bg-sunshine px-6 py-2.5 text-sm font-bold text-ink shadow-sm">
            Admissions Open · 2026
          </span>
        </div>

        {/* Campus gate render with CTA pills overlapping its base */}
        <div className="relative mt-10 sm:mt-12">
          <div className="overflow-hidden rounded-t-[2rem]">
            <Image
              src="/hero-campus.webp"
              alt="The Parul University Goa campus entrance — a sweeping canopy gateway framed by palm trees"
              width={1920}
              height={1080}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 flex translate-y-1/2 flex-wrap items-center justify-center gap-3 px-4">
            <Link
              href={cta.apply}
              className="rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-colors hover:bg-brand-dark"
            >
              Apply for 2026 →
            </Link>
            <Link
              href={cta.counsellor}
              className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-ink shadow-lg ring-1 ring-black/5 transition-colors hover:bg-zinc-50"
            >
              Talk to Counsellor
            </Link>
            <a
              href={cta.brochure}
              download
              className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-ink shadow-lg ring-1 ring-black/5 transition-colors hover:bg-zinc-50"
            >
              Brochure
            </a>
          </div>
        </div>
      </div>

      {/* Spacer so the overlapping CTA pills clear the next (dark) section */}
      <div className="h-10 sm:h-12" />
    </section>
  );
}
