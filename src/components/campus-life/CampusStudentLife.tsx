import Image from "next/image";

const clubs = [
  {
    title: "Academic & Tech",
    tags: ["CODING", "ROBOTICS", "AI/ML", "PHARMA", "HOSPITALITY"],
    image: "/campus-life/clubs/academic.jpg" // placeholder
  },
  {
    title: "Arts & Culture",
    tags: ["MUSIC", "DRAMA", "PHOTOGRAPHY", "LITERARY", "FILM"],
    image: "/campus-life/clubs/arts.jpg" // placeholder
  },
  {
    title: "Sports",
    tags: ["FOOTBALL", "INDOOR GAMES", "BASKETBALL", "ATHLETICS"],
    image: "/campus-life/clubs/sports.jpg" // placeholder
  },
  {
    title: "Social Impact",
    tags: ["VOLUNTEERING", "ENVIRONMENT", "COMMUNITY", "HEALTH"],
    image: "/campus-life/clubs/social.jpg" // placeholder
  }
];

export function CampusStudentLife() {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden flex flex-col justify-center min-h-[800px]">
      {/* Background Blue Wavy Image from Figma */}
      <img
        src="/Group 32863.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover md:object-fill z-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full flex flex-col items-center text-center mb-12 sm:mb-16 mt-8">
        <h3 className="text-white mb-2 section-subheading">
          Clubs, Events & Student Life
        </h3>
        <h2 className="text-white mb-4 section-heading">
          A campus alive with possibility.
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto section-body">
          Student-led clubs across academic, arts, sports, social impact, and entrepreneurship.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative z-10 w-full mb-12">
        <div className="flex overflow-x-auto gap-4 sm:gap-6 px-4 sm:px-6 lg:px-12 scroll-pl-4 sm:scroll-pl-6 lg:scroll-pl-12 snap-x snap-mandatory hide-scrollbar pb-8">
          {clubs.map((club, idx) => (
            <div 
              key={idx} 
              className="group relative flex-shrink-0 w-[85vw] sm:w-[450px] md:w-[500px] lg:w-[550px] snap-start rounded-[24px] sm:rounded-[32px] overflow-hidden bg-black/20 aspect-[16/9] shadow-lg border border-white/10"
            >
              {/* Placeholder for Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image 
                  src={club.image} 
                  alt={club.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Gradient Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Content Container (Bottom Left) */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <h3 className="font-poppins font-semibold text-[28px] sm:text-[32px] text-white leading-tight mb-3">
                  {club.title}
                </h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {club.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="px-3 py-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20 text-white font-[family-name:var(--font-poppins)] text-[12px] sm:text-[13px] font-medium rounded-full transition-colors tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
