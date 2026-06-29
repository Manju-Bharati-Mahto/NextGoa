import db from "@/lib/db";

export async function saveFaqs(

  blogId: number,

  faqs: any[]

) {

  await db.execute(

    "DELETE FROM blog_faqs WHERE blog_id=?",

    [blogId]

  );

  for (let i = 0; i < faqs.length; i++) {

    if (!faqs[i].question.trim()) continue;

    await db.execute(

      `
      INSERT INTO blog_faqs
      (
        blog_id,
        question,
        answer,
        sort_order
      )
      VALUES (?,?,?,?)
      `,

      [

        blogId,

        faqs[i].question,

        faqs[i].answer,

        i,

      ]

    );

  }

}