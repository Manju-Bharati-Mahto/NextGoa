"use client";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

export default function LeadershipTeamSection({ data, onChange }: Props) {
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
          value={data?.heading || ""}
          onChange={(e) => update("heading", e.target.value)}
        />
      </div>

      {/* Description */}

      <div>
        <label className="form-label">Description</label>

        <textarea
          rows={4}
          className="form-textarea"
          value={data?.description || ""}
          onChange={(e) => update("description", e.target.value)}
        />
      </div>
      <div>
        <label className="form-label">Expert Category</label>

        <select
          className="form-select"
          value={data?.expert_category || "Leadership Team"}
          onChange={(e) => update("expert_category", e.target.value)}
        >
          <option value="Leadership">Leadership</option>
          <option value="Leadership Team">Leadership Team</option>
          <option value="Faculty Deans">Faculty Deans</option>
          <option value="Staff">Staff</option>
        </select>
      </div>

      <div className="rounded-xl border-light-all bg-blue-50 p-5">
        <p className="text-sm text-gray-600">
          Leadership Team members are loaded automatically from the{" "}
          <strong>Experts</strong> module using the{" "}
          <strong>"Leadership Team"</strong> category and displayed according to
          their <strong>Sort Order</strong>.
        </p>
      </div>
    </div>
  );
}
