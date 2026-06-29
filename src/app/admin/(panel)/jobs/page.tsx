"use client";

import { useEffect, useState } from "react";
import { FileSpreadsheet, Search, RotateCcw } from "lucide-react";


export default function CareersPage() {
  const [applications, setApplications] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
  loadApplications();
}, [page, search, fromDate, toDate]);

  async function loadApplications() {
    try {
      const res = await fetch(
        `/api/admin/jobs?page=${page}&limit=${limit}&search=${search}&fromDate=${fromDate}&toDate=${toDate}`
      );

      const result = await res.json();

      setApplications(result.data);
      setTotal(result.total);
      setTotalPages(result.totalPages);
    } catch (err) {
      console.log(err);
    }
  }

 const exportCSV = () => {
  window.open(
    `/api/admin/jobs/export?search=${search}&fromDate=${fromDate}&toDate=${toDate}`,
    "_blank"
  );
};

  return (
    <div className="bg-light-white rounded-xl p-6">
   <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 bg-white p-4 rounded-xl">
      <div>
         <h1 className="text-3xl font-bold text-gray-800">
            Career Applications
         </h1>
         <p className="text-gray-500 mt-1">
            View and manage all job applications
         </p>
      </div>
      <button
         onClick={exportCSV}
         className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-sm hover:shadow-md"
         >
         <FileSpreadsheet size={18} />
         Export Excel
      </button>
   </div>
   <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
         {/* Search */}
         <div className="xl:col-span-2">
            <input
               type="text"
               placeholder="Search by name, email, phone..."
               value={search}
               onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
            }}
            className="form-control"
            />
         </div>
         {/* From */}
         <input
            type="date"
            value={fromDate}
            onChange={(e) => {
         setFromDate(e.target.value);
         setPage(1);
         }}
         className="form-control"
         />
         {/* To */}
         <input
            type="date"
            value={toDate}
            onChange={(e) => {
         setToDate(e.target.value);
         setPage(1);
         }}
         className="form-control"
         />
         {/* Buttons */}
         <div className="flex gap-2">
            <button
               type="button"
               className="btn btn-primary flex-1 flex items-center justify-center gap-2"
               >
               <Search size={18} />
               Search
            </button>
            <button
               type="button"
               onClick={() =>
               {
               setSearch("");
               setFromDate("");
               setToDate("");
               setPage(1);
               }}
               className="btn btn-danger flex items-center justify-center gap-2 px-4"
               >
               <RotateCcw size={18} />
            </button>
         </div>
      </div>
   </div>
   <div className="overflow-x-auto rounded-xl bg-white">
      <table className="min-w-full">
         <thead className="bg-white-100 border-light">
            <tr>
               {/* 
               <th className="px-5 py-4 text-left font-semibold">#</th>
               */}
               <th className="px-5 py-4 text-left font-semibold">Job</th>
               <th className="px-5 py-4 text-left font-semibold">Name</th>
               <th className="px-5 py-4 text-left font-semibold">Email</th>
               <th className="px-5 py-4 text-left font-semibold">Phone</th>
               <th className="px-5 py-4 text-left font-semibold">Location</th>
               <th className="px-5 py-4 text-left font-semibold">Resume</th>
               <th className="px-5 py-4 text-left font-semibold">Date</th>
            </tr>
         </thead>
         <tbody>
            {applications.map((item: any) => (
            <tr
               key={item.id}
               className="hover:bg-blue-50 transition border-light"
               >
               {/* 
               <td className="px-5 py-4">
                  #{item.id}
               </td>
               */}
               <td className="px-5 py-4">
                  <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                  {item.job_title}
                  </span>
               </td>
               <td className="px-5 py-4 font-medium">
                  {item.full_name}
               </td>
               <td className="px-5 py-4">
                  {item.email}
               </td>
               <td className="px-5 py-4">
                  {item.mobile}
               </td>
               <td className="px-5 py-4">
                  {item.location}
               </td>
               <td className="px-5 py-4">
                  {item.resume ? (
                  <a
                     href={item.resume}
                     target="_blank"
                     className="text-blue-600 hover:underline"
                     >
                  View Resume
                  </a>
                  ) : (
                  "-"
                  )}
               </td>
               <td className="px-5 py-4 text-gray-500">
                  {new Date(item.created_at).toLocaleDateString()}
               </td>
            </tr>
            ))}
         </tbody>
      </table>
      <div className="flex flex-col md:flex-row justify-between items-center p-4 gap-4">
         <div className="text-gray-600">
            Showing
            <span className="font-semibold mx-1">
            {(page - 1) * limit + 1}
            </span>
            -
            <span className="font-semibold mx-1">
            {Math.min(page * limit, total)}
            </span>
            of
            <span className="font-semibold mx-1">
            {total}
            </span>
            Entries
         </div>
         <div className="flex items-center gap-3">
            <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-5 py-2 rounded-lg border hover:bg-gray-100 disabled:opacity-50"
            >
            ← Previous
            </button>
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg">
               {page}
            </div>
            <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-5 py-2 rounded-lg border hover:bg-gray-100 disabled:opacity-50"
            >
            Next →
            </button>
         </div>
      </div>
   </div>
</div>
  );
}