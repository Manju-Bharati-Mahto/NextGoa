import db from "@/lib/db";

export async function saveSections(
  pageId: number,
  sections: any[]
) {

  await db.execute(
    `
    DELETE FROM page_sections
    WHERE page_id = ?
    `,
    [pageId]
  );

  for (let i = 0; i < sections.length; i++) {


    await db.execute(
      `
      INSERT INTO page_sections
      (
        page_id,
        section_type,
        section_name,
        content,
        sort_order,
        status
      )
      VALUES (?,?,?,?,?,?)
      `,
      [
        pageId,
        sections[i].type,
        sections[i].title,
        JSON.stringify(
          sections[i].content
        ),
        i,
        sections[i].status ?? 1,
      ]
    );

  }

}