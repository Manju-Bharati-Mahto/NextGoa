"use client";

import { Plus, Trash2, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

interface CardProps {
  card: any;
  index: number;
  cards: any[];
  update: (field: string, value: any) => void;
}

function CardItem({ card, index, cards, update }: CardProps) {
  const [open, setOpen] = useState(false);

  function updateCard(field: string, value: any) {
    const updated = [...cards];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    update("cards", updated);
  }

  function removeCard() {
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
              removeCard();
            }}
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-light-t p-5 space-y-5">
          <div>
            <label className="form-label">Title</label>

            <input
              className="form-control"
              value={card.title ?? ""}
              onChange={(e) => updateCard("title", e.target.value)}
            />
          </div>

          <div>
            <label className="form-label">Description</label>

            <textarea
              rows={2}
              className="form-textarea"
              value={card.body ?? ""}
              onChange={(e) => updateCard("body", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="form-label">Icon (Iconify)</label>

              <input
                className="form-control"
                placeholder="ion:fast-food"
                value={card.icon ?? ""}
                onChange={(e) => updateCard("icon", e.target.value)}
              />
            </div>

            <div>
              <label className="form-label">Background Class</label>

              <select
                className="form-control"
                value={card.cls ?? ""}
                onChange={(e) => updateCard("cls", e.target.value)}
              >
                <option value="bg-sunshine text-ink">Yellow</option>

                <option value="bg-brand text-white">Brand</option>

                <option value="bg-ink text-white">Black</option>

                <option value="bg-ocean text-white">Ocean</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CampusLifeSection({ data, onChange }: Props) {
  function update(field: string, value: any) {
    onChange({
      ...data,
      [field]: value,
    });
  }

  const cards = data?.cards || [];

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
        <label className="form-label">Description</label>

        <textarea
          rows={2}
          className="form-textarea"
          value={data?.description ?? ""}
          onChange={(e) => update("description", e.target.value)}
        />
      </div>

      <div className="rounded-xl border-light-all">
        <div className="flex items-center justify-between border-light px-5 py-4">
          <h3 className="font-semibold">Cards</h3>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() =>
              update("cards", [
                ...cards,
                {
                  title: "",
                  body: "",
                  icon: "",
                  cls: "bg-brand text-white",
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
            <CardItem
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
