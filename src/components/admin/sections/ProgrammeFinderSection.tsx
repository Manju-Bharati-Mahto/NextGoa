"use client";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

export default function ProgrammeFinderSection({
  data,
  onChange,
}: Props) {
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
          type="text"
          className="form-control"
          value={data?.eyebrow || ""}
          onChange={(e) => update("eyebrow", e.target.value)}
        />
      </div>

      {/* Heading */}
      <div>
        <label className="form-label">Heading</label>

        <input
          type="text"
          className="form-control"
          value={data?.heading || ""}
          onChange={(e) => update("heading", e.target.value)}
        />

        <p className="mt-1 text-xs text-gray-500">
          HTML is allowed. Example:
          <br />
          Tell us where you're <strong>headed.</strong>
        </p>
      </div>

      {/* Description */}
      <div>
        <label className="form-label">Short Description</label>

        <textarea
          rows={4}
          className="form-textarea"
          value={data?.description || ""}
          onChange={(e) => update("description", e.target.value)}
        />
      </div>
    </div>
  );
}