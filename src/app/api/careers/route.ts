import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import db from "@/lib/db";

export async function POST(req: NextRequest) {
  try {

    const formData = await req.formData();

    const fullName = formData.get("fullName") as string;
    const mobile = formData.get("mobile") as string;
    const email = formData.get("email") as string;
    const location = formData.get("location") as string;

    const jobId = Number(formData.get("jobId"));
    const jobTitle = formData.get("jobTitle") as string;

    const resume = formData.get("resume") as File;

    let resumePath = "";

    if (resume) {

      const bytes = await resume.arrayBuffer();

      const buffer = Buffer.from(bytes);

      const fileName =
        `${Date.now()}-${resume.name}`;

      const uploadDir = path.join(
        process.cwd(),
        "public/uploads/resumes"
      );

      await writeFile(
        `${uploadDir}/${fileName}`,
        buffer
      );

      resumePath =
        `/uploads/resumes/${fileName}`;
    }

    await db.execute(
      `
      INSERT INTO careers
      (
        job_id,
        job_title,
        full_name,
        mobile,
        email,
        location,
        resume
      )
      VALUES (?,?,?,?,?,?,?)
      `,
      [
        jobId,
        jobTitle,
        fullName,
        mobile,
        email,
        location,
        resumePath,
      ]
    );

    return NextResponse.json({
      success: true,
    });

  } catch (error: any) {

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );

  }
}