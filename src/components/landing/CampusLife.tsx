import { Eyebrow } from "./Decor";

/**
 * "Campus Life" — four facility cards (Food / Medical / Hostels / Transport)
 * laid out 2×2 with asymmetric column widths: Food & Transport are the wide
 * cards, Medical & Hostels the narrow ones. Each card has copy on the left and
 * a large filled illustration bleeding off the bottom-right. Owns the
 * light→cyan wave into "Why Goa".
 */
const cards = [
  {
    imagePath: "/food.png",
    title: "Food",
    body: "Multi-cuisine cafeteria, dietary plans on request, hygienic kitchens audited monthly.",
    cls: "bg-sunshine text-ink",
    textClass: "max-w-[50%]",
    iconClass: "bottom-0 right-4 w-44 sm:w-52",
  },
  {
    imagePath: "/medical.png",
    title: "Medical",
    body: "On-campus clinic with resident doctor + tie-ups with nearby multi-specialty hospitals.",
    cls: "bg-brand text-white",
    textClass: "max-w-[55%]",
    iconClass: "bottom-0 right-3 w-44 sm:w-52",
  },
  {
    imagePath: "/hostel.png",
    title: "Hostels",
    body: "Separate boys' & girls' blocks. 24×7 security, biometric access, in-house wardens.",
    cls: "bg-ink text-white",
    textClass: "max-w-[55%]",
    iconClass: "bottom-0 right-4 w-36 sm:w-44",
  },
  {
    imagePath: "/transport.png",
    title: "Transport",
    body: "Daily shuttle from Margao / Madgaon and key Goa pickup points.",
    cls: "bg-ocean text-white",
    textClass: "max-w-[48%]",
    iconClass: "bottom-3 right-2 w-60 sm:w-72",
  },
];

function CardItem({ card }: { card: (typeof cards)[number] }) {
  const { imagePath, title, body, cls, textClass, iconClass } = card;
  return (
    <li className={`relative overflow-hidden rounded-[20px] p-8 sm:p-10 min-h-[280px] sm:min-h-[320px] ${cls}`}>
      <div className={`relative z-10 ${textClass}`}>
        <h3 className="font-sans font-medium text-[24px] sm:text-[32px] leading-tight tracking-tight">{title}</h3>
        <p className="mt-3 font-[family-name:var(--font-poppins)] font-normal text-base sm:text-[18px] leading-relaxed opacity-90">
          {body}
        </p>
      </div>
      <img src={imagePath} alt="" className={`pointer-events-none absolute h-auto ${iconClass}`} />
    </li>
  );
}

export function CampusLife() {
  return (
    <section id="campus-life" className="bg-brand-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Eyebrow className="text-ink">Campus Life</Eyebrow>
        <h2 className="mt-2 text-center font-sans font-bold text-[38px] sm:text-[56px] leading-[1.05] tracking-tight text-brand">
          A campus that feels like a destination.
        </h2>
        <p className="mx-auto mt-4 w-full text-center font-[family-name:var(--font-poppins)] font-normal text-base sm:text-[17px] text-ink leading-relaxed">
          Modern classrooms. Fully equipped labs. A central auditorium. Comfortable residences. Smart digital libraries.
          <br className="hidden sm:block" />{" "}
          An in-campus bank, salon, and supermarket. A cafeteria alongside a swimming pool. And a Goan beach beyond the gate.
        </p>

        {/* Asymmetric 2×2: Food & Transport wide, Medical & Hostels narrow */}
        <div className="mt-12 space-y-6">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-[1.3fr_1fr]">
            <CardItem card={cards[0]} />
            <CardItem card={cards[1]} />
          </ul>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr_1.4fr]">
            <CardItem card={cards[2]} />
            <CardItem card={cards[3]} />
          </ul>
        </div>
      </div>

      {/* Decorative icons sitting on the white, just above the Why Goa wave */}
      <div className="flex w-full items-end justify-between pb-2 relative z-0">
        <img src="/deco-lighthouse.svg" alt="" aria-hidden="true" className="h-20 w-auto sm:h-32 translate-y-[45px]" />
        <img src="/deco-pearl.svg" alt="" aria-hidden="true" className="h-16 w-auto translate-y-2 sm:h-24 translate-x-[10px]" />
        <img src="/deco-sun.svg" alt="" aria-hidden="true" className="mb-2 h-16 w-auto sm:h-24 -translate-x-[60px] translate-y-[10px]" />
      </div>
    </section>
  );
}
