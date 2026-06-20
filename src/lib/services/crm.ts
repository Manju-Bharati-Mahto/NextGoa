export async function sendToCRM(
  data: any
) {

  const payload = {

    country_code:
      data.country_code || "91",

    phone:
      data.mobile ||
      data.phone ||
      "",

    source: "goa_website",

    name:
      data.fullName ||
      data.name ||
      "",

    email:
      data.email || "",

    country: "India",

    state:
      data.state || "",

    city:
      data.city || "",

    course:
      data.course || "",

    program:
      data.program_id ||
      data.programme ||
      "",

    father_name: "",
    dob: "",
    gender: "",
    address: "",
    nationality: "Indian",
    father_occupation: "",

    utm_source:
      data.utm_source || "",

    utm_medium:
      data.utm_medium || "",

    utm_campaign:
      data.utm_campaign || "",

    utm_term:
      data.utm_term || "",

    utm_content:
      data.utm_content || "",

    admission_session_id: "9",

  };

  const response =
    await fetch(
      "https://admissions.paruluniversity.ac.in/api/leadcapture",
      {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
          Accept:
            "application/json",
        },

        body:
          JSON.stringify(payload),

      }
    );

  return {

    status:
      response.status,

    response:
      await response.text(),

  };

}