import db from "@/lib/db";

export async function getFacultySections(facultyId: number) {
  const [rows]: any = await db.query(
    `
    SELECT
      id,
      section_name,
      section_type,
      content,
      sort_order,
      status
    FROM faculty_sections
    WHERE faculty_id = ?
    ORDER BY sort_order ASC
    `,
    [facultyId],
  );

  return rows.map((row: any) => ({
    id: row.id,
    title: row.section_name,
    type: row.section_type,
    status: row.status,
    content:
      typeof row.content === "string"
        ? JSON.parse(row.content)
        : row.content,
  }));
}