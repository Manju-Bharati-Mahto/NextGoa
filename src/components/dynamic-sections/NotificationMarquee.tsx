"use client";

import React from "react";

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
  if (!data?.items?.length) return null;

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
      className="notification-marquee w-full overflow-hidden border-y py-4 sm:py-5 text-white"
      style={{
        backgroundColor,
        color: textColor,
      }}
    >
      <div
        className="flex w-max items-center whitespace-nowrap animate-marquee"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {[...data.items, ...data.items].map((item, index) => (
          <div key={index} className="flex items-center">
            <a
              href={item.link}
              target={item.newTab ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="cursor-pointer text-[16px] font-semibold tracking-wide sm:text-[20px]"
            >
              {item.title}
            </a>

            <TeardropAsterisk />
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-marquee {
          animation-name: marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .notification-marquee {
          margin: ${desktopMargin};
          padding: ${desktopPadding};
          border: 0px;
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
        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
