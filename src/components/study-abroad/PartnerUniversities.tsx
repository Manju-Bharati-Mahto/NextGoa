import React from "react";

const partners = [
  { name: "University of Europe", country: "Germany" },
  { name: "Global Tech Institute", country: "USA" },
  { name: "Kings College", country: "UK" },
  { name: "Sydney Business School", country: "Australia" },
  { name: "Tokyo Institute of Tech", country: "Japan" },
  { name: "Paris School of Arts", country: "France" },
  { name: "Toronto Medical Academy", country: "Canada" },
  { name: "National University", country: "Singapore" },
];

export default function PartnerUniversities() {
  return (
    <section className="bg-white py-24 font-[family-name:var(--font-poppins)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink mb-4 font-poppins">
          Our Global Partners
        </h2>
        <p className="mx-auto max-w-2xl text-[16px] text-ink/70">
          We have established partnerships with over 50+ leading universities across the globe to ensure you get the best international exposure.
        </p>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="bg-[#F9F9F9] rounded-2xl p-6 flex flex-col items-center justify-center text-center h-32 border border-zinc-100 hover:border-brand/30 hover:shadow-md transition-all cursor-pointer">
              <h4 className="font-semibold text-ink mb-1 font-poppins">{partner.name}</h4>
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">{partner.country}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
