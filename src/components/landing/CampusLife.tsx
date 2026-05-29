import { Eyebrow } from "./Decor";

/**
 * "Campus Life" — four facility cards (Food / Medical / Hostels / Transport)
 * laid out 2×2 with asymmetric column widths: Food & Transport are the wide
 * cards, Medical & Hostels the narrow ones. Each card has copy on the left and
 * a large filled illustration bleeding off the bottom-right. Owns the
 * light→cyan wave into "Why Goa".
 */
function FoodIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="currentColor" aria-hidden="true">
      {/* bowl */}
      <path d="M8 70h112a56 56 0 0 1-112 0Z" />
      {/* food splashing out */}
      <circle cx="44" cy="34" r="12" />
      <circle cx="74" cy="22" r="9" />
      <circle cx="58" cy="52" r="11" />
      <circle cx="30" cy="54" r="7" />
      <circle cx="86" cy="50" r="6" />
      {/* banana */}
      <path d="M96 20c12 7 14 24 4 34-3-2-4-8-2-12-7-6-9-18-2-22Z" />
    </svg>
  );
}
function MedicalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" aria-hidden="true">
      {/* soft glow */}
      <circle cx="64" cy="70" r="58" fill="currentColor" opacity="0.16" />
      <path
        fill="currentColor"
        d="M64 116C24 88 12 62 12 43 12 25 28 15 42 25c10 7 22 22 22 22s12-15 22-22c14-10 30 0 30 18 0 19-12 45-52 73Z"
      />
      {/* EKG line in the card red */}
      <polyline
        points="16,68 44,68 54,48 70,88 80,68 112,68"
        fill="none"
        stroke="#E73649"
        strokeWidth="7"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
function HostelIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="currentColor" aria-hidden="true">
      {/* HOSTEL sign */}
      <rect x="22" y="10" width="84" height="22" rx="3" />
      <text x="64" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="sans-serif" fill="#1F1F1F">
        HOSTEL
      </text>
      {/* building with window cut-outs + arched door */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 36h92v92H18V36Zm16 16h16v16H34V52Zm44 0h16v16H78V52ZM34 80h16v16H34V80Zm44 0h16v16H78V80ZM56 128v-22a8 8 0 0 1 16 0v22Z"
      />
    </svg>
  );
}
function BusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 132" fill="currentColor" aria-hidden="true">
      {/* body with rounded front + window strip cut-outs */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 46q0-18 18-18h146q12 0 12 16v52q0 10-10 10H22q-8 0-8-8V46Zm18 2h24v30H32V48Zm32 0h24v30H64V48Zm32 0h24v30H96V48Zm32 0h24v30h-24V48Zm32 0h18v30h-18V48Z"
      />
      {/* wheels with hubs in the card blue */}
      <circle cx="56" cy="108" r="17" />
      <circle cx="158" cy="108" r="17" />
      <circle cx="56" cy="108" r="7" fill="#0CAADD" />
      <circle cx="158" cy="108" r="7" fill="#0CAADD" />
    </svg>
  );
}

const cards = [
  {
    Icon: FoodIcon,
    title: "Food",
    body: "Multi-cuisine cafeteria, dietary plans on request, hygienic kitchens audited monthly.",
    cls: "bg-sunshine text-ink",
    textClass: "max-w-[50%]",
    iconClass: "bottom-0 right-4 w-44 sm:w-52",
  },
  {
    Icon: MedicalIcon,
    title: "Medical",
    body: "On-campus clinic with resident doctor + tie-ups with nearby multi-specialty hospitals.",
    cls: "bg-brand text-white",
    textClass: "max-w-[60%]",
    iconClass: "bottom-0 right-3 w-44 sm:w-52",
  },
  {
    Icon: HostelIcon,
    title: "Hostels",
    body: "Separate boys' & girls' blocks. 24×7 security, biometric access, in-house wardens.",
    cls: "bg-ink text-white",
    textClass: "max-w-[60%]",
    iconClass: "bottom-0 right-4 w-36 sm:w-44",
  },
  {
    Icon: BusIcon,
    title: "Transport",
    body: "Daily shuttle from Margao / Madgaon and key Goa pickup points.",
    cls: "bg-ocean text-white",
    textClass: "max-w-[48%]",
    iconClass: "bottom-3 right-2 w-60 sm:w-72",
  },
];

function CardItem({ card }: { card: (typeof cards)[number] }) {
  const { Icon, title, body, cls, textClass, iconClass } = card;
  return (
    <li className={`relative overflow-hidden rounded-[20px] p-8 sm:p-10 min-h-[230px] sm:min-h-[250px] ${cls}`}>
      <div className={`relative z-10 ${textClass}`}>
        <h3 className="font-sans font-bold text-[28px] sm:text-[34px] leading-tight tracking-tight">{title}</h3>
        <p className="mt-3 font-[family-name:var(--font-poppins)] font-normal text-[15px] sm:text-[16px] leading-[1.55]">
          {body}
        </p>
      </div>
      <Icon className={`pointer-events-none absolute h-auto opacity-95 ${iconClass}`} />
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
      <div className="flex w-full items-end justify-between pb-2">
        <img src="/deco-lighthouse.svg" alt="" aria-hidden="true" className="h-20 w-auto sm:h-32" />
        <img src="/deco-pearl.svg" alt="" aria-hidden="true" className="h-16 w-auto translate-y-2 sm:h-24" />
        <img src="/deco-sun.svg" alt="" aria-hidden="true" className="mb-2 h-16 w-auto sm:h-24" />
      </div>
    </section>
  );
}
