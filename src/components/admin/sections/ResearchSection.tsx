"use client";

import { Plus, Trash2, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

function ResearchCardItem({ card, index, cards, update }: any) {
  const [open, setOpen] = useState(false);

  const [statsOpen, setStatsOpen] = useState(false);

  function updateCard(field: string, value: any) {
    const updated = [...cards];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    update("cards", updated);
  }

  function updateStat(statIndex: number, field: string, value: any) {
    const updated = [...cards];

    updated[index].stats[statIndex] = {
      ...updated[index].stats[statIndex],
      [field]: value,
    };

    update("cards", updated);
  }

  function remove() {
    const updated = [...cards];

    updated.splice(index, 1);

    update("cards", updated);
  }

  return (
    <div className="rounded-xl border-light-all overflow-hidden">
      <div
        className="flex items-center justify-between bg-gray-50 px-5 py-4 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="font-semibold">Card {index + 1}</div>

        <div className="flex items-center gap-3">
          <ChevronDown
            size={20}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
          <button
            type="button"
            className="text-red-500"
            onClick={(e) => {
              e.stopPropagation();
              remove();
            }}
          >
            <Trash2 size={18} />
          </button>
        </div>
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

          <div>
            <label className="form-label">Badge Class</label>

            <input
              className="form-control"
              value={card.badgeClass}
              onChange={(e) => updateCard("badgeClass", e.target.value)}
            />
          </div>

          <div>
            <label className="form-label">Description</label>

            <textarea
              rows={5}
              className="form-textarea"
              value={card.description}
              onChange={(e) => updateCard("description", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="form-label">CTA Text</label>

              <input
                className="form-control"
                value={card.cta}
                onChange={(e) => updateCard("cta", e.target.value)}
              />
            </div>

            <div>
              <label className="form-label">CTA Link</label>

              <input
                className="form-control"
                value={card.link}
                onChange={(e) => updateCard("link", e.target.value)}
              />
            </div>
          </div>
          {/* Stats */}

          <div className="rounded-xl border-light-all overflow-hidden">
            <div
              className="flex cursor-pointer items-center justify-between bg-gray-50 px-5 py-4"
              onClick={() => setStatsOpen(!statsOpen)}
            >
              <div className="font-semibold">Statistics</div>

              <ChevronDown
                size={20}
                className={`transition-transform ${
                  statsOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {statsOpen && (
              <div className="border-light-t p-5 space-y-5">
                {card.stats.map((stat: any, statIndex: number) => (
                  <div key={statIndex} className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Value</label>

                      <input
                        className="form-control"
                        value={stat.value}
                        onChange={(e) =>
                          updateStat(statIndex, "value", e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <label className="form-label">Label</label>

                      <input
                        className="form-control"
                        value={stat.label}
                        onChange={(e) =>
                          updateStat(statIndex, "label", e.target.value)
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ResearchSection({ data, onChange }: Props) {
  function update(field: string, value: any) {
    onChange({
      ...data,
      [field]: value,
    });
  }

  const cards = data?.cards || [];

  return (
    <div className="space-y-6">
      {/* Eyebrow */}

      <div>
        <label className="form-label">Eyebrow</label>

        <input
          className="form-control"
          value={data?.eyebrow ?? ""}
          onChange={(e) => update("eyebrow", e.target.value)}
        />
      </div>

      {/* Heading */}

      <div>
        <label className="form-label">Heading</label>

        <textarea
          rows={3}
          className="form-textarea"
          value={data?.heading ?? ""}
          onChange={(e) => update("heading", e.target.value)}
        />
      </div>
      {/* Research Cards */}

      <div className="rounded-xl border-light-all">
        <div className="flex items-center justify-between border-light px-5 py-4">
          <h3 className="font-semibold">Research Cards</h3>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() =>
              update("cards", [
                ...cards,
                {
                  badge: "",
                  badgeClass: "bg-brand text-white",
                  description: "",
                  cta: "",
                  link: "",
                  stats: [
                    {
                      value: "",
                      label: "",
                    },
                    {
                      value: "",
                      label: "",
                    },
                    {
                      value: "",
                      label: "",
                    },
                  ],
                },
              ])
            }
          >
            <Plus size={16} />
            Add Card
          </button>
        </div>

        <div className="space-y-4 p-5">
          {cards.map((card: any, index: number) => (
            <ResearchCardItem
              key={index}
              card={card}
              index={index}
              cards={cards}
              update={update}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
