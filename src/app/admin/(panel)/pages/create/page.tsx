import PageForm from "@/components/admin/forms/PageForm";
import { requirePermission } from "@/lib/adminAuth";
import { redirect } from "next/navigation";

export default async function CreatePage() {
  const user = await requirePermission("pages.create");

  if (!user || "status" in user) {
    redirect("/admin/dashboard");
  }

  return <PageForm />;
}