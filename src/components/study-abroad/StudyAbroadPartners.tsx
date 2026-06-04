import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function StudyAbroadPartners() {
  return (
    <section className={`bg-[#f9f9f9] py-25 px-4 md:px-8 ${poppins.className}`}>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <h3 className="text-gray-900 mb-2 text-center section-subheading">
          Partner universities
        </h3>
        <h2 className="text-[#f0424e] mb-4 text-center section-heading">
          A global degree, one connected path.
        </h2>
        <p className="text-gray-800 text-center mb-20 max-w-2xl section-body">
          Browse partner universities, faculties served, and the pathways available
          in each country
        </p>

        {/* Filter Bar */}
        <div className="bg-[#fdfdfd] border border-gray-200 rounded-2xl p-4 w-full max-w-4xl flex flex-col md:flex-row items-end gap-4 shadow-sm mb-12">
          <div className="flex-1 w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              I&apos;m studying / want to study
            </label>
            <div className="relative">
              <select className="w-full appearance-none border border-gray-300 rounded-lg py-2.5 px-4 text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#f0424e] bg-white">
                <option>Any faculty</option>
                <option>Engineering</option>
                <option>IT/CS</option>
                <option>Management</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Any faculty I&apos;d like to go to
            </label>
            <div className="relative">
              <select className="w-full appearance-none border border-gray-300 rounded-lg py-2.5 px-4 text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#f0424e] bg-white">
                <option>Any faculty</option>
                <option>Engineering</option>
                <option>IT/CS</option>
                <option>Management</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto mt-4 md:mt-0">
            <button className="w-full md:w-auto bg-[#f0424e] hover:bg-[#d63a44] text-white font-medium rounded-lg py-2.5 px-6 flex items-center justify-center transition-colors">
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Find Pathways
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-8 w-full max-w-4xl">
          <CountryCard
            country="USA"
            flagSrc="/abroad/United States Flag.png"
            partnersCount="4"
          />
          <CountryCard
            country="UK"
            flagSrc="/abroad/United Kingdom Flag.png"
            partnersCount="4"
          />
        </div>

        {/* View All */}
        <div className="mt-12">
          <button className="bg-[#f0424e] hover:bg-[#d63a44] text-white font-medium rounded-full py-2.5 px-8 flex items-center justify-center transition-colors shadow-md">
            View all
            <svg
              className="h-4 w-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function CountryCard({
  country,
  flagSrc,
  partnersCount,
}: {
  country: string;
  flagSrc: string;
  partnersCount: string;
}) {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
      {/* Left Info Column */}
      <div className="p-8 md:w-[45%] flex flex-col justify-between relative border-r border-gray-100">
        <div className="absolute top-8 right-8">
          <Image
            src={flagSrc}
            alt={`${country} flag`}
            width={52}
            height={36}
            className="object-contain border border-gray-100"
          />
        </div>

        <div className="mt-2">
          <p className="text-[#2eb8e6] font-semibold text-sm tracking-wide mb-1">
            {partnersCount} Partners
          </p>
          <h4 className="text-4xl font-extrabold text-gray-900 mb-8">{country}</h4>

          <p className="text-sm font-bold text-gray-900 mb-2 tracking-wide">
            FACULTIES SERVED
          </p>
          <p className="text-gray-800 text-[15px] mb-8 font-medium">
            Engineering • IT/CS • Management
          </p>
        </div>

        <div>
          <button className="bg-[#f0424e] hover:bg-[#d63a44] text-white font-bold rounded-full py-2.5 px-6 transition-colors text-sm shadow-sm">
            Explore More
          </button>
        </div>
      </div>

      {/* Right Grid Column */}
      <div className="md:w-[55%] grid grid-cols-2">
        <div className="bg-[#3e1610] h-40 md:h-auto flex items-center justify-center p-6 border-r border-b border-[#3e1610]">
          <Image
            src="/abroad/Rowan University.png"
            alt="Rowan University"
            width={160}
            height={100}
            className="object-contain"
          />
        </div>
        <div className="bg-[#3b1d7d] h-40 md:h-auto flex items-center justify-center p-6 border-b border-[#3b1d7d]">
          <Image
            src="/abroad/LSUS Shreveport.png"
            alt="LSUS Shreveport"
            width={160}
            height={100}
            className="object-contain"
          />
        </div>
        <div className="bg-[#1f5938] h-40 md:h-auto flex items-center justify-center p-6 border-r border-[#1f5938]">
          <Image
            src="/abroad/Marywood University.png"
            alt="Marywood University"
            width={160}
            height={100}
            className="object-contain"
          />
        </div>
        <div className="bg-white h-40 md:h-auto flex items-center justify-center p-6">
          <Image
            src="/abroad/Saint Peter's University.png"
            alt="Saint Peter&apos;s University"
            width={160}
            height={100}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
