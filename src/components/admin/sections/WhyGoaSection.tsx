"use client";

import { useEffect, useState } from "react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

export default function WhyGoaSection({ data, onChange }: Props) {
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

  function update(field: string, value: any) {
    onChange({
      ...data,
      [field]: value,
    });
  }

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
        <input
          className="form-control"
          value={data?.heading ?? ""}
          onChange={(e) => update("heading", e.target.value)}
        />
      </div>
      {/* Description 1 */}

      <div>
        <label className="form-label">Description</label>

        <textarea
          rows={6}
          className="form-textarea"
          value={data?.description ?? ""}
          onChange={(e) => update("description", e.target.value)}
        />
      </div>

      {/* Variant */}

      <div>
        <label className="form-label">Theme Variant</label>

        <select
          className="form-control"
          value={data?.variant ?? "blue"}
          onChange={(e) => update("variant", e.target.value)}
        >
          <option value="blue">Blue</option>

          <option value="red">Red</option>
          <option value="white">White</option>
          <option value="blue_about">Blue Second Version</option>
          
        </select>
      </div>
      {/* Image */}

      <div>
        <label className="form-label">Image</label>

        <input
          type="file"
          accept="image/*"
          className="form-control img-input"
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (!file) return;

            update("image", file);
          }}
        />

        {preview && (
          <img
            src={preview}
            alt="Why Goa"
            className="mt-4 w-80 rounded-lg border"
          />
        )}
      </div>
    </div>
  );
}
