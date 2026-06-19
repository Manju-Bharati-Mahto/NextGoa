import { Eyebrow } from "./Decor";
import { Icon } from "@iconify/react";

const cards = [
  {
    title: "Food",
    body: "Multi-cuisine cafeteria, dietary plans on request, hygienic kitchens audited monthly.",
    cls: "bg-sunshine text-ink",
    icon: <Icon icon="ion:fast-food" className="w-full h-full" />,
  },
  {
    title: "Transport",
    body: "Daily shuttle from Margao / Madgaon and key Goa pickup points.",
    cls: "bg-brand text-white",
    icon: <Icon icon="fluent:vehicle-bus-24-filled" className="w-full h-full" />,
  },
  {
    title: "Hostels",
    body: "Separate boys' & girls' blocks. 24×7 security, biometric access, in-house wardens.",
    cls: "bg-ink text-white",
    icon: <Icon icon="fluent:bed-24-filled" className="w-full h-full" />,
  },
  {
    title: "24x7 Security & Surveillance",
    body: "Comprehensive CCTV coverage, strictly monitored access points, and dedicated security personnel for a safe environment.",
    cls: "bg-ocean text-white",
    icon: <Icon icon="fluent:camera-dome-24-filled" className="w-full h-full" />,
  },
];

function CardItem({ card }: { card: (typeof cards)[number] }) {
  const { title, body, cls, icon } = card;
  return (
    <li className={`relative overflow-hidden rounded-[16px] sm:rounded-[20px] p-6 sm:p-10 min-h-[180px] sm:min-h-[320px] flex flex-col justify-between ${cls}`}>
      {/* Text */}
      <div className="relative z-10">
        <h3 className="font-poppins font-semibold text-[24px] sm:text-[32px] leading-tight tracking-tight">{title}</h3>
        <p className="mt-2 sm:mt-3 text-[15px] sm:text-base leading-[1.4] opacity-90">{body}</p>
      </div>
      {/* Icon — bottom-right */}
      <div className="self-end mt-1 sm:mt-0 sm:absolute sm:bottom-4 sm:right-4 w-24 h-24 sm:w-48 sm:h-48 opacity-20">
        {icon}
      </div>
    </li>
  );
}

export function CampusLife() {
  return (
    <section id="campus-life" className="bg-brand-white py-16 sm:py-24">
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
          {/* Mobile 1-column layout */}
          <ul className="grid grid-cols-1 gap-4 sm:hidden">
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
