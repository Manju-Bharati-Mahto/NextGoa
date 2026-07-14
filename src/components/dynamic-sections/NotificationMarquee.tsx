"use client";

import Marquee from "react-fast-marquee";

interface NotificationMarqueeProps {
  data: {
    speed?: number;

    backgroundColor?: string;

    textColor?: string;

    desktopMargin?: string;

    tabletMargin?: string;

    mobileMargin?: string;

    desktopPadding?: string;

    tabletPadding?: string;

    mobilePadding?: string;

    items?: {
      title: string;
      link: string;
      newTab?: boolean;
    }[];
  };
}

const TeardropAsterisk = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-6 flex-shrink-0"
  >
    <g transform="translate(12 12)">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <path
          key={deg}
          transform={`rotate(${deg})`}
          d="M -1.5 -2.5 C -2.5 -7.5, -1 -11, 0 -11.5 C 1 -11, 2.5 -7.5, 1.5 -2.5 C 1 -0.5, 0 0, 0 0 C 0 0, -1 -0.5, -1.5 -2.5 Z"
        />
      ))}
    </g>
  </svg>
);

export function NotificationMarquee({ data }: NotificationMarqueeProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const activeItems = (data.items || []).filter((item: any) => {
    if (!item.startDate) return true;

    const start = new Date(item.startDate);
    start.setHours(0, 0, 0, 0);

    const end = item.endDate ? new Date(item.endDate) : null;

    if (end) {
      end.setHours(23, 59, 59, 999);
    }

    if (today < start) return false;

    if (end && today > end) return false;

    return true;
  });
  if (!activeItems.length) return null;

  const speed = data.speed || 90;

  const backgroundColor = data.backgroundColor || "#E73649";

  const textColor = data.textColor || "#FFFFFF";

  const desktopMargin = data.desktopMargin || "0";

  const tabletMargin = data.tabletMargin || desktopMargin;

  const mobileMargin = data.mobileMargin || tabletMargin;

  const desktopPadding = data.desktopPadding || "0";

  const tabletPadding = data.tabletPadding || desktopPadding;

  const mobilePadding = data.mobilePadding || tabletPadding;

  return (
    <div
      className="notification-marquee"
      style={{
        backgroundColor,
        color: textColor,
      }}
    >
      <Marquee speed={speed} gradient={false} pauseOnHover autoFill>
        {activeItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <a
              href={item.link}
              target={item.newTab ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="text-[16px] sm:text-[20px] font-semibold whitespace-nowrap"
            >
              {item.title}
            </a>

            <TeardropAsterisk />
          </div>
        ))}
      </Marquee>

      <style jsx>{`
        .notification-marquee {
          margin: ${desktopMargin};
          padding: ${desktopPadding};
        }

        @media (max-width: 1024px) {
          .notification-marquee {
            margin: ${tabletMargin};
            padding: ${tabletPadding};
          }
        }

        @media (max-width: 640px) {
          .notification-marquee {
            margin: ${mobileMargin};
            padding: ${mobilePadding};
          }
        }
      `}</style>
    </div>
  );
}
