import PageRenderer from "@/components/pages/PageRenderer";
import { Metadata } from "next";
import { getPage } from "@/lib/frontend/getPage";
import { SITE_URL } from "@/lib/site-config";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const response = await getPage(slug);
  if (!response?.page) {
    return {};
  }

  const page = response.page;

  return {
    title: page.seo_title || page.title,

    description: page.seo_description,

    keywords: page.seo_keywords,

    alternates: {
      canonical: page.canonical_url,
    },

    openGraph: {
      title: page.og_title || page.title,

      description: page.og_description,

      images: page.og_image
        ? [
            {
              url: page.og_image,
            },
          ]
        : [],
    },
  };
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;

  return <PageRenderer slug={slug} />;
}
