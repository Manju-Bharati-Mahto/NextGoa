import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuid } from "uuid";

export async function uploadImage(

  file: File | null,

  folder = "uploads"

) {
   
  if (!file || file.size === 0) {

    return "";

  }

  const bytes = await file.arrayBuffer();

  const buffer = Buffer.from(bytes);

  const filename = `${uuid()}-${file.name}`;

  const uploadPath = path.join(

    process.cwd(),

    "public",

    folder,

    filename

  );

  await writeFile(uploadPath, buffer);

  return `/${folder}/${filename}`;

}