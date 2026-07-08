"use client";

import { Plus, Trash2, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

export default function LeadershipSection({ data, onChange }: Props) {
  const sections = data?.sections || [];

  const [open, setOpen] = useState(0);

  function update(field: string, value: any) {
    onChange({
      ...data,
      [field]: value,
    });
  }

  function updateSection(index: number, field: string, value: any) {
    const updated = [...sections];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    update("sections", updated);
  }

  function addSection() {
    update("sections", [
      ...sections,
      {
        category: "",
        heading: "",
        description: "",
      },
    ]);

    setOpen(sections.length);
  }

  function removeSection(index: number) {
    update(
      "sections",
      sections.filter((_: any, i: number) => i !== index),
    );
  }

  return (
    <div className="space-y-6">
      {/* Heading */}

      <div>
        <label className="form-label">Eyebrow</label>

        <input
          className="form-control"
          value={data?.eyebrow || ""}
          onChange={(e) => update("eyebrow", e.target.value)}
        />
      </div>

      <div>
        <label className="form-label">Heading</label>

        <input
          className="form-control"
          value={data?.heading || ""}
          onChange={(e) => update("heading", e.target.value)}
        />
      </div>
      <div>
          <label className="form-label">Expert Category</label>

          <select
            className="form-select"
            value={data?.expert_category || "Leadership Team"}
            onChange={(e) => update("expert_category", e.target.value)}
          >
            <option value="Leadership">Leadership</option>
            <option value="Leadership Team">Leadership Team</option>
            <option value="Faculty Deans">Faculty Deans</option>
            <option value="Staff">Staff</option>
          </select>
        </div>

      {/* Categories */}

      <div className="rounded-xl border-light-all">
        <div className="flex items-center justify-between border-light px-5 py-4">
          <h3 className="font-semibold">Leadership Budge</h3>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={addSection}
          >
            <Plus size={16} />
            Add Category
          </button>
        </div>

        <div className="p-5 space-y-4">
          {sections.map((item: any, index: number) => {
            const isOpen = open === index;

            return (
              <div
                key={index}
                className="rounded-xl border-light-all overflow-hidden"
              >
                {/* Header */}

                <div
                  className="flex items-center justify-between bg-gray-50 px-5 py-4 cursor-pointer"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <div className="font-semibold">
                    {item.category || `Category ${index + 1}`}
                  </div>

                  <div className="flex items-center gap-3">
                    {isOpen ? (
                      <ChevronDown size={18} />
                    ) : (
                      <ChevronRight size={18} />
                    )}

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeSection(index);
                      }}
                    >
                      <Trash2 size={18} className="text-red-500" />
                    </button>
                  </div>
                </div>

                {/* Body */}

                {isOpen && (
                  <div className="p-5 space-y-5">
                    <div>
                      <label className="form-label">Category</label>

                      <input
                        className="form-control"
                        value={item.category}
                        onChange={(e) =>
                          updateSection(index, "category", e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <label className="form-label">Section Heading</label>

                      <input
                        className="form-control"
                        value={item.heading}
                        onChange={(e) =>
                          updateSection(index, "heading", e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <label className="form-label">Description</label>

                      <textarea
                        rows={4}
                        className="form-textarea"
                        value={item.description}
                        onChange={(e) =>
                          updateSection(index, "description", e.target.value)
                        }
                      />
                    </div>
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
