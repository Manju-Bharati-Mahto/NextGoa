import type { Metadata } from "next";
import { Hero } from "@/components/landing/Hero";
import { NotificationMarquee } from "@/components/landing/NotificationMarquee";
import { StatsBar } from "@/components/landing/StatsBar";
import { Philosophy } from "@/components/landing/Philosophy";
import { ProgrammeFinder } from "@/components/landing/ProgrammeFinder";
import { Admissions } from "@/components/landing/Admissions";
import { Placements } from "@/components/landing/Placements";
import { Outcomes } from "@/components/landing/Outcomes";
import { Research } from "@/components/landing/Research";
import { Testimonial } from "@/components/landing/Testimonial";
import { CampusTour } from "@/components/landing/CampusTour";
import { CampusLife } from "@/components/landing/CampusLife";
import { WhyGoa } from "@/components/landing/WhyGoa";
import { International } from "@/components/landing/International";
import { News } from "@/components/landing/News";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { stories } from "@/data/stories";

/**
 * Landing page - composes the sections in the order of the Figma "Landing page"
 * design. The root layout supplies the default title/description/OG and the
 * site-wide Organization + WebSite JSON-LD, so this page only sets its canonical.
 * All sections are static (SSG); StickyApplyBar is the lone client island
 * (alongside the interactive header + programme finder).
 */

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const mappedStories = stories.map(s => ({
    tag: s.category,
    tagClass: "bg-[#04B86A] text-white", // specific tag class for landing page
    title: s.title,
    body: s.excerpt,
    image: s.image,
    link: `/blog/${s.slug}`,
    date: s.date,
    timestamp: new Date(s.date).getTime()
  }));

  return (
    <>
      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <NotificationMarquee />
        <StatsBar />
        <Philosophy />
        <ProgrammeFinder />
        <Admissions />
        <Placements />
        <Outcomes />
        <Research />
        <Testimonial />
        <CampusTour />
        <CampusLife />
        <WhyGoa />
        <International />
        <News stories={mappedStories} />
        <FinalCta />
        <Faq />
      </main>
    </>
  );
}
