import React from "react";

const benefits = [
  {
    title: "Global Perspective",
    description: "Develop a broader understanding of international business, culture, and society by living and studying in a new environment.",
    icon: "🌍"
  },
  {
    title: "World-Class Universities",
    description: "Study at highly ranked partner universities across Europe, North America, Australia, and Asia.",
    icon: "🎓"
  },
  {
    title: "Career Advancement",
    description: "Enhance your resume with international experience, making you stand out to top global employers.",
    icon: "🚀"
  },
  {
    title: "Cultural Exchange",
    description: "Build a global network of friends and professionals while immersing yourself in diverse cultural experiences.",
    icon: "🤝"
  }
];

export default function BenefitsSection() {
  return (
    <section id="explore" className="bg-[#F9F9F9] py-24 font-[family-name:var(--font-poppins)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="mb-4 inline-block rounded-full bg-[#FFD523] px-4 py-1.5 text-xs font-bold text-ink shadow-sm uppercase tracking-wider">
            Why Study Abroad?
          </span>
          <h2 className="text-ink mb-6 section-heading">
            Beyond Boundaries
          </h2>
          <p className="mx-auto max-w-2xl text-ink/80 section-body">
            A study abroad experience is more than just an academic journey; it is a life-changing opportunity to discover the world and yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-zinc-100 flex flex-col items-start">
              <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center text-3xl mb-6 shadow-sm border border-zinc-100">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-ink mb-3 font-poppins">{benefit.title}</h3>
              <p className="text-[15px] text-ink/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
