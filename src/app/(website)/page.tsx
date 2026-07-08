import type { Metadata } from "next";
import PageRenderer from "@/components/pages/PageRenderer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden">
      <PageRenderer slug="home" />
    </main>
  );
}