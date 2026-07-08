"use client";

import { Plus, Trash2, ChevronDown, ChevronRight } from "lucide-react";

import { useEffect, useState } from "react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}
function HighlightCard({
  data,
  update,
}: {
  data: any;
  update: (field: string, value: any) => void;
}) {
  const [open, setOpen] = useState(false);

  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (data?.image instanceof File) {
      const url = URL.createObjectURL(data.image);

      setPreview(url);

      return () => URL.revokeObjectURL(url);
    }

    if (typeof data?.image === "string") {
      setPreview(data.image);
    }
  }, [data?.image]);

  function change(field: string, value: any) {
    update("highlightCard", {
      ...data,
      [field]: value,
    });
  }

  return (
    <div className="rounded-xl border-light-all">
      <div className="flex items-center justify-between p-4">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 font-semibold"
        >
          {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          Highlight Card
        </button>
      </div>

      {open && (
        <div className="border-light-t p-5 space-y-5">
          <div>
            <label className="form-label">Badge</label>

            <input
              className="form-control"
              value={data?.badge || ""}
              onChange={(e) => change("badge", e.target.value)}
            />
          </div>

          <div>
            <label className="form-label">Package Amount</label>

            <input
              className="form-control"
              placeholder="₹60"
              value={data?.package || ""}
              onChange={(e) => change("package", e.target.value)}
            />
          </div>

          <div>
            <label className="form-label">Package Suffix</label>

            <input
              className="form-control"
              placeholder="LPA*"
              value={data?.suffix || ""}
              onChange={(e) => change("suffix", e.target.value)}
            />
          </div>

          <div>
            <label className="form-label">Description</label>

            <textarea
              rows={5}
              className="form-textarea"
              value={data?.description || ""}
              onChange={(e) => change("description", e.target.value)}
            />
          </div>

          <div>
            <label className="form-label">Student Image</label>

            <input
              type="file"
              accept="image/*"
              className="form-control img-input"
              onChange={(e) => {
                const file = e.target.files?.[0];

                if (!file) return;

                change("image", file);
              }}
            />
            {preview && (
              <img src={preview} className="mt-3 w-56 rounded-xl border" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
function RecruitingSection({
  data,
  update,
}: {
  data: any;
  update: (field: string, value: any) => void;
}) {
  const [open, setOpen] = useState(false);

  function change(field: string, value: any) {
    update("recruiting", {
      ...data,
      [field]: value,
    });
  }

  return (
    <div className="rounded-xl border-light-all">
      <div className="flex items-center justify-between p-4">
        <button
          type="button"
          className="flex items-center gap-2 font-semibold"
          onClick={() => setOpen(!open)}
        >
          {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          Recruiting Companies
        </button>
      </div>

      {open && (
        <div className="border-light-t p-5 space-y-5">
          <div>
            <label className="form-label">Count</label>

            <input
              className="form-control"
              value={data?.count || ""}
              onChange={(e) => change("count", e.target.value)}
            />
          </div>

          <div>
            <label className="form-label">Title</label>

            <input
              className="form-control"
              value={data?.title || ""}
              onChange={(e) => change("title", e.target.value)}
            />
          </div>

          <div>
            <label className="form-label">Description</label>

            <textarea
              rows={4}
              className="form-textarea"
              value={data?.description || ""}
              onChange={(e) => change("description", e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
function StatItem({ stat, index, stats, update }: any) {
  const [open, setOpen] = useState(false);

  function updateStat(field: string, value: any) {
    const updated = [...stats];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    update("stats", updated);
  }

  function remove() {
    const updated = [...stats];

    updated.splice(index, 1);

    update("stats", updated);
  }

  return (
    <div className="rounded-xl border-light-all">
      {/* Header */}

      <div
        className="flex items-center justify-between bg-gray-50 px-5 py-4 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
          <h3 className="font-semibold">Stat {index + 1}</h3>

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

      {/* Body */}

      {open && (
        <div className="space-y-5 border-light-t p-5">
          <div>
            <label className="form-label">Title</label>

            <input
              className="form-control"
              value={stat.title || ""}
              onChange={(e) => updateStat("title", e.target.value)}
            />
          </div>

          <div>
            <label className="form-label">Label</label>

            <textarea
              rows={3}
              className="form-textarea"
              value={stat.label || ""}
              onChange={(e) => updateStat("label", e.target.value)}
            />
          </div>

          <div>
            <label className="form-label">Title CSS Class</label>

            <input
              className="form-control"
              placeholder="text-[40px]"
              value={stat.titleClass || ""}
              onChange={(e) => updateStat("titleClass", e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default function PlacementsSection({ data, onChange }: Props) {
  function update(field: string, value: any) {
    onChange({
      ...data,
      [field]: value,
    });
  }

  const stats = data?.stats || [];

  return (
    <div className="space-y-6">
      <div>
        <label className="form-label">Eyebrow</label>

        <input
          className="form-control"
          value={data?.eyebrow || ""}
          onChange={(e) => update("eyebrow", e.target.value)}
        />
      </div>

      <div>
        <label className="form-label">Heading</label>

        <input
          className="form-control"
          value={data?.heading || ""}
          onChange={(e) => update("heading", e.target.value)}
        />
      </div>

      <div>
        <label className="form-label">Description</label>

        <textarea
          rows={5}
          className="form-textarea"
          value={data?.description || ""}
          onChange={(e) => update("description", e.target.value)}
        />
      </div>

      <HighlightCard data={data?.highlightCard || {}} update={update} />
      <RecruitingSection data={data?.recruiting || {}} update={update} />

      <div className="rounded-xl border-light-all">
        <div className="flex items-center justify-between border-light px-5 py-4">
          <h3 className="font-semibold">Statistics</h3>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() =>
              update("stats", [
                ...stats,
                {
                  title: "",
                  label: "",
                  titleClass: "",
                },
              ])
            }
          >
            <Plus size={16} />
            Add Stat
          </button>
        </div>

        <div className="space-y-4 p-5">
          {stats.map((item: any, index: number) => (
            <StatItem
              key={index}
              stat={item}
              index={index}
              stats={stats}
              update={update}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
