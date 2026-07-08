import db from "@/lib/db";

export async function getPage(
  id: number
) {

  const [rows]: any =
    await db.query(

      `
      SELECT *
      FROM pages
      WHERE id=?
      LIMIT 1
      `,

      [id]

    );

  if (!rows.length) {

    return null;

  }

  const [sectionRows]: any =
    await db.query(

      `
      SELECT *
      FROM page_sections
      WHERE page_id=? 
      ORDER BY sort_order
      `,

      [id]

    );
  return {

    page: rows[0],

    sections: sectionRows.map(
      (item: any) => ({

        ...item,

        content: JSON.parse(
          item.content || "{}"
        ),

      })
    ),

  };

}