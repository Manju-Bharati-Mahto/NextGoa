"use client";

import React from "react";

interface NotificationMarqueeProps {
  data: {
    speed?: number;
    items?: {
      title: string;
      link: string;
      newTab?: boolean;
    }[];
  };
}

const TeardropAsterisk = () => (
  <svg
    width="24"
    height="24"
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

export function NotificationMarquee({
  data,
}: NotificationMarqueeProps) {
  if (!data?.items?.length) return null;

  const speed = data.speed || 90;

  return (
    <div className="w-full overflow-hidden bg-[#E73649] border-y border-[#d32f41] py-4 sm:py-5 text-white">

      <div
        className="flex w-max items-center whitespace-nowrap animate-marquee"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {[...data.items, ...data.items].map((item, index) => (
          <div
            key={index}
            className="flex items-center"
          >
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