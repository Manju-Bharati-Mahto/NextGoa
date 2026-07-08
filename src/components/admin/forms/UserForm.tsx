"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UserForm({ userId, }: { userId?: string; }) {
    const isEdit = !!userId;
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [permissions, setPermissions] = useState<any[]>([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    status: "",
    permissions: [] as number[],
  });

useEffect(() => { loadPermissions(); if (isEdit) { loadUser(); } }, [userId]);
async function loadUser() {
  const res = await fetch(`/api/admin/users/${userId}`);

  const data = await res.json();

  setForm({
    name: data.name,
    email: data.email,
    password: "",
    status: "active",
    permissions: data.permissions || [],
  });
}

  async function loadPermissions() {
  try {
    const res = await fetch("/api/admin/users/permissions");

    const data = await res.json();

    setPermissions(Array.isArray(data) ? data : []);

  } catch (err) {
    console.log(err);
  }
}
  console.log("permissions state:", permissions);

  function togglePermission(id: number) {

    setForm((prev) => {

      if (prev.permissions.includes(id)) {

        return {
          ...prev,
          permissions: prev.permissions.filter(
            (p) => p !== id
          ),
        };

      }

      return {
        ...prev,
        permissions: [
          ...prev.permissions,
          id,
        ],
      };

    });

  }

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  setLoading(true);

  try {

    const res = await fetch(
      isEdit
        ? `/api/admin/users/${userId}`
        : "/api/admin/users",
      {
        method: isEdit ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    const result = await res.json();

    if (!result.success) {
      alert(result.message);
      return;
    }

    router.push("/admin/users");

  } catch (err) {
    console.log(err);
  }

  setLoading(false);
}

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-light-white rounded-xl shadow p-8" >
   <div className="page-titles">
      <h1 className="text-3xl font-bold text-gray-800">
         {isEdit
         ? "Edit User"
         : "Create User"}
      </h1>
      <p className="text-gray-500 mt-2">
         {isEdit
         ? "Update your user."
         : "Create user."}
      </p>
   </div>
   <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
      <div className="xl:col-span-8">
         <div className="cards-admin-text p-5">
            <div className="mb-5">
               <label className="form-label">
               Name
               </label>
               <input
                  required
                  type="text" 
                  value={form.name}
                  onChange={(e) =>
               setForm({
               ...form,
               name: e.target.value,
               })
               }
               className="mt-2 w-full form-control rounded-lg px-4 py-3"
               />
            </div>
            <div className="mb-5">
               <label className="form-label">
               Email
               </label>
               <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) =>
               setForm({
               ...form,
               email: e.target.value,
               })
               }
               className="mt-2 w-full form-control rounded-lg px-4 py-3"
               />
            </div>
            <div>
               <label className="form-label">
               Password
               </label>
               <input
                  required={!isEdit}
                  type="password"
                  value={form.password}
                  onChange={(e) =>
               setForm({
               ...form,
               password: e.target.value,
               })
               }
               className="mt-2 w-full form-control rounded-lg px-4 py-3"
               />
            </div>
         </div>
         <div className="cards-admin-text p-5">
            <h3 className="font-semibold mb-5">
               Permissions
            </h3>
            <div className="grid grid-cols-3 gap-3">
               {permissions.map((permission)=>(
               <label
                  key={permission.id}
                  className="flex items-center gap-3"
                  >
               <input
                  type="checkbox"
                  className="form-check-input"
                  checked={form.permissions.includes(permission.id)}
                  onChange={()=>togglePermission(permission.id)}
               />
               <span>
               {permission.name}
               </span>
               </label>
               ))}
            </div>
         </div>
      </div>
      <div className="xl:col-span-4 space-y-5">
         <div className="cards-admin-text p-5">
            <h3 className="font-semibold mb-4">
               User Status
            </h3>
            <select
               className="form-select"
               value={form.status}
               onChange={(e)=>
               setForm({
               ...form,
               status:e.target.value,
               })
               }
               >
               <option value="active">
                  Active
               </option>
               <option value="inactive">
                  Locked
               </option>
            </select>
            <div className="btn-published mt-5">
               <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary w-full"
                  >
               {loading
               ? "Saving..."
               : isEdit
               ? "Update User"
               : "Create User"}
               </button>
               <button
                  type="button"
                  className="btn btn-danger w-full mt-3"
                  onClick={()=>router.push("/admin/users")}
               >
               Cancel
               </button>
            </div>
         </div>
      </div>
   </div>
</form>
  );
}