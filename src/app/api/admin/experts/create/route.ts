import { NextResponse } from "next/server";
import db from "@/lib/db";
import { uploadImage } from "@/lib/blog/uploadImage";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    let image = "";

    const imageFile = formData.get("image") as File | null;

    if (imageFile?.size) {
      image = await uploadImage(imageFile, "goa-uploads/experts");
    }

    const content = {
      name: formData.get("name"),
      designation: formData.get("designation"),
      department: formData.get("department"),
      experience: formData.get("experience"),
      research_area: formData.get("research_area"),
      tagline: formData.get("tagline"),
      tagline2: formData.get("tagline2"),
      description: formData.get("description"),
      image,
      social_links: JSON.parse(
        formData.get("social_links")?.toString() || "[]",
      ),
    };

    const [result]: any = await db.query(
      `
      INSERT INTO experts
      (
        category,
        content,
        status,
        sort_order
      )
      VALUES
      (
        ?, ?, ?, ?
      )
      `,
      [
        formData.get("category"),
        JSON.stringify(content),
        Number(formData.get("status")),
        Number(formData.get("sort_order")),
      ],
    );

    return NextResponse.json({
      success: true,
      message: "Expert created successfully.",
      id: result.insertId,
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
