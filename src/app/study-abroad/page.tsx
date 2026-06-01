import type { Metadata } from "next";
import StudyAbroadHero from "@/components/study-abroad/StudyAbroadHero";
import StudyAbroadGlance from "@/components/study-abroad/StudyAbroadGlance";
import StudyAbroadComparison from "@/components/study-abroad/StudyAbroadComparison";

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







      {/* Glassy CTA container at bottom of frame */}
      <div className="fixed inset-x-0 bottom-6 sm:bottom-10 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-3 rounded-full bg-white/20 px-4 py-3 backdrop-blur-md shadow-xl border border-white/30">
          <a
            href="#enquiry"
            className="rounded-full bg-brand px-8 py-3.5 text-base font-bold text-white shadow-md transition-colors hover:bg-brand-dark"
          >
            Apply for 2026 &rarr;
          </a>
          <a
            href="#enquiry"
            className="rounded-full bg-white px-8 py-3.5 text-base font-bold text-ink shadow-md transition-colors hover:bg-zinc-50"
          >
            Talk to Counsellor
          </a>
          <a
            href="/parul-goa-brochure-2026.pdf"
            download
            className="rounded-full bg-white px-8 py-3.5 text-base font-bold text-ink shadow-md transition-colors hover:bg-zinc-50"
          >
            Brochure
          </a>
        </div>
      </div>
    </main>
  );
}
