"use client";
import { Plus, Trash2, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

export default function StatsSection({
  data,
  onChange,
}: Props) {

  const items = data?.items || [];

  function update(
    field: string,
    value: string
  ) {

    onChange({
      ...data,
      [field]: value,
    });

  }

  function updateItem(
    index: number,
    field: string,
    value: string
  ) {

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
      value: "",
      label: "",
    },
  ];

  onChange({
    ...data,
    items: updated,
  });

  setOpenIndex(updated.length - 1);

}
  function removeItem(
    index: number
  ) {

    const updated =
      items.filter(
        (_: any, i: number) =>
          i !== index
      );

    onChange({
      ...data,
      items: updated,
    });

  }
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (

    <div className="space-y-6">

      {/* Heading */}

      <div>

        <label className="form-label">

          Heading (Optional)

        </label>

        <input
          className="form-control"
          value={data?.heading ?? ""}
          onChange={(e) =>
            update(
              "heading",
              e.target.value
            )
          }
        />

      </div>

      {/* Stats */}

      {/* Stats */}

      <div className="rounded-xl border-light-all">
        <div className="flex items-center justify-between border-light px-5 py-4">
          <h3 className="font-semibold">Statistics</h3>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={addItem}
          >
            <Plus size={16} />
            Add Stat
          </button>
        </div>

        <div className="space-y-4 p-5">
          {items.map(
            (
              item: any,
              index: number
            ) => (
              <div
                key={index}
                className="rounded-xl border-light-all overflow-hidden"
              >
                <div
                  className="flex items-center justify-between bg-gray-50 px-5 py-4 cursor-pointer"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="font-semibold">Stat {index + 1}</div>

                  <div className="flex items-center gap-3">
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                    <button
                      type="button"
                      className="text-red-500"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeItem(index);
                      }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>

                {openIndex === index && (
                  <div className="p-5 border-light-t">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label font-semibold mb-2 block">Value</label>
                        <input
                          className="form-control"
                          value={item.value}
                          onChange={(e) =>
                            updateItem(index, "value", e.target.value)
                          }
                        />
                      </div>

                      <div>
                        <label className="form-label font-semibold mb-2 block">Label</label>
                        <input
                          className="form-control"
                          value={item.label}
                          onChange={(e) =>
                            updateItem(index, "label", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>

      {/* Footer */}

      <div>

        <label className="form-label">

          Footer Text

        </label>

        <textarea
          rows={2}
          className="form-textarea"
          value={data?.footer ?? ""}
          onChange={(e) =>
            update(
              "footer",
              e.target.value
            )
          }
        />

      </div>

    </div>

  );

}