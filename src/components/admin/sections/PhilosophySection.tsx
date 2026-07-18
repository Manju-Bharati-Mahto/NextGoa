"use client";

import { Plus, Trash2, ChevronDown } from "lucide-react";
import { useState } from "react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

const iconOptions = [
  {
    value: "lighthouse",
    label: "Lighthouse",
  },
  {
    value: "pearl",
    label: "Pearl",
  },
  {
    value: "sunrise",
    label: "Sunrise",
  },
];

export default function PhilosophySection({ data, onChange }: Props) {
  const cards = data?.cards || [];
  const [openCard, setOpenCard] = useState<number>(0);

  function update(field: string, value: any) {
    onChange({
      ...data,
      [field]: value,
    });
  }

  function updateCard(index: number, field: string, value: any) {
    const updated = [...cards];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    onChange({
      ...data,
      cards: updated,
    });
  }

  function addCard() {
    onChange({
      ...data,

      cards: [
        ...cards,

        {
          icon: "lighthouse",

          eyebrow: "",

          title: "",

          body: "",
        },
      ],
    });
  }

  function removeCard(index: number) {
    const updated = cards.filter((_: any, i: number) => i !== index);

    onChange({
      ...data,

      cards: updated,
    });
  }

  return (
    <div className="space-y-6">
      {/* Layouts */}

      <div>
        <label className="form-label">Layouts</label>

        <select
          className="form-select"
          value={data?.layouts ?? "default"}
          onChange={(e) => update("layouts", e.target.value)}
        >
          <option value="layout_1">Layout 1</option>

          <option value="layout_2">Layout 2</option>
        </select>
      </div>
      {/* Heading */}

      <div>
        <label className="form-label">Heading</label>

        <input
          className="form-control"
          value={data?.heading ?? ""}
          onChange={(e) => update("heading", e.target.value)}
        />
      </div>
      {/* Heading */}

      <div>
        <label className="form-label">Sub Heading</label>

        <input
          className="form-control"
          value={data?.subheading ?? ""}
          onChange={(e) => update("subheading", e.target.value)}
        />
      </div>

      {/* Variant */}

      {data?.layouts === "layout_1" && (
        <div>
          <label className="form-label">Variant</label>

          <select
            className="form-select"
            value={data?.variant ?? "default"}
            onChange={(e) => update("variant", e.target.value)}
          >
            <option value="default">Default</option>
            <option value="clean">Clean</option>
          </select>
        </div>
      )}

      {/* Cards */}

      <div className="rounded-xl border-light-all">
        <div className="flex items-center justify-between border-light px-5 py-4">
          <h3 className="font-semibold">Leadership Budge</h3>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={addCard}
          >
            <Plus size={16} />
            Add Card
          </button>
        </div>
        <div className="space-y-4 p-5">
          {cards.map((card: any, index: number) => (
            <div
              key={index}
              className="rounded-xl border-light-all overflow-hidden"
            >
              <div
                className="flex items-center justify-between bg-gray-50 px-5 py-4 cursor-pointer"
                onClick={() => setOpenCard(openCard === index ? -1 : index)}
              >
                <div className="font-semibold">Card {index + 1}</div>

                <div className="flex items-center gap-3">
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${
                      openCard === index ? "rotate-180" : ""
                    }`}
                  />
                  <button
                    type="button"
                    className="text-red-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeCard(index);
                    }}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              {openCard === index && (
                <div className="p-5 space-y-5">
                  <div>
                    <label className="form-label">Icon</label>

                    <select
                      className="form-select"
                      value={card.icon}
                      onChange={(e) =>
                        updateCard(index, "icon", e.target.value)
                      }
                    >
                      {iconOptions.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Eyebrow</label>

                    <input
                      className="form-control"
                      value={card.eyebrow}
                      onChange={(e) =>
                        updateCard(index, "eyebrow", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <label className="form-label">Title</label>

                    <input
                      className="form-control"
                      value={card.title}
                      onChange={(e) =>
                        updateCard(index, "title", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <label className="form-label">Description</label>

                    <textarea
                      rows={4}
                      className="form-textarea"
                      value={card.body}
                      onChange={(e) =>
                        updateCard(index, "body", e.target.value)
                      }
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
