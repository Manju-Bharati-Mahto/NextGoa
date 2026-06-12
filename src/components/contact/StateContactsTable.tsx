"use client";

import { useState } from "react";

type Contact = {
  city: string;
  contactPerson: string;
  address: string;
  number: string;
  email: string;
};

const stateData: Record<string, Contact[]> = {
  GOA: [],
  GUJARAT: [],
  MAHARASHTRA: [
    {
      city: "Amravati",
      contactPerson: "Suhas Dhale",
      address: "Shop No. 20, 1st Floor, Juzar Mega Mart, Jawahar Road, Jaistambh Chowk, Amravati - 444601, Maharashtra.",
      number: "+91 9213019981",
      email: "suhas.dhale43596@paruluniversity.ac.in"
    },
    {
      city: "Chhatrapati Sambhajinagar",
      contactPerson: "Sachin Shinde",
      address: "Shop No. A-4, Building Name: Prahlad Sankul, Near Prozone Mall, Osmanpura, Chhatrapati Sambhajinagar - 431001, Maharashtra.",
      number: "+91 9510971620",
      email: "sachin.shinde17779@paruluniversity.ac.in"
    },
    {
      city: "Jalgaon",
      contactPerson: "Tejpalsing Mahendra Patil",
      address: "51, Ground Floor, Unity Chamber, Besides LIC Office, Ganesh Colony, Jalgaon - 425001, Maharashtra.",
      number: "+91 9875163907",
      email: "tejpalsing.patil.23260@paruluniversity.ac.in"
    },
    {
      city: "Kolhapur",
      contactPerson: "Suraj Koushik",
      address: "Office No. 304, C.S. No. 455 B/1, Matoshree Plaza, Station Road, Shahupuri, Kolhapur - 416001, Maharashtra.",
      number: "+91 9274412923",
      email: "suraj.joushik38877@paruluniversity.ac.in"
    },
    {
      city: "Mumbai",
      contactPerson: "Mitanshu Kadakia",
      address: "303, Modi House, 3rd Floor, Bajaj Cross Road, Next to Police Station, Kandivali (West), Mumbai - 400067, Maharashtra.",
      number: "+91 9510971478",
      email: "mitanshu.kadakia@paruluniversity.ac.in"
    }
  ],
  RAJASTHAN: []
};

export default function StateContactsTable() {
  const allContacts = Object.values(stateData).flat();

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 font-poppins">
      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {Object.keys(stateData).map((state) => (
          <div
            key={state}
            className="px-8 py-2 rounded-full font-bold bg-[#E74C5E] text-white cursor-default"
          >
            {state}
          </div>
        ))}
      </div>

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
            {allContacts.length > 0 ? (
              allContacts.map((contact, index) => (
                <tr 
                  key={index} 
                  className={index % 2 === 0 ? "bg-white" : "bg-[#F9F9F9]"}
                >
                  <td className="py-6 px-6 align-top">{contact.city}</td>
                  <td className="py-6 px-6 align-top">{contact.contactPerson}</td>
                  <td className="py-6 px-6 align-top leading-relaxed pr-10">{contact.address}</td>
                  <td className="py-6 px-6 align-top whitespace-nowrap">{contact.number}</td>
                  <td className="py-6 px-6 align-top whitespace-nowrap">{contact.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-12 text-center text-gray-500 bg-white">
                  No contacts available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
