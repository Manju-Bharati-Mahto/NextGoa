import React from "react";

const specialisationsData = [
  {
    id: "engineering",
    faculty: "Engineering & CS",
    theme: "yellow",
    tags: [
      "Artificial Intelligence",
      "Cyber Security",
      "Artificial Intelligence and Data Science",
      "Artificial Intelligence and Machine Learning",
      "Quantum Computing in Artificial Intelligence",
    ],
  },
  {
    id: "management",
    faculty: "Management Studies",
    theme: "dark",
    tags: [
      "Data Analytics",
      "Financial Management",
      "Human Resource",
      "Marketing",
      "Logistics and Supply Chain Management",
      "Business Analytics",
      "Finance",
      "Human Resource",
      "Marketing",
      "Operations Management",
    ],
  },
];

export default function SpecialisationsSection() {
  return (
    <section className="pt-20 pb-5 sm:pb-15 sm:pt-30 bg-[#F9F9F9] font-[family-name:var(--font-poppins)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-xl sm:text-[22px] font-bold text-ink mb-3 tracking-wide font-poppins">
            Specialisations
          </h2>
          <h3 className="text-4xl sm:text-[3.2rem] font-bold text-[#ED383F] mb-6 tracking-tight leading-tight font-poppins">
            Pick a specialisation, not just a programme.
          </h3>
          <p className="text-[15px] sm:text-[17px] max-w-3xl mx-auto text-ink/80 font-medium">
            Industry-aligned tracks across faculties — each tag opens its faculty page.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {specialisationsData.map((spec) => (
            <div 
              key={spec.id} 
              className={`relative rounded-[32px] p-8 sm:p-12 flex flex-col items-start shadow-lg hover:shadow-xl transition-shadow ${
                spec.theme === "yellow" 
                  ? "bg-[#FFD523] text-ink" 
                  : "bg-[#222222] text-white"
              }`}
            >
              <h4 className={`text-lg sm:text-[20px] font-medium mb-2 ${spec.theme === 'dark' ? 'text-white/80' : 'text-ink/80'}`}>
                Faculty
              </h4>
              <h5 className={`text-3xl sm:text-[2.5rem] font-bold mb-8 tracking-tight ${
                spec.theme === "dark" ? "text-[#FFD523]" : "text-ink"
              }`}>
                {spec.faculty}
              </h5>

              <div className="flex flex-wrap gap-3 mb-12 flex-1">
                {spec.tags.map((tag, i) => (
                  <span 
                    key={`${tag}-${i}`} 
                    className="inline-flex items-center justify-start text-left sm:justify-center sm:text-center bg-white text-ink font-medium text-[15px] sm:text-[15px] px-5 py-2.5 rounded-full hover:scale-[1.05] transition-transform duration-300 ease-in-out will-change-transform backface-hidden antialiased cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href="#" 
                className={`text-[15px] font-bold flex items-center gap-2 hover:opacity-80 transition-opacity ${
                  spec.theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-ink/70 hover:text-ink'
                }`}
              >
                View &rarr;
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
