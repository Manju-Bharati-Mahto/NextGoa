import type { Metadata } from "next";
import ProgramFilter from "@/components/programmes/ProgramFilter";
import DegreeLevelSection from "@/components/programmes/DegreeLevelSection";
import SpecialisationsSection from "@/components/programmes/SpecialisationsSection";
import ProgrammesFaq from "@/components/programmes/ProgrammesFaq";
import GatewaySection from "@/components/programmes/GatewaySection";
import TrendingSection from "@/components/programmes/TrendingSection";

export const metadata: Metadata = {
  title: "Programmes | Parul University Goa",
  description: "Explore the academic programmes offered at Parul University Goa.",
  alternates: { canonical: "/programmes" },
};

export default function ProgrammesPage() {
  return (
    <main className="flex-1">
      {/* Hero Banner Section */}
      <section
        className="relative flex min-h-screen flex-col items-center justify-start pt-32 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/programmes/Programme-banner.png')" }}
      >
        <div className="relative z-10 w-full max-w-7xl px-4 pt-4 sm:px-6 sm:pt-8 lg:pt-12 text-center">
          <span className="mb-6 inline-block rounded-full bg-sunshine px-4 py-1.5 text-xs text-ink shadow-sm">
            All Programmes
          </span>
          <h1 className="font-[family-name:var(--font-poppins)] mx-auto w-full max-w-none text-4xl font-bold leading-[1.3] tracking-tight text-ink sm:text-5xl lg:text-[3.3rem]">
            Learning designed for the future.<br />
            <span className="text-brand">Delivered in Goa.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-[16px] font-[family-name:var(--font-poppins)] font-normal text-ink">
            Specialisations Research — all NEP 2020 aligned, all built for the real world.
          </p>
        </div>

        {/* White fade at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Trending Section */}
      <TrendingSection />

      {/* Program Filter Section */}
      <ProgramFilter />

      {/* Degree Level Section */}
      <DegreeLevelSection />

      {/* Specialisations Section */}
      <SpecialisationsSection />

      {/* Programmes FAQ Section */}
      <ProgrammesFaq />

      {/* Gateway CTA Section */}
      <GatewaySection />

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
