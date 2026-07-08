import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { CareerListings } from "@/components/career/CareerListings";
import { CareerHeroSearch } from "@/components/career/CareerHeroSearch";
import db from "@/lib/db";

export const metadata: Metadata = {
  title: { absolute: "Careers at Parul University Goa - Apply for Teaching & Non-Teaching Jobs in Goa" },
  description: "Explore career opportunities at Parul University Goa. Apply for faculty, administrative, and campus jobs in South Goa across multiple departments and disciplines.",
  alternates: { canonical: "/careers" },
};

export default async function Career() {
  let jobs: any[] = [];
  try {
    const [rows]: any = await db.query(
      `SELECT id, title, slug, department, position, location, type, card_description, status, content, created_at, updated_at
       FROM vacancies
       WHERE is_deleted = 0 AND status = 'published'
       ORDER BY id DESC`
    );
    jobs = rows;
  } catch (error) {
    console.error("Failed to fetch jobs from database:", error);
  }

  return (
    <main className="flex-1 overflow-x-hidden font-[family-name:var(--font-poppins)] relative">
      <section className="relative w-full lg: lg: flex items-center z-10 overflow-hidden py-16 sm:py-24">
        {/* Full Hero Background */}
        <div className="absolute inset-x-0 top-0 bottom-0 z-0">
          <Image 
            src="/career-bg.png" 
            alt="" 
            fill 
            className="object-cover object-bottom"
            priority
          />
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 lg:px-8 flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-12 lg:items-center relative z-20">
          
          {/* --- MOBILE ONLY TOP SECTION --- */}
          <div className="flex lg:hidden relative w-full h-[280px]">
            {/* Badges / Text Container */}
            <div className="flex flex-col items-end pt-2 z-20 absolute left-2 sm:left-6">
              
              {/* Badge */}
              <div className="flex items-center gap-2 bg-[#0CAADD] text-white rounded-full px-4 py-1.5 mb-3 mr-1 shadow-sm">
                <span className="text-right text-[11px] sm:text-[12px] font-bold leading-[1.1]">New Vacancies<br/>available</span>
                <span className="w-4 h-4 rounded-full bg-white flex-shrink-0"></span>
              </div>

              {/* Mobile University Tag */}
              <div className="flex items-stretch">
                <div className="flex flex-col text-right pr-3 border-r-[3px] border-[#EF3341]">
                  <h3 className="text-[14px] sm:text-[15px] font-bold leading-tight text-[#1F1F1F] tracking-tight">
                    Goa&apos;s First State
                  </h3>
                  <h3 className="text-[14px] sm:text-[15px] font-bold leading-tight text-[#EF3341] tracking-tight">
                    Private University.
                  </h3>
                  <p className="text-[9px] sm:text-[10px] font-bold text-[#1F1F1F] mt-0.5 tracking-tight">
                    Established 2025.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Image */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[20px] w-[380px] h-[520px] sm:w-[440px] sm:h-[600px] z-10 pointer-events-none">
              <Image 
                src="/career-hero.png" 
                alt="Brand Ambassador" 
                fill 
                className="object-contain object-top"
                priority
              />
              {/* Gradient fade so text is perfectly readable over the image */}
              <div className="absolute inset-x-0 bottom-0 h-[85%] bg-gradient-to-t from-sunshine via-sunshine/95 to-transparent"></div>
            </div>
          </div>

          {/* --- SHARED LEFT CONTENT (MOBILE BOTTOM / DESKTOP LEFT) --- */}
          <div className="flex flex-col items-center lg:items-start max-w-3xl z-30 relative mt-6 lg:mt-0 px-2 lg:px-0">
            {/* Desktop Badge */}
            <div className="hidden lg:flex items-center gap-2 bg-[#0CAADD] text-white rounded-full px-4 py-2 text-sm font-semibold mb-8">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              New Vacancies available
            </div>

            {/* Headings */}
            <h1 className="text-[2.1rem] sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-bold leading-[1.1] lg:leading-[1.05] text-[#111111] tracking-tight mb-4 lg:mb-8 text-center lg:text-left w-full">
              Winning innings<br />
              <span className="whitespace-nowrap">begins with one bold</span><br />
              step forward.
            </h1>
            <p className="text-[1.15rem] sm:text-2xl font-medium text-[#111111] mb-6 lg:mb-12 tracking-tight text-center lg:text-left">
              Your next innings begins here.
            </p>

            {/* Search Input Box */}
            <CareerHeroSearch />

            {/* Desktop University Tag */}
            <div className="hidden lg:flex items-start">
              <div className="w-[6px] bg-[#EF3341] h-[85px] mr-5 mt-1.5"></div>
              <div className="flex flex-col">
                <h3 className="text-[32px] font-bold leading-tight text-[#1F1F1F] tracking-tight">
                  Goa&apos;s First State
                </h3>
                <h3 className="text-[32px] font-bold leading-tight text-[#EF3341] tracking-tight">
                  Private University.
                </h3>
                <p className="text-lg font-semibold text-[#1F1F1F] mt-1 tracking-tight">
                  Established 2025.
                </p>
              </div>
            </div>
          </div>

          {/* --- DESKTOP RIGHT CONTENT --- */}
          <div className="hidden lg:flex relative h-full w-full justify-end items-center mt-12 lg:mt-0">
            {/* Dhoni / Person Image */}
            <div className="relative z-10 w-[600px] h-[750px] -mr-8 lg:-mr-24 lg:translate-x-16 translate-y-4">
              <Image 
                src="/career-hero.png" 
                alt="Brand Ambassador" 
                fill 
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <CareerListings initialJobs={jobs} />
    </main>
  );
}
