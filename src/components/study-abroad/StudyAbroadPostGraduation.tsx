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
      flag: "/abroad/United States Flag.png",
      pillText: "Up to 3 years OPT for STEM graduates",
      pillClass: "bg-[#ffe5ea] text-[#eb3b47] border border-[#ffb3c1]",
    },
    {
      country: "UK",
      flag: "/abroad/United Kingdom Flag.png",
      pillText: "Up to 2 years post-study work visa",
      pillClass: "bg-[#eef2ff] text-[#4f46e5] border border-[#c7d2fe]",
    },
    {
      country: "Canada",
      flag: "/abroad/United States Flag.png", // Using provided flag as placeholder
      pillText: "Up to 3 years post-graduation work permit",
      pillClass: "bg-[#f0fdf4] text-[#16a34a] border border-[#bbf7d0]",
    },
    {
      country: "Australia",
      flag: "/abroad/United Kingdom Flag.png", // Using provided flag as placeholder
      pillText: "Up to 4 years post-study work rights",
      pillClass: "bg-black text-white border border-black",
    },
    {
      country: "New Zealand",
      flag: "/abroad/United Kingdom Flag.png", // Using provided flag as placeholder
      pillText: "Up to 3 years post-study work visa",
      pillClass: "bg-black text-white border border-black",
    },
    {
      country: "Europe",
      flag: "/abroad/United States Flag.png", // Using provided flag as placeholder
      pillText: "1-2 years post-study work visa",
      pillClass: "bg-black text-white border border-black",
    },
  ];

  return (
    <section 
      className={`bg-[#f8f8f8] sm:py-24 pb-25 pt-5 px-4 md:px-8 ${poppins.className}`}
      style={poppins.style}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#1f2022] text-lg md:text-xl font-semibold mb-2">
            After You Finish
          </p>
          <h2 className="text-3xl md:text-[3.5rem] font-bold text-[#eb3b47] tracking-tight leading-tight mb-4">
            Work-Life-Style After Graduation<br className="hidden md:block" /> begins right here!
          </h2>
          <p className="text-[#1f2022] text-md md:text-lg font-medium">
            Post-study work rights, by country.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12">
          {workRights.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow"
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
                  <Image
                    src={item.flag}
                    alt={`${item.country} Flag`}
                    fill
                    className="object-cover"
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
        <p className={`text-center text-gray-400 text-sm md:text-lg max-w-4xl font-lg leading-relaxed ${poppins.className}`}>
          Visa policies change. Verify current rules with the partner university and the destination country's official immigration website at the time of application.
        </p>

      </div>
    </section>
  );
}
