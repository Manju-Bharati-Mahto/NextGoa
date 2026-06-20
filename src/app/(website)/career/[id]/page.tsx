import Image from "next/image";
import { notFound } from "next/navigation";
import { MOCK_JOBS } from "@/data/jobs";
import Link from "next/link";

export default async function CareerDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const jobId = parseInt(id);
  const job = MOCK_JOBS.find((j) => j.id === jobId);

  if (!job) {
    notFound();
  }

  return (
    <main className="w-full flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative lg: flex items-center z-20 py-16 sm:py-24"
        style={{ minHeight: 'max(500px, 42vw)' }}
      >
        {/* Background Image Overflowing Downward */}
        <img 
          src="/car-2.png" 
          alt="Hero Background" 
          className="absolute top-0 left-0 w-full object-cover object-bottom z-0"
          style={{ height: 'calc(100% + 10vw)', minHeight: '52vw' }}
        />

        {/* Relative Content Overlay */}
        <div className="relative z-10 flex items-center w-full py-10">
          <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center h-full">
            
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center w-full max-w-[750px] md:pr-8">
              <Link href="/career" className="text-white hover:opacity-80 transition-opacity mb-6 font-medium text-sm w-fit flex items-center gap-2">
                &larr; Back to Listings
              </Link>

              {/* Pill */}
              <div className="border border-white text-white font-medium px-4 py-1.5 md:px-6 md:py-2 rounded-full w-fit mb-4 md:mb-6 text-[12px] md:text-sm lg:text-base">
                {job.position} Position
              </div>
              
              {/* Title */}
              <h1 className="text-white font-bold text-[36px] md:text-[60px] lg:text-[76px] leading-[1.1] mb-6 md:mb-8 tracking-tight relative z-10 pr-20 sm:pr-0">
                {job.title}
              </h1>
              
              {/* CTA */}
              <Link href={`/career/${jobId}/apply`} className="bg-[#EF3341] hover:bg-[#D92A36] transition-colors text-white text-[16px] md:text-[18px] font-bold px-8 py-3 md:px-10 md:py-3.5 rounded-full w-fit shadow-md text-center">
                Apply Now
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* Details Content Section */}
      <section className="w-full relative z-10 pb-16 sm:pb-24 pt-8 md:pt-[10vw]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 flex flex-col gap-6 mt-12 md:mt-[5vw]">
          
          {/* Card 1: Job Description */}
          <div className="bg-white rounded-[1rem] border border-gray-200 p-8 shadow-sm">
            <div className="text-[#111111] leading-[1.6] text-[15px] flex flex-col gap-2" dangerouslySetInnerHTML={{ __html: job.description }} />
          </div>

          {/* Card 3: Application Deadline */}
          <div className="bg-white rounded-[1rem] border border-gray-200 p-8 shadow-sm">
            <h2 className="text-[22px] font-bold mb-5 text-[#111111]">Application Deadline</h2>
            <div className="text-[#111111] leading-[1.6] text-[15px] flex flex-col gap-1">
              <p>Interested candidates can send their resume to vacancies.paruluniversity.ac.in within 7 days of this advertisement.</p>
              <p>For Any Queries, Please Contact +91 90161 34646</p>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
