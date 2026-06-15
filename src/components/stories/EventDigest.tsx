"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface SmallerEvent {
  title: string;
  tag: string;
  icon: string;
}

const smallerEvents: SmallerEvent[] = [
  {
    title: "Inauguration graced by Chief Minister of Goa, Dr. Pramod Sawant",
    tag: "EVENTS &middot; 1 MAY 2026",
    icon: "material-symbols:celebration-outline",
  },
  {
    title: "Oath-Taking Ceremony graced by Health Minister Shri Vishwajit Rane",
    tag: "EVENTS &middot; 1 MAY 2026",
    icon: "material-symbols:medical-services-outline",
  },
  {
    title: "Annual Convocation Ceremony for Class of 2026",
    tag: "EVENTS &middot; 10 MAY 2026",
    icon: "material-symbols:school-outline",
  },
];

import { Story } from "./StoriesGrid";

export function EventDigest({ stories = [] }: { stories?: Story[] }) {
  // Try to find Events, fallback to any stories if not enough events
  const eventStories = stories.filter((s) => s.tag === "Events");
  const displayEvents = eventStories.length >= 4 ? eventStories : stories;
  
  if (displayEvents.length === 0) return null;

  const featuredEvent = displayEvents[0];
  const smallerEventsDynamic = displayEvents.slice(1, 4);

  return (
    <section className="bg-brand-white sm:py-20 pt-20 md:py-24 border-t border-black/5">
      <div className="mx-auto w-full max-w-[1680px] px-6 sm:px-10 flex flex-col items-center">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl">
          <p className="font-sans font-bold text-sm uppercase tracking-[0.15em] text-ink/60">
            Digest
          </p>
          <h2 className="mt-2 text-center text-brand section-heading">
            Latest in Event category
          </h2>
        </div>

        {/* Content Box */}
        <div className="w-full max-w-6xl mt-16 text-left">
          
          {/* Header Row */}
          <div className="flex justify-between items-end mb-8 border-b border-black/5 pb-4">
            <h3 className="text-ink section-subheading">
              Events
            </h3>
            <Link
              href="/stories?tag=Events"
              className="bg-sunshine hover:bg-sunshine-deep text-ink px-5 py-2 text-xs sm:text-sm font-bold tracking-wide rounded-full inline-flex items-center gap-1 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              View all ↗
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-stretch">
            
            {/* Left Column: Featured Card */}
            {featuredEvent && (
              <div className="flex flex-col rounded-[28px] bg-white border border-black/5 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                {/* Image Box */}
                <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                  {featuredEvent.image ? (
                    <Image
                      src={featuredEvent.image}
                      alt={featuredEvent.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-bright to-ocean opacity-25" />
                  )}
                  {/* Explore button overlay */}
                  <Link
                    href={featuredEvent.link || '#'}
                    target="_blank"
                    className="absolute top-4 right-4 bg-brand hover:bg-brand-dark text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase transition-colors shadow-md"
                  >
                    Explore More &rarr;
                  </Link>
                </div>

                {/* Card content */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <Link href={featuredEvent.link || '#'} target="_blank">
                    <span className="inline-block rounded-full bg-brand text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 mb-4 shadow-sm">
                      {featuredEvent.date || featuredEvent.tag}
                    </span>
                    <h4 className="font-poppins text-xl sm:text-2xl font-bold leading-snug tracking-tight text-ink group-hover:text-brand transition-colors">
                      {featuredEvent.title}
                    </h4>
                  </Link>
                </div>
              </div>
            )}

            {/* Right Column: Three stacked smaller cards */}
            <div className="flex flex-col gap-6 justify-between h-full">
              {smallerEventsDynamic.map((evt, idx) => (
                <Link
                  href={evt.link || '#'}
                  target="_blank"
                  key={idx}
                  className="flex items-center gap-6 p-6 bg-white rounded-[28px] border border-black/5 shadow-md hover:shadow-lg transition-all duration-300 group flex-grow"
                >
                  {/* Icon Block */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[20px] bg-brand text-white flex-shrink-0 flex items-center justify-center shadow-md">
                    <Icon icon="material-symbols:event-available-outline" className="w-12 h-12 sm:w-14 sm:h-14 text-white" />
                  </div>

                  {/* Card Content details */}
                  <div className="flex-grow">
                    <h4 className="font-poppins text-base sm:text-lg font-bold leading-snug tracking-tight text-ink group-hover:text-brand transition-colors line-clamp-2">
                      {evt.title}
                    </h4>
                    <span 
                      className="inline-block mt-3 rounded-full bg-brand text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-3 py-1 shadow-sm"
                    >
                      {evt.tag} &middot; {evt.date}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
