import type { Metadata } from "next";
import StudyAbroadHero from "@/components/study-abroad/StudyAbroadHero";
import StudyAbroadGlance from "@/components/study-abroad/StudyAbroadGlance";
import StudyAbroadComparison from "@/components/study-abroad/StudyAbroadComparison";
import StudyAbroadPartners from "@/components/study-abroad/StudyAbroadPartners";
import StudyAbroadPathways from "@/components/study-abroad/StudyAbroadPathways";
import StudyAbroadOpportunities from "@/components/study-abroad/StudyAbroadOpportunities";
import StudyAbroadEligibility from "@/components/study-abroad/StudyAbroadEligibility";
import StudyAbroadModels from "@/components/study-abroad/StudyAbroadModels";
import StudyAbroadInvestment from "@/components/study-abroad/StudyAbroadInvestment";
import StudyAbroadAssistance from "@/components/study-abroad/StudyAbroadAssistance";
import StudyAbroadTimeline from "@/components/study-abroad/StudyAbroadTimeline";
import StudyAbroadPostGraduation from "@/components/study-abroad/StudyAbroadPostGraduation";
import StudyAbroadCTA from "@/components/study-abroad/StudyAbroadCTA";
import StudyAbroadFaq from "@/components/study-abroad/StudyAbroadFaq";

export const metadata: Metadata = {
  title: "Study Abroad Programs | Global Pathways & Student Exchange - Parul University Goa",
  description: "Explore study abroad programs at Parul University Goa with global pathways, semester exchanges, international internships and partner universities worldwide. Apply now!",
  alternates: {
    canonical: "/international/study-abroad",
  },
};

export default function StudyAbroadPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <StudyAbroadHero />

      {/* At a Glance Section */}
      <StudyAbroadGlance />

      {/* Comparison Section */}
      <StudyAbroadComparison />

      {/* Partners Section */}
      <StudyAbroadPartners />

      {/* Pathways Section */}
      <StudyAbroadPathways />

      {/* Opportunities Section */}
      <StudyAbroadOpportunities />

      {/* Eligibility Section */}
      <StudyAbroadEligibility />

       {/* Models Section */}
      <StudyAbroadModels />

      {/* Investment Section */}
      <StudyAbroadInvestment />

      {/* Assistance Section */}
      <StudyAbroadAssistance />

      {/* Timeline Section */}
      <StudyAbroadTimeline />

      {/* Post Graduation Section */}
      <StudyAbroadPostGraduation />

      {/* CTA Banner Section */}
      <StudyAbroadCTA />

            {/* FAQ Section */}
      <StudyAbroadFaq />
    </main>
  );
}
