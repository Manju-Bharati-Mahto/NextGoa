import { Eyebrow, Wave } from "./Decor";

/**
 * "Campus Life" — four facility cards (Food / Medical / Hostels / Transport)
 * colour-coded as in the design. Owns the light→cyan wave into "Why Goa".
 */
function FoodIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 16h24a12 12 0 0 1-24 0Z" />
      <path d="M4 16a12 12 0 0 1 24 0" />
      <path d="M16 4v3M11 6l1 2M21 6l-1 2" />
      <path d="M2 26h28" />
    </svg>
  );
}
function MedicalIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 16h6l3-7 4 14 3-7h7" />
    </svg>
  );
}
function HostelIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="7" y="5" width="18" height="23" rx="1.5" />
      <path d="M12 11h3M17 11h3M12 16h3M17 16h3M14 28v-5h4v5" />
    </svg>
  );
}
function BusIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="6" width="22" height="16" rx="3" />
      <path d="M5 14h22M11 6v8M21 6v8" />
      <circle cx="11" cy="25" r="2" />
      <circle cx="21" cy="25" r="2" />
    </svg>
  );
}

const cards = [
  {
    Icon: FoodIcon,
    title: "Food",
    body: "Multi-cuisine cafeteria, dietary plans on request, hygienic kitchens audited monthly.",
    cls: "bg-sunshine text-ink",
  },
  {
    Icon: MedicalIcon,
    title: "Medical",
    body: "On-campus clinic with a resident doctor, plus tie-ups with nearby multi-specialty hospitals.",
    cls: "bg-brand text-white",
  },
  {
    Icon: HostelIcon,
    title: "Hostels",
    body: "Separate boys' & girls' blocks, 24×7 security, biometric access, in-house wardens.",
    cls: "bg-ink text-white",
  },
  {
    Icon: BusIcon,
    title: "Transport",
    body: "Daily shuttle from Margao / Madgaon and key Goa pickup points.",
    cls: "bg-ocean text-white",
  },
];

export function CampusLife() {
  return (
    <section id="campus-life" className="bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Eyebrow className="text-ink/70">Campus Life</Eyebrow>
        <h2 className="mt-2 text-center text-4xl font-extrabold tracking-tight text-brand sm:text-5xl">
          A campus that feels like a destination.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-7 text-ink/70">
          Modern classrooms. Fully equipped labs. A central auditorium. Comfortable residences.
          Smart digital libraries. An in-campus bank, salon, and supermarket. A cafeteria alongside
          a swimming pool. And a Goan beach beyond the gate.
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ Icon, title, body, cls }) => (
            <li key={title} className={`rounded-3xl p-7 shadow-sm ${cls}`}>
              <Icon />
              <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
              <p className="mt-2 text-sm leading-6 opacity-90">{body}</p>
            </li>
          ))}
        </ul>
      </div>

      <Wave top="#fafafa" bottom="var(--color-ocean)" accent="var(--color-ocean-deep)" />
    </section>
  );
}
