"use client";

import { useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

type TabData = {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  tableData: { label: string; value: string }[];
  images: { top: string; bottomLeft: string; bottomRight: string };
};

const pathwaysData: TabData[] = [
  {
    id: "Bachelors",
    tabLabel: "Bachelors",
    title: "Bachelor's",
    subtitle: "Bachelors",
    tableData: [
      { label: "Total Years", value: "4" },
      { label: "At PU Goa", value: "2 yrs" },
      { label: "Abroad", value: "2 yrs" },
      { label: "Final degree from", value: "Partner" },
      { label: "Faculties", value: "Engineering, Mgmt" },
      { label: "Indicative cost", value: "On request" },
      { label: "Available in", value: "All 7" },
    ],
    images: {
      top: "/international/bachelors/img_7026.jpg",
      bottomLeft: "/international/bachelors/7ab9736f-ab10-4f81-bc92-99baf6fa100a.jpeg",
      bottomRight: "/international/bachelors/img_2397.jpg",
    },
  },
  {
    id: "Progression",
    tabLabel: "Progression",
    title: "Progression",
    subtitle: "Progression",
    tableData: [
      { label: "Total Years", value: "4-5" },
      { label: "At PU Goa", value: "3 yrs" },
      { label: "Abroad", value: "1-2 yrs" },
      { label: "Final degree from", value: "Partner" },
      { label: "Faculties", value: "Engineering, Mgmt, Arts" },
      { label: "Indicative cost", value: "On request" },
      { label: "Available in", value: "UK, USA, Canada" },
    ],
    images: {
      top: "/international/progression/20240830_100201.jpg",
      bottomLeft: "/international/progression/20240902_084207.jpg",
      bottomRight: "/international/progression/20240827_135708.jpg",
    },
  },
  {
    id: "Masters",
    tabLabel: "Masters",
    title: "Master's",
    subtitle: "Masters",
    tableData: [
      { label: "Total Years", value: "2" },
      { label: "At PU Goa", value: "1 yr" },
      { label: "Abroad", value: "1 yr" },
      { label: "Final degree from", value: "Partner" },
      { label: "Faculties", value: "Management, IT" },
      { label: "Indicative cost", value: "On request" },
      { label: "Available in", value: "UK, USA, Australia" },
    ],
    images: {
      top: "/international/masters/20240902_090304.jpg",
      bottomLeft: "/international/masters/dsc01274.jpg",
      bottomRight: "/international/masters/20240903_111812.jpg",
    },
  },
  {
    id: "Bachelors_2",
    tabLabel: "Bachelors",
    title: "Bachelor's (Transfer)",
    subtitle: "Bachelors",
    tableData: [
      { label: "Total Years", value: "3" },
      { label: "At PU Goa", value: "1 yr" },
      { label: "Abroad", value: "2 yrs" },
      { label: "Final degree from", value: "Partner" },
      { label: "Faculties", value: "Arts, Design" },
      { label: "Indicative cost", value: "On request" },
      { label: "Available in", value: "UK, Europe" },
    ],
    images: {
      top: "/international/bachelors-transfer/d0bdcca4-a4a9-4eb0-b0d1-e1bc4cbf0dc94.jpg",
      bottomLeft: "/international/bachelors-transfer/img_13883.jpg",
      bottomRight: "/international/bachelors-transfer/classroom.heic3.jpg",
    },
  },
];

export default function StudyAbroadPathways() {
  const [activeTabId, setActiveTabId] = useState<string>("Bachelors");

  const activeData =
    pathwaysData.find((tab) => tab.id === activeTabId) || pathwaysData[0];

  return (
    <section className={`bg-[#f8f8f8] py-20 px-4 md:px-8 ${poppins.className}`}>
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Header */}
        <h3 className="text-gray-900 mb-2 text-center section-subheading">
          Compare Pathways
        </h3>
        <h2 className="text-[#f0424e] mb-4 text-center section-heading">
          From Goa To Global Degree,<br className="hidden md:block" />
          Study Via One Connected Path!
        </h2>
        <p className="text-gray-800 text-center mb-12 section-body">
          A quick reference for you & your family.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {pathwaysData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={
                activeTabId === tab.id
                  ? "bg-[#12a6e6] text-white w-[150px] sm:w-[170px] md:w-auto px-2 sm:px-8 py-3 rounded-full font-bold shadow-sm transition-transform hover:scale-105"
                  : "bg-white border border-gray-300 text-gray-900 w-[150px] sm:w-[170px] md:w-auto px-2 sm:px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              }
            >
              {tab.tabLabel}
            </button>
          ))}
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* Left Info Card */}
          <div className="bg-[#222222] text-white rounded-[2rem] p-8 md:p-10 lg:w-[40%] shadow-lg flex flex-col transition-all duration-300">
            <div className="mb-8">
              <span className="text-[#f0424e] text-sm font-medium tracking-wide">
                {activeData.subtitle}
              </span>
              <h4 className="text-4xl font-semibold mt-2">{activeData.title}</h4>
            </div>

            <div className="flex flex-col flex-1 relative mt-4">
              {/* Vertical line */}
              <div className="absolute left-[42%] top-0 bottom-0 w-[1px] bg-white/30"></div>

              {activeData.tableData.map((item, index) => (
                <div key={index} className="flex relative">
                  <div className="w-[42%] py-4 text-[#eab308] text-[16px] sm:text-[17px] font-medium pr-6 relative">
                    {item.label}
                    {/* Solid horizontal line (left side) - using absolute div for identical thickness */}
                    {index !== activeData.tableData.length - 1 && (
                      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/30"></div>
                    )}
                  </div>
                  <div className="w-[58%] py-4 text-gray-200 text-[16px] sm:text-[17px] pl-6 relative">
                    {item.value}
                    {/* Fading horizontal line (right side) */}
                    {index !== activeData.tableData.length - 1 && (
                      <div className="absolute bottom-0 left-0 w-[80%] h-[1px] bg-gradient-to-r from-white/30 to-transparent"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images Grid */}
          <div className="lg:w-[60%] flex flex-col gap-4">
            {/* Top Image */}
            <div className="relative w-full h-64 md:h-80 rounded-[2rem] overflow-hidden shadow-sm border border-gray-800 border-2">
              <Image
                src={activeData.images.top}
                alt="Pathway Top Image"
                fill
                className="object-cover transition-all duration-500"
              />
            </div>

            {/* Bottom Images Row */}
            <div className="flex flex-col sm:flex-row gap-4 h-[300px] md:h-72">
              <div className="relative flex-1 rounded-[2rem] overflow-hidden shadow-sm border border-gray-800 border-2">
                <Image
                  src={activeData.images.bottomLeft}
                  alt="Pathway Bottom Left"
                  fill
                  className="object-cover transition-all duration-500"
                />
              </div>
              <div className="relative flex-1 rounded-[2rem] overflow-hidden shadow-sm border border-gray-800 border-2">
                <Image
                  src={activeData.images.bottomRight}
                  alt="Pathway Bottom Right"
                  fill
                  className="object-cover transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
