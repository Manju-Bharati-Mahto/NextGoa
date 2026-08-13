"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function UpcomingEvents() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    loadEvents();
  }, []);

  async function loadEvents() {
    try {
      const res = await fetch("/api/events");
      const data = await res.json();

      const upcoming = data.slice(0, 6);

      setEvents(upcoming);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return null;

  const initialEvents = events.slice(0, 3);
  const extraEvents = events.slice(3, 6);

  const visibleEvents = showAll
    ? [...initialEvents, ...extraEvents]
    : initialEvents;

  if (visibleEvents.length === 0) return null;

  return (
    <section className="relative w-full bg-brand-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1680px] px-6 sm:px-10">

        <div className="text-center max-w-3xl mx-auto">
          <p className="font-bold text-sm uppercase tracking-[0.15em] text-brand">
            Upcoming
          </p>

          <h2 className="mt-2 section-heading">
            Events you can attend.
          </h2>

          <p className="mt-4 section-body text-ink/70">
            Open days, webinars, hackathons, expert sessions.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-6 max-w-4xl mx-auto">

          {visibleEvents.map((event: any) => (

            <Link
              key={event.id}
              href={`/events/${event.slug}`}
              className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-3xl shadow border hover:shadow-lg transition"
            >

              <div className="relative w-full sm:w-32 h-40 sm:h-32 rounded-2xl overflow-hidden">

                <Image
                  src={event.featured_image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="flex-1">

                <div className="flex gap-2 mb-3">

                  <span className="px-3 py-1 rounded-full bg-brand/10 text-brand text-xs">

                    {new Date(
                      event.created_at
                    ).toLocaleDateString()}

                  </span>

                  <span className="px-3 py-1 rounded-full bg-gray-100 text-xs">

                    {event.category}

                  </span>

                </div>

                <h3 className="text-xl font-bold">

                  {event.title}

                </h3>

                <p className="mt-2 text-gray-600 line-clamp-2">

                  {event.excerpt}

                </p>

              </div>

              <div className="flex items-center">

                <span className="bg-sky-500 text-white px-6 py-2 rounded-full">

                  Explore

                </span>

              </div>

            </Link>

          ))}

        </div>

        {extraEvents.length > 0 && (

          <div className="text-center mt-10">

            <Link
              href="https://goa.paruluniversity.ac.in/events"
              target="_blank"
              className="bg-brand text-white px-8 py-3 rounded-full inline-block"
            >
              View All Events
            </Link>

          </div>

        )}

      </div>
    </section>
  );
}