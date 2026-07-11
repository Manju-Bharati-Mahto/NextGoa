"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  redirectId?: number;
}

export default function RedirectForm({ redirectId }: Props) {
  const router = useRouter();

  const isEdit = !!redirectId;

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    source_url: "",

    destination_url: "",

    redirect_type: "301",

    is_active: "1",
  });
  const redirectNeedsDestination = [301, 302, 303, 307, 308].includes(
    Number(form.redirect_type),
  );

  useEffect(() => {
    if (!isEdit) return;

    async function loadRedirect() {
      const res = await fetch(`/api/admin/redirects/${redirectId}`);

      const json = await res.json();

      if (!json.success) return;

      setForm({
        source_url: json.data.source_url,

        destination_url: json.data.destination_url,

        redirect_type: String(json.data.redirect_type),

        is_active: String(json.data.is_active),
      });
    }

    loadRedirect();
  }, []);

  async function submit(e: any) {
    e.preventDefault();

    setLoading(true);

    const method = isEdit ? "PUT" : "POST";

    const url = isEdit
      ? `/api/admin/redirects/${redirectId}`
      : "/api/admin/redirects";

    const res = await fetch(url, {
      method,

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(form),
    });

    const json = await res.json();

    setLoading(false);

    if (!json.success) {
      toast.error(json.message);

      return;
    }

    toast.success(json.message);

    router.push("/admin/redirects");
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-6 bg-light-white rounded-xl shadow p-8"
    >
      <div className="bg-white rounded-xl p-6">
        <div className="cards-admin-header">
          <h2 className="text-2xl font-bold mb-6">Page Details</h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="form-label">Source URL</label>

            <input
              className="form-control"
              placeholder="/old-page"
              value={form.source_url}
              onChange={(e) =>
                setForm({
                  ...form,
                  source_url: e.target.value,
                })
              }
            />
          </div>

          {redirectNeedsDestination && (
            <div>
              <label className="form-label">Destination URL</label>

              <input
                type="text"
                className="form-control"
                placeholder="/new-page"
                value={form.destination_url}
                onChange={(e) =>
                  setForm({
                    ...form,
                    destination_url: e.target.value,
                  })
                }
              />
            </div>
          )}

          <div>
            <label className="form-label">Redirect Type</label>

            <select
              className="form-select"
              value={form.redirect_type}
              onChange={(e) =>
                setForm({
                  ...form,
                  redirect_type: e.target.value,
                })
              }
            >
              <option value="301">301 Permanent</option>
              <option value="302">302 Temporary</option>
              <option value="303">303 See Other</option>
              <option value="307">307 Temporary Redirect</option>

              <option value="308">308 Permanent Redirect</option>
              <option value="401">401 Unauthorized</option>
              <option value="403">403 Forbidden</option>
              <option value="404">404 Not Found</option>
              <option value="410">410 Gone</option>
              <option value="451">451 Unavailable For Legal Reasons</option>
              <option value="410">410 Gone</option>
            </select>
          </div>

          <div>
            <label className="form-label">Status</label>

            <select
              className="form-select"
              value={form.is_active}
              onChange={(e) =>
                setForm({
                  ...form,
                  is_active: e.target.value,
                })
              }
            >
              <option value="1">Active</option>

              <option value="0">Disabled</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="btn btn-primary" disabled={loading}>
          {loading
            ? "Saving..."
            : isEdit
              ? "Update Redirect"
              : "Create Redirect"}
        </button>
      </div>
    </form>
  );
}
