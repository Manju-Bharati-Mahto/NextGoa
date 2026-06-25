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
const exportCSV = () => { window.open( `/api/admin/leads/export?form=${selectedForm}&search=${search}`, "_blank" ); };

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
   <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      <div>
         <h1 className="text-3xl font-bold text-gray-800">
            Leads
         </h1>
         <p className="text-gray-500 mt-1">
            View and manage all enquiry submissions
         </p>
      </div>
     <button onClick={exportCSV} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg" >
        Export CSV
      </button>
   </div>
   <div className="bg-gray-50 border rounded-xl p-5 mb-6">
      <div className="grid md:grid-cols-2 gap-4">
         <input
            type="text"
            placeholder="🔍 Search by name, email or phone..."
            value={search}
            onChange={(e)=>{
         setSearch(e.target.value);
         setPage(1);
         }}
         className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
         />
         <select
            value={selectedForm}
            onChange={(e)=>
            setSelectedForm(e.target.value)}
            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
            <option value="all">
               All Forms
            </option>
            {forms.map((form:any)=>(
            <option key={form} value={form}>
               {form}
            </option>
            ))}
         </select>
      </div>
   </div>
   <div className="overflow-x-auto rounded-xl border">
      <table className="min-w-full">
         <thead className="bg-gray-100">
            <tr>
               <th className="px-5 py-4 text-left font-semibold">
                  #
               </th>
               <th className="px-5 py-4 text-left font-semibold">
                  Form
               </th>
               <th className="px-5 py-4 text-left font-semibold">
                  Name
               </th>
               <th className="px-5 py-4 text-left font-semibold">
                  Email
               </th>
               <th className="px-5 py-4 text-left font-semibold">
                  Phone
               </th>
               <th className="px-5 py-4 text-left font-semibold">
                  Date
               </th>
            </tr>
         </thead>
         <tbody>
            {filteredLeads.map((lead:any)=>{
            const formData =
            typeof lead.form_data==="string"
            ? JSON.parse(lead.form_data)
            : lead.form_data;
            return(
            <tr
               key={lead.id}
               className="hover:bg-blue-50 transition border-t"
               >
               <td className="px-5 py-4">
                  #{lead.id}
               </td>
               <td className="px-5 py-4">
                  <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                  {lead.form_name}
                  </span>
               </td>
               <td className="px-5 py-4 font-medium">
                  {formData?.fullName || formData?.name || "-"}
               </td>
               <td className="px-5 py-4">
                  {formData?.email || "-"}
               </td>
               <td className="px-5 py-4">
                  {formData?.mobile || "-"}
               </td>
               <td className="px-5 py-4 text-gray-500">
                  {new Date(lead.created_at).toLocaleDateString()}
               </td>
            </tr>
            );
            })}
         </tbody>
      </table>
   </div>
   <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
      <div className="text-gray-600">
         Showing
         <span className="font-semibold mx-1">
         {(page-1)*limit+1}
         </span>
         -
         <span className="font-semibold mx-1">
         {Math.min(page*limit,total)}
         </span>
         of
         <span className="font-semibold mx-1">
         {total}
         </span>
         Entries
      </div>
      <div className="flex items-center gap-3">
         <button
            disabled={page===1}
            onClick={()=>setPage(page-1)}
         className="px-5 py-2 rounded-lg border hover:bg-gray-100 disabled:opacity-50"
         >
         ← Previous
         </button>
         <div className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            {page}
         </div>
         <button
            disabled={page===totalPages}
            onClick={()=>setPage(page+1)}
         className="px-5 py-2 rounded-lg border hover:bg-gray-100 disabled:opacity-50"
         >
         Next →
         </button>
      </div>
   </div>
</div>
);
}