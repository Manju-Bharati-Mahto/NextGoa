import Image from "next/image";
import { Icon } from "@iconify/react";

export function FacultyDeans() {
  const deans = [
    {
      name: "Dr. Anuradha Pillai",
      faculty: "Faculty of Engineering, IT & CS",
      stats: "Ph.D. Computer Engineering • 21+ yrs • 48 papers",
      image: "/faculties/Engineering/Dean.jpg",
    },
    {
      name: "Dr. Kshitiz Sharma",
      faculty: "Faculty of Management Studies",
      stats: "PhD. Management • 23+ yrs • 44 papers",
      image: "/faculties/Management/Dean.jpg",
    },
    {
      name: "Dr. Anupam Kumar",
      faculty: "Applied & Health Sciences",
      stats: "PhD. Biotechnology • 15+ yrs • 50+ papers",
      image: "/faculties/Applied and Health Sciences/Dean.jpg",
    },
    {
      name: "Dr. Lalit Lata Jha",
      faculty: "Faculty of Pharmacy",
      stats: "PhD. Pharmacy • 23+ yrs • 41 papers",
      image: "/faculties/Pharmacy/Dean.png",
    },
    {
      name: "Dr. Aseem Yadav",
      faculty: "Faculty of Physiotherapy",
      stats: "PhD. Physiotherapy • 14+ yrs • 81 papers",
      image: "/faculties/Physiotherapy/Dean.jpg",
    },
    {
      name: "Dr. Jeyalakshmi K.",
      faculty: "Faculty of Nursing",
      stats: "PhD. Community Health Nursing • 18+ yrs",
      image: "/faculties/Nursing/Dean.png",
    },
    {
      name: "Dr. Prashant Sharma",
      faculty: "Faculty of Hotel Management",
      stats: "Extensive Experience in Hospitality and Culinary Arts",
      image: "/leaders/9911.jpg",
    },
  ];

  return (
    <section className="bg-[#F8F8F8] py-20 px-6 sm:pt-10">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-ink section-heading">
            Faculty Deans
          </h2>
          <p className="mt-2 text-ink/80 section-body">
            Six deans leading our faculties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {deans.map((dean, idx) => {
            const isLastOdd = idx === deans.length - 1 && deans.length % 2 !== 0;
            return (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row rounded-[20px] bg-white shadow-sm border border-zinc-200/60 overflow-hidden ${
                  isLastOdd ? "md:col-span-2 md:w-[calc(50%-16px)] md:mx-auto" : "w-full"
                }`}
              >
                {/* Image Section */}
                <div className="relative w-full h-[180px] sm:h-auto sm:w-[30%] bg-gradient-to-b from-[#EBF8FD] to-[#D6F0FA] flex-shrink-0 flex items-end justify-center overflow-hidden">
                  {dean.image && (
                    <Image
                      src={dean.image}
                      alt={dean.name}
                      fill
                      className="object-cover object-top"
                    />
                  )}
                </div>

                {/* Text Body */}
                <div className="relative p-6 sm:p-8 flex flex-col flex-1 justify-center">
                  {/* Red Dean Badge */}
                  <div className="mb-3">
                    <span className="inline-block rounded-full bg-[#E73649] px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wide text-white">
                      DEAN
                    </span>
                  </div>

                  <h3 className="font-poppins font-semibold text-[22px] sm:text-[24px] leading-tight text-[#1F1F1F]">
                    {dean.name}
                  </h3>
                  <p className="font-sans font-bold text-[14px] sm:text-[15px] text-[#0CAADD] mt-1">
                    {dean.faculty}
                  </p>

                  {/* Separator */}
                  <div className="w-full h-px bg-zinc-200/80 my-4" />

                  {/* Stats & LinkedIn */}
                  <div className="flex flex-row items-center justify-between">
                    <p className="font-[family-name:var(--font-poppins)] text-[12px] sm:text-[13px] leading-[1.6] text-ink/50 pr-4">
                      {dean.stats}
                    </p>
                    <a href="#" className="flex-shrink-0 text-[#E73649] hover:text-[#c42d3d] transition-colors" aria-label="LinkedIn Profile">
                      <Icon icon="mdi:linkedin" className="w-7 h-7 rounded-md" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
