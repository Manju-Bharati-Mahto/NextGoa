import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { VisionMission } from "@/components/about/VisionMission";
import { Legacy } from "@/components/about/Legacy";
import { JourneyTimeline } from "@/components/about/JourneyTimeline";
import { WhyGoa } from "@/components/landing/WhyGoa";
import { Philosophy } from "@/components/landing/Philosophy";
import { WhoWeAre } from "@/components/about/WhoWeAre";
import { Placements } from "@/components/landing/Placements";
import { Accreditations } from "@/components/about/Accreditations";
import { Leadership } from "@/components/about/Leadership";
import { LeadershipTeam } from "@/components/about/LeadershipTeam";
import { FacultyDeans } from "@/components/about/FacultyDeans";
import { Governance } from "@/components/about/Governance";
import { FinalCta } from "@/components/landing/FinalCta";
import { Faq } from "@/components/landing/Faq";

export const metadata: Metadata = {
  title: "About Us",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <main className="flex-1 overflow-x-hidden">
        <AboutHero />
        <VisionMission />
        <Legacy />
        <WhyGoa variant="red" image="/why-goa-about.jpg" />
        <Philosophy variant="clean" />
        <WhoWeAre />
        <Placements variant="about" />
        <Accreditations />
        <Leadership />
        <LeadershipTeam />
        <FacultyDeans />
        <Governance />
        <JourneyTimeline />
        <div className="font-[family-name:var(--font-poppins)]">
          <FinalCta
            background="plain"
            title="Want to see it for yourself?"
            description="Book a campus visit and meet our team in person."
            actions={[
              { label: "Talk to Counsellor", href: "#", variant: "primary" },
              { label: "Chat on WhatsApp", href: "https://wa.me/919558210145" },
              { label: "1800 890 9090", href: "tel:18008909090", icon: "phone" },
            ]}
          />
          <Faq />
        </div>
      </main>
    </>
  );
}
