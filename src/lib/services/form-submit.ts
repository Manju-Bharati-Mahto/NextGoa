import { saveLead } from "./database";
import { saveToGoogleSheet } from "./google-sheet";
import { sendToCRM } from "./crm";

type SubmitFormProps = {
  formName: string;
  data: any;
  sendCRM?: boolean;
  sendGoogleSheet?: boolean;
};

export async function submitForm({
  formName,
  data,
  sendCRM = false,
  sendGoogleSheet = false,
}: SubmitFormProps) {

  // =========================================
  // Save Database (Always)
  // =========================================
  await saveLead(formName, data);

  // =========================================
  // Google Sheet (Optional)
  // =========================================
  if (sendGoogleSheet) {
    await saveToGoogleSheet(
      formName,
      data
    );
  }

  // =========================================
  // CRM (Optional)
  // =========================================
  let crm = null;

  if (sendCRM) {
    crm = await sendToCRM(data);
  }

  return {
    crm,
  };

}