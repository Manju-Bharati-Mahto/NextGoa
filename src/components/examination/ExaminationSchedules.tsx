"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { getPdfs } from "@/app/(website)/actions/examination";

const TABS = ["Theory Schedule", "Practical Schedule", "Circulars"];

const SESSIONS = [
  "Winter Examination 2025-26",
  "Summer Examination 2025-26",
  "Supplementary Examination 2025-26",
];

const PROGRAMS = ["B.Sc.", "BCA", "MCA", "BBA", "B.Tech", "B.Pharm"];

export function ExaminationSchedules() {
  const [activeTab, setActiveTab] = useState("Theory Schedule");
  const [selectedSession, setSelectedSession] = useState("Winter Examination 2025-26");
  const [selectedProgram, setSelectedProgram] = useState("B.Sc.");

  const [pdfs, setPdfs] = useState<{ id: number, title: string, url: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);
    getPdfs(activeTab, selectedSession, selectedProgram).then((data) => {
      setPdfs(data);
      setIsLoading(false);
    });
  }, [activeTab, selectedSession, selectedProgram]);

  return (
    <div className="font-poppins mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-4 px-6 rounded-2xl text-xl font-bold transition-colors cursor-pointer ${activeTab === tab
                ? "bg-[#0eb1df] text-white"
                : "bg-[#f1f9fc] text-[#0eb1df] border border-[#0eb1df]"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar Filters - Show for Theory and Practical */}
        {(activeTab === "Theory Schedule" || activeTab === "Practical Schedule") && (
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {/* Sessions Filter - Show for Theory and Practical Schedule */}
            {(activeTab === "Theory Schedule" || activeTab === "Practical Schedule") && (
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  {SESSIONS.map((session) => (
                    <label key={session} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="session"
                        checked={selectedSession === session}
                        onChange={() => setSelectedSession(session)}
                        className="w-5 h-5 text-[#0eb1df] focus:ring-[#0eb1df] border-gray-300 rounded cursor-pointer"
                      />
                      <span className="text-gray-800 text-base font-medium">{session}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Programs Filter */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm h-full">
              <div className="flex flex-col gap-4">
                {PROGRAMS.map((program) => (
                  <label key={program} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="program"
                      checked={selectedProgram === program}
                      onChange={() => setSelectedProgram(program)}
                      className="w-5 h-5 text-[#0eb1df] focus:ring-[#0eb1df] border-gray-300 rounded cursor-pointer"
                    />
                    <span className="text-gray-800 text-base font-medium">{program}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Right Content List */}
        <div className={`w-full ${(activeTab === "Theory Schedule" || activeTab === "Practical Schedule") ? "lg:w-2/3 flex flex-col" : "grid grid-cols-1 md:grid-cols-2"} gap-4`}>
          {isLoading ? (
            <div className={`bg-white border border-gray-200 rounded-2xl p-8 text-center text-gray-500 shadow-sm ${activeTab === "Circulars" ? "md:col-span-2" : ""}`}>
              Loading schedules...
            </div>
          ) : pdfs.length > 0 ? (
            pdfs.map((schedule) => (
              <div
                key={schedule.id}
                className="bg-white border border-gray-200 rounded-2xl p-3 flex items-center justify-between shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#eb4f64] rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-lg">PDF</span>
                  </div>
                  <h3 className="text-gray-900 font-bold text-base md:text-[17px] pr-4 leading-snug max-w-lg">
                    {schedule.title}
                  </h3>
                </div>
                <Link
                  href={schedule.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#ffce2a] rounded-xl flex items-center justify-center shrink-0 hover:bg-[#ecc029] transition-colors"
                  aria-label="Download PDF"
                >
                  <Download className="w-6 h-6 text-black" />
                </Link>
              </div>
            ))
          ) : (
            <div className={`bg-white border border-gray-200 rounded-2xl p-8 text-center text-gray-500 shadow-sm ${activeTab === "Circulars" ? "md:col-span-2" : ""}`}>
              No documents found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
