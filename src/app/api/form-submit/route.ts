import {
  NextRequest,
  NextResponse,
} from "next/server";

import {
  submitForm,
} from "@/lib/services/form-submit";

export async function POST(
  req: NextRequest
) {

  try {

    const { formName, data, sendToCRM = false, sendToGoogleSheet = false,} = await req.json();

    const crm = await submitForm({ formName, data, sendCRM: sendToCRM, sendGoogleSheet: sendToGoogleSheet,});

    return NextResponse.json({ success: true, crm, });

  } catch (error: any) {

    return NextResponse.json(

      {

        success: false,

        message:
          error.message,

      },

      {

        status: 500,

      }

    );

  }

}