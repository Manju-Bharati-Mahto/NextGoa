import Image from "next/image";
import type { Metadata } from "next";
import { ExaminationSchedules } from "@/components/examination/ExaminationSchedules";

export const metadata: Metadata = {
  title: { absolute: "Examination | Parul University Goa" },
  description: "Examination details and guidelines for Parul University Goa.",
  alternates: { canonical: "/examination" },
};

export default function ExaminationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative w-full h-[100vh] py-16 sm:py-24">
        <Image
          src="/examination/examination-banner.jpg"
          alt="Parul University Goa Examination Block"
          fill
          priority
          className="object-cover object-center"
        />
        
        {/* Overlay Content (Text centered in the sky area) */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-[25vh] px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand tracking-tight font-poppins">
            Examination
          </h1>
          <p className="mx-auto mt-6 max-w-[1100px] text-[18px] sm:text-[22px] font-[family-name:var(--font-poppins)] font-normal leading-relaxed text-ink">
            Your central hub for examination-related information, announcements, and support.
          </p>
        </div>

        {/* Bottom White Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* Schedules Section */}
      <section className="relative z-20 bg-gray-50 sm: py-16 sm:py-24">
        <ExaminationSchedules />
      </section>
    </main>
  );
}
