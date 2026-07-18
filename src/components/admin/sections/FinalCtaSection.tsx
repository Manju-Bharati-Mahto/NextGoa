"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, ChevronDown, ChevronRight } from "lucide-react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

interface ActionItemProps {
  item: any;
  index: number;
  items: any[];
  update: (field: string, value: any) => void;
}

function ActionItem({ item, index, items, update }: ActionItemProps) {
  const [open, setOpen] = useState(false);

  function updateItem(field: string, value: any) {
    const updated = [...items];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    update("actions", updated);
  }

  function removeItem() {
    const updated = [...items];

    updated.splice(index, 1);

    update("actions", updated);
  }

  return (
    <div className="rounded-xl border-light-all overflow-hidden">
      {/* Header */}

      <div
        className="flex items-center justify-between bg-gray-50 px-5 py-4 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div>
          <h4 className="font-semibold">Action {index + 1}</h4>
        </div>

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

      {/* Body */}

      {open && (
        <div className="space-y-5 border-light-t p-5">
          <div>
            <label className="form-label">Label</label>

            <input
              className="form-control"
              value={item.label || ""}
              onChange={(e) => updateItem("label", e.target.value)}
            />
          </div>

          <div>
            <label className="form-label">Link</label>

            <input
              className="form-control"
              value={item.href || ""}
              onChange={(e) => updateItem("href", e.target.value)}
            />
          </div>

          <div>
            <label className="form-label">Variant</label>

            <select
              className="form-select"
              value={item.variant || "primary"}
              onChange={(e) => updateItem("variant", e.target.value)}
            >
              <option value="primary">Primary</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <div>
            <label className="form-label">Icon</label>

            <select
              className="form-select"
              value={item.icon || ""}
              onChange={(e) => updateItem("icon", e.target.value)}
            >
              <option value="">None</option>
              <option value="phone">Phone</option>
            </select>
          </div>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={item.triggerEnquiry || false}
              onChange={(e) => updateItem("triggerEnquiry", e.target.checked)}
            />
            Trigger Enquiry Popup
          </label>
        </div>
      )}
    </div>
  );
}

export default function FinalCtaSection({ data, onChange }: Props) {
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (data?.backgroundImage instanceof File) {
      const url = URL.createObjectURL(data.backgroundImage);

      setPreview(url);

      return () => URL.revokeObjectURL(url);
    }

    if (typeof data?.backgroundImage === "string") {
      setPreview(data.backgroundImage);
    }
  }, [data?.backgroundImage]);

  function update(field: string, value: any) {
    onChange({
      ...data,
      [field]: value,
    });
  }

  const actions = data?.actions || [];

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
        <label className="form-label">Title</label>
        <input
          className="form-control"
          value={data?.title ?? ""}
          onChange={(e) => update("title", e.target.value)}
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
        <label className="form-label">Background Type</label>

        <select
          className="form-control"
          value={data?.background ?? "gradient"}
          onChange={(e) => update("background", e.target.value)}
        >
          <option value="gradient">Gradient</option>

          <option value="plain">Plain</option>
        </select>
      </div>

      <div>
        <label className="form-label">Background Image</label>

        <input
          type="file"
          accept="image/*"
          className="form-control img-input"
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (!file) return;

            update("backgroundImage", file);
          }}
        />

        {preview && (
          <img src={preview} className="mt-4 w-full max-w-sm rounded border" />
        )}
      </div>

      <div className="rounded-xl border-light-all">
        <div className="flex items-center justify-between border-light px-5 py-4">
          <h3 className="font-semibold">Actions</h3>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() =>
              update("actions", [
                ...actions,
                {
                  label: "",
                  href: "",
                  variant: "primary",
                  icon: "",
                  triggerEnquiry: false,
                },
              ])
            }
          >
            <Plus size={16} />
            Add Action
          </button>
        </div>

        <div className="space-y-4 p-5">
          {actions.map((item: any, index: number) => (
            <ActionItem
              key={index}
              item={item}
              index={index}
              items={actions}
              update={update}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
