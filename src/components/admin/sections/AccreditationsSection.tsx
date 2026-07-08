"use client";

import { useEffect, useState } from "react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

export default function AccreditationsSection({
  data,
  onChange,
}: Props) {
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
      {/* Heading */}

      <div>
        <label className="form-label">Heading</label>

        <input
          className="form-control"
          value={data?.heading ?? ""}
          onChange={(e) => update("heading", e.target.value)}
        />
      </div>

      {/* Title */}

      <div>
        <label className="form-label">Title</label>

        <input
          className="form-control"
          value={data?.title ?? ""}
          onChange={(e) => update("title", e.target.value)}
        />
      </div>

      {/* Image */}

      <div>
        <label className="form-label">Rankings Image</label>

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
            alt="Preview"
            className="mt-4 w-full max-w-xl rounded-lg border"
          />
        )}
      </div>
    </div>
  );
}