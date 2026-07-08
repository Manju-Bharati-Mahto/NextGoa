import { uploadImage } from "@/lib/blog/uploadImage";
import { unlink } from "fs/promises";
import path from "path";

export async function processPageUploads(body: any, oldPage?: any) {
  // Featured Image
  if (body.featuredImageFile?.size) {
    // Delete old featured image
    if (oldPage?.featured_image) {
      try {
        await unlink(
          path.join(process.cwd(), "public", oldPage.featured_image),
        );
      } catch {}
    }

    body.featured_image = await uploadImage(
      body.featuredImageFile,
      "uploads/pages/featured",
    );
  } else {
    body.featured_image = oldPage?.featured_image || "";
  }

  // OG Image
  if (body.ogImageFile?.size) {
    // Delete old og image
    if (oldPage?.og_image) {
      try {
        await unlink(path.join(process.cwd(), "public", oldPage.og_image));
      } catch {}
    }

    body.og_image = await uploadImage(body.ogImageFile, "uploads/pages/og");
  } else {
    body.og_image = oldPage?.og_image || "";
  }

  return body;
}
