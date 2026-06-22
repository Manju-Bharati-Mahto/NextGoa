"use client";

import { useEffect, useState } from "react";



export default function LeadsPage() {

  
   const [leads, setLeads] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [selectedForm, setSelectedForm] = useState("all");
  

 useEffect(() => {
  loadLeads();
}, [page, limit, selectedForm, search]);

  async function loadLeads() {
  try {
    const res = await fetch(
      `/api/admin/leads?page=${page}&limit=${limit}&form=${selectedForm}&search=${search}`
    );

    const result = await res.json();

    setLeads(result.data);
    setTotal(result.total);
    setTotalPages(result.totalPages);

  } catch (error) {
    console.log(error);
  }
}

  const forms = [
    ...new Set(
      leads.map(
        (lead: any) => lead.form_name
      )
    ),
  ];

  const filteredLeads =
    selectedForm === "all"
      ? leads
      : leads.filter(
          (lead: any) =>
            lead.form_name === selectedForm
        );

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">
          Leads
        </h1>

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Export CSV
        </button>
      </div>

      <div className="mb-5">
        <select
          value={selectedForm}
          onChange={(e) =>
            setSelectedForm(
              e.target.value
            )
          }
          className="border p-2 rounded"
        >
          <option value="all">
            All Forms
          </option>

          {forms.map((form: any) => (
            <option
              key={form}
              value={form}
            >
              {form}
            </option>
          ))}
        </select>
      </div>
      <input
  type="text"
  placeholder="Search..."
  value={search}
  onChange={(e) => {
    setSearch(e.target.value);
    setPage(1);
  }}
  className="border rounded p-2"
/>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">
              ID
            </th>

            <th className="p-3 border">
              Form
            </th>

            <th className="p-3 border">
              Name
            </th>

            <th className="p-3 border">
              Email
            </th>

            <th className="p-3 border">
              Phone
            </th>

            <th className="p-3 border">
              Date
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredLeads.map(
            (lead: any) => {
              const formData =
                typeof lead.form_data ===
                "string"
                  ? JSON.parse(
                      lead.form_data
                    )
                  : lead.form_data;

              return (
                <tr key={lead.id}>
                  <td className="p-3 border">
                    {lead.id}
                  </td>

                  <td className="p-3 border">
                    {lead.form_name}
                  </td>

                  <td className="p-3 border">
                    {formData?.fullName ||
                      formData?.name ||
                      "-"}
                  </td>

                  <td className="p-3 border">
                    {formData?.email ||
                      "-"}
                  </td>

                  <td className="p-3 border">
                    {formData?.mobile ||
                      "-"}
                  </td>

                  <td className="p-3 border">
                    {new Date(
                      lead.created_at
                    ).toLocaleDateString()}
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-6">

  <div>
    Showing {(page - 1) * limit + 1} -
    {Math.min(page * limit, total)} of {total}
  </div>

  <div className="flex gap-2">

    <button
      disabled={page === 1}
      onClick={() => setPage(page - 1)}
      className="border px-4 py-2 rounded"
    >
      Previous
    </button>

    <span>
      {page} / {totalPages}
    </span>

    <button
      disabled={page === totalPages}
      onClick={() => setPage(page + 1)}
      className="border px-4 py-2 rounded"
    >
      Next
    </button>

  </div>

</div>
    </div>
  );
}