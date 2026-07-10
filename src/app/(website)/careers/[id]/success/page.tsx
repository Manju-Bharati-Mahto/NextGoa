import { notFound } from "next/navigation";
import { MOCK_JOBS } from "@/data/jobs";
import Link from "next/link";

export default async function SuccessPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = MOCK_JOBS.find((j) => j.slug === id || String(j.id) === id);

  if (!job) {
    notFound();
  }

  return (
    <main className="w-full flex flex-col min-h-screen bg-[#14A8DA]">

      {/* Full Screen Background Image */}
      <section className="w-full relative flex-1 flex items-center z-20 overflow-hidden py-16 sm:py-24"
      >
        <img 
          src="/car-hero-1.png" 
          alt="Thank You Background" 
          className="absolute top-0 left-0 w-full object-cover object-top z-0"
          style={{ height: '115%' }}
        />

        {/* Absolute Content Overlay */}
        <div className="absolute inset-0 z-10 flex items-center pt-20">
          <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 flex flex-col items-start h-full justify-center">
            
            {/* Left Content */}
            <div className="flex flex-col pb-16 lg:pb-32 w-full max-w-[700px]">
              <h1 className="text-[#152347] font-extrabold text-[44px] md:text-[56px] lg:text-[68px] leading-[1.1] mb-6 tracking-tight">
                Thank you for<br />
                applying for<br />
                {job.title}.
              </h1>
              
              <p className="text-[#111111] font-bold text-[22px] md:text-[26px] leading-snug">
                Your journey towards a victorious<br />
                career begins here.
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
