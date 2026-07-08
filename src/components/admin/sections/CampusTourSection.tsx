"use client";

import { useEffect, useState } from "react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}


export default function CampusTourSection({ data, onChange }: Props) {
    
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (data?.thumbnail instanceof File) {
      const url = URL.createObjectURL(data.thumbnail);

      setPreview(url);

      return () => URL.revokeObjectURL(url);
    }

    if (typeof data?.thumbnail === "string") {
      setPreview(data.thumbnail);
    }
  }, [data?.thumbnail]);

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

      {/* Youtube URL */}

      <div>
        <label className="form-label">Youtube Embed URL</label>

        <input
          className="form-control"
          placeholder="https://www.youtube.com/embed/epXIhN_Pt7I"
          value={data?.videoUrl ?? ""}
          onChange={(e) => update("videoUrl", e.target.value)}
        />
      </div>

      {/* Thumbnail */}

      <div>
        <label className="form-label">Thumbnail Image</label>

        <input
          type="file"
          accept="image/*"
          className="form-control img-input"
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (!file) return;

            update("thumbnail", file);
          }}
        />

        {preview && (
          <img src={preview} alt="" className="mt-4 w-80 rounded-lg border" />
        )}
      </div>
      {/* Watch Button Text */}

      <div>
        <label className="form-label">Watch Button Text</label>

        <input
          className="form-control"
          value={data?.watchButtonText ?? ""}
          onChange={(e) => update("watchButtonText", e.target.value)}
        />
      </div>

      {/* Location Text */}

      <div>
        <label className="form-label">Location Text</label>

        <input
          className="form-control"
          value={data?.locationText ?? ""}
          onChange={(e) => update("locationText", e.target.value)}
        />
      </div>
    </div>
  );
}
