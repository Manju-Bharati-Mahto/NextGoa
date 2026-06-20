export async function saveToGoogleSheet(
  formName: string,
  data: any
) {

  if (!process.env.GOOGLE_SHEET_URL)
    return;

  await fetch(
    process.env.GOOGLE_SHEET_URL,
    {

      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({

        formName,

        ...data,

      }),

    }
  );

}