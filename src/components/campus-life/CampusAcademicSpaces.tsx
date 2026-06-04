import Image from "next/image";

const spaces = [
  {
    title: "Advanced Laboratories",
    description: "Discipline-specific labs across Engineering, Pharmacy, Health Sciences and more.",
    image: "/campus-life/carousel/1.png" // placeholder
  },
  {
    title: "Digital Libraries",
    description: "Access to global academic resources and research databases.",
    image: "/campus-life/carousel/2.png" // placeholder
  },
  {
    title: "Smart Classrooms",
    description: "Interactive learning environments equipped with hybrid and modern technology.",
    image: "/campus-life/carousel/3.png" // placeholder
  },
  {
    title: "Research Centers",
    description: "Dedicated spaces for innovation, incubation, and student-led projects.",
    image: "/campus-life/carousel/1.png" // placeholder
  },
  {
    title: "Auditoriums",
    description: "State-of-the-art halls designed for seminars, workshops, and major events.",
    image: "/campus-life/carousel/2.png" // placeholder
  }
];

export function CampusAcademicSpaces() {
  return (
    <section className="relative w-full bg-white sm:py-20 pt-2 pb-10 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-12 sm:mb-16 flex flex-col items-center text-center">
        <h3 className="text-[#1F1F1F] mb-2 section-subheading">
          Academic Spaces
        </h3>
        <h2 className="leading-[1.1] text-[#E73649] mb-4 section-heading">
          Built for inspiration.
        </h2>
        <p className="max-w-2xl mx-auto text-[#1F1F1F]/80 section-body">
          Labs and classrooms designed with modern technology to prepare students for the future.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="w-full relative">
        <div className="flex overflow-x-auto gap-4 sm:gap-6 px-4 sm:px-6 lg:px-12 scroll-pl-4 sm:scroll-pl-6 lg:scroll-pl-12 snap-x snap-mandatory hide-scrollbar pb-8">
          {spaces.map((space, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 w-[85vw] sm:w-[450px] md:w-[550px] lg:w-[600px] snap-start rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#F4F4F4] border border-[#E5E5E5] flex flex-col shadow-sm"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[3/2] bg-black/5">
                {/* Using a placeholder image or a div if image fails. We assume the path works or will be replaced. */}
                <Image 
                  src={space.image} 
                  alt={space.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content Container */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 bg-[#F8F8F8]">
                <h4 className="font-poppins font-semibold text-[22px] sm:text-[26px] text-[#1F1F1F] mb-2 leading-tight">
                  {space.title}
                </h4>
                <p className="font-[family-name:var(--font-poppins)] text-[#1F1F1F]/80 text-[14px] sm:text-[16px] leading-relaxed">
                  {space.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CSS to hide scrollbar but keep functionality */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
