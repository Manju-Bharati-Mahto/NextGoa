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

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Stories | Parul University Goa",
  description: "Explore the latest news, academics, placements, research, and student life stories from Parul University Goa.",
  alternates: { canonical: "/stories" },
};

import { fetchAllBlogs } from "@/lib/fetchBlogs";

export default async function StoriesPage() {
  const stories = await fetchAllBlogs();

  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden bg-brand-white">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Stories", path: "/stories" },
        ])}
      />

      <StoriesHeader />
      <StoriesGrid initialStories={stories} />
      <LatestStories stories={stories} />
      <UpcomingEvents stories={stories} />
      <FreeGuides />
      <EventDigest stories={stories} />
      <FinalCta
        eyebrow="Admissions Open 2026"
        title="Want to be part of the next story?"
        description="Apply for the 2026-27 academic year or come visit campus."
        actions={[
          { label: "Apply Now", href: "/admissions", variant: "primary" },
          { label: "Book a Visit", href: "/admissions#visit" },
          { label: "1800 890 9090", href: "tel:18008909090", icon: "phone" }
        ]}
      />
    </main>
  );
}
