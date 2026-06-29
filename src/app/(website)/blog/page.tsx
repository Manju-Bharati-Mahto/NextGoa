import type { Metadata } from "next";

import { StoriesHeader } from "@/components/stories/StoriesHeader";
import { StoriesGrid } from "@/components/stories/StoriesGrid";
import { LatestStories } from "@/components/stories/LatestStories";
import { UpcomingEvents } from "@/components/stories/UpcomingEvents";
import { FreeGuides } from "@/components/stories/FreeGuides";
import { EventDigest } from "@/components/stories/EventDigest";
import { FinalCta } from "@/components/landing/FinalCta";

import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Blogs | Parul University Goa",
  description:
    "Explore the latest news, academics, placements, research, and student life stories from Parul University Goa.",
  alternates: {
    canonical: "/blog",
  },
};

export default function StoriesPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden bg-brand-white">
      <JsonLd
        data={breadcrumbSchema([
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Blogs",
            path: "/blog",
          },
        ])}
      />

      <StoriesHeader />

      {/* Database */}
      <StoriesGrid />

      {/* Database */}
      <LatestStories />

      {/* Database */}
      <UpcomingEvents />

      <FreeGuides />

      {/* Database */}
      <EventDigest />

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