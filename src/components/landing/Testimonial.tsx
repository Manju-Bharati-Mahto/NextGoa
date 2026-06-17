"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Parul University Goa is a work in progress, but it's already making waves! Despite being under construction, the academic blocks are fully functional, and the staff is super supportive. Students are getting all the resources they need to thrive. The construction is fast-paced and luxurious, with a sleek design that's gonna make this place a masterpiece in the coming years! Can't wait to see it in full swing.",
    name: "Somesh Sawant",
    image: "/students/student1-modified.png",
    link: "https://maps.app.goo.gl/G1B1VUf1e1gg8AVS9"
  },
  {
    quote: "Parul University Goa stands out with its dedicated faculty and state-of-the-art facilities. The campus fosters a nurturing environment that encourages both academic excellence and personal growth. Students benefit from excellent placement support and a vibrant campus life, making it an ideal place to build a strong foundation for the future.",
    name: "Rachana Dessai",
    image: "/students/student2-modified.png",
    link: "https://maps.app.goo.gl/AGoP4BW8jizQZ8Jw9"
  },
  {
    quote: "Parul University Goa offers a vibrant learning atmosphere with good infrastructure and student-friendly facilities. From a faculty perspective, the university provides a supportive environment, encouraging innovation in teaching and active participation in student development. A great place for both students and staff to grow together.",
    name: "Hencia Gomes",
    image: "/students/student3-modified.png",
    link: "https://maps.app.goo.gl/L22TxXy1iYMdK5vU6"
  },
  {
    quote: "The campus life is vibrant, and there are plenty of opportunities for innovation, skill-building, and career growth. Transport facilities are convenient, and the university keeps evolving to meet industry standards. A very good place for students to shape their academic journey and future career. Highly recommended!",
    name: "Sanjeeta",
    image: "/students/student4-modified.png",
    link: "https://maps.app.goo.gl/L22TxXy1iYMdK5vU6"
  },
  {
    quote: "Parul university Goa offers a diverse range of programs tailored to meet industry demand. The curriculum is designed to provide both theoretical knowledge and practical skills, ensuring students are well prepared for their careers.",
    name: "Amar Jamnekar",
    image: "/students/student5-modified.png",
    link: "https://maps.app.goo.gl/L22TxXy1iYMdK5vU6"
  },
];

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<"visible" | "exiting" | "entering">("visible");

  const goTo = (idx: number) => {
    setPhase("exiting");
    setTimeout(() => {
      setCurrentIndex(idx);
      setPhase("entering");
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setPhase("visible"))
      );
    }, 520);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((currentIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const t = testimonials[currentIndex];

  return (
    <section className="bg-gradient-to-t from-[#CBEFFD] to-brand-white sm:pb-24 py-15 sm:pt-0">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.8fr_1fr]">
        <div className="relative">
          {/* Animated text */}
          <figure
            style={{
              transition: phase === "entering"
                ? "none"
                : "opacity 500ms cubic-bezier(0.4,0,0.2,1), transform 500ms cubic-bezier(0.4,0,0.2,1)",
              opacity:   phase === "visible" ? 1 : 0,
              transform: phase === "visible"  ? "translateX(0)"
                       : phase === "exiting"  ? "translateX(60px)"
                       :                        "translateX(-60px)",
            }}
          >
            <blockquote className="font-sans text-lg sm:text-xl md:text-2xl font-bold leading-[1.4] tracking-tight text-ink">
              &quot;{t.quote}&quot;
            </blockquote>
            <hr className="my-4 sm:my-8 w-full border-t border-ink/20" />

            {/* Figcaption — avatar + name side by side on mobile, name-only on desktop */}
            <figcaption className="font-sans flex items-center gap-4 md:block">
              {/* Small avatar — mobile only */}
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full md:hidden">
                {testimonials.map((item, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <div
                      key={item.name}
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{
                        opacity: isActive ? 1 : 0,
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                        priority={idx === 0}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Name / role / course */}
              <div>
                {t.link ? (
                  <a href={t.link} target="_blank" rel="noopener noreferrer" className="inline-block text-2xl font-bold text-[#1967D2] hover:underline md:text-2xl">
                    {t.name}
                  </a>
                ) : (
                  <span className="inline-block text-2xl font-bold text-ink md:text-2xl">{t.name}</span>
                )}
              </div>
            </figcaption>

            {/* Google Reviews Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 inline-flex mt-8 md:mt-4">
              <div className="flex items-center">
                <Image src="/placements/google reviews - Copy.png" alt="Google Reviews" width={350} height={85} className="object-contain" />
              </div>
              <div className="w-px h-14 bg-[#1f2020] hidden sm:block"></div>
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="font-bold text-[#0F172A] text-2xl mr-2">5.0</span>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#FBBC05]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-[#1967D2] text-base font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verified Review
                </div>
              </div>
            </div>
          </figure>

          {/* Dots Indicator */}
          <div className="flex gap-2 mt-8 z-20">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-brand" : "w-2.5 bg-ink/20 hover:bg-ink/40"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Large circular image — desktop only */}
        <div className="hidden md:block">
          <div className="relative mx-auto md:mr-0 md:ml-auto h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80">
            {/* Yellow Accent Disc */}
            <div className="absolute -bottom-3 -right-3 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-sunshine" />
            {testimonials.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={idx}
                  className={`absolute inset-0 overflow-hidden rounded-full shadow-lg transition-all duration-1000 ease-in-out ${
                    isActive
                      ? "opacity-100 scale-100 blur-0 pointer-events-auto z-10"
                      : "opacity-0 scale-95 blur-[4px] pointer-events-none z-0"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-w-768px) 256px, 320px"
                    priority={idx === 0}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
