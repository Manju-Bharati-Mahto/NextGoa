"use client";

import Image from "next/image";
import { useState } from "react";
import { Poppins } from "next/font/google";
import CountryCallbackModal from "./CountryCallbackModal";
import PartnerDetailsModal, { PartnerDetails } from "./PartnerDetailsModal";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function StudyAbroadPartners() {
  const [showAll, setShowAll] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<PartnerDetails | null>(null);

  const countriesData = [
    {
      country: "New Zealand",
      flagSrc: "/abroad/new-zealand-flag.png",
      partnersCount: "3",
      facultiesServed: "Design • Engineering • IT/CS • Management",
      partners: [
        { 
          name: "University of Waikato", src: "/abroad/partners/NEW ZELAND/WAIKATO.png", bg: "white",
          details: { faculties: ["Management", "Engineering"], pathways: ["Bachelor's (2+2)", "Master's (1+1)"], desc: "Known for its triple-crown accredited business school and strong engineering pathways." }
        },
        { 
          name: "Victoria University of Wellington", src: "/abroad/partners/NEW ZELAND/WELLINGTON.png", bg: "white",
          details: { faculties: ["IT/CS", "Design"], pathways: ["Progression (3+2)"], desc: "A leading university in New Zealand for digital arts and computer science." }
        },
        { 
          name: "Massey University", src: "/abroad/partners/NEW ZELAND/Massey.png", bg: "white",
          details: { faculties: ["Design", "Engineering"], pathways: ["Bachelor's Transfer (1+2)"], desc: "Offers practical, research-led pathways with excellent facilities." }
        }
      ]
    },
    {
      country: "France",
      flagSrc: "/abroad/france-flag.png",
      partnersCount: "1",
      facultiesServed: "Design • Engineering • Management",
      partners: [
        { 
          name: "Neoma Business School", src: "/abroad/partners/FRANCE/NEOMA.png", bg: "white",
          details: { faculties: ["Management", "Design", "Engineering"], pathways: ["Progression (3+1)", "Master's (1+1)"], desc: "One of the top business schools in France, offering extensive global management pathways." }
        }
      ]
    },
    {
      country: "Canada",
      flagSrc: "/abroad/canada-flag.png",
      partnersCount: "1",
      facultiesServed: "Management",
      partners: [
        { 
          name: "Humber Polytechnic", src: "/abroad/partners/CANADA/HUMBER.png", bg: "white",
          details: { faculties: ["Management"], pathways: ["Progression (3+1)"], desc: "A leader in polytechnic education providing hands-on management training." }
        }
      ]
    },
    {
      country: "USA",
      flagSrc: "/abroad/usa-flag.png",
      partnersCount: "4",
      facultiesServed: "Engineering • Management",
      partners: [
        { 
          name: "Rowan University", src: "/abroad/partners/AMERICA/ROWAN.png", bg: "white",
          details: { faculties: ["Engineering", "Management"], pathways: ["Bachelor's (2+2)", "Master's (1+1)"], desc: "A comprehensive public university offering strong research opportunities." }
        },
        { 
          name: "LSUS Shreveport", src: "/abroad/partners/AMERICA/LSUShreveport_logo.png", bg: "white",
          details: { faculties: ["Management"], pathways: ["Master's (1+1)"], desc: "Provides specialized management programs with high industry integration." }
        },
        { 
          name: "Marywood University", src: "/abroad/partners/AMERICA/MARYWOOD.png", bg: "white",
          details: { faculties: ["Engineering"], pathways: ["Bachelor's (2+2)"], desc: "Focuses on ethical leadership and strong foundational engineering." }
        },
        { 
          name: "Saint Peter's University", src: "/abroad/partners/AMERICA/Saint_Peters_University_Logo.png", bg: "white",
          details: { faculties: ["Engineering", "Management"], pathways: ["Progression (3+1)"], desc: "A Jesuit university known for personalized attention and rigorous academics." }
        }
      ]
    },
    {
      country: "UK",
      flagSrc: "/abroad/United Kingdom Flag.png",
      partnersCount: "4",
      facultiesServed: "Design • Media & VFX Animation • Architecture • Engineering • IT/CS • Management • Liberal Arts",
      partners: [
        { 
          name: "Nottingham Trent University", src: "/abroad/partners/UK/notti1.png", bg: "white", scale: "scale-[1.15]",
          details: { faculties: ["Design", "Liberal Arts", "Architecture"], pathways: ["Bachelor's Transfer (1+2)", "Progression (3+1)"], desc: "Award-winning university heavily focused on employability and practical design skills." }
        },
        { 
          name: "University of Bradford", src: "/abroad/partners/UK/BRADFORD.png", bg: "white", scale: "scale-100",
          details: { faculties: ["Engineering", "IT/CS"], pathways: ["Progression (3+1)", "Master's (1+1)"], desc: "Pioneering technology university with outstanding engineering facilities." }
        },
        { 
          name: "University of Surrey", src: "/abroad/partners/UK/SURREY.png", bg: "white", scale: "scale-100",
          details: { faculties: ["Architecture", "Engineering"], pathways: ["Progression (3+2)"], desc: "Renowned for its research and excellent professional training placements." }
        },
        { 
          name: "Birmingham City University", src: "/abroad/partners/UK/bcu_logo.png", bg: "white", scale: "scale-[1.15]",
          details: { faculties: ["Media & VFX Animation", "IT/CS", "Management"], pathways: ["Progression (3+1)"], desc: "A vibrant creative and technical hub in the heart of Birmingham." }
        }
      ]
    },
    {
      country: "Australia",
      flagSrc: "/abroad/australia-flag.png",
      partnersCount: "2",
      facultiesServed: "Agriculture • Engineering • IT/CS",
      partners: [
        { 
          name: "Charles Sturt University", src: "/abroad/partners/AUSTRALIA/CHARLES STRUT.webp", bg: "white",
          details: { faculties: ["Agriculture", "IT/CS"], pathways: ["Bachelor's (2+2)", "Master's (1+1)"], desc: "Leading regional university with a strong focus on agricultural tech and IT." }
        },
        { 
          name: "Western Sydney University", src: "/abroad/partners/AUSTRALIA/WESTERN SYDNEY.png", bg: "white",
          details: { faculties: ["Engineering", "IT/CS"], pathways: ["Progression (3+1)"], desc: "World-class university located in Australia's fastest-growing economic region." }
        }
      ]
    }
  ];

  const displayedCountries = showAll ? countriesData : countriesData.slice(0, 2);

  return (
    <section className={`bg-[#f9f9f9] sm:py-25 pt-15 pb-0 px-4 md:px-8 ${poppins.className}`}>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <h3 className="text-gray-900 mb-2 text-center section-subheading">
          Partner Universities
        </h3>
        <h2 className="text-[#f0424e] mb-4 text-center section-heading">
          A global degree, one connected path.
        </h2>           
        <p className="text-gray-800 text-center mb-20 max-w-2xl section-body">
          Browse partner universities, faculties served, and the pathways available
          in each country
        </p>



        {/* Cards */}
        <div className="flex flex-col gap-8 w-full max-w-4xl">
          {displayedCountries.map((data, index) => (
            <CountryCard
              key={index}
              country={data.country}
              flagSrc={data.flagSrc}
              partnersCount={data.partnersCount}
              facultiesServed={data.facultiesServed}
              partners={data.partners as PartnerDetails[]}
              onPartnerClick={setSelectedPartner}
            />
          ))}
        </div>

        {/* View All */}
        <div className="mt-12">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="bg-[#f0424e] hover:bg-[#d63a44] text-white font-medium rounded-full py-2.5 px-8 flex items-center justify-center transition-colors shadow-md"
          >
            {showAll ? "View less" : "View all"}
            <svg
              className={`h-4 w-4 ml-2 transition-transform ${showAll ? 'rotate-180' : ''}`}
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

      <PartnerDetailsModal
        isOpen={!!selectedPartner}
        onClose={() => setSelectedPartner(null)}
        partner={selectedPartner}
      />
    </section>
  );
}

function CountryCard({
  country,
  flagSrc,
  partnersCount,
  facultiesServed,
  partners,
  onPartnerClick,
}: {
  country: string;
  flagSrc: string;
  partnersCount: string;
  facultiesServed: string;
  partners: PartnerDetails[];
  onPartnerClick: (partner: PartnerDetails) => void;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            {facultiesServed}
          </p>
        </div>

        <div>
          <button 
            onClick={() => setIsModalOpen(true)}
            data-track
            data-track-event="popup_form_click"
            data-track-text="Enquire Now"
            data-track-header={country}
            className="bg-[#f0424e] hover:bg-[#d63a44] text-white font-bold rounded-full py-2.5 px-6 transition-colors text-sm shadow-sm"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* Right Grid Column */}
      <div className="md:w-[55%] flex flex-wrap content-stretch items-stretch">
        {partners.map((partner, index) => {
          const isLastAndOdd = partners.length % 2 !== 0 && index === partners.length - 1 && partners.length > 1;
          const wClass = partners.length === 1 ? "w-full" : (isLastAndOdd ? "w-full" : "w-1/2");
          return (
            <PartnerLogoCard 
              key={index} 
              partner={partner} 
              className={wClass}
              onClick={() => onPartnerClick(partner)}
            />
          );
        })}
      </div>

      <CountryCallbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        country={country}
      />
    </div>
  );
}

function PartnerLogoCard({ partner, className = "", onClick }: { partner: PartnerDetails, className?: string, onClick: () => void }) {
  const [imgError, setImgError] = useState(false);

  return (
    <button
      onClick={onClick}
      className={`group flex items-center justify-center p-4 sm:p-5 border-r border-b min-h-[140px] md:min-h-0 relative cursor-pointer outline-none focus:ring-2 focus:ring-inset focus:ring-[#f0424e] ${className}`}
      style={{ backgroundColor: partner.bg, borderColor: partner.bg === "white" ? "#e5e7eb" : partner.bg }}
    >
      {!imgError ? (
        <div className="relative flex-1 w-full min-h-[80px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
          <Image
            src={partner.src}
            alt={partner.name}
            fill
            className={`object-contain ${partner.scale || 'scale-100'}`}
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div 
          className="w-full flex items-center justify-center text-center font-bold text-sm leading-snug px-2 transition-transform duration-300 group-hover:scale-105"
          style={{ color: partner.bg === "white" || partner.bg === "#white" ? "#333" : "white" }}
        >
          {partner.name}
        </div>
      )}
      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </button>
  );
}
