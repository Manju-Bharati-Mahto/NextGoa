import React from "react";
import Image from "next/image";

export default function AlliedHealthLabs() {
  const labs = [
    { name: "Microbiology and Clinical\nPathology Laboratory", color: "red", image: "/applied-science/DSC03110.jpg" },
    { name: "Chemistry Laboratory", color: "yellow", image: "/applied-science/DSC03121.jpg" },
    { name: "Central Instrumentation\nLaboratory", color: "red", image: "/applied-science/DSC03125.jpg" },
    { name: "MCH Laboratory", color: "yellow", image: "/applied-science/DSC03130.jpg" },
    { name: "Foundation and Skill\nLaboratory", color: "yellow", image: "/applied-science/DSC03132.jpg" },
    { name: "Community and\nNutrition Laboratory", color: "red", image: "/applied-science/DSC03135.jpg" },
    { name: "Advanced Allied and\nHealthcare Sciences\nLaboratories", color: "yellow", image: "/applied-science/DSC03138.jpg" },
    { name: "Preclinical Sciences\nLaboratory", color: "red", image: "/applied-science/DSC03142.jpg" }
  ];

  return (
    <section className="relative overflow-hidden z-10 w-full bg-[#FAFAFA]">
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-ink mb-2 section-subheading">
            Labs & Hands-on Learning
          </p>
          <h2 className="text-[#E73649] section-heading">
            Where you'll actually practice.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {labs.map((lab, idx) => (
            <div key={idx} className="flex flex-col rounded-[16px] overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow h-full">
              {/* Image Area */}
              <div className="w-full h-48 sm:h-56 relative">
                <img 
                  src={lab.image} 
                  alt={lab.name.replace('\n', ' ')} 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              {/* Bottom Text Box */}
              <div className="bg-white p-6 flex-grow flex items-center">
                <h4 className="font-bold text-[14px] sm:text-[15px] text-ink whitespace-pre-line leading-tight">
                  {lab.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
