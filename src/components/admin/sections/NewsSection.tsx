"use client";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

export default function NewsSection({ data, onChange }: Props) {
  function update(field: string, value: any) {
    onChange({
      ...data,
      [field]: value,
    });
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="form-label">Eyebrow</label>

        <input
          className="form-control"
          value={data?.eyebrow ?? ""}
          onChange={(e) => update("eyebrow", e.target.value)}
        />
      </div>

      <div>
        <label className="form-label">Heading</label>
        <input
          className="form-control"
          value={data?.heading ?? ""}
          onChange={(e) => update("heading", e.target.value)}
        />
      </div>

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

      <div>
        <label className="form-label">Number of Blogs</label>

        <input
          type="number"
          min={1}
          max={12}
          className="form-control"
          value={data?.limit ?? 3}
          onChange={(e) => update("limit", Number(e.target.value))}
        />
      </div>
    </div>
  );
}
