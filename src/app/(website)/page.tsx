import type { Metadata } from "next";
import PageRenderer from "@/components/pages/PageRenderer";
import { ProgrammeFinder } from "@/components/landing/ProgrammeFinder";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden">
      <PageRenderer slug="home" />
      <ProgrammeFinder />
    </main>
  );
}