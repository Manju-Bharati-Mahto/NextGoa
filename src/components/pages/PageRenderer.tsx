import SectionRenderer from "./SectionRenderer";
import { getPage } from "@/lib/frontend/getPage";
import { notFound } from "next/navigation";

interface Props {
  slug: string;
}

export default async function PageRenderer({ slug }: Props) {
  const page = await getPage(slug);
  console.log(page);

  if (!page) {
    notFound();
  }

  return <SectionRenderer sections={page.sections || []} />;
}