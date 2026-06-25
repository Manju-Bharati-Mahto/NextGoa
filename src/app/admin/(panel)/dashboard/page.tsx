"use client";
import { useEffect, useState } from "react";
import {
Users,
FileText,
ClipboardList,
CalendarDays,
} from "lucide-react";
import Link from "next/link";
export default function DashboardPage() {
const [dashboard, setDashboard] = useState
<any>
(null);
useEffect(() => {
loadDashboard();
}, []);
async function loadDashboard() {
try {
const res = await fetch("/api/admin/dashboard");
const data = await res.json();
setDashboard(data);
} catch (err) {
console.log(err);
}
}
return (
<div className="space-y-8 p-6">
   {/* Header */}
   <div className="flex items-center justify-between">
      <div>
         <h1 className="text-3xl font-bold text-gray-800">
            Dashboard
         </h1>
         <p className="text-gray-500 mt-1">
            Welcome back! Here's what's happening today.
         </p>
      </div>
   </div>
   {/* Statistics */}
   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 shadow-lg">
         <div className="flex justify-between">
            <div>
               <p className="text-blue-100">
                  Total Leads
               </p>
               <h2 className="text-4xl font-bold mt-3">
                  {dashboard?.cards.totalLeads ?? 0}
               </h2>
               {/* 
               <p className="text-sm mt-3 text-blue-100">
                  +15% this month
               </p>
               */}
            </div>
            <ClipboardList size={42} />
         </div>
      </div>
      <div className="rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white p-6 shadow-lg">
         <div className="flex justify-between">
            <div>
               <p className="text-green-100">
                  Today's Leads
               </p>
               <h2 className="text-4xl font-bold mt-3">
                  {dashboard?.cards.todayLeads ?? 0}
               </h2>
               {/* 
               <p className="text-sm mt-3 text-green-100">
                  +5 Today
               </p>
               */}
            </div>
            <CalendarDays size={42} />
         </div>
      </div>
      <div className="rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 shadow-lg">
         <div className="flex justify-between">
            <div>
               <p className="text-purple-100">
                  Users
               </p>
               <h2 className="text-4xl font-bold mt-3">
                  {dashboard?.cards.users ?? 0}
               </h2>
               <p className="text-sm mt-3 text-purple-100">
                  Active Admins
               </p>
            </div>
            <Users size={42} />
         </div>
      </div>
      <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 shadow-lg">
         <div className="flex justify-between">
            <div>
               <p className="text-orange-100">
                  Blogs
               </p>
               <h2 className="text-4xl font-bold mt-3">
                  {dashboard?.cards.blogs ?? 0}
               </h2>
               <p className="text-sm mt-3 text-orange-100">
                  Published & Draft Blogs
               </p>
            </div>
            <FileText size={42} />
         </div>
      </div>
   </div>
   {/* Bottom */}
   <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Recent Activity */}
      <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
         <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
               Recent Activity
            </h2>
            <div className="text-sm text-gray-400">
               Latest Blogs
            </div>
         </div>
         <div className="space-y-4">
            {dashboard?.recentBlogs?.map((blog: any) => (
            <div
               key={blog.id}
               className="flex items-center justify-between border-b last:border-0 pb-4"
               >
               <div>
                  <p className="font-semibold text-gray-800">
                     {blog.title}
                  </p>
                  <span
                  className={`text-xs px-2 py-1 rounded-full mt-2 inline-block ${
                  blog.status === "published"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
                  }`}
                  >
                  {blog.status}
                  </span>
               </div>
               <span className="text-sm text-gray-400">
               {new Date(blog.created_at).toLocaleDateString()}
               </span>
            </div>
            ))}
         </div>
      </div>
      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow p-6">
         <h2 className="text-xl font-semibold mb-5">
            Latest Leads
         </h2>
         <div className="space-y-4">
            {dashboard?.recentLeads?.map((lead:any)=>{
            const formData=
            typeof lead.form_data==="string"
            ?JSON.parse(lead.form_data)
            :lead.form_data;
            return(
            <div
               key={lead.id}
               className="flex justify-between items-start border-b pb-3 last:border-0"
               >
               <div>
                  <p className="font-semibold text-gray-800">
                     {formData?.fullName ||
                     formData?.name ||
                     "Unknown"}
                  </p>
                  <p className="text-sm text-gray-500">
                     {lead.form_name}
                  </p>
               </div>
               <span className="text-xs text-gray-400 whitespace-nowrap">
               {new Date(
               lead.created_at
               ).toLocaleDateString()}
               </span>
            </div>
            );
            })}
         </div>
         <div className="mt-6">
            <Link
               href="/admin/leads"
               className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
               >
            View All Leads
            </Link>
         </div>
      </div>
   </div>
</div>
);
}