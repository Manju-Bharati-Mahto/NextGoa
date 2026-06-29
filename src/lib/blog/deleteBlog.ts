import db from "@/lib/db";

export async function deleteBlog(
  id: number | string
) {

  await db.execute(

    `
    DELETE FROM blog_faqs
    WHERE blog_id=?
    `,

    [id]

  );

  await db.execute(

    `
    DELETE FROM blogs
    WHERE id=?
    `,

    [id]

  );

}