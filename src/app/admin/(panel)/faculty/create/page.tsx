import FacultyForm from "@/components/admin/forms/FacultyForm";
import { requirePermission } from "@/lib/adminAuth";
import { redirect } from "next/navigation";

export default async function CreateFacultyPage() {
  const user = await requirePermission("faculty.create");

  if (!user || "status" in user) {
    redirect("/admin/dashboard");
  }

  return <FacultyForm />;
}