import { notFound } from "next/navigation";
import db from "@/lib/db";
import Link from "next/link";

interface CareerDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CareerDetailsPageProps) {
  const { slug } = await params;
  try {
    const [rows]: any = await db.query(
      "SELECT title, card_description FROM vacancies WHERE slug = ? AND is_deleted = 0",
      [slug]
    );
    if (rows[0]) {
      return {
        title: `${rows[0].title} | Careers at Parul University Goa`,
        description: rows[0].card_description || `Apply for the ${rows[0].title} position at Parul University Goa.`,
      };
    }
  } catch (e) {
    console.error("Error generating metadata:", e);
  }
  return {
    title: "Job Details | Parul University Goa",
  };
}

export default async function CareerDetailsPage({ params }: CareerDetailsPageProps) {
  const { slug } = await params;

  let job: any = null;
  try {
    const [rows]: any = await db.query(
      "SELECT * FROM vacancies WHERE slug = ? AND is_deleted = 0",
      [slug]
    );
    job = rows[0];
  } catch (error) {
    console.error("Error fetching job details:", error);
  }

  if (!job) {
    notFound();
  }

  // Parse structured content card JSON
  let cards: any[] = [];
  try {
    cards = typeof job.content === "string" ? JSON.parse(job.content) : job.content;
    if (!Array.isArray(cards)) {
      cards = [];
    }
  } catch (error) {
    console.error("Error parsing job content JSON:", error);
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
              <Link href="/careers" className="text-white hover:opacity-80 transition-opacity mb-6 font-medium text-sm w-fit flex items-center gap-2">
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
              <Link href={`/careers/${slug}/apply`} className="bg-[#EF3341] hover:bg-[#D92A36] transition-colors text-white text-[16px] md:text-[18px] font-bold px-8 py-3 md:px-10 md:py-3.5 rounded-full w-fit shadow-md text-center">
                Apply Now
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* Details Content Section */}
      <section className="w-full relative z-10 pb-16 sm:pb-24 pt-8 md:pt-[10vw]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 flex flex-col gap-6 mt-12 md:mt-[5vw]">
          
          {/* Loop over custom dynamic content cards from DB */}
          {cards.map((card: any, cardIdx: number) => (
            <div key={cardIdx} className="bg-white rounded-[1rem] border border-gray-200 p-8 shadow-sm">
              <h2 className="text-[22px] font-bold mb-5 text-[#111111]">{card.card_title}</h2>
              <div className="flex flex-col gap-6">
                {card.sections?.map((sec: any, secIdx: number) => (
                  <div key={secIdx} className="flex flex-col gap-3">
                    {sec.section_title && (
                      <h3 className="text-lg font-bold text-[#111111]">{sec.section_title}</h3>
                    )}
                    <div className="text-[#111111] leading-[1.6] text-[15px] flex flex-col gap-3">
                      {sec.blocks?.map((block: any, blockIdx: number) => {
                        if (block.type === "paragraph") {
                          return <p key={blockIdx}>{block.text}</p>;
                        }
                        if (block.type === "unordered-list" && block.items) {
                          return (
                            <ul key={blockIdx} className="list-disc pl-5 space-y-2">
                              {block.items.map((item: any, itemIdx: number) => (
                                <li key={itemIdx}>
                                  {item.bold_title && <b>{item.bold_title}: </b>}
                                  {item.text}
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        if (block.type === "ordered-list" && block.items) {
                          return (
                            <ol key={blockIdx} className="list-decimal pl-5 space-y-2">
                              {block.items.map((item: any, itemIdx: number) => (
                                <li key={itemIdx}>
                                  {item.bold_title && <b>{item.bold_title}: </b>}
                                  {item.text}
                                </li>
                              ))}
                            </ol>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
        </div>
      </section>
    </main>
  );
}
