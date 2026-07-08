"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, ChevronDown, ChevronRight } from "lucide-react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

interface LogoItemProps {
  logo: any;
  index: number;
  row: "row1" | "row2";
  logos: any[];
  update: (field: string, value: any) => void;
}

function LogoItem({ logo, index, row, logos, update }: LogoItemProps) {
  const [open, setOpen] = useState(false);

  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (logo instanceof File) {
      const url = URL.createObjectURL(logo);

      setPreview(url);

      return () => URL.revokeObjectURL(url);
    }

    if (typeof logo === "string") {
      setPreview(logo);
    }
  }, [logo]);

  function updateLogo(file: any) {
    const updated = [...logos];

    updated[index] = file;

    update(row, updated);
  }

  function removeLogo() {
    const updated = [...logos];

    updated.splice(index, 1);

    update(row, updated);
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
          Logo {index + 1}
        </button>

        <button type="button" onClick={removeLogo} className="text-red-500">
          <Trash2 size={18} />
        </button>
      </div>

      {open && (
        <div className="border-light-t p-5">
          <label className="form-label">Logo Image</label>

          <input
            type="file"
            accept="image/*"
            className="form-control img-input"
            onChange={(e) => {
              const file = e.target.files?.[0];

              if (!file) return;

              updateLogo(file);
            }}
          />

          {preview && (
            <img src={preview} className="mt-4 h-20 rounded border" />
          )}
        </div>
      )}
    </div>
  );
}
export default function RecruitersSection({ data, onChange }: Props) {
  function update(field: string, value: any) {
    onChange({
      ...data,
      [field]: value,
    });
  }

  const row1 = data?.row1 || [];

  const row2 = data?.row2 || [];

  const [row1Open, setRow1Open] = useState(false);

  const [row2Open, setRow2Open] = useState(false);

  return (
    <div className="space-y-6">
      {/* Eyebrow */}

      <div>
        <label className="form-label">Eyebrow</label>

        <input
          className="form-control"
          value={data?.eyebrow ?? ""}
          onChange={(e) => update("eyebrow", e.target.value)}
        />
      </div>

      {/* Heading */}

      <div>
        <label className="form-label">Heading</label>

        <textarea
          rows={3}
          className="form-textarea"
          value={data?.heading ?? ""}
          onChange={(e) => update("heading", e.target.value)}
        />
      </div>

      {/* Description */}

      <div>
        <label className="form-label">Description</label>

        <textarea
          rows={4}
          className="form-textarea"
          value={data?.description ?? ""}
          onChange={(e) => update("description", e.target.value)}
        />
      </div>

      {/* Button */}

      <div className="grid grid-cols-2 gap-5">
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
      </div>
      {/* Row 1 Logos */}

      <div className="rounded-xl border-light-all">
        <div className="flex items-center justify-between p-4">
          <button
            type="button"
            onClick={() => setRow1Open(!row1Open)}
            className="flex items-center gap-2 font-semibold"
          >
            {row1Open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            Row 1 Logos
          </button>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => update("row1", [...row1, ""])}
          >
            <Plus size={16} />
            Add Logo
          </button>
        </div>

        {row1Open && (
          <div className="border-light-t p-5">
            <div className="space-y-4">
              {row1.map((logo: any, index: number) => (
                <LogoItem
                  key={`row1-${index}`}
                  logo={logo}
                  index={index}
                  row="row1"
                  logos={row1}
                  update={update}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Row 2 Logos */}

      <div className="rounded-xl border-light-all">
        <div className="flex items-center justify-between p-4">
          <button
            type="button"
            onClick={() => setRow2Open(!row2Open)}
            className="flex items-center gap-2 font-semibold"
          >
            {row2Open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            Row 2 Logos
          </button>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => update("row2", [...row2, ""])}
          >
            <Plus size={16} />
            Add Logo
          </button>
        </div>

        {row2Open && (
          <div className="border-light-t p-5">
            <div className="space-y-4">
              {row2.map((logo: any, index: number) => (
                <LogoItem
                  key={`row2-${index}`}
                  logo={logo}
                  index={index}
                  row="row2"
                  logos={row2}
                  update={update}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
