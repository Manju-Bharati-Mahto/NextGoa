import type { Metadata } from "next";
import PageRenderer from "@/components/pages/PageRenderer";
import { getPage } from "@/lib/frontend/getPage";
import { SITE_URL } from "@/lib/site-config";

export async function generateMetadata(): Promise<Metadata> {
  const response = await getPage("home");

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
      url: `${SITE_URL}`,
      images: page.og_image
        ? [
            {
              url: `${SITE_URL}${page.og_image}`,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: page.og_title || page.title,
      description: page.og_description,
      images: page.og_image
        ? [`${SITE_URL}${page.og_image}`]
        : [],
    },
  };
}

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden">
      <PageRenderer slug="home" />
    </main>
  );
}