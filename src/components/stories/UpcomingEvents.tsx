"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Story } from "./StoriesGrid";
import Image from "next/image";

export function UpcomingEvents({ stories = [] }: { stories?: Story[] }) {
  const [showAll, setShowAll] = useState(false);

  // Filter for events, or fallback to the latest 6 stories if no events are found
  const eventStories = stories.filter((s) => s.tag === "Events");
  const fallbackStories = stories.slice(0, 6);
  const dataToUse = eventStories.length > 0 ? eventStories : fallbackStories;
  
  if (dataToUse.length === 0) return null;

  const initialEvents = dataToUse.slice(0, 3);
  const extraEvents = dataToUse.slice(3, 6);

  const visibleEvents = showAll ? [...initialEvents, ...extraEvents] : initialEvents;

  return (
    <section className="relative w-full sm:py-20 md:py-24 overflow-hidden flex flex-col items-center bg-brand-white">
      <div className="relative z-10 mx-auto w-full max-w-[1680px] px-6 sm:px-10 flex flex-col items-center">
        
        {/* Title block */}
        <div className="text-center max-w-3xl">
          <p className="font-sans font-bold text-sm uppercase tracking-[0.15em] text-brand">
            Upcoming
          </p>
          <h2 className="mt-2 text-center text-ink section-heading">
            Events you can attend.
          </h2>
          <p className="mt-4 text-ink/70 section-body">
            Open days, webinars, hackathons, expert sessions. Reserve your spot.
          </p>
        </div>

        {/* Events Grid */}
        <div className="mt-12 flex flex-col gap-6 w-full max-w-4xl">
          {visibleEvents.map((event, idx) => (
            <Link
              key={idx}
              href={event.link || '#'}
              target="_blank"
              className="flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-7 bg-white rounded-[24px] shadow-lg border border-black/5 text-ink hover:shadow-xl transition-all group"
            >
              {/* Event Image Block (Replacing Icon) */}
              <div className="w-full sm:w-32 h-40 sm:h-32 rounded-[20px] flex-shrink-0 flex items-center justify-center relative overflow-hidden bg-slate-100">
                {event.image ? (
                  <Image 
                    src={event.image} 
                    alt={event.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 128px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-bright to-ocean opacity-25" />
                )}
              </div>

              {/* Event details */}
              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2.5">
                  {/* Type badge */}
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-sunshine bg-sunshine/10 text-sunshine-deep font-semibold">
                    {event.date || "Upcoming"}
                  </span>
                  {/* Category tag */}
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/5 text-ink/60">
                    {event.tag}
                  </span>
                </div>

                <h3 className="font-poppins text-lg sm:text-xl font-bold tracking-tight text-ink group-hover:text-brand transition-colors line-clamp-2">
                  {event.title}
                </h3>
                <p className="mt-1.5 font-[family-name:var(--font-poppins)] text-sm leading-relaxed text-ink/70 line-clamp-2">
                  {event.body}
                </p>
              </div>

              {/* RSVP Button */}
              <div className="w-full sm:w-auto flex justify-center">
                <span
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-full bg-[#0CAADD] hover:bg-[#0A94C2] text-white px-6 py-2.5 text-sm font-semibold tracking-wide shadow-sm transition-colors uppercase cursor-pointer"
                >
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
        {/* View All Button */}
        {extraEvents.length > 0 && (
          <div className="mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-brand text-white hover:bg-brand-dark px-8 py-3 rounded-full font-bold shadow-md transition-all uppercase tracking-wider text-sm active:scale-95"
            >
              {showAll ? "View less events" : "View all events"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
