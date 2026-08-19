"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Download } from "lucide-react";

interface Props {
  data: any;
}

export function ExaminationSchedules({ data }: Props) {
  const tabs = data?.tabs || [];

  const [activeTab, setActiveTab] = useState(
    tabs?.[0]?.title || "",
  );

  const [selectedSession, setSelectedSession] = useState("");

  const [selectedProgram, setSelectedProgram] = useState("");

  const currentTab = useMemo(() => {
    return (
      tabs.find((tab: any) => tab.title === activeTab) ||
      tabs[0]
    );
  }, [tabs, activeTab]);

  useEffect(() => {
    if (currentTab?.type === "nested") {
      setSelectedSession(
        currentTab.sessions?.[0]?.title || "",
      );
    }
  }, [currentTab]);

  const currentSession = useMemo(() => {
    if (!currentTab?.sessions) return null;

    return (
      currentTab.sessions.find(
        (session: any) =>
          session.title === selectedSession,
      ) || currentTab.sessions[0]
    );
  }, [currentTab, selectedSession]);

  useEffect(() => {
    if (currentSession) {
      setSelectedProgram(
        currentSession.programs?.[0]?.title || "",
      );
    }
  }, [currentSession]);

  const currentProgram = useMemo(() => {
    if (!currentSession?.programs) return null;

    return (
      currentSession.programs.find(
        (program: any) =>
          program.title === selectedProgram,
      ) || currentSession.programs[0]
    );
  }, [currentSession, selectedProgram]);

  const pdfs =
    currentTab?.type === "nested"
      ? currentProgram?.pdfs || []
      : currentTab?.pdfs || [];

      return (
  <div className="font-poppins mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

    {/* Tabs */}

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
      {tabs.map((tab: any) => (
        <button
          key={tab.title}
          onClick={() => setActiveTab(tab.title)}
          className={`py-4 px-6 rounded-2xl text-xl font-bold transition-colors cursor-pointer ${
            activeTab === tab.title
              ? "bg-[#0eb1df] text-white"
              : "bg-[#f1f9fc] text-[#0eb1df] border border-[#0eb1df]"
          }`}
        >
          {tab.title}
        </button>
      ))}
    </div>

    <div className="flex flex-col lg:flex-row gap-8">

      {/* Left Sidebar */}

      {currentTab?.type === "nested" && (
        <div className="w-full lg:w-1/3 flex flex-col gap-6">

          {/* Sessions */}

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col gap-4">

              {currentTab.sessions?.map((session: any) => (
                <label
                  key={session.title}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="session"
                    checked={selectedSession === session.title}
                    onChange={() =>
                      setSelectedSession(session.title)
                    }
                    className="w-5 h-5 text-[#0eb1df] focus:ring-[#0eb1df] border-gray-300 rounded cursor-pointer"
                  />

                  <span className="text-gray-800 text-base font-medium">
                    {session.title}
                  </span>
                </label>
              ))}

            </div>
          </div>

          {/* Programs */}

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm h-full">
            <div className="flex flex-col gap-4">

              {currentSession?.programs?.map(
                (program: any) => (
                  <label
                    key={program.title}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="program"
                      checked={
                        selectedProgram === program.title
                      }
                      onChange={() =>
                        setSelectedProgram(program.title)
                      }
                      className="w-5 h-5 text-[#0eb1df] focus:ring-[#0eb1df] border-gray-300 rounded cursor-pointer"
                    />

                    <span className="text-gray-800 text-base font-medium">
                      {program.title}
                    </span>
                  </label>
                ),
              )}

            </div>
          </div>

        </div>
      )}

      {/* Right Side */}

      <div
        className={`w-full ${
          currentTab?.type === "nested"
            ? "lg:w-2/3 flex flex-col"
            : "grid grid-cols-1 md:grid-cols-2"
        } gap-4`}
      >{pdfs.length > 0 ? (
  pdfs.map((pdf: any, index: number) => (
    <div
      key={index}
      className="bg-white border border-gray-200 rounded-2xl p-3 flex items-center justify-between shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-[#eb4f64] rounded-xl flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-lg">
            PDF
          </span>
        </div>

        <h3 className="text-gray-900 font-bold text-base md:text-[17px] pr-4 leading-snug max-w-lg">
          {pdf.title}
        </h3>
      </div>

      {pdf.file ? (
        <Link
          href={pdf.file}
          target="_blank"
          rel="noopener noreferrer"
          data-track
          data-track-event="pdf_click"
          data-track-category={activeTab || "NA"}
          data-track-course-name={selectedProgram || "NA"}
          data-track-header={selectedSession || "NA"}
          data-track-text={pdf.title || "Download"}
          className="w-14 h-14 bg-[#ffce2a] rounded-xl flex items-center justify-center shrink-0 hover:bg-[#ecc029] transition-colors"
          aria-label="Download PDF"
        >
          <Download className="w-6 h-6 text-black" />
        </Link>
      ) : (
        <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center shrink-0">
          <Download className="w-6 h-6 text-gray-400" />
        </div>
      )}
    </div>
  ))
) : (
  <div
    className={`bg-white border border-gray-200 rounded-2xl p-8 text-center text-gray-500 shadow-sm ${
      currentTab?.type === "circular"
        ? "md:col-span-2"
        : ""
    }`}
  >
    No documents found.
  </div>
)}

      </div>
    </div>
  </div>
);
}
      