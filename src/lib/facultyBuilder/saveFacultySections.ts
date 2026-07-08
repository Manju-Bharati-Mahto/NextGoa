import db from "@/lib/db";

export async function saveFacultySections(
  facultyId: number,
  sections: any[],
) {
  // Delete old sections
  await db.execute(
    `DELETE FROM faculty_sections WHERE faculty_id = ?`,
    [facultyId],
  );

  // Insert new sections
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];

    await db.execute(
      `
      INSERT INTO faculty_sections
      (
        faculty_id,
        section_name,
        section_type,
        content,
        sort_order,
        status
      )
      VALUES
      (
        ?,?,?,?,?,?
      )
      `,
      [
        facultyId,
        section.title,
        section.type,
        JSON.stringify(section.content || {}),
        i,
        section.status ?? 1,
      ],
    );
  }
}