"use client";

import { useState } from "react";
import { contactsData, southZoneHeads } from "./contactsData";

export default function ContactOffices() {
  const zones = Object.keys(contactsData);
  const [activeZone, setActiveZone] = useState<string>(zones[0] || "");

  const currentZoneData = activeZone ? contactsData[activeZone] : {};
  const states = Object.keys(currentZoneData);
  const [activeState, setActiveState] = useState<string>(states[0] || "");

  // When zone changes, reset the active state to the first state of the new zone
  const handleZoneChange = (zone: string) => {
    setActiveZone(zone);
    const newStates = Object.keys(contactsData[zone] || {});
    setActiveState(newStates[0] || "");
  };

  const currentContacts = (currentZoneData[activeState] || []);

  return (
    <>
      {/* The Yellow Section */}
      <div className="relative w-full bg-[#FEDB2F] -mt-[1px] z-20">
        {/* Tabs */}
        <div className="relative z-20 flex justify-center pb-8 pt-6 lg:pt-10">
          <div className="flex flex-wrap gap-4 sm:gap-10 justify-center font-poppins font-bold text-[#111111] text-[16px] sm:text-[18px] lg:text-[20px] px-4">
            {zones.map((zone) => (
              <button
                key={zone}
                onClick={() => handleZoneChange(zone)}
                className={`uppercase tracking-wider hover:text-[#E74C5E] transition-colors pb-2 ${
                  activeZone === zone ? "text-[#E74C5E] border-b-[3px] border-[#E74C5E] relative" : ""
                }`}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Yellow Waves from contact3.svg */}
      <div className="w-full relative z-10" style={{ aspectRatio: "1440/45" }}>
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: "url('/contact/contact3.svg')",
            backgroundSize: "100% auto",
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat"
          }}
        />
      </div>

      {/* State Contacts Table Section */}
      <section className="relative w-full bg-[#FDFCF8] py-16 lg:py-24">
        <div className="w-full max-w-6xl mx-auto px-6 font-poppins">
          {/* South Zone Heads Grid */}
          {activeZone === "South Zone" && southZoneHeads.length > 0 && (
            <div className="mb-12 bg-[#FAFCFF] border border-[#E0E7FF] rounded-[20px] p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
                {southZoneHeads.map((head, index) => (
                  <div key={index} className="flex flex-col">
                    <h5 className="font-bold text-[#111111] text-[18px] mb-2">{head.name}</h5>
                    <p className="text-[#555555] text-[14px] leading-relaxed mb-3 pr-4">{head.title}</p>
                    <a href={`tel:${head.phone.replace(/ /g, '')}`} className="text-[#0CAADD] text-[14px] font-semibold hover:underline mt-auto">
                      {head.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* State Tags */}
          {states.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {states.map((state) => (
                <button
                  key={state}
                  onClick={() => setActiveState(state)}
                  className={`px-8 py-2 rounded-full font-bold transition-colors ${
                    activeState === state
                      ? "bg-[#E74C5E] text-white"
                      : "bg-white text-[#E74C5E] border border-[#E74C5E] hover:bg-[#fff0f2]"
                  }`}
                >
                  {state}
                </button>
              ))}
            </div>
          )}

          {/* Table */}
          <div className="w-full overflow-x-auto rounded-[20px] shadow-sm">
            <table className="w-full min-w-[900px] text-left border-collapse">
              <thead>
                <tr className="bg-[#0CAADD] text-white text-[14px] uppercase tracking-wider font-bold">
                  <th className="py-5 px-6 font-bold w-[15%]">CITY</th>
                  <th className="py-5 px-6 font-bold w-[15%]">CONTACT PERSON</th>
                  <th className="py-5 px-6 font-bold w-[40%]">ADDRESS</th>
                  <th className="py-5 px-6 font-bold w-[15%]">NUMBER</th>
                  <th className="py-5 px-6 font-bold w-[15%]">EMAIL</th>
                </tr>
              </thead>
              <tbody className="text-[#333333] text-[14px]">
                {currentContacts.length > 0 ? (
                  currentContacts.map((contact, index) => (
                    <tr 
                      key={index} 
                      className={index % 2 === 0 ? "bg-white" : "bg-[#F9F9F9]"}
                    >
                      <td className="py-6 px-6 align-top">{contact.city}</td>
                      <td className="py-6 px-6 align-top">{contact.contactPerson}</td>
                      <td className="py-6 px-6 align-top leading-relaxed pr-10">{contact.address}</td>
                      <td className="py-6 px-6 align-top whitespace-nowrap">
                        {contact.number ? (
                          <a href={`tel:${contact.number.replace(/[\s-]/g, '')}`} className="hover:text-[#0CAADD] hover:underline transition-colors">{contact.number}</a>
                        ) : null}
                      </td>
                      <td className="py-6 px-6 align-top whitespace-nowrap">
                        {contact.email ? (
                          <a href={`mailto:${contact.email.trim()}`} className="hover:text-[#0CAADD] hover:underline transition-colors">{contact.email}</a>
                        ) : null}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-gray-500 bg-white">
                      No contacts available for this state.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
