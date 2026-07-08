import db from "@/lib/db";

export async function getFaculty(slug: string) {
  const [rows]: any = await db.query(
    `
    SELECT *
    FROM faculty
    WHERE slug = ?
    AND status = 'published'
    LIMIT 1
    `,
    [slug],
  );

  if (!rows.length) {
    return null;
  }

  const faculty = rows[0];

  const [sections]: any = await db.query(
    `
    SELECT
      section_name,
      section_type,
      content,
      sort_order,
      status
    FROM faculty_sections
    WHERE faculty_id = ?
    AND status = 1
    ORDER BY sort_order ASC
    `,
    [faculty.id],
  );

  faculty.sections = sections.map((section: any) => ({
    title: section.section_name,
    type: section.section_type,
    status: section.status,
    content:
      typeof section.content === "string"
        ? JSON.parse(section.content)
        : section.content,
  }));

  return faculty;
}