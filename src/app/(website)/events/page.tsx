import type { Metadata } from "next";

import { EventHeader } from "@/components/stories/EventHeader";
import { EventGrid } from "@/components/stories/EventGrid";
import { LatestEvents } from "@/components/stories/LatestEvents";
import { FreeGuides } from "@/components/stories/FreeGuides";
import { FinalCta } from "@/components/landing/FinalCta";

import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: { absolute: "Parul University Goa Events | Campus Workshops & Webinars" },
  description:
    "Discover upcoming open days, webinars, workshops, fests, hackathons, and guest sessions happening at Parul University Goa.",
  alternates: {
    canonical: "/events",
  },
};

export default function EventsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden bg-brand-white">
      <JsonLd
        data={breadcrumbSchema([
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Events",
            path: "/events",
          },
        ])}
      />

      <EventHeader />

      <EventGrid />

      <LatestEvents />

      <FreeGuides />

      <FinalCta
        eyebrow="Admissions Open 2026"
        title="Want to be part of the next story?"
        description="Apply for the 2026-27 academic year or come visit campus."
        actions={[
          {
            label: "Apply Now",
            href: "#",
            variant: "primary",
            triggerEnquiry: true,
          },
          {
            label: "Book a Visit",
            href: "/admissions#visit",
          },
          {
            label: "1800 890 9090",
            href: "tel:18008909090",
            icon: "phone",
          },
        ]}
      />
    </main>
  );
}
