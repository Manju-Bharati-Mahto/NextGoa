import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { uploadImage } from "@/lib/blog/uploadImage";
import { unlink } from "fs/promises";
import path from "path";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

// ==================== GET ====================

export async function GET(
  req: NextRequest,
  { params }: Params
) {
  try {
    const { id } = await params;

    const [rows]: any = await db.query(
      "SELECT * FROM experts WHERE id=? LIMIT 1",
      [id]
    );

    if (!rows.length) {
      return NextResponse.json(
        {
          success: false,
          message: "Expert not found",
        },
        {
          status: 404,
        }
      );
    }

    const expert = rows[0];

    const content =
      typeof expert.content === "string"
        ? JSON.parse(expert.content)
        : expert.content;

    return NextResponse.json({
      success: true,
      data: {
        category: expert.category,
        faculty: expert.faculty,
        status: expert.status,
        sort_order: expert.sort_order,

        name: content.name || "",
        designation: content.designation || "",
        department: content.department || "",
        experience: content.experience || "",
        research_area: content.research_area || "",
        tagline: content.tagline || "",
        tagline2: content.tagline2 || "",
        description: content.description || "",
        image: content.image || "",

        social_links: content.social_links || [],
      },
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

// ==================== UPDATE ====================

export async function PUT(
  req: NextRequest,
  { params }: Params
) {
  try {
    const { id } = await params;

    const formData = await req.formData();

    const [rows]: any = await db.query(
      "SELECT * FROM experts WHERE id=? LIMIT 1",
      [id]
    );

    if (!rows.length) {
      return NextResponse.json(
        {
          success: false,
          message: "Expert not found",
        },
        {
          status: 404,
        }
      );
    }

    const oldExpert = rows[0];

    const oldContent =
      typeof oldExpert.content === "string"
        ? JSON.parse(oldExpert.content)
        : oldExpert.content;

    let image = oldContent.image || "";

    const imageFile = formData.get("image") as File | null;

    if (imageFile?.size) {
      if (oldContent.image) {
        try {
          await unlink(
            path.join(
              process.cwd(),
              "public",
              oldContent.image
            )
          );
        } catch {}
      }

      image = await uploadImage(
        imageFile,
        "goa-uploads/experts"
      );
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
    formData.get("social_links")?.toString() || "[]"
  ),
};

    await db.query(
      `
      UPDATE experts
      SET
      category=?,
      faculty=?,
      content=?,
      status=?,
      sort_order=?
      WHERE id=?
      `,
      [
        formData.get("category"),
        formData.get("faculty"),
        JSON.stringify(content),
        Number(formData.get("status")),
        Number(formData.get("sort_order")),
        id,
      ]
    );

    return NextResponse.json({
      success: true,
      message: "Expert updated successfully.",
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

// ==================== DELETE ====================

export async function DELETE(
  req: NextRequest,
  { params }: Params
) {
  try {
    const { id } = await params;

    const [rows]: any = await db.query(
      "SELECT * FROM experts WHERE id=? LIMIT 1",
      [id]
    );

    if (!rows.length) {
      return NextResponse.json(
        {
          success: false,
          message: "Expert not found",
        },
        {
          status: 404,
        }
      );
    }

    const expert = rows[0];

    const content =
      typeof expert.content === "string"
        ? JSON.parse(expert.content)
        : expert.content;

    if (content.image) {
      try {
        await unlink(
          path.join(
            process.cwd(),
            "public",
            content.image
          )
        );
      } catch {}
    }

    await db.query(
      "DELETE FROM experts WHERE id=?",
      [id]
    );

    return NextResponse.json({
      success: true,
      message: "Expert deleted successfully.",
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