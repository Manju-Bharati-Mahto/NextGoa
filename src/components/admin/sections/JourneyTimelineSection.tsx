"use client";

import { Plus, Trash2, ChevronDown } from "lucide-react";
import { useState } from "react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

function TimelineItem({
  item,
  index,
  items,
  update,
}: any) {
  const [open, setOpen] = useState(false);

  function updateItem(field: string, value: any) {
    const updated = [...items];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    update("milestones", updated);
  }

  function removeItem() {
    const updated = [...items];

    updated.splice(index, 1);

    update("milestones", updated);
  }

  return (
    <div className="rounded-xl border-light-all">
      <div
        className="flex cursor-pointer items-center justify-between p-5"
        onClick={() => setOpen(!open)}
      >
        <div className="font-semibold">
          {item.year || `Milestone ${index + 1}`}
        </div>

        <div className="flex items-center gap-3">
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

          <ChevronDown
            size={20}
            className={`transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {open && (
        <div className="space-y-5 border-light-t p-5">
          <div>
            <label className="form-label">Year</label>

            <input
              className="form-control"
              value={item.year || ""}
              onChange={(e) =>
                updateItem("year", e.target.value)
              }
            />
          </div>

          <div>
            <label className="form-label">Badge</label>

            <input
              className="form-control"
              value={item.label || ""}
              onChange={(e) =>
                updateItem("label", e.target.value)
              }
            />
          </div>

          <div>
            <label className="form-label">
              Description
            </label>

            <textarea
              rows={2}
              className="form-textarea"
              value={item.description || ""}
              onChange={(e) =>
                updateItem(
                  "description",
                  e.target.value
                )
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function JourneyTimelineSection({
  data,
  onChange,
}: Props) {
  function update(field: string, value: any) {
    onChange({
      ...data,
      [field]: value,
    });
  }

  const milestones = data?.milestones || [];

  return (
    <div className="space-y-6">
      <div>
        <label className="form-label">
          Eyebrow
        </label>

        <input
          className="form-control"
          value={data?.eyebrow || ""}
          onChange={(e) =>
            update("eyebrow", e.target.value)
          }
        />
      </div>

      <div>
        <label className="form-label">
          Heading
        </label>

        <input
          className="form-control"
          value={data?.heading || ""}
          onChange={(e) =>
            update("heading", e.target.value)
          }
        />
      </div>

      <div>
        <label className="form-label">
          Description
        </label>

        <textarea
          rows={4}
          className="form-textarea"
          value={data?.description || ""}
          onChange={(e) =>
            update("description", e.target.value)
          }
        />
      </div>

      <div className="rounded-xl border-light-all">
        <div className="flex items-center justify-between border-light px-5 py-4">
          <h3 className="font-semibold">
            Timeline Milestones
          </h3>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() =>
              update("milestones", [
                ...milestones,
                {
                  year: "",
                  label: "",
                  description: "",
                },
              ])
            }
          >
            <Plus size={16} />
            Add Milestone
          </button>
        </div>

        <div className="space-y-4 p-5">
          {milestones.map(
            (item: any, index: number) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                items={milestones}
                update={update}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}