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
    "Alembic Pharmaceutical.png", "Asian Paints.png", "Piramal Pharma Ltd.png",
    "Reliance Industries.png", "Sun Pharma.png", "The_Lupin_Logo.svg.png",
    "ZYDUS H.png"
  ];
  const activeCompanies = slug === "management-studies" 
    ? managementCompanies 
    : slug === "pharmacy" 
      ? pharmacyCompanies 
      : slug === "allied-health"
        ? alliedHealthCompanies
        : companies;
  const getSrc = (fileName: string) => {
    if (slug === "management-studies") return `/recruiters/management/${fileName}`;
    if (slug === "pharmacy") return `/recruiters/pharmacy/${fileName}`;
    if (slug === "allied-health") return `/recruiters/allied-health/${fileName}`;
    return `/companies/${fileName}`;
  };

  return (
    <section className="w-full bg-[#FAFAFA] py-20 overflow-hidden border-t border-gray-100">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee ${slug === "pharmacy" ? "15s" : "40s"} linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h2 className="text-[#E73649] mb-3 section-heading">
          Top recruiter network
        </h2>
        <p className="text-ink/80 section-body">
          Indicative recruiters from the wider Parul University network.
        </p>
      </div>

      {/* Marquee Section */}
      <div className="w-full bg-transparent py-8 mb-20 overflow-hidden relative">
        {/* Faded Top Border */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[linear-gradient(to_right,transparent,#D1D5DB_10%,#D1D5DB_90%,transparent)]"></div>
        
        <div className="animate-marquee items-center gap-12 sm:gap-20 px-6">
          {/* Duplicate the array twice to ensure seamless infinite scrolling */}
          {[...activeCompanies, ...activeCompanies].map((fileName, idx) => (
            <div key={idx} className="relative w-36 h-16 shrink-0 mix-blend-multiply">
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
            <h3 className="text-[32px] sm:text-[40px] font-bold text-ink leading-tight text-center md:text-left max-w-[400px]">
              Higher Studies Destinations
            </h3>
            <Link 
              href="/study-abroad"
              className="bg-[#E73649] text-white font-bold text-[16px] px-8 py-4 rounded-full hover:bg-[#D62B3D] transition-colors whitespace-nowrap shadow-sm hover:shadow-md"
            >
              Explore Study Abroad &rarr;
            </Link>
          </div>

          {/* Bottom Row - Flags */}
          <div className="flex flex-wrap justify-start gap-4 sm:gap-6 w-full pt-4 border-t border-gray-50">
            {destinations.map((dest, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2.5 bg-[#FAFAFA] border border-gray-200 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 shadow-sm hover:border-gray-300 transition-colors"
              >
                <Icon icon={dest.icon} className="text-xl sm:text-2xl rounded-sm overflow-hidden" />
                <span className="font-bold text-ink text-sm sm:text-base whitespace-nowrap">
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
