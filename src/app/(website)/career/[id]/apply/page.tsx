import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MOCK_JOBS } from "@/data/jobs";
import ApplyForm from "./ApplyForm";

export default async function ApplyPage({ params }: { params: Promise<{ id: string }> }) {
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
        style={{ minHeight: 'max(500px, 45vw)' }}
      >
        {/* Background Image Overflowing Downward */}
        <img 
          src="/sub.png" 
          alt="Hero Background" 
          className="absolute top-0 left-0 w-full object-cover object-bottom z-0"
          style={{ height: 'calc(100% + 10vw)', minHeight: '55vw' }}
        />
        
        {/* Relative Content Overlay */}
        <div className="relative z-10 flex items-center w-full py-10">
          <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center h-full">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center w-full max-w-[800px] md:pr-8">
              <Link href={`/career/${job.id}`} className="text-[#111111] hover:opacity-80 transition-opacity mb-4 md:mb-6 font-medium text-sm w-fit flex items-center gap-2">
                &larr; Back to Job Details
              </Link>
              
              <h1 className="text-[#152347] font-extrabold text-[36px] md:text-[64px] lg:text-[84px] leading-[1.05] mb-6 md:mb-8 tracking-tight relative z-10">
                You are just one <br className="hidden lg:block"/>
                helicopter shot <br />
                away from a <br />
                winning career
              </h1>
              
              <button className="bg-[#EF3341] hover:bg-[#D92A36] transition-colors text-white text-[16px] md:text-[18px] font-bold px-8 py-3 md:px-10 md:py-3.5 rounded-full w-fit shadow-md">
                Submit now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="w-full relative z-10 pb-16 sm:pb-24 pt-8 md:pt-[10vw]">
        <div className="max-w-[1140px] mx-auto px-6 lg:px-12 bg-white p-8 lg:p-12 rounded-[2rem] border border-gray-200 shadow-sm mt-12 md:mt-[5vw]">
          <h2 className="text-3xl font-extrabold mb-10 text-[#111111]">Basic Details</h2>
          
          <ApplyForm jobId={jobId} jobTitle={job.title} />
        </div>
      </section>
    </main>
  );
}
