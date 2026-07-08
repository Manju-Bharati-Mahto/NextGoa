import { Eyebrow } from "./Decor";
import { Icon } from "@iconify/react";

interface CampusLifeProps {
  data: {
    eyebrow?: string;
    heading?: string;
    description?: string;

    cards?: {
      title: string;
      body: string;
      cls: string;
      icon: string;
    }[];
  };
}

function CardItem({
  card,
}: {
  card: {
    title: string;
    body: string;
    cls: string;
    icon: string;
  };
}) {
  const { title, body, cls, icon } = card;
  return (
    <li
      className={`relative overflow-hidden rounded-[16px] sm:rounded-[20px] p-6 sm:p-10 min-h-[180px] sm:min-h-[320px] flex flex-col justify-between ${cls}`}
    >
      {/* Text */}
      <div className="relative z-10">
        <h3 className="font-poppins font-semibold text-[24px] sm:text-[32px] leading-tight tracking-tight">
          {title}
        </h3>
        <p className="mt-2 sm:mt-3 text-[15px] sm:text-base leading-[1.4] opacity-90">
          {body}
        </p>
      </div>
      {/* Icon — bottom-right */}
      <div className="self-end mt-1 sm:mt-0 sm:absolute sm:bottom-4 sm:right-4 w-24 h-24 sm:w-48 sm:h-48 opacity-20">
        <Icon icon={icon || "mdi:help-circle-outline"} className="w-full h-full" />
      </div>
    </li>
  );
}

export function CampusLife({ data }: CampusLifeProps) {
  const cards = data?.cards || [];
  return (
    <section id="campus-life" className="bg-brand-white py-10 sm:pt-10 sm:pb-0">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <Eyebrow className="text-ink">{data?.eyebrow}</Eyebrow>
        <h2 className="mt-2 text-center section-heading text-brand">
          {data?.heading}
        </h2>
        <p
          className="mx-auto mt-4 w-full text-center section-body text-ink"
          dangerouslySetInnerHTML={{ __html: data?.description || "" }}
        />

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
              {cards.slice(0, 2).map((card, index) => (
                <CardItem key={index} card={card} />
              ))}
            </ul>

            <ul className="grid gap-6 sm:grid-cols-[1fr_1.4fr]">
              {cards.slice(2, 4).map((card, index) => (
                <CardItem key={index + 2} card={card} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Decorative icons */}
      <div className="flex w-full items-end justify-between pb-2 relative z-0 px-2 sm:px-0">
        <img
          src="/deco-lighthouse.svg"
          alt=""
          aria-hidden="true"
          className="h-16 w-auto sm:h-32 translate-y-[25px] sm:translate-y-[45px]"
        />
        <img
          src="/deco-pearl.svg"
          alt=""
          aria-hidden="true"
          className="h-14 w-auto sm:h-24 translate-y-[35px] sm:translate-y-2 translate-x-2 sm:translate-x-[10px]"
        />
        <img
          src="/deco-sun.svg"
          alt=""
          aria-hidden="true"
          className="mb-2 h-14 w-auto sm:h-24 -translate-x-2 sm:-translate-x-[60px] translate-y-[20px] sm:translate-y-[10px]"
        />
      </div>
    </section>
  );
}
