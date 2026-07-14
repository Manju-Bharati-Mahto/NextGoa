"use client";

import { Plus, Trash2, ChevronRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}
function DateCardItem({ card, index, dateCards, update }: any) {
  const [open, setOpen] = useState(false);

  function updateCard(field: string, value: any) {
    const updated = [...dateCards];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    update("dateCards", updated);
  }

  function remove() {
    const updated = [...dateCards];

    updated.splice(index, 1);

    update("dateCards", updated);
  }
  function updateSchedule(scheduleIndex: number, field: string, value: any) {
    const updated = [...dateCards];

    if (!updated[index].schedules) {
      updated[index].schedules = [];
    }

    if (!updated[index].schedules[scheduleIndex]) {
      updated[index].schedules[scheduleIndex] = {
        startDate: "",
        endDate: "",
        title: "",
      };
    }

    updated[index].schedules[scheduleIndex][field] = value;

    update("dateCards", updated);
  }

  function addSchedule() {
    const updated = [...dateCards];

    if (!updated[index].schedules) {
      updated[index].schedules = [];
    }

    updated[index].schedules.push({
      startDate: "",
      endDate: "",
      title: "",
    });

    update("dateCards", updated);
  }

  function removeSchedule(scheduleIndex: number) {
    const updated = [...dateCards];

    updated[index].schedules.splice(scheduleIndex, 1);

    update("dateCards", updated);
  }

  return (
    <div className="rounded-xl border-light-all">
      <div className="flex items-center justify-between p-4">
        <button
          type="button"
          className="flex items-center gap-2 font-semibold"
          onClick={() => setOpen(!open)}
        >
          {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          Card {index + 1}
        </button>

        <button type="button" onClick={remove} className="text-red-500">
          <Trash2 size={18} />
        </button>
      </div>

      {open && (
        <div className="border-light-t p-5 space-y-5">
          <div>
            <label className="form-label">Badge</label>

            <input
              className="form-control"
              value={card.badge}
              onChange={(e) => updateCard("badge", e.target.value)}
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="form-label">Scheduled Dates</label>

              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={addSchedule}
              >
                <Plus size={16} />
                Add Schedule
              </button>
            </div>

            {(card.schedules || []).map((schedule: any, sIndex: number) => (
              <div
                key={sIndex}
                className="border-light-all rounded-xl p-4 space-y-4"
              >
                <div className="flex justify-between">
                  <strong>Schedule {sIndex + 1}</strong>

                  <button
                    type="button"
                    onClick={() => removeSchedule(sIndex)}
                    className="text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="form-label">Start Date</label>

                    <input
                      type="date"
                      className="form-control"
                      value={schedule.startDate}
                      onChange={(e) =>
                        updateSchedule(sIndex, "startDate", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <label className="form-label">End Date</label>

                    <input
                      type="date"
                      className="form-control"
                      value={schedule.endDate}
                      onChange={(e) =>
                        updateSchedule(sIndex, "endDate", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="form-label">Title / Date</label>
                    <input
                      type="text"
                      className="form-control"
                      value={schedule.title}
                      onChange={(e) =>
                        updateSchedule(sIndex, "title", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <label className="form-label">Description</label>

            <textarea
              rows={3}
              className="form-textarea"
              value={card.description}
              onChange={(e) => updateCard("description", e.target.value)}
            />
          </div>

          <div>
            <label className="form-label">Card Color</label>

            <select
              className="form-select"
              value={card.color}
              onChange={(e) => updateCard("color", e.target.value)}
            >
              <option value="brand">Brand</option>

              <option value="ocean">Ocean</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
export default function AdmissionsSection({ data, onChange }: Props) {
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (data?.registeredImage instanceof File) {
      const url = URL.createObjectURL(data.registeredImage);

      setPreview(url);

      return () => URL.revokeObjectURL(url);
    }

    if (typeof data?.registeredImage === "string" && data.registeredImage) {
      setPreview(data.registeredImage);
    }
  }, [data?.registeredImage]);

  function update(field: string, value: any) {
    onChange({
      ...data,
      [field]: value,
    });
  }

  const dateCards = data?.dateCards || [];

  const tests = data?.acceptedTests || [];

  return (
    <div className="space-y-6">
      <div>
        <label className="form-label">Eyebrow</label>

        <input
          className="form-control"
          value={data?.eyebrow ?? ""}
          onChange={(e) => update("eyebrow", e.target.value)}
        />
      </div>

      <div>
        <label className="form-label">Heading</label>

        <input
          className="form-control"
          value={data?.heading ?? ""}
          onChange={(e) => update("heading", e.target.value)}
        />
      </div>
      <div>
        <label className="form-label">Left Title</label>

        <input
          className="form-control"
          value={data?.leftTitle ?? ""}
          onChange={(e) => update("leftTitle", e.target.value)}
        />
      </div>

      <div>
        <label className="form-label">Description</label>

        <textarea
          rows={5}
          className="form-textarea"
          value={data?.leftDescription ?? ""}
          onChange={(e) => update("leftDescription", e.target.value)}
        />
      </div>
      <div>
        <label className="form-label">Registered Text</label>

        <input
          className="form-control"
          value={data?.registeredText ?? ""}
          onChange={(e) => update("registeredText", e.target.value)}
        />
      </div>

      <div>
        <label className="form-label">Registered Image</label>

        <input
          type="file"
          className="form-control img-input"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (!file) return;

            update("registeredImage", file);
          }}
        />

        {preview && (
          <img src={preview} className="mt-3 w-48 rounded-xl border" />
        )}
      </div>

      {/* Date Cards */}

      <div>
        <div className="flex items-center justify-between mb-4">
          <label className="form-label">Date Cards</label>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() =>
              update("dateCards", [
                ...dateCards,
                {
                  badge: "",
                  schedules: [
                    {
                      startDate: "",
                      endDate: "",
                      title: "",
                    },
                  ],
                  title: "",
                  description: "",
                  color: "brand",
                },
              ])
            }
          >
            <Plus size={16} />
            Add Card
          </button>
        </div>

        <div className="space-y-4">
          {dateCards.map((card: any, index: number) => (
            <DateCardItem
              key={index}
              card={card}
              index={index}
              dateCards={dateCards}
              update={update}
            />
          ))}
        </div>
      </div>
      {/* Entrance Exam Ticket */}

      <div className="rounded-xl border-light-all">
        <div className="flex items-center justify-between p-4">
          <button
            type="button"
            className="flex items-center gap-2 font-semibold"
            onClick={() => update("examTicketOpen", !data?.examTicketOpen)}
          >
            {data?.examTicketOpen ? (
              <ChevronDown size={18} />
            ) : (
              <ChevronRight size={18} />
            )}
            Entrance Exam Ticket
          </button>
        </div>

        {data?.examTicketOpen && (
          <div className="border-light-t p-5 space-y-5">
            <div>
              <label className="form-label">Examination Label</label>

              <input
                className="form-control"
                value={data?.examLabel ?? ""}
                onChange={(e) => update("examLabel", e.target.value)}
              />
            </div>

            <div>
              <label className="form-label">Examination Date</label>

              <input
                className="form-control"
                value={data?.examDate ?? ""}
                onChange={(e) => update("examDate", e.target.value)}
              />
            </div>

            <div>
              <label className="form-label">Applicable Label</label>

              <input
                className="form-control"
                value={data?.applicableLabel ?? ""}
                onChange={(e) => update("applicableLabel", e.target.value)}
              />
            </div>

            <div>
              <label className="form-label">Button Text</label>

              <input
                className="form-control"
                value={data?.buttonText ?? ""}
                onChange={(e) => update("buttonText", e.target.value)}
              />
            </div>

            <div>
              <label className="form-label">Button Link</label>

              <input
                className="form-control"
                value={data?.buttonLink ?? ""}
                onChange={(e) => update("buttonLink", e.target.value)}
              />
            </div>

            {/* Programs */}

            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="form-label">Programs</label>

                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() =>
                    update("programs", [...(data?.programs || []), ""])
                  }
                >
                  <Plus size={16} />
                  Add Program
                </button>
              </div>

              <div className="space-y-3">
                {(data?.programs || []).map((item: string, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <input
                      className="form-control"
                      value={item}
                      onChange={(e) => {
                        const updated = [...(data?.programs || [])];

                        updated[index] = e.target.value;

                        update("programs", updated);
                      }}
                    />

                    <button
                      type="button"
                      className="text-red-500"
                      onClick={() => {
                        const updated = [...(data?.programs || [])];

                        updated.splice(index, 1);

                        update("programs", updated);
                      }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Label Entrance Note */}

      <div>
        <label className="form-label">Accepted Entrance Label</label>
        <input
          className="form-control"
          value={data?.entrance_label ?? ""}
          onChange={(e) => update("entrance_label", e.target.value)}
        />
      </div>
      {/* Accepted Entrance Tests */}

      <div>
        <div className="flex items-center justify-between mb-4">
          <label className="form-label">Accepted Entrance Tests</label>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => update("acceptedTests", [...tests, ""])}
          >
            <Plus size={16} />
            Add Test
          </button>
        </div>

        <div className="space-y-4">
          {tests.map((test: string, index: number) => (
            <div key={index} className="flex items-center gap-3">
              <input
                className="form-control"
                value={test}
                placeholder="Enter Test Name"
                onChange={(e) => {
                  const updated = [...tests];

                  updated[index] = e.target.value;

                  update("acceptedTests", updated);
                }}
              />

              <button
                type="button"
                className="text-red-500"
                onClick={() => {
                  const updated = [...tests];

                  updated.splice(index, 1);

                  update("acceptedTests", updated);
                }}
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
