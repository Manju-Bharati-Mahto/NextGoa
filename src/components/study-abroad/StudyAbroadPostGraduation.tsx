import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function StudyAbroadPostGraduation() {
  const workRights = [
    {
      country: "USA",
      flag: "https://flagcdn.com/w80/us.png",
      pillText: "Up to 3 years OPT for STEM graduates",
      pillClass: "bg-[#eb3b47] text-white",
    },
    {
      country: "UK",
      flag: "https://flagcdn.com/w80/gb.png",
      pillText: "Up to 2 years post-study work visa",
      pillClass: "bg-[#0CAADD] text-white",
    },
    {
      country: "Canada",
      flag: "https://flagcdn.com/w80/ca.png",
      pillText: "Up to 3 years post-grad work permit",
      pillClass: "bg-[#fbdc2a] text-[#1f2022]",
    },
    {
      country: "Australia",
      flag: "https://flagcdn.com/w80/au.png",
      pillText: "Up to 4 years post-study work rights",
      pillClass: "bg-[#1f2022] text-white",
    },
    {
      country: "New Zealand",
      flag: "https://flagcdn.com/w80/nz.png",
      pillText: "Up to 3 years post-study work visa",
      pillClass: "bg-[#2DD4BF] text-[#1f2022]",
    },
    {
      country: "Europe",
      flag: "https://flagcdn.com/w80/eu.png",
      pillText: "1-2 years post-study work visa",
      pillClass: "bg-[#eb3b47] text-white",
    },
  ];

  return (
    <section 
      className={`bg-[#f8f8f8] sm:pb-24 sm:py-24 pt-22 pb-15 sm:pt-10 px-0 md:px-8 overflow-hidden ${poppins.className}`}
      style={poppins.style}
    >
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-12 px-4 md:px-0">
          <p className="text-[#1f2022] mb-2 section-subheading">
            After You Finish
          </p>
          <h2 className="text-[#eb3b47] tracking-tight leading-tight mb-4 section-heading">
            Work-Life-Style After Graduation<br className="hidden md:block" /> begins right here!
          </h2>
          <p className="text-[#1f2022] section-body">
            Post-study work rights, by country.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full mb-12 snap-x snap-mandatory hide-scrollbar pb-4 px-[7.5vw] md:px-0">
          {workRights.map((item, index) => (
            <div 
              key={index} 
              className="w-[85vw] md:w-auto flex-shrink-0 snap-center bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-xs text-gray-500 font-semibold tracking-wider uppercase mb-1">
                    Country
                  </p>
                  <h3 className="text-2xl font-bold text-[#1f2022]">
                    {item.country}
                  </h3>
                </div>
                <div className="w-12 h-8 relative shadow-sm border border-gray-100 rounded-sm overflow-hidden">
                  <img
                    src={item.flag}
                    alt={`${item.country} Flag`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className={`w-full py-2.5 px-4 rounded-full text-center text-[13px] md:text-[14px] font-medium ${item.pillClass}`}>
                {item.pillText}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className={`text-center px-4 md:px-0 text-gray-400 text-xs md:text-lg max-w-4xl font-lg leading-relaxed ${poppins.className}`}>
          Visa policies change. Verify current rules with the partner university and the destination country&apos;s official immigration website at the time of application.
        </p>

      </div>
    </section>
  );
}
