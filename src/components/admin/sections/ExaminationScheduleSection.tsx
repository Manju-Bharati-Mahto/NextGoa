"use client";

import { useState } from "react";
import { Plus, Trash2, ChevronDown } from "lucide-react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

export default function ExaminationScheduleSection({ data, onChange }: Props) {
  const tabs = data?.tabs || [];

  const [openTab, setOpenTab] = useState(0);
  const [openProgram, setOpenProgram] = useState(-1);
  const [openCircularPdf, setOpenCircularPdf] = useState(-1);
  const [openSession, setOpenSession] = useState(-1);

  function updateTabs(updated: any[]) {
    onChange({
      ...data,
      tabs: updated,
    });
  }

  function addTab() {
    updateTabs([
      ...tabs,
      {
        title: "",
        type: "nested", // nested | circular

        sessions: [],

        pdfs: [],
      },
    ]);
  }

  function removeTab(index: number) {
    const updated = [...tabs];

    updated.splice(index, 1);

    updateTabs(updated);
  }

  function updateTab(index: number, field: string, value: any) {
    const updated = [...tabs];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    updateTabs(updated);
  }

  return (
    <div className="space-y-6">
      <div className="rounded-xl border-light-all">
        <div className="flex items-center justify-between border-light px-5 py-4">
          <h3 className="font-semibold">Examination Tabs</h3>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={addTab}
          >
            <Plus size={16} />
            Add Tab
          </button>
        </div>

        <div className="space-y-5 p-5">
          {tabs.map((tab: any, index: number) => {
            const isOpen = openTab === index;

            return (
              <div
                key={index}
                className="rounded-xl border-light-all overflow-hidden"
              >
                {/* Header */}

                <div
                  className="flex items-center justify-between bg-gray-50 px-5 py-4 cursor-pointer"
                  onClick={() => setOpenTab(isOpen ? -1 : index)}
                >
                  <div className="font-semibold">
                    {tab.title || `Tab ${index + 1}`}
                  </div>

                  <div className="flex items-center gap-3">
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();

                        removeTab(index);
                      }}
                    >
                      <Trash2 size={18} className="text-red-500" />
                    </button>
                  </div>
                </div>

                {isOpen && (
                  <div className="space-y-5 border-light-t p-5">
                    <div>
                      <label className="form-label">Tab Title</label>

                      <input
                        className="form-control"
                        value={tab.title}
                        onChange={(e) =>
                          updateTab(index, "title", e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <label className="form-label">Tab Type</label>

                      <select
                        className="form-select"
                        value={tab.type}
                        onChange={(e) =>
                          updateTab(index, "type", e.target.value)
                        }
                      >
                        <option value="nested">Theory / Practical</option>

                        <option value="circular">Circulars</option>
                      </select>
                    </div>

                    {tab.type === "nested" && (
                      <div className="rounded-xl border-light-all">
                        <div className="flex items-center justify-between border-light px-5 py-4">
                          <h4 className="font-semibold">Sessions</h4>

                          <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={() => {
                              const updated = [...tabs];

                              updated[index].sessions.push({
                                title: "",
                                programs: [],
                              });

                              updateTabs(updated);
                            }}
                          >
                            <Plus size={16} />
                            Add Session
                          </button>
                        </div>

                        <div className="space-y-5 p-5">
                          {tab.sessions?.map(
                            (session: any, sessionIndex: number) => (
                              <div
                                key={sessionIndex}
                                className="rounded-xl border-light-all overflow-hidden"
                              >
                                <div
                                  className="flex cursor-pointer items-center justify-between bg-gray-50 px-5 py-4"
                                  onClick={() =>
                                    setOpenSession(
                                      openSession === sessionIndex
                                        ? -1
                                        : sessionIndex,
                                    )
                                  }
                                >
                                  <div className="font-semibold">
                                    {session.title ||
                                      `Session ${sessionIndex + 1}`}
                                  </div>

                                  <button
                                    type="button"
                                    onClick={() => {
                                      const updated = [...tabs];

                                      updated[index].sessions.splice(
                                        sessionIndex,
                                        1,
                                      );

                                      updateTabs(updated);
                                    }}
                                  >
                                    <Trash2
                                      size={18}
                                      className="text-red-500"
                                    />
                                  </button>
                                </div>
                                {openSession === sessionIndex && (
                                  <div className="space-y-5 border-light-t p-5">
                                    <div>
                                      <label className="form-label">
                                        Session Title
                                      </label>

                                      <input
                                        className="form-control"
                                        value={session.title}
                                        onChange={(e) => {
                                          const updated = [...tabs];

                                          updated[index].sessions[
                                            sessionIndex
                                          ].title = e.target.value;

                                          updateTabs(updated);
                                        }}
                                      />
                                    </div>

                                    {/* Programs */}

                                    <div className="rounded-xl border-light-all">
                                      <div className="flex items-center justify-between border-light px-5 py-4">
                                        <h5 className="font-semibold">
                                          Programs
                                        </h5>

                                        <button
                                          type="button"
                                          className="btn btn-primary btn-sm"
                                          onClick={() => {
                                            const updated = [...tabs];

                                            updated[index].sessions[
                                              sessionIndex
                                            ].programs.push({
                                              title: "",
                                              pdfs: [],
                                            });

                                            updateTabs(updated);
                                          }}
                                        >
                                          <Plus size={16} />
                                          Add Program
                                        </button>
                                      </div>

                                      <div className="space-y-4 p-5">
                                        {session.programs?.map(
                                          (
                                            program: any,
                                            programIndex: number,
                                          ) => (
                                            <div
                                              key={programIndex}
                                              className="rounded-xl border-light-all overflow-hidden"
                                            >
                                              <div
                                                className="flex items-center justify-between bg-gray-50 px-5 py-4 cursor-pointer"
                                                onClick={() =>
                                                  setOpenProgram(
                                                    openProgram === programIndex
                                                      ? -1
                                                      : programIndex,
                                                  )
                                                }
                                              >
                                                <div className="font-semibold">
                                                  {program.title ||
                                                    `Program ${programIndex + 1}`}
                                                </div>

                                                <button
                                                  type="button"
                                                  onClick={() => {
                                                    const updated = [...tabs];

                                                    updated[index].sessions[
                                                      sessionIndex
                                                    ].programs.splice(
                                                      programIndex,
                                                      1,
                                                    );

                                                    updateTabs(updated);
                                                  }}
                                                >
                                                  <Trash2
                                                    size={18}
                                                    className="text-red-500"
                                                  />
                                                </button>
                                              </div>
                                              {openProgram === programIndex && (
                                                <div className="space-y-5 border-light-t p-5">
                                                  <div>
                                                    <label className="form-label">
                                                      Program Name
                                                    </label>

                                                    <input
                                                      className="form-control"
                                                      value={program.title}
                                                      onChange={(e) => {
                                                        const updated = [
                                                          ...tabs,
                                                        ];

                                                        updated[index].sessions[
                                                          sessionIndex
                                                        ].programs[
                                                          programIndex
                                                        ].title =
                                                          e.target.value;

                                                        updateTabs(updated);
                                                      }}
                                                    />
                                                  </div>

                                                  <div className="rounded-xl border-light-all">
                                                    <div className="flex items-center justify-between border-light px-5 py-4">
                                                      <h6 className="font-semibold">
                                                        PDFs
                                                      </h6>

                                                      <button
                                                        type="button"
                                                        className="btn btn-primary btn-sm"
                                                        onClick={() => {
                                                          const updated = [
                                                            ...tabs,
                                                          ];

                                                          updated[
                                                            index
                                                          ].sessions[
                                                            sessionIndex
                                                          ].programs[
                                                            programIndex
                                                          ].pdfs.push({
                                                            title: "",
                                                            file: null,
                                                          });

                                                          updateTabs(updated);
                                                        }}
                                                      >
                                                        <Plus size={16} />
                                                        Add PDF
                                                      </button>
                                                    </div>

                                                    <div className="space-y-4 p-5">
                                                      {program.pdfs?.map(
                                                        (
                                                          pdf: any,
                                                          pdfIndex: number,
                                                        ) => (
                                                          <div
                                                            key={pdfIndex}
                                                            className="rounded-lg border-light-all p-4 space-y-4"
                                                          >
                                                            <div className="flex items-center justify-between">
                                                              <div className="font-semibold">
                                                                PDF{" "}
                                                                {pdfIndex + 1}
                                                              </div>

                                                              <button
                                                                type="button"
                                                                onClick={() => {
                                                                  const updated =
                                                                    [...tabs];

                                                                  updated[
                                                                    index
                                                                  ].sessions[
                                                                    sessionIndex
                                                                  ].programs[
                                                                    programIndex
                                                                  ].pdfs.splice(
                                                                    pdfIndex,
                                                                    1,
                                                                  );

                                                                  updateTabs(
                                                                    updated,
                                                                  );
                                                                }}
                                                              >
                                                                <Trash2
                                                                  size={18}
                                                                  className="text-red-500"
                                                                />
                                                              </button>
                                                            </div>

                                                            <div>
                                                              <label className="form-label">
                                                                PDF Title
                                                              </label>

                                                              <input
                                                                className="form-control"
                                                                value={
                                                                  pdf.title
                                                                }
                                                                onChange={(
                                                                  e,
                                                                ) => {
                                                                  const updated =
                                                                    [...tabs];

                                                                  updated[
                                                                    index
                                                                  ].sessions[
                                                                    sessionIndex
                                                                  ].programs[
                                                                    programIndex
                                                                  ].pdfs[
                                                                    pdfIndex
                                                                  ].title =
                                                                    e.target.value;

                                                                  updateTabs(
                                                                    updated,
                                                                  );
                                                                }}
                                                              />
                                                            </div>

                                                            <div>
                                                              <label className="form-label">
                                                                Upload PDF
                                                              </label>

                                                              <input
                                                                type="file"
                                                                accept=".pdf"
                                                                className="form-control img-input"
                                                                onChange={(
                                                                  e,
                                                                ) => {
                                                                  const updated =
                                                                    [...tabs];

                                                                  updated[
                                                                    index
                                                                  ].sessions[
                                                                    sessionIndex
                                                                  ].programs[
                                                                    programIndex
                                                                  ].pdfs[
                                                                    pdfIndex
                                                                  ].fileFile =
                                                                    e.target
                                                                      .files?.[0] ||
                                                                    null;

                                                                  updateTabs(
                                                                    updated,
                                                                  );
                                                                }}
                                                              />
                                                              {pdf.file && (
                                                                <a
                                                                  href={
                                                                    pdf.file
                                                                  }
                                                                  target="_blank"
                                                                  className="text-blue-600 underline"
                                                                >
                                                                  View PDF
                                                                </a>
                                                              )}
                                                            </div>
                                                          </div>
                                                        ),
                                                      )}
                                                    </div>
                                                  </div>
                                                </div>
                                              )}
                                            </div>
                                          ),
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    )}
                    {tab.type === "circular" && (
                      <div className="rounded-xl border-light-all">
                        <div className="flex items-center justify-between border-light px-5 py-4">
                          <h4 className="font-semibold">PDFs</h4>

                          <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={() => {
                              const updated = [...tabs];

                              updated[index].pdfs.push({
                                title: "",
                                file: null,
                              });

                              updateTabs(updated);
                            }}
                          >
                            <Plus size={16} />
                            Add PDF
                          </button>
                        </div>

                        <div className="space-y-4 p-5">
                          {tab.pdfs?.map((pdf: any, pdfIndex: number) => (
                            <div
                              key={pdfIndex}
                              className="rounded-xl border-light-all overflow-hidden"
                            >
                              <div
                                className="flex cursor-pointer items-center justify-between bg-gray-50 px-5 py-4"
                                onClick={() =>
                                  setOpenCircularPdf(
                                    openCircularPdf === pdfIndex
                                      ? -1
                                      : pdfIndex,
                                  )
                                }
                              >
                                <div className="font-semibold">
                                  PDF {pdfIndex + 1}
                                </div>

                                <button
                                  type="button"
                                  onClick={() => {
                                    const updated = [...tabs];

                                    updated[index].pdfs.splice(pdfIndex, 1);

                                    updateTabs(updated);
                                  }}
                                >
                                  <Trash2 size={18} className="text-red-500" />
                                </button>
                              </div>
                              {openCircularPdf === pdfIndex && (
                                <div className="border-light-t p-5 space-y-5">
                                  <input
                                    className="form-control"
                                    placeholder="PDF Title"
                                    value={pdf.title}
                                    onChange={(e) => {
                                      const updated = [...tabs];

                                      updated[index].pdfs[pdfIndex].title =
                                        e.target.value;

                                      updateTabs(updated);
                                    }}
                                  />

                                  <input
                                    type="file"
                                    accept=".pdf"
                                    className="form-control img-input"
                                    onChange={(e) => {
                                      const updated = [...tabs];

                                      updated[index].pdfs[pdfIndex].fileFile =
                                        e.target.files?.[0] || null;

                                      updateTabs(updated);
                                    }}
                                  />
                                  {pdf.file && (
                                    <a
                                      href={pdf.file}
                                      target="_blank"
                                      className="text-blue-600 underline"
                                    >
                                      View PDF
                                    </a>
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
