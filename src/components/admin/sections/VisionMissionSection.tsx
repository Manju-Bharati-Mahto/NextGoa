import { ChevronDown, ChevronRight, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

export default function VisionMissionSection({ data, onChange }: Props) {
  const pills = data?.pills || [];
  const [visionOpen, setVisionOpen] = useState(false);
  const [missionOpen, setMissionOpen] = useState(false);
  const [pillsOpen, setPillsOpen] = useState(false);

  function update(field: string, value: any) {
    onChange({
      ...data,
      [field]: value,
    });
  }

  function updatePill(index: number, value: string) {
    const updated = [...pills];
    updated[index] = value;

    update("pills", updated);
  }

  function addPill() {
    update("pills", [...pills, ""]);
  }

  function removePill(index: number) {
    update(
      "pills",
      pills.filter((_: any, i: number) => i !== index),
    );
  }

  return (
    <div className="space-y-6">
      {/* Section Heading */}

      <div>
        <label className="form-label">Section Heading</label>

        <input
          className="form-control"
          value={data?.heading ?? ""}
          onChange={(e) => update("heading", e.target.value)}
        />
      </div>

      {/* Section Title */}

      <div>
        <label className="form-label">Section Title</label>

        <input
          className="form-control"
          value={data?.title ?? ""}
          onChange={(e) => update("title", e.target.value)}
        />
      </div>

      {/* Vision */}

      <div className="rounded-xl border-light-all">
        <button
          type="button"
          onClick={() => setVisionOpen(!visionOpen)}
          className="flex w-full items-center justify-between p-5"
        >
          <h4 className="font-semibold">Vision Card</h4>

          {visionOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>

        {visionOpen && (
          <div className="space-y-5 border-t border-light-all p-5">
            <div>
              <label className="form-label">Title</label>

              <input
                className="form-control"
                value={data?.vision?.title ?? ""}
                onChange={(e) =>
                  update("vision", {
                    ...data?.vision,
                    title: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="form-label">Description</label>

              <textarea
                rows={2}
                className="form-textarea"
                value={data?.vision?.description ?? ""}
                onChange={(e) =>
                  update("vision", {
                    ...data?.vision,
                    description: e.target.value,
                  })
                }
              />
            </div>
          </div>
        )}
      </div>

      {/* Mission */}
      <div className="rounded-xl border-light-all">
        <button
          type="button"
          onClick={() => setMissionOpen(!missionOpen)}
          className="flex w-full items-center justify-between p-5"
        >
          <h4 className="font-semibold">Mission Card</h4>

          {missionOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>

        {missionOpen && (
          <div className="space-y-5 border-t border-light-all p-5">
            <h4 className="font-semibold">Mission Card</h4>

            <div>
              <label className="form-label">Title</label>

              <input
                className="form-control"
                value={data?.mission?.title ?? ""}
                onChange={(e) =>
                  update("mission", {
                    ...data?.mission,
                    title: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="form-label">Description</label>

              <textarea
                rows={2}
                className="form-textarea"
                value={data?.mission?.description ?? ""}
                onChange={(e) =>
                  update("mission", {
                    ...data?.mission,
                    description: e.target.value,
                  })
                }
              />
            </div>
          </div>
        )}
      </div>

      {/* Pills */}

      <div className="rounded-xl border-light-all">
        <button
          type="button"
          onClick={() => setPillsOpen(!pillsOpen)}
          className="flex w-full items-center justify-between p-5"
        >
          <h4 className="font-semibold">Tags / Pills</h4>

          {pillsOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>

        {pillsOpen && (
          <div className="border-t border-light-all p-5">
            <div className="mb-4 flex items-center justify-between">
              <label className="form-label">Tags</label>

              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={addPill}
              >
                <Plus size={16} />
                Add Tag
              </button>
            </div>

            <div className="space-y-4">
              {pills.map((pill: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg"
                >
                  <input
                    className="form-control"
                    value={pill}
                    onChange={(e) => updatePill(index, e.target.value)}
                  />

                  <button
                    type="button"
                    className="text-red-500"
                    onClick={() => removePill(index)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
