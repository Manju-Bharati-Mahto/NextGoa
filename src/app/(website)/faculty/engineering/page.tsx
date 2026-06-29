import type { Metadata } from "next";
import CareerOutcomes from "@/components/programmes/CareerOutcomes";
import RecruitersAndDestinations from "@/components/programmes/RecruitersAndDestinations";
import ProgrammePicker from "@/components/programmes/ProgrammePicker";
import Specialisations from "@/components/programmes/Specialisations";
import WhyPUGoa from "@/components/programmes/WhyPUGoa";
import LabsAndLearning from "@/components/programmes/LabsAndLearning";
import DeanAndFaculty from "@/components/programmes/DeanAndFaculty";
import StudyAbroadModels from "@/components/study-abroad/StudyAbroadModels";
import AdmissionsSnapshot from "@/components/programmes/AdmissionsSnapshot";
import EngineeringFaq from "@/components/programmes/EngineeringFaq";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Engineering | Parul University Goa",
  description: "Explore our engineering programmes.",
  alternates: { canonical: "/faculty/engineering" },
};

export default function EngineeringPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white font-[family-name:var(--font-poppins)]">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] lg:min-h-[700px] bg-white flex items-center overflow-hidden pt-[120px] lg:pt-[160px] py-16 sm:py-24">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/programmes/engineering.jpg" 
            alt="Engineering Hero" 
            fill 
            className="object-cover object-right lg:object-center" 
            priority 
          />
          {/* Gradients to blend image seamlessly */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent w-full md:w-[65%]"></div>
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-[800px] flex flex-col items-start text-left">
            {/* Yellow Badge */}
            <span className="inline-block bg-[#FCE34B] text-ink text-[12px] sm:text-[14px] font-medium px-5 py-1.5 rounded-full mb-6">
              Faculty of Engineering &amp; Technology
            </span>

            {/* Main Heading */}
            <h1 className="font-poppins font-bold text-[40px] sm:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight text-ink">
              Learn through industry visits <br className="hidden sm:block" />
              <span className="text-[#E73649]">and global degrees in Goa.</span>
            </h1>

            {/* Sub-heading */}
            <p className="mt-6 text-[16px] sm:text-[18px] text-ink/80 font-medium">
              Hands-on engineering, industry corridors, and global degrees in Goa.
            </p>
          </div>
        </div>
      </section>

      {/* Programme Snapshot Section */}
      <section className="relative w-full bg-gradient-to-b from-white via-[#FFF4B3] to-[#FEDB2F] sm: py-16 sm:py-24">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-wrap items-stretch justify-center gap-4 sm:gap-6">
            
            {/* Card 1 */}
            <div className="flex flex-col items-start bg-white rounded-[16px] shadow-sm border border-gray-100 p-6 w-[230px] flex-grow sm:flex-grow-0">
              <span className="text-[14px] text-gray-600 font-medium">Duration</span>
              <span className="text-[24px] sm:text-[26px] font-bold text-ink mt-1 mb-1">3-4 Years</span>
              <span className="text-[14px] text-gray-600">UG / PG / Diploma</span>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-start bg-white rounded-[16px] shadow-sm border border-gray-100 p-6 w-[230px] flex-grow sm:flex-grow-0">
              <span className="text-[14px] text-gray-600 font-medium">Eligibility</span>
              <span className="text-[24px] sm:text-[26px] font-bold text-ink mt-1 mb-1">10+2 PCM</span>
              <span className="text-[14px] text-gray-600">or equivalent</span>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-start bg-white rounded-[16px] shadow-sm border border-gray-100 p-6 w-[230px] flex-grow sm:flex-grow-0">
              <span className="text-[14px] text-gray-600 font-medium">Specialisations</span>
              <span className="text-[24px] sm:text-[26px] font-bold text-ink mt-1 mb-1">5 streams</span>
              <span className="text-[14px] text-gray-600 tracking-tight">AI &middot; Cyber &middot; DS &middot; ML &middot; Quantum</span>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-start bg-white rounded-[16px] shadow-sm border border-gray-100 p-6 w-[230px] flex-grow sm:flex-grow-0">
              <span className="text-[14px] text-gray-600 font-medium">Modes</span>
              <span className="text-[24px] sm:text-[26px] font-bold text-ink mt-1 mb-1">Full-time</span>
              <span className="text-[14px] text-gray-600">On-campus, Goa</span>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col items-start bg-white rounded-[16px] shadow-sm border border-gray-100 p-6 w-[230px] flex-grow sm:flex-grow-0">
              <span className="text-[14px] text-gray-600 font-medium">Pathways</span>
              <span className="text-[24px] sm:text-[26px] font-bold text-ink mt-1 mb-1">6 countries</span>
              <span className="text-[14px] text-gray-600 tracking-tight">USA &middot; UK &middot; DE &middot; FR &middot; AU &middot; NZ</span>
            </div>

          </div>
        </div>
      </section>

      {/* Career Outcomes Section */}
      <CareerOutcomes />

      {/* Recruiters & Destinations Section */}
      <RecruitersAndDestinations slug="engineering" />

      {/* Programme Picker Section */}
      <ProgrammePicker />

      {/* Specialisations Section */}
      <Specialisations />

      {/* Why PU Goa Section */}
      <WhyPUGoa />

      {/* Labs & Hands-on Learning Section */}
      <LabsAndLearning />

      {/* Dean & Faculty Section */}
      <DeanAndFaculty />

      {/* Global Pathways Section */}
      <StudyAbroadModels />

      {/* Admissions Snapshot Section */}
      <AdmissionsSnapshot slug="engineering" />

      {/* FAQs Section */}
      <EngineeringFaq />

    </main>
  );
}
