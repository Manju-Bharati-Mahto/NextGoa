import PageForm from "@/components/admin/forms/PageForm";
import { requirePermission } from "@/lib/adminAuth";
import { redirect } from "next/navigation";

export default async function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const user = await requirePermission("pages.create");

  if (!user || "status" in user) {
    redirect("/admin/dashboard");
  }

  const { id } = await params;

  return <PageForm pageId={Number(id)} />;
}
