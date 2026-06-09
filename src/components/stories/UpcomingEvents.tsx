"use client";

import React, { useState } from "react";
import Link from "next/link";

interface EventCard {
  title: string;
  body: string;
  type: "Online" | "In-Person";
  tag: string;
  color: string;
  icon: string;
}

const initialEvents: EventCard[] = [
  {
    title: "Virtual Open Day for 2026 Admissions",
    body: "Meet the deans, explore programmes, and get your questions answered live.",
    type: "Online",
    tag: "All Faculties",
    color: "bg-brand text-white",
    icon: "school",
  },
  {
    title: "Goa Campus Tour & Interactive Workshops",
    body: "Explore our state-of-the-art labs, library, hostel blocks, and interact with deans.",
    type: "In-Person",
    tag: "Campus Life",
    color: "bg-ink text-white",
    icon: "map",
  },
  {
    title: "Alumni Panel: Building a Global Career in Tech",
    body: "Connect with our graduates working at Microsoft, ONGC, and leading startups.",
    type: "Online",
    tag: "Placement Cell",
    color: "bg-sunshine text-ink",
    icon: "groups",
  },
];

const extraEvents: EventCard[] = [
  {
    title: "Admissions Interview Preparation Webinar",
    body: "Get tips and strategies on how to crack your admissions screening and scholarship tests.",
    type: "Online",
    tag: "Admissions Tips",
    color: "bg-brand text-white",
    icon: "rate_review",
  },
  {
    title: "Goa Tech Hackathon: Code for Coastal Protection",
    body: "A 24-hour student hackathon building prototypes for ocean sustainability and tourism.",
    type: "In-Person",
    tag: "Innovation Cell",
    color: "bg-ink text-white",
    icon: "code",
  },
  {
    title: "Expert Session: Marine Biotechnology Opportunities",
    body: "A special lecture on deep sea research and career prospects in biotechnology.",
    type: "In-Person",
    tag: "Research Cell",
    color: "bg-sunshine text-ink",
    icon: "biotech",
  },
];

export function UpcomingEvents() {
  const [showAll, setShowAll] = useState(false);

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
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-7 bg-white rounded-[24px] shadow-lg border border-black/5 text-ink"
            >
              {/* Event Icon Block */}
              <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-[20px] flex-shrink-0 flex items-center justify-center ${event.color}`}>
                <span className="material-symbols-rounded text-[48px] sm:text-[56px]">
                  {event.icon}
                </span>
              </div>

              {/* Event details */}
              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2.5">
                  {/* Type badge */}
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                    event.type === "Online"
                      ? "border-sunshine bg-sunshine/10 text-sunshine-deep font-semibold"
                      : "border-ocean bg-ocean/10 text-ocean-deep font-semibold"
                  }`}>
                    {event.type}
                  </span>
                  {/* Category tag */}
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/5 text-ink/60">
                    {event.tag}
                  </span>
                </div>

                <h3 className="font-poppins text-lg sm:text-xl font-bold tracking-tight text-ink">
                  {event.title}
                </h3>
                <p className="mt-1.5 font-[family-name:var(--font-poppins)] text-sm leading-relaxed text-ink/70">
                  {event.body}
                </p>
              </div>

              {/* RSVP Button */}
              <div className="w-full sm:w-auto flex justify-center">
                <Link
                  href="/admissions"
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-full bg-[#0CAADD] hover:bg-[#0A94C2] text-white px-6 py-2.5 text-sm font-semibold tracking-wide shadow-sm transition-colors uppercase cursor-pointer"
                >
                  RSVP
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Collapsible View all button */}
        <div className="mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-full bg-brand hover:bg-brand-dark text-white px-6 py-3 text-sm font-semibold tracking-wide inline-flex items-center gap-2 cursor-pointer shadow-md transition-all hover:scale-[1.02]"
          >
            <span>{showAll ? "Show Less" : "View all"}</span>
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
