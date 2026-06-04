"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { useState, useEffect } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SLIDES = [
  {
    id: 0,
    logoText: "yeep",
    logoDesc: "Young Entrepreneurship\nExchange Project",
    title: "YEEP, Young Entrepreneurship\nExchange Project",
    description: "In collaboration with BFH (Bern University of Applied Sciences) from Switzerland, YEEP brings Swiss students to PU campuses and takes PU students to Switzerland for a two-week immersion in the entrepreneurial ecosystem, exploring markets, exchanging perspectives and co-creating business ideas. Students from both countries get to experience something they've never imagined!",
    image: "/abroad/YEEP Entrepreneurship Program.png",
  },
  {
    id: 1,
    logoText: "visit",
    logoDesc: "Industry Immersion\nVisit",
    title: "Global Industry Immersion\nVisit",
    description: "Experience the global business environment first-hand. Our industry immersion visits take students to leading international corporations, providing unparalleled insights into global operations, management practices, and cross-cultural business dynamics to prepare them for global careers.",
    image: "/abroad/Industry Immersion Visit.png",
  },
  {
    id: 2,
    logoText: "partner",
    logoDesc: "Laurentian University\nVisit",
    title: "Laurentian University\nAcademic Visit",
    description: "Expand your academic horizons with our partner visits. Students get the opportunity to visit Laurentian University, interact with international faculty, and experience a different academic culture, fostering a truly global mindset and exploring future higher education pathways.",
    image: "/abroad/Laurentian University Visit.png",
  },
  {
    id: 3,
    logoText: "culture",
    logoDesc: "Cultural Immersion\nExperience",
    title: "Cultural Immersion\nExperience",
    description: "Beyond academics, we believe in shaping global citizens. Our cultural immersion programs are designed to expose students to diverse traditions, languages, and lifestyles, building empathy, adaptability, and cross-cultural communication skills essential for the modern world.",
    image: "/abroad/Cultural Immersion Experience.png",
  },
  {
    id: 4,
    logoText: "connect",
    logoDesc: "Global Student\nConnect",
    title: "Global Student\nConnect Program",
    description: "Build a worldwide network before you even graduate. Through our Global Student Connect initiatives, PU students collaborate on projects with peers from universities around the globe, creating lifelong professional and personal bonds across continents.",
    image: "/abroad/Global Student Connect.png",
  },
  {
    id: 5,
    logoText: "learn",
    logoDesc: "Global Learning\nExperience",
    title: "Global Learning\nExperience",
    description: "Embrace a curriculum that transcends borders. Our Global Learning Experience integrates international case studies, joint virtual classrooms with global partners, and continuous exposure to international perspectives, ensuring our students are ready for the global stage.",
    image: "/abroad/Global Learning Experience.png",
  }
];

export default function StudyAbroadOpportunities() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, []);

  const activeSlide = SLIDES[currentSlide];

  return (
    <section
      className={`relative bg-transparent py-24 px-4 md:px-8 overflow-hidden ${poppins.className}`}
    >
      {/* Background Blue Wavy Image */}
      <img
        src="/Group 32863.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover md:object-fill z-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center py-24">
        {/* Header Text */}
        <p className="text-white mb-3 section-subheading">
          Begin in Goa · graduate in the world
        </p>
        <h2 className="text-white text-center leading-tight mb-6 max-w-4xl section-heading">
          Turn your wanderlust into a globally recognised degree
        </h2>
        <p className="text-white/90 text-center max-w-5xl mb-12 section-body">
          At PU Goa, your education doesn&apos;t have to stop in India. Through
          international pathways, academic partnerships and broadway programmes,
          students can begin their journey in Goa and continue it across leading
          global destinations. Backed by a global ecosystem of 800+ international
          opportunities, PU Goa connects students to the world from day one.
        </p>

        {/* Featured Card Slider */}
        <div className="w-full max-w-[1200px] bg-white/40 p-2 rounded-[2rem] shadow-xl backdrop-blur-sm transition-all duration-500">
          <div className="flex flex-col md:flex-row w-full bg-white rounded-3xl overflow-hidden min-h-[400px]">
            {/* Image side */}
            <div className="md:w-1/2 relative h-64 md:h-auto min-h-[350px]">
              <Image
                src={activeSlide.image}
                alt={activeSlide.title}
                fill
                className="object-cover transition-opacity duration-500"
              />
            </div>

            {/* Content side */}
            <div className="md:w-1/2 bg-[#eb3b47] p-8 md:p-12 flex flex-col justify-center text-white transition-colors duration-500">
              <div className="mb-6 flex items-end">
                <span className="text-4xl font-semibold tracking-tighter lowercase">
                  {activeSlide.logoText}
                </span>
                <span className="w-2 h-2 bg-yellow-400 rounded-full mb-2 ml-0.5"></span>
                <div className="ml-3 mb-1">
                  <div className="text-[7px] uppercase font-bold tracking-widest opacity-80 leading-tight whitespace-pre-line">
                    {activeSlide.logoDesc}
                  </div>
                </div>
              </div>

              <h3 className="text-[26px] md:text-3xl font-bold mb-6 leading-snug whitespace-pre-line">
                {activeSlide.title}
              </h3>

              <p className="text-sm text-white/95 mb-8 leading-relaxed font-medium">
                {activeSlide.description}
              </p>

              <div>
                <button className="bg-[#fbdc2a] hover:bg-[#eac516] text-black text-xs font-bold px-6 py-2.5 rounded-full shadow-sm transition-colors flex items-center gap-2">
                  Explore More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                currentSlide === index ? "bg-[#eb3b47]" : "bg-white hover:bg-gray-200"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
