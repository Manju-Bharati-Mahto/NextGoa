"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const companies = [
  "Frame 174.png",
  "Frame 175.png",
  "Frame 176.png",
  "Frame 177-1.png",
  "Frame 177.png",
  "Frame 178.png",
  "Frame 179.png",
  "Frame 180.png",
  "Frame 181-1.png",
  "Frame 181.png",
  "Frame 182.png",
  "Frame 183.png",
  "Frame 184.png",
  "Frame 185.png",
  "Frame 186.png",
  "Frame 187.png",
  "Frame 188.png",
  "Frame 189.png",
  "Frame 190.png",
  "oberoi.png",
];

const destinations = [
  { name: "USA", icon: "flag:us-4x3" },
  { name: "UK", icon: "flag:gb-4x3" },
  { name: "Germany", icon: "flag:de-4x3" },
  { name: "Australia", icon: "flag:au-4x3" },
  { name: "New Zealand", icon: "flag:nz-4x3" },
  { name: "France", icon: "flag:fr-4x3" },
];

export default function RecruitersAndDestinations({ slug }: { slug?: string }) {
  const managementCompanies = [
    "Alembic Pharmaceutical.png", "Apidel Technologies.png", "Bajaj Finance Limited.png",
    "Banco.png", "Bank of Baroda.png", "Berger.jpg", "Blinkit.png", "DBS Bank India Ltd.png",
    "DCB Bank.png", "DMart.png", "DTDC Express Ltd.jpg", "Dbcorp_logo.png",
    "Dicabs logo.png", "GODREJ.png", "HDFC_Life_Logo.svg.png", "Haldiram_s_2024_Logo.svg.png",
    "IndusInd_Bank_SVG_Logo.svg.png", "Joyalukkas.jpg", "Kiosist.png", "LOGO-TORRECID-2021.jpg",
    "McKinley Rice, Inc..jpg", "Muthoot.png", "NUMERATOR.jpg", "NielsenIQ.png",
    "OM LOGISTIC.jpg", "Odoo-Logo.wine.png", "PANTALOONS.png", "RGB-Withum-Digital.png",
    "SEW_LOGO.svg.png", "SWIGGY.png", "Shadowfax.png", "ZOMATO.png", "ZYDUS H.png",
    "bosch logo.png", "mirae-asset-sharekhan-logo.jpg", "suzlon_logo.jpg"
  ];
  const pharmacyCompanies = [
    "Alembic Pharmaceutical.png", "GSK.png", "Intas Pharma.jfif",
    "Piramal Pharma Ltd.png", "Sun Pharma.png", "Zydus_Lifesciences.svg.png",
    "cadila-pharmaceuticals6224.jpg"
  ];
  const alliedHealthCompanies = [
    "image 248.png", "image 249.png", "image 250.png", "image 251.png", "image 252.png"
  ];
  const nursingCompanies = [
    "image 241.png", "image 242.png", "image 243.png", 
    "image 244.png", "image 245.png", "image 246.png", "image 247.png"
  ];
  const hotelManagementCompanies = [
    "Crone Plaza.jpg", "Hyatt-Place-Logo.png", "JW Marriott.png", 
    "Radisson Blue Fujairah.png", "Taj Hotel.png", "Westin_Hotels_&_Resorts_logo.svg.png", 
    "the_zuri_hotels__resorts_logo.jpg"
  ];
  const engineeringCompanies = [
    "Accenture.png", "Automation Anywhere logo.png", "Capgemini.png", "Cognizant.png", "Commvault.png",
    "DELOITTE.png", "Deltax.jpg", "Einfochip.png", "HCL Tech.png", "HashedIn Technologies.png",
    "IBM.png", "Informatica_Logo.png", "Juspay.jpg", "LG Soft India Pvt. Ltd.png", "LTM-Logo.svg",
    "MRI.png", "Mastek.png", "Microsoft_logo_(2012).svg.png", "Motadata.png", "One Compiler.png",
    "PWC.png", "Prograd.png", "Servicenow.png", "Simform.png", "Sophos.png",
    "Synchrony_Financial_logo.svg.png", "TCS_Logo_(cropped).jpg", "Techmahindra.png", "WIPRO.png", "WSP.png",
    "Zeta.png", "addverb-logo-1 (1).png", "drawinbox.png", "soprasteria_logo.jpg", "synoptek-logo-200x200-1 (1).png"
  ];

  const activeCompanies = slug === "management" 
    ? managementCompanies 
    : slug === "pharmacy" 
      ? pharmacyCompanies 
      : (slug === "allied-and-healthcare-science" || slug === "applied-sciences")
        ? alliedHealthCompanies
        : (slug === "nursing" || slug === "physiotherapy")
          ? nursingCompanies
          : (slug === "engineering" || slug === "it-cs")
            ? engineeringCompanies
            : slug === "hotel-management"
              ? hotelManagementCompanies
              : companies;
  const getSrc = (fileName: string) => {
    if (slug === "management") return `/recruiters/management/${fileName}`;
    if (slug === "pharmacy") return `/recruiters/pharmacy/${fileName}`;
    if (slug === "allied-and-healthcare-science" || slug === "applied-sciences") return `/recruiters/allied-and-healthcare-science/${fileName}`;
    if (slug === "nursing" || slug === "physiotherapy") return `/recruiters/nursing/${fileName}`;
    if (slug === "engineering" || slug === "it-cs") return `/recruiters/engineering/${fileName}`;
    if (slug === "hotel-management") return `/recruiters/hotel-management/${fileName}`;
    return `/companies/${fileName}`;
  };

  // Ensure we have enough items so that 50% of the total width is wider than any screen
  const minItemsForScreen = 15; // roughly 3000px
  const multiplier = Math.ceil(minItemsForScreen / activeCompanies.length);
  const repeatedHalf = Array(multiplier).fill(activeCompanies).flat();
  // Duration is 2 seconds per item to maintain consistent speed
  const animationDuration = repeatedHalf.length * 2;

  return (
    <section className="w-full bg-[#FAFAFA] overflow-hidden border-t border-gray-100 py-16 sm:pt-15 sm:pb-15">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee ${animationDuration}s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-10">
        {slug === "allied-and-healthcare-science" || slug === "applied-sciences" ? (
          <>
            <h3 className="text-ink font-bold text-xl sm:text-2xl mb-2">
              Hospital & Industry Network
            </h3>
            <h2 className="text-[#E73649] mb-3 section-heading">
              Where you'll train and serve.
            </h2>
            <p className="text-ink/80 section-body">
              Indicative network from the wider Parul University clinical and industry partnerships.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-[#E73649] mb-3 section-heading">
              Top recruiter network
            </h2>
            <p className="text-ink/80 section-body">
              Indicative recruiters from the wider Parul University network.
            </p>
          </>
        )}
      </div>

      {/* Marquee Section */}
      <div className="w-full bg-transparent py-8 mb-20 overflow-hidden relative">
        {/* Faded Top Border */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[linear-gradient(to_right,transparent,#D1D5DB_10%,#D1D5DB_90%,transparent)]"></div>
        
        <div className="animate-marquee items-center gap-12 sm:gap-20 px-6">
          {/* Duplicate the array twice to ensure seamless infinite scrolling */}
          {[...repeatedHalf, ...repeatedHalf].map((fileName, idx) => (
            <div key={idx} className={`relative w-28 h-12 shrink-0 mix-blend-multiply ${fileName.includes('oberoi') ? 'scale-[1.3]' : ''}`}>
              <Image
                src={getSrc(fileName)}
                alt={`Recruiter ${idx}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Faded Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[linear-gradient(to_right,transparent,#D1D5DB_10%,#D1D5DB_90%,transparent)]"></div>
      </div>

      {/* Destinations Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[24px] sm:rounded-[32px] p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col gap-10">
          
          {/* Top Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-[32px] sm:text-[40px] font-bold text-ink leading-tight text-center md:text-left">
              Higher Studies Destinations
            </h3>
            <Link 
              href="/international/study-abroad"
              className="bg-[#E73649] text-white font-bold text-[16px] px-8 py-4 rounded-full hover:bg-[#D62B3D] transition-colors whitespace-nowrap shadow-sm hover:shadow-md"
            >
              Explore Study Abroad &rarr;
            </Link>
          </div>

          {/* Bottom Row - Flags */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-start gap-3 sm:gap-6 w-full pt-4 border-t border-gray-50">
            {destinations.map((dest, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-center sm:justify-start gap-2 sm:gap-2.5 bg-[#FAFAFA] border border-gray-200 rounded-full px-2 sm:px-6 py-2.5 sm:py-3 shadow-sm hover:border-gray-300 transition-colors"
              >
                <Icon icon={dest.icon} className="text-xl sm:text-2xl rounded-sm overflow-hidden shrink-0" />
                <span className="font-bold text-ink text-[13px] sm:text-base whitespace-nowrap">
                  {dest.name}
                </span>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
