import { Eyebrow } from "./Decor";

const cards = [
  {
    title: "Food",
    body: "Multi-cuisine cafeteria, dietary plans on request, hygienic kitchens audited monthly.",
    cls: "bg-sunshine text-ink",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-full h-full">
        <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8.17-15.03-8.17-15.03 0h15.03zM1.02 17h15v2h-15z" />
      </svg>
    ),
  },
  {
    title: "Medical",
    body: "On-campus clinic with resident doctor + tie-ups with nearby multi-specialty hospitals.",
    cls: "bg-brand text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-full h-full">
        <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
      </svg>
    ),
  },
  {
    title: "Hostels",
    body: "Separate boys' & girls' blocks. 24×7 security, biometric access, in-house wardens.",
    cls: "bg-ink text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-full h-full">
        <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
      </svg>
    ),
  },
  {
    title: "Transport",
    body: "Daily shuttle from Margao / Madgaon and key Goa pickup points.",
    cls: "bg-ocean text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-full h-full">
        <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
      </svg>
    ),
  },
];

function CardItem({ card }: { card: (typeof cards)[number] }) {
  const { title, body, cls, icon } = card;
  return (
    <li className={`relative overflow-hidden rounded-[16px] sm:rounded-[20px] p-4 sm:p-10 min-h-[160px] sm:min-h-[320px] flex flex-col justify-between ${cls}`}>
      {/* Text */}
      <div className="relative z-10">
        <h3 className="font-poppins font-semibold text-[18px] sm:text-[32px] leading-tight tracking-tight">{title}</h3>
        <p className="mt-1 sm:mt-3 text-[12px] sm:text-base leading-[1.4] opacity-90">{body}</p>
      </div>
      {/* Icon — bottom-right */}
      <div className="self-end mt-1 sm:mt-0 sm:absolute sm:bottom-4 sm:right-4 w-8 h-8 sm:w-20 sm:h-20 opacity-20">
        {icon}
      </div>
    </li>
  );
}

export function CampusLife() {
  return (
    <section id="campus-life" className="bg-brand-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Eyebrow className="text-ink">Campus Life</Eyebrow>
        <h2 className="mt-2 text-center section-heading text-brand">
          A campus that feels like a destination.
        </h2>
        <p className="mx-auto mt-4 w-full text-center section-body text-ink">
          Modern classrooms. Fully equipped labs. A central auditorium. Comfortable residences. Smart digital libraries.
          <br className="hidden sm:block" />{" "}
          An in-campus bank, salon, and supermarket. A cafeteria alongside a swimming pool. And a Goan beach beyond the gate.
        </p>

        {/* Mobile: 2×2 grid | Desktop: asymmetric rows */}
        <div className="mt-12">
          {/* Mobile 2×2 grid */}
          <ul className="grid grid-cols-2 gap-3 sm:hidden">
            {cards.map((card) => (
              <CardItem key={card.title} card={card} />
            ))}
          </ul>

          {/* Desktop asymmetric layout */}
          <div className="hidden sm:block space-y-6">
            <ul className="grid gap-6 sm:grid-cols-[1.3fr_1fr]">
              <CardItem card={cards[0]} />
              <CardItem card={cards[1]} />
            </ul>
            <ul className="grid gap-6 sm:grid-cols-[1fr_1.4fr]">
              <CardItem card={cards[2]} />
              <CardItem card={cards[3]} />
            </ul>
          </div>
        </div>
      </div>

      {/* Decorative icons */}
      <div className="flex w-full items-end justify-between pb-2 relative z-0 px-2 sm:px-0">
        <img src="/deco-lighthouse.svg" alt="" aria-hidden="true" className="h-16 w-auto sm:h-32 translate-y-[25px] sm:translate-y-[45px]" />
        <img src="/deco-pearl.svg" alt="" aria-hidden="true" className="h-14 w-auto sm:h-24 translate-y-[35px] sm:translate-y-2 translate-x-2 sm:translate-x-[10px]" />
        <img src="/deco-sun.svg" alt="" aria-hidden="true" className="mb-2 h-14 w-auto sm:h-24 -translate-x-2 sm:-translate-x-[60px] translate-y-[20px] sm:translate-y-[10px]" />
      </div>
    </section>
  );
}
