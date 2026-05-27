/**
 * "Our Philosophy" section: ocean-blue band with wave dividers (top transitions
 * from the dark stats band, bottom into the white section below) and three
 * yellow value cards.
 *
 * NOTE: the design shows the eyebrow "The Lighthouse" on all three cards — that
 * looks like a copy placeholder (the icons differ: lighthouse / pearl / sunrise).
 * Replicated faithfully here; confirm the intended eyebrow copy per card.
 */
import { Eyebrow, Wave } from "./Decor";

function LighthouseIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 16h8l2 18H14z" />
      <path d="M16 16l1-5h6l1 5" />
      <circle cx="20" cy="8" r="2.2" fill="currentColor" stroke="none" />
      <path d="M27 6l4-2M13 6L9 4M28 11l4 0M12 11l-4 0" />
    </svg>
  );
}

function PearlIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 22c0-7 6-13 14-13s14 6 14 13" />
      <path d="M6 22c4 4 9 5 14 5s10-1 14-5" />
      <circle cx="20" cy="20" r="3.2" fill="currentColor" stroke="none" />
      <path d="M20 9v-3M14 11l-2-2M26 11l2-2" />
    </svg>
  );
}

function SunriseIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 28h30" />
      <path d="M12 28a8 8 0 0116 0" />
      <path d="M20 12v-4M9 17L6 14M31 17l3-3M6 23H3M37 23h-3" />
    </svg>
  );
}

const cards = [
  {
    Icon: LighthouseIcon,
    eyebrow: "The Lighthouse",
    title: "Guidance",
    body: "Every student moves forward with clarity and direction. Our mentors do not just teach. They guide. In a world full of noise, we are the steady light that shows you the way.",
  },
  {
    Icon: PearlIcon,
    eyebrow: "The Lighthouse",
    title: "Discovery",
    body: "Curiosity is built into everything here. Through internships, global exposure, industry immersions, & interdisciplinary learning, students do not just learn what exists. They discover what is possible.",
  },
  {
    Icon: SunriseIcon,
    eyebrow: "The Lighthouse",
    title: "Continuity",
    body: "What you build at PU Goa does not stop when you leave campus. The habits, the networks, the resilience: they travel with you for life.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-ocean">
      <Wave top="var(--color-ink-warm)" bottom="var(--color-ocean)" accent="var(--color-ocean-deep)" />

      <div className="mx-auto max-w-7xl px-6 pb-8 pt-4">
        <Eyebrow className="text-white/90">Our Philosophy</Eyebrow>
        <h2 className="mt-1 text-center text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          What Shapes Everything We Do
        </h2>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map(({ Icon, eyebrow, title, body }) => (
            <li
              key={title}
              className="rounded-3xl bg-sunshine p-7 shadow-lg ring-1 ring-black/5"
            >
              <span className="text-brand">
                <Icon />
              </span>
              <p className="mt-5 text-sm font-medium text-ink/70">{eyebrow}</p>
              <h3 className="mt-1 text-2xl font-bold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/80">{body}</p>
            </li>
          ))}
        </ul>
      </div>

      <Wave top="var(--color-ocean)" bottom="#ffffff" accent="var(--color-ocean-deep)" />
    </section>
  );
}
