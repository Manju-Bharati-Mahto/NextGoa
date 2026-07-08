"use client";

import { useEffect, useState } from "react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

export default function BannerSection({ data, onChange }: Props) {
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

      {/* Sub Heading */}

      <div>
        <label className="form-label">Sub Heading</label>

        <input
          className="form-control"
          value={data?.subHeading ?? ""}
          onChange={(e) => update("subHeading", e.target.value)}
        />
      </div>

      {/* Description */}

      <div>
        <label className="form-label">Description</label>

        <textarea
          rows={2}
          className="form-textarea"
          value={data?.description ?? ""}
          onChange={(e) => update("description", e.target.value)}
        />
      </div>

      {/* Background Image */}

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
          <img
            src={preview}
            alt="Background Preview"
            className="mt-4 w-full max-w-lg rounded-lg border"
          />
        )}
      </div>
    </div>
  );
}
