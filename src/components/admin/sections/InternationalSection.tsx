"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, ChevronDown, ChevronRight } from "lucide-react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

interface CountryItemProps {
  item: any;
  index: number;
  items: any[];
  update: (field: string, value: any) => void;
}

interface CardItemProps {
  item: any;
  index: number;
  items: any[]; 
  update: (field: string, value: any) => void;
}

function CountryItem({ item, index, items, update }: CountryItemProps) {
  const [open, setOpen] = useState(false);

  function updateItem(field: string, value: any) {
    const updated = [...items];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    update("countries", updated);
  }

  function removeItem() {
    const updated = [...items];
    updated.splice(index, 1);
    update("countries", updated);
  }

  return (
    <div className="rounded-xl border-light-all overflow-hidden">
      <div
        className="flex items-center justify-between bg-gray-50 px-5 py-4 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="font-semibold">Country {index + 1}</div>

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
              removeItem();
            }}
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-light-t p-5 space-y-5">
          <div>
            <label className="form-label">Country Name</label>

            <input
              className="form-control"
              value={item.name ?? ""}
              onChange={(e) => updateItem("name", e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function CardItem({ item, index, items, update }: CardItemProps) {
  const [open, setOpen] = useState(false);

  function updateItem(field: string, value: any) {
    const updated = [...items];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    update("cards", updated);
  }

  function removeItem() {
    const updated = [...items];
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
              removeItem();
            }}
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-light-t p-5 space-y-5">
          <div>
            <label className="form-label">Value</label>

            <input
              className="form-control"
              value={item.value ?? ""}
              onChange={(e) => updateItem("value", e.target.value)}
            />
          </div>

          <div>
            <label className="form-label">Title</label>

            <input
              className="form-control"
              value={item.title ?? ""}
              onChange={(e) => updateItem("title", e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function InternationalSection({ data, onChange }: Props) {
  const [preview, setPreview] = useState("");
  function update(field: string, value: any) {
    onChange({
      ...data,
      [field]: value,
    });
  }
  useEffect(() => {
    if (data?.worldMap instanceof File) {
      const url = URL.createObjectURL(data.worldMap);

      setPreview(url);

      return () => URL.revokeObjectURL(url);
    }

    if (typeof data?.worldMap === "string") {
      setPreview(data.worldMap);
    }
  }, [data?.worldMap]);

  const countries = data?.countries || [];

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
      <div>
        <label className="form-label">World Map Image</label>

        <input
          type="file"
          accept="image/*"
          className="form-control img-input"
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (!file) return;

            update("worldMap", file);
          }}
        />

        {preview && (
          <img
            src={preview}
            alt="World Map Preview"
            className="mt-4 w-full max-w-md rounded border"
          />
        )}
      </div>

      {/* Countries */}

      <div className="rounded-xl border-light-all">
        <div className="flex items-center justify-between border-light px-5 py-4">
          <h3 className="font-semibold">Countries</h3>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() =>
              update("countries", [
                ...countries,
                {
                  name: "",
                },
              ])
            }
          >
            <Plus size={16} />
            Add Country
          </button>
        </div>

        <div className="space-y-4 p-5">
          {countries.map((item: any, index: number) => (
            <CountryItem
              key={index}
              item={item}
              index={index}
              items={countries}
              update={update}
            />
          ))}
        </div>
      </div>

      {/* Cards */}

      <div className="rounded-xl border-light-all">
        <div className="flex items-center justify-between border-light px-5 py-4">
          <h3 className="font-semibold">Stats Cards</h3>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() =>
              update("cards", [
                ...cards,
                {
                  value: "",
                  title: "",
                },
              ])
            }
          >
            <Plus size={16} />
            Add Card
          </button>
        </div>

        <div className="space-y-4 p-5">
          {cards.map((item: any, index: number) => (
            <CardItem
              key={index}
              item={item}
              index={index}
              items={cards}
              update={update}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
