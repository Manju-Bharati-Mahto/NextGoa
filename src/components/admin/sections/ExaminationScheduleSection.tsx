"use client";

import { useState, type ReactNode } from "react";
import { Plus, Trash2, ChevronDown, GripVertical } from "lucide-react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

// Generate a stable id for a new item (session / program / pdf)
function genId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `id-${Math.random().toString(36).slice(2)}-${Date.now()}`;
}

// Fallback id for legacy entries created before ids existed
function stableId(item: any, index: number) {
  return item?.id || `legacy-${index}`;
}

/* -------------------------------------------------------------------------- */
/* Generic sortable + collapsible card                                        */
/* Used for: Sessions, Programs, and PDFs (circular + nested)                 */
/* -------------------------------------------------------------------------- */

function SortableSectionItem({
  id,
  label,
  isOpen,
  onToggle,
  onRemove,
  children,
}: {
  id: string;
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  onRemove: () => void;
  children?: ReactNode;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="rounded-xl border-light-all overflow-hidden bg-white"
    >
      <div
        className="flex cursor-pointer items-center justify-between bg-gray-50 px-5 py-4"
        onClick={onToggle}
      >
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="cursor-grab touch-none text-gray-400 hover:text-gray-600"
            onClick={(e) => e.stopPropagation()}
            {...attributes}
            {...listeners}
          >
            <GripVertical size={18} />
          </button>

          <div className="font-semibold">{label}</div>
        </div>

        <div className="flex items-center gap-3">
          <ChevronDown
            size={18}
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
          >
            <Trash2 size={18} className="text-red-500" />
          </button>
        </div>
      </div>

      {isOpen && children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Main component                                                             */
/* -------------------------------------------------------------------------- */

export default function ExaminationScheduleSection({ data, onChange }: Props) {
  const tabs = data?.tabs || [];

  const [openTab, setOpenTab] = useState(0);
  const [openSession, setOpenSession] = useState(-1);
  const [openProgram, setOpenProgram] = useState(-1);
  const [openCircularPdf, setOpenCircularPdf] = useState(-1);
  const [openProgramPdf, setOpenProgramPdf] = useState(-1);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    }),
  );

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
        id: genId(),
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

  /* ---- Drag end handlers ------------------------------------------------ */

  function reorderByIds(list: any[], activeId: string, overId: string) {
    const ids = list.map((item, i) => stableId(item, i));
    const oldIndex = ids.indexOf(activeId);
    const newIndex = ids.indexOf(overId);
    if (oldIndex === -1 || newIndex === -1) return list;
    return arrayMove(list, oldIndex, newIndex);
  }

  function handleSessionDragEnd(tabIndex: number, event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const updated = [...tabs];
    updated[tabIndex] = {
      ...updated[tabIndex],
      sessions: reorderByIds(
        updated[tabIndex].sessions || [],
        String(active.id),
        String(over.id),
      ),
    };
    updateTabs(updated);
  }

  function handleProgramDragEnd(
    tabIndex: number,
    sessionIndex: number,
    event: DragEndEvent,
  ) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const updated = [...tabs];
    updated[tabIndex].sessions[sessionIndex].programs = reorderByIds(
      updated[tabIndex].sessions[sessionIndex].programs || [],
      String(active.id),
      String(over.id),
    );
    updateTabs(updated);
  }

  function handleProgramPdfDragEnd(
    tabIndex: number,
    sessionIndex: number,
    programIndex: number,
    event: DragEndEvent,
  ) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const updated = [...tabs];
    updated[tabIndex].sessions[sessionIndex].programs[programIndex].pdfs =
      reorderByIds(
        updated[tabIndex].sessions[sessionIndex].programs[programIndex]
          .pdfs || [],
        String(active.id),
        String(over.id),
      );
    updateTabs(updated);
  }

  function handleTabDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    updateTabs(reorderByIds(tabs, String(active.id), String(over.id)));
  }

  function handleCircularPdfDragEnd(tabIndex: number, event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const updated = [...tabs];
    updated[tabIndex] = {
      ...updated[tabIndex],
      pdfs: reorderByIds(
        updated[tabIndex].pdfs || [],
        String(active.id),
        String(over.id),
      ),
    };
    updateTabs(updated);
  }

  /* ---- PDF fields content (shared markup for circular + program pdfs) --- */

  function renderPdfFields(
    pdf: any,
    onTitleChange: (v: string) => void,
    onFileChange: (f: File | null) => void,
  ) {
    return (
      <div className="border-light-t p-5 space-y-5">
        <input
          className="form-control"
          placeholder="PDF Title"
          value={pdf.title}
          onChange={(e) => onTitleChange(e.target.value)}
        />

        <input
          type="file"
          accept=".pdf"
          className="form-control img-input"
          onChange={(e) => onFileChange(e.target.files?.[0] || null)}
        />

        {pdf.file && (
          <a href={pdf.file} target="_blank" className="text-blue-600 underline">
            View PDF
          </a>
        )}
      </div>
    );
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
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleTabDragEnd}
          >
            <SortableContext
              items={tabs.map((t: any, i: number) => stableId(t, i))}
              strategy={verticalListSortingStrategy}
            >
              {tabs.map((tab: any, index: number) => {
            const isOpen = openTab === index;
            const tid = stableId(tab, index);

            return (
              <SortableSectionItem
                key={tid}
                id={tid}
                label={tab.title || `Tab ${index + 1}`}
                isOpen={isOpen}
                onToggle={() => setOpenTab(isOpen ? -1 : index)}
                onRemove={() => removeTab(index)}
              >
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
                                id: genId(),
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
                          <DndContext
                            sensors={sensors}
                            collisionDetection={closestCenter}
                            onDragEnd={(e) => handleSessionDragEnd(index, e)}
                          >
                            <SortableContext
                              items={(tab.sessions || []).map(
                                (s: any, i: number) => stableId(s, i),
                              )}
                              strategy={verticalListSortingStrategy}
                            >
                              {tab.sessions?.map(
                                (session: any, sessionIndex: number) => {
                                  const sid = stableId(session, sessionIndex);
                                  const programs = session.programs || [];

                                  return (
                                    <SortableSectionItem
                                      key={sid}
                                      id={sid}
                                      label={
                                        session.title ||
                                        `Session ${sessionIndex + 1}`
                                      }
                                      isOpen={openSession === sessionIndex}
                                      onToggle={() =>
                                        setOpenSession(
                                          openSession === sessionIndex
                                            ? -1
                                            : sessionIndex,
                                        )
                                      }
                                      onRemove={() => {
                                        const updated = [...tabs];
                                        updated[index].sessions.splice(
                                          sessionIndex,
                                          1,
                                        );
                                        updateTabs(updated);
                                      }}
                                    >
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
                                                  id: genId(),
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
                                            <DndContext
                                              sensors={sensors}
                                              collisionDetection={
                                                closestCenter
                                              }
                                              onDragEnd={(e) =>
                                                handleProgramDragEnd(
                                                  index,
                                                  sessionIndex,
                                                  e,
                                                )
                                              }
                                            >
                                              <SortableContext
                                                items={programs.map(
                                                  (p: any, i: number) =>
                                                    stableId(p, i),
                                                )}
                                                strategy={
                                                  verticalListSortingStrategy
                                                }
                                              >
                                                {programs.map(
                                                  (
                                                    program: any,
                                                    programIndex: number,
                                                  ) => {
                                                    const pid = stableId(
                                                      program,
                                                      programIndex,
                                                    );
                                                    const programPdfs =
                                                      program.pdfs || [];

                                                    return (
                                                      <SortableSectionItem
                                                        key={pid}
                                                        id={pid}
                                                        label={
                                                          program.title ||
                                                          `Program ${
                                                            programIndex + 1
                                                          }`
                                                        }
                                                        isOpen={
                                                          openProgram ===
                                                          programIndex
                                                        }
                                                        onToggle={() =>
                                                          setOpenProgram(
                                                            openProgram ===
                                                              programIndex
                                                              ? -1
                                                              : programIndex,
                                                          )
                                                        }
                                                        onRemove={() => {
                                                          const updated = [
                                                            ...tabs,
                                                          ];
                                                          updated[
                                                            index
                                                          ].sessions[
                                                            sessionIndex
                                                          ].programs.splice(
                                                            programIndex,
                                                            1,
                                                          );
                                                          updateTabs(updated);
                                                        }}
                                                      >
                                                        <div className="space-y-5 border-light-t p-5">
                                                          <div>
                                                            <label className="form-label">
                                                              Program Name
                                                            </label>

                                                            <input
                                                              className="form-control"
                                                              value={
                                                                program.title
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
                                                                ].title =
                                                                  e.target.value;
                                                                updateTabs(
                                                                  updated,
                                                                );
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
                                                                  const updated =
                                                                    [...tabs];
                                                                  updated[
                                                                    index
                                                                  ].sessions[
                                                                    sessionIndex
                                                                  ].programs[
                                                                    programIndex
                                                                  ].pdfs.push({
                                                                    id: genId(),
                                                                    title: "",
                                                                    file: null,
                                                                  });
                                                                  updateTabs(
                                                                    updated,
                                                                  );
                                                                }}
                                                              >
                                                                <Plus
                                                                  size={16}
                                                                />
                                                                Add PDF
                                                              </button>
                                                            </div>

                                                            <div className="space-y-4 p-5">
                                                              <DndContext
                                                                sensors={
                                                                  sensors
                                                                }
                                                                collisionDetection={
                                                                  closestCenter
                                                                }
                                                                onDragEnd={(
                                                                  e,
                                                                ) =>
                                                                  handleProgramPdfDragEnd(
                                                                    index,
                                                                    sessionIndex,
                                                                    programIndex,
                                                                    e,
                                                                  )
                                                                }
                                                              >
                                                                <SortableContext
                                                                  items={programPdfs.map(
                                                                    (
                                                                      p: any,
                                                                      i: number,
                                                                    ) =>
                                                                      stableId(
                                                                        p,
                                                                        i,
                                                                      ),
                                                                  )}
                                                                  strategy={
                                                                    verticalListSortingStrategy
                                                                  }
                                                                >
                                                                  {programPdfs.map(
                                                                    (
                                                                      pdf: any,
                                                                      pdfIndex: number,
                                                                    ) => {
                                                                      const pdfKey =
                                                                        stableId(
                                                                          pdf,
                                                                          pdfIndex,
                                                                        );

                                                                      return (
                                                                        <SortableSectionItem
                                                                          key={
                                                                            pdfKey
                                                                          }
                                                                          id={
                                                                            pdfKey
                                                                          }
                                                                          label={
                                                                            pdf.title ||
                                                                            `PDF ${
                                                                              pdfIndex +
                                                                              1
                                                                            }`
                                                                          }
                                                                          isOpen={
                                                                            openProgramPdf ===
                                                                            pdfIndex
                                                                          }
                                                                          onToggle={() =>
                                                                            setOpenProgramPdf(
                                                                              openProgramPdf ===
                                                                                pdfIndex
                                                                                ? -1
                                                                                : pdfIndex,
                                                                            )
                                                                          }
                                                                          onRemove={() => {
                                                                            const updated =
                                                                              [
                                                                                ...tabs,
                                                                              ];
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
                                                                          {renderPdfFields(
                                                                            pdf,
                                                                            (
                                                                              value,
                                                                            ) => {
                                                                              const updated =
                                                                                [
                                                                                  ...tabs,
                                                                                ];
                                                                              updated[
                                                                                index
                                                                              ].sessions[
                                                                                sessionIndex
                                                                              ].programs[
                                                                                programIndex
                                                                              ].pdfs[
                                                                                pdfIndex
                                                                              ].title =
                                                                                value;
                                                                              updateTabs(
                                                                                updated,
                                                                              );
                                                                            },
                                                                            (
                                                                              file,
                                                                            ) => {
                                                                              const updated =
                                                                                [
                                                                                  ...tabs,
                                                                                ];
                                                                              updated[
                                                                                index
                                                                              ].sessions[
                                                                                sessionIndex
                                                                              ].programs[
                                                                                programIndex
                                                                              ].pdfs[
                                                                                pdfIndex
                                                                              ].fileFile =
                                                                                file;
                                                                              updateTabs(
                                                                                updated,
                                                                              );
                                                                            },
                                                                          )}
                                                                        </SortableSectionItem>
                                                                      );
                                                                    },
                                                                  )}
                                                                </SortableContext>
                                                              </DndContext>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </SortableSectionItem>
                                                    );
                                                  },
                                                )}
                                              </SortableContext>
                                            </DndContext>
                                          </div>
                                        </div>
                                      </div>
                                    </SortableSectionItem>
                                  );
                                },
                              )}
                            </SortableContext>
                          </DndContext>
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
                                id: genId(),
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
                          <DndContext
                            sensors={sensors}
                            collisionDetection={closestCenter}
                            onDragEnd={(e) =>
                              handleCircularPdfDragEnd(index, e)
                            }
                          >
                            <SortableContext
                              items={(tab.pdfs || []).map(
                                (p: any, i: number) => stableId(p, i),
                              )}
                              strategy={verticalListSortingStrategy}
                            >
                              {tab.pdfs?.map((pdf: any, pdfIndex: number) => {
                                const pdfKey = stableId(pdf, pdfIndex);

                                return (
                                  <SortableSectionItem
                                    key={pdfKey}
                                    id={pdfKey}
                                    label={
                                      pdf.title || `PDF ${pdfIndex + 1}`
                                    }
                                    isOpen={openCircularPdf === pdfIndex}
                                    onToggle={() =>
                                      setOpenCircularPdf(
                                        openCircularPdf === pdfIndex
                                          ? -1
                                          : pdfIndex,
                                      )
                                    }
                                    onRemove={() => {
                                      const updated = [...tabs];
                                      updated[index].pdfs.splice(pdfIndex, 1);
                                      updateTabs(updated);
                                    }}
                                  >
                                    {renderPdfFields(
                                      pdf,
                                      (value) => {
                                        const updated = [...tabs];
                                        updated[index].pdfs[pdfIndex].title =
                                          value;
                                        updateTabs(updated);
                                      },
                                      (file) => {
                                        const updated = [...tabs];
                                        updated[index].pdfs[
                                          pdfIndex
                                        ].fileFile = file;
                                        updateTabs(updated);
                                      },
                                    )}
                                  </SortableSectionItem>
                                );
                              })}
                            </SortableContext>
                          </DndContext>
                        </div>
                      </div>
                    )}
                  </div>
              </SortableSectionItem>
            );
              })}
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </div>
  );
}
