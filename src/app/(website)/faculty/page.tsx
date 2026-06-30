import type { Metadata } from "next";
import ProgramFilter from "@/components/programmes/ProgramFilter";
import ProgrammesFaq from "@/components/programmes/ProgrammesFaq";
import GatewaySection from "@/components/programmes/GatewaySection";
import TrendingSection from "@/components/programmes/TrendingSection";

export const metadata: Metadata = {
  title: { absolute: "Explore Faculties Across Disciplines - Parul University Goa" },
  description: "Explore the academic faculties at Parul University Goa offering programs in engineering, management, nursing, pharmacy, hospitality and more. Find your ideal path and apply now!",
  alternates: { canonical: "/faculty" },
};

export default function ProgrammesPage() {
  return (
    <main className="flex-1">
      {/* Hero Banner Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-cover bg-center bg-no-repeat py-16 sm:py-24"
        style={{ backgroundImage: "url('/programmes/Programme-banner.png')" }}
      >
        <div className="relative z-10 w-full max-w-7xl px-4 pt-4 sm:px-6 sm:pt-8 lg:pt-12 text-center">
          <span className="mb-6 inline-block rounded-full bg-sunshine px-4 py-1.5 text-xs text-ink shadow-sm">
            All Programs
          </span>
          <h1 className="font-[family-name:var(--font-poppins)] mx-auto w-full max-w-none text-4xl font-bold leading-[1.3] tracking-tight text-ink sm:text-5xl lg:text-[3.3rem]">
            Learning designed for the future.<br />
            <span className="text-brand">Delivered in Goa.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-[16px] font-[family-name:var(--font-poppins)] font-normal text-ink">
            Specialisations Research - all NEP 2020 aligned, all built for the real world.
          </p>
        </div>

        {/* White fade at the bottom */}
        <div className="hidden sm:block absolute bottom-0 left-0 right-0 h-30 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Trending Section */}
      <TrendingSection />

      {/* Program Filter Section */}
      <ProgramFilter />

      {/* Programmes FAQ Section */}
      <ProgrammesFaq />

      {/* Gateway CTA Section */}
      <GatewaySection />
    </main>
  );
}
