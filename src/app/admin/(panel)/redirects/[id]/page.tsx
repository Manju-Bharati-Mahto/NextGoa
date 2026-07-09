import RedirectForm from "@/components/admin/forms/RedirectForm";

export default async function EditRedirect({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <RedirectForm
      redirectId={Number(id)}
    />
  );
}