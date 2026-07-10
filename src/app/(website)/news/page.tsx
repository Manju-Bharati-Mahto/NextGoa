import type { Metadata } from "next";

import { NewsHeader } from "@/components/stories/NewsHeader";
import { NewsGrid } from "@/components/stories/NewsGrid";
import { LatestNews } from "@/components/stories/LatestNews";
import { FreeGuides } from "@/components/stories/FreeGuides";
import { FinalCta } from "@/components/landing/FinalCta";

import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: { absolute: "Parul University Goa News | Press Releases & Announcements" },
  description:
    "Stay updated with the latest news, announcements, press releases, achievements and stories from Parul University Goa.",
  alternates: {
    canonical: "/news",
  },
};

export default function NewsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden bg-brand-white">
      <JsonLd
        data={breadcrumbSchema([
          {
            name: "Home",
            path: "/",
          },
          {
            name: "News",
            path: "/news",
          },
        ])}
      />

      <NewsHeader />

      <NewsGrid />

      <LatestNews />

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
