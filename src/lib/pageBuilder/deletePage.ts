import db from "@/lib/db";

export async function deletePage(
  id: number
) {

  await db.execute(

    `
    DELETE FROM page_sections
    WHERE page_id=?
    `,

    [id]

  );

  await db.execute(

    `
    DELETE FROM pages
    WHERE id=?
    `,

    [id]

  );

}