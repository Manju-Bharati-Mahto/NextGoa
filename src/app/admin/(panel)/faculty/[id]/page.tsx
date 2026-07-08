import FacultyForm from "@/components/admin/forms/FacultyForm";

export default async function EditFaculty({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <FacultyForm
      facultyId={Number(id)}
    />
  );
}