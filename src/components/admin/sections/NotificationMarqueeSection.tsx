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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="form-label mb-2 block">Background Color</label>

          <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-3">
            <input
              type="color"
              value={data?.backgroundColor || "#E73649"}
              onChange={(e) => update("backgroundColor", e.target.value)}
              className="h-12 w-12 cursor-pointer rounded-lg border-0 bg-transparent p-0"
            />

            <input
              type="text"
              className="form-control flex-1"
              placeholder="#E73649"
              value={data?.backgroundColor || "#E73649"}
              onChange={(e) => update("backgroundColor", e.target.value)}
            />

            <div
              className="h-10 w-10 rounded-lg border shadow-sm"
              style={{
                backgroundColor: data?.backgroundColor || "#E73649",
              }}
            />
          </div>
        </div>
        <div>
          <label className="form-label mb-2 block">Text Color</label>

          <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-3">
            <input
              type="color"
              value={data?.textColor || "#FFFFFF"}
              onChange={(e) => update("textColor", e.target.value)}
              className="h-12 w-12 cursor-pointer rounded-lg border-0 bg-transparent p-0"
            />

            <input
              type="text"
              className="form-control flex-1"
              placeholder="#FFFFFF"
              value={data?.textColor || "#FFFFFF"}
              onChange={(e) => update("textColor", e.target.value)}
            />

            <div
              className="h-10 w-10 rounded-lg border shadow-sm"
              style={{
                backgroundColor: data?.textColor || "#FFFFFF",
              }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="form-label">Desktop Margin</label>

          <input
            type="text"
            className="form-control"
            placeholder="10px 20px 30px 40px"
            value={data?.desktopMargin || ""}
            onChange={(e) => update("desktopMargin", e.target.value)}
          />
        </div>

        <div>
          <label className="form-label">Tablet Margin</label>

          <input
            type="text"
            className="form-control"
            placeholder="10px 20px 30px 40px"
            value={data?.tabletMargin || ""}
            onChange={(e) => update("tabletMargin", e.target.value)}
          />
        </div>

        <div>
          <label className="form-label">Mobile Margin</label>

          <input
            type="text"
            className="form-control"
            placeholder="10px 20px 30px 40px"
            value={data?.mobileMargin || ""}
            onChange={(e) => update("mobileMargin", e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        <div>
          <label className="form-label">Desktop Padding</label>

          <input
            type="text"
            className="form-control"
            placeholder="10px 20px 30px 40px"
            value={data?.desktopPadding || ""}
            onChange={(e) => update("desktopPadding", e.target.value)}
          />
        </div>

        <div>
          <label className="form-label">Tablet Padding</label>

          <input
            type="text"
            className="form-control"
            placeholder="10px 20px 30px 40px"
            value={data?.tabletPadding || ""}
            onChange={(e) => update("tabletPadding", e.target.value)}
          />
        </div>

        <div>
          <label className="form-label">Mobile Padding</label>

          <input
            type="text"
            className="form-control"
            placeholder="10px 20px 30px 40px"
            value={data?.mobilePadding || ""}
            onChange={(e) => update("mobilePadding", e.target.value)}
          />
        </div>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Start Date</label>

                  <input
                    type="date"
                    className="form-control"
                    value={item.startDate || ""}
                    onChange={(e) =>
                      updateItem(index, "startDate", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="form-label">End Date</label>

                  <input
                    type="date"
                    className="form-control"
                    value={item.endDate || ""}
                    onChange={(e) =>
                      updateItem(index, "endDate", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
