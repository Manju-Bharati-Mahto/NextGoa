"use client";

import { Plus, Trash2, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

export default function NotificationMarqueeSection({ data, onChange }: Props) {
  const items = data?.items || [];

  const [open, setOpen] = useState<number | null>(0);

  function update(field: string, value: any) {
    onChange({
      ...data,
      [field]: value,
    });
  }

  function updateItem(index: number, field: string, value: any) {
    const updated = [...items];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    onChange({
      ...data,
      items: updated,
    });
  }

  function addItem() {
    const updated = [
      ...items,
      {
        title: "",
        link: "",
        newTab: true,
      },
    ];

    onChange({
      ...data,
      items: updated,
    });

    setOpen(updated.length - 1);
  }

  function removeItem(index: number) {
    onChange({
      ...data,
      items: items.filter((_: any, i: number) => i !== index),
    });
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="form-label">Marquee Speed (seconds)</label>

        <input
          type="number"
          className="form-control"
          value={data?.speed || 90}
          onChange={(e) => update("speed", Number(e.target.value))}
        />
      </div>

      <div className="flex justify-between items-center">
        <label className="form-label">Notifications</label>

        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={addItem}
        >
          <Plus size={16} />
          Add Notification
        </button>
      </div>

      {items.map((item: any, index: number) => (
        <div
          key={index}
          className="rounded-xl border-light-all overflow-hidden"
        >
          <div className="flex justify-between items-center p-4 bg-gray-50">
            <button
              type="button"
              className="flex items-center gap-3 font-semibold"
              onClick={() => setOpen(open === index ? null : index)}
            >
              {open === index ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
              Notification {index + 1}
            </button>

            <button
              type="button"
              className="text-red-500"
              onClick={() => removeItem(index)}
            >
              <Trash2 size={18} />
            </button>
          </div>

          {open === index && (
            <div className="p-5 space-y-5 border-light-t">
              <div>
                <label className="form-label">Title</label>

                <textarea
                  rows={4}
                  className="form-textarea"
                  value={item.title}
                  onChange={(e) => updateItem(index, "title", e.target.value)}
                />
              </div>

              <div>
                <label className="form-label">Document</label>

                <input
                  type="file"
                  className="form-control img-input"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    const file = e.target.files?.[0];

                    if (!file) return;

                    updateItem(index, "documentFile", file);
                  }}
                />
                {/* {item.link && (
                    <a
                        href={item.link}
                        target="_blank"
                        className="text-blue-600 text-sm"
                    >
                        View Uploaded File
                    </a>
                    )} */}

                <label className="flex items-center gap-2 mt-3">
                  <input
                    type="checkbox"
                    checked={item.newTab}
                    onChange={(e) =>
                      updateItem(index, "newTab", e.target.checked)
                    }
                  />
                  Open in New Tab
                </label>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
