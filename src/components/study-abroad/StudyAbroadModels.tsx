import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function StudyAbroadModels() {
  return (
    <section
      className={`relative w-full bg-transparent px-4 md:px-8 overflow-hidden ${poppins.className}`}
      style={{
        ...poppins.style,
        paddingTop: "clamp(5rem, 12.2vw, 600px)",
        paddingBottom: "clamp(5rem, 13.3vw, 600px)"
      }}
    >
      {/* Background Blue Wavy Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Middle Solid Blue Background */}
        <div
          className="absolute inset-x-0 bg-[#0CAADD]"
          style={{
            top: "calc(clamp(50px, 8vw, 500px) - 1.5px)",
            bottom: "calc(clamp(50px, 8vw, 500px) - 1.5px)"
          }}
        />
        {/* Top Wave */}
        <div
          className="absolute top-0 left-0 right-0 overflow-hidden"
          style={{ height: "clamp(50px, 8vw, 500px)" }}
        >
          <div 
            className="absolute top-0 left-0 w-[400%] h-full animate-wave-flow"
            style={{
              backgroundImage: "url('/88-double.svg?v=3')",
              backgroundSize: "50% auto",
              backgroundPosition: "top left",
              backgroundRepeat: "repeat-x"
            }}
          />
        </div>
        {/* Bottom Wave */}
        <div
          className="absolute bottom-0 left-0 right-0 overflow-hidden"
          style={{ height: "clamp(50px, 8vw, 500px)" }}
        >
          <div 
            className="absolute bottom-0 left-0 w-[400%] h-full animate-wave-flow"
            style={{
              backgroundImage: "url('/88-double.svg?v=3')",
              backgroundSize: "50% auto",
              backgroundPosition: "bottom left",
              backgroundRepeat: "repeat-x"
            }}
          />
        </div>
      </div>

      {/* Decorative Assets */}
      <div className="absolute left-0 bottom-[10%] z-0 w-32 md:w-64 h-64 md:h-[400px] pointer-events-none opacity-40">
        <Image
          src="/abroad/Global Lighthouse.svg"
          alt="Global Lighthouse"
          fill
          className="object-contain object-left-bottom"
        />
      </div>
      <div className="absolute right-[0%] bottom-[10%] z-0 w-40 md:w-72 h-40 md:h-72 pointer-events-none">
        <Image
          src="/abroad/Global Sunrise.png"
          alt="Global Sunrise"
          fill
          className="object-contain object-right-bottom"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center pt-8 md:pt-0">
        {/* Header */}
        <div className="relative mb-8 md:mb-14 text-center">
          <p className="text-white mb-1 section-subheading">
            Global Pathways
          </p>
          <h2 className="text-white tracking-tight section-heading">
            Three Models. Six Countries.
          </h2>

          {/* Arrow */}
          <div className="absolute top-[-80px] md:top-[-110px] right-[10%] md:right-[-180px] w-[140px] md:w-[280px] h-[140px] md:h-[280px] pointer-events-none hidden md:block z-20">
            <Image
              src="/abroad/Global Pathways Arrow.svg"
              alt="Global Pathways Arrow"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="w-full flex flex-col md:flex-row sm:gap-5 mb-12 gap-8 justify-center z-10">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col justify-between w-full md:w-1/3 shadow-lg min-h-[200px]">
            <div>
              <h3 className="text-4xl font-extrabold text-[#1f2022] leading-none mb-1">2+2</h3>
              <h4 className="text-2xl font-bold text-[#1f2022] mb-3">Bachelors</h4>
              <p className="text-gray-800 text-[15px] font-medium">2 yrs PU Goa · 2 yrs abroad</p>
            </div>

            <div className="mt-8">
              <div className="w-full flex h-2 rounded-full overflow-hidden mb-2">
                <div className="w-1/2 bg-gray-100"></div>
                <div className="w-1/2 bg-[#eb3b47]"></div>
              </div>
              <div className="flex justify-between items-center text-[15px] font-bold text-[#1f2022]">
                <span>PU Goa</span>
                <span>Abroad</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1f2022] rounded-2xl p-6 md:p-8 flex flex-col justify-between w-full md:w-1/3 shadow-lg min-h-[200px]">
            <div>
              <h3 className="text-4xl font-extrabold text-white leading-none mb-1">3+1+1</h3>
              <h4 className="text-2xl font-bold text-white mb-3">3 + 1 + 1 Combo</h4>
              <p className="text-gray-300 text-[15px] font-medium">UG + PG split across PU Goa & abroad</p>
            </div>

            <div className="mt-8">
              <div className="w-full flex h-2 rounded-full overflow-hidden mb-2">
                <div className="w-[60%] bg-white"></div>
                <div className="w-[40%] bg-[#0ca7dd]"></div>
              </div>
              <div className="flex justify-between items-center text-[15px] font-bold text-white">
                <span>PU Goa</span>
                <span>Abroad</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#fbdc2a] rounded-2xl p-6 md:p-8 flex flex-col justify-between w-full md:w-1/3 shadow-lg min-h-[200px]">
            <div>
              <h3 className="text-4xl font-extrabold text-[#1f2022] leading-none mb-1">1+1</h3>
              <h4 className="text-2xl font-bold text-[#1f2022] mb-3">Masters</h4>
              <p className="text-gray-800 text-[15px] font-medium">1 yr PU Goa · 1 yr abroad</p>
            </div>

            <div className="mt-8">
              <div className="w-full flex h-2 rounded-full overflow-hidden mb-2">
                <div className="w-1/2 bg-[#1f2022]"></div>
                <div className="w-1/2 bg-[#0ca7dd]"></div>
              </div>
              <div className="flex justify-between items-center text-[15px] font-bold text-[#1f2022]">
                <span>PU Goa</span>
                <span>Abroad</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 z-10 px-4 md:px-0">

          <div className="flex flex-col gap-3 flex-1 w-full">
            <h4 className="text-white text-xl font-semibold">Available in:</h4>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {['USA', 'NEW ZEALAND', 'AUSTRALIA', 'CANADA', 'FRANCE', 'UK', 'GERMANY'].map((country) => (
                <div key={country} className="bg-white px-4 py-2 rounded-full text-[#1f2022] text-[16px] font-bold shadow-sm">
                  {country}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
