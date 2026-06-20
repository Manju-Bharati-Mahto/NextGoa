import db from "@/lib/db";

export async function saveLead(
  formName: string,
  data: any
) {

  await db.execute(
    `
    INSERT INTO form_submissions
    (
      form_name,
      form_data
    )
    VALUES (?,?)
    `,
    [
      formName,
      JSON.stringify(data),
    ]
  );

}