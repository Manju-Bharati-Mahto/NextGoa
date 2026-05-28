import type { Metadata } from "next";
import { Hero } from "@/components/landing/Hero";
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

/**
 * Landing page — composes the sections in the order of the Figma "Landing page"
 * design. The root layout supplies the default title/description/OG and the
 * site-wide Organization + WebSite JSON-LD, so this page only sets its canonical.
 * All sections are static (SSG); StickyApplyBar is the lone client island
 * (alongside the interactive header + programme finder).
 */
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
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
        <News />
        <Faq />
        <FinalCta />
      </main>
    </>
  );
}
