"use client";

import { useState } from "react";
import { Plus, Trash2, ChevronDown, ChevronRight } from "lucide-react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

interface FAQItemProps {
  item: any;
  index: number;
  items: any[];
  update: (field: string, value: any) => void;
}

function FAQItem({ item, index, items, update }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  function updateItem(field: string, value: any) {
    const updated = [...items];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    update("faqs", updated);
  }

  function removeItem() {
    const updated = [...items];

    updated.splice(index, 1);

    update("faqs", updated);
  }

  return (
    <div className="rounded-xl border-light-all overflow-hidden">
      {/* Header */}

      <div
        className="flex items-center justify-between bg-gray-50 px-5 py-4 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div>
          <h4 className="font-semibold">
            FAQ {index + 1}
          </h4>
        </div>

        <div className="flex items-center gap-3">
          
          <ChevronDown
            size={20}
            className={`transition-transform ${
              open ? "rotate-180" : ""
            }`}
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

      {/* Body */}

      {open && (
        <div className="space-y-5 border-light-t p-5">
          <div>
            <label className="form-label">Question</label>

            <input
              className="form-control"
              value={item.question || ""}
              onChange={(e) =>
                updateItem("question", e.target.value)
              }
            />
          </div>

          <div>
            <label className="form-label">Answer</label>

            <textarea
              rows={5}
              className="form-textarea"
              value={item.answer || ""}
              onChange={(e) =>
                updateItem("answer", e.target.value)
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default function FAQSection({ data, onChange }: Props) {
  function update(field: string, value: any) {
    onChange({
      ...data,
      [field]: value,
    });
  }

  const faqs = data?.faqs || [];

  return (
    <div className="space-y-6">
      {/* Eyebrow */}

      <div>
        <label className="form-label">Eyebrow</label>

        <input
          className="form-control"
          value={data?.title ?? ""}
          onChange={(e) => update("title", e.target.value)}
        />
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

      {/* FAQs */}

      <div className="rounded-xl border-light-all">
        <div className="flex items-center justify-between border-light px-5 py-4">
          <h3 className="font-semibold">FAQs</h3>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() =>
              update("faqs", [
                ...faqs,
                {
                  question: "",
                  answer: "",
                },
              ])
            }
          >
            <Plus size={16} />
            Add FAQ
          </button>
        </div>

        <div className="space-y-4 p-5">
          {faqs.map((item: any, index: number) => (
            <FAQItem
              key={index}
              item={item}
              index={index}
              items={faqs}
              update={update}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
