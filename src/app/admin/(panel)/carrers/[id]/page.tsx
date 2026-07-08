import VacancyForm from "@/components/admin/forms/VacancyForm";

export default async function EditVacancyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const vacancyId = parseInt(id);

  return <VacancyForm vacancyId={vacancyId} />;
}
