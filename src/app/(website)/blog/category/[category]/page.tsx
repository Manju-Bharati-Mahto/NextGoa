import type { Metadata } from "next";
import StoriesPage from "../../page";

export const metadata: Metadata = {
  title: { absolute: "Parul University Goa Blog | Career Guides, Courses & Admission Insights" },
  description:
    "Explore Parul University Goa’s blog for expert insights on courses, career options, admission guides, and student life in Goa. Stay updated with trends in AI, healthcare, and hospitality.",
};

export default function CategoryPage() {
  return <StoriesPage />;
}
