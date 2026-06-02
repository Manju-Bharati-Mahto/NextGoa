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
  title: "Study Abroad | Parul University Goa",
  description: "Take your education global with Parul University Goa's extensive study abroad programs and international partner universities.",
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

      {/* Glassy CTA container at bottom of frame */}
      <div className="fixed inset-x-0 bottom-6 sm:bottom-10 z-50 flex justify-center px-4 pointer-events-none font-[family-name:var(--font-poppins)]">
        <div className="pointer-events-auto flex flex-row items-center justify-center gap-2 sm:gap-3 rounded-[2rem] sm:rounded-full bg-white/20 px-2 sm:px-4 py-2 sm:py-3 backdrop-blur-md shadow-xl border border-white/30">
          <a
            href="#enquiry"
            className="rounded-full bg-brand px-4 sm:px-8 py-2.5 sm:py-3.5 text-[15px] sm:text-base font-bold text-white shadow-md transition-colors hover:bg-brand-dark whitespace-nowrap"
          >
            Apply for 2026 &rarr;
          </a>
          <a
            href="#enquiry"
            className="rounded-full bg-white px-4 sm:px-8 py-2.5 sm:py-3.5 text-[15px] sm:text-base font-bold text-ink shadow-md transition-colors hover:bg-zinc-50 whitespace-nowrap"
          >
            Talk to Counsellor
          </a>
          <a
            href="/parul-goa-brochure-2026.pdf"
            download
            className="hidden sm:inline-flex rounded-full bg-white px-8 py-3.5 text-base font-bold text-ink shadow-md transition-colors hover:bg-zinc-50 whitespace-nowrap"
          >
            Brochure
          </a>
        </div>
      </div>
    </main>
  );
}
