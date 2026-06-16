import Image from "next/image";
import type { Metadata } from "next";
import { ExaminationSchedules } from "@/components/examination/ExaminationSchedules";

export const metadata: Metadata = {
  title: "Examination | Parul University Goa",
  description: "Examination details and guidelines for Parul University Goa.",
  alternates: { canonical: "/examination" },
};

export default function ExaminationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative w-full h-[100vh]">
        <Image
          src="/examination/examination-banner.jpg"
          alt="Parul University Goa Examination Block"
          fill
          priority
          className="object-cover object-center"
        />
        
        {/* Overlay Content (Text centered in the sky area) */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-[25vh]">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
            Examination
          </h1>
        </div>

        {/* Bottom White Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* Schedules Section */}
      <section className="relative z-20 bg-gray-50 sm:pb-10 pb-5">
        <ExaminationSchedules />
      </section>
    </main>
  );
}
