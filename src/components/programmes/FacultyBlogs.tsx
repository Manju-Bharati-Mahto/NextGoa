import db from "@/lib/db";
import Link from "next/link";
import { StoryCard, Story } from "@/components/stories/StoriesGrid";
import FacultyBlogsSlider from "./FacultyBlogsSlider";

const insightsText: Record<string, string> = {
  "management": "Insights for future managers.",
  "engineering": "Insights for future engineers.",
  "it-cs": "Insights for future developers.",
  "pharmacy": "Insights for future pharmacists.",
  "nursing": "Insights for future nurses.",
  "physiotherapy": "Insights for future physiotherapists.",
  "hotel-management": "Insights for future hoteliers.",
  "applied-and-health-sciences": "Insights for future scientists.",
};

export default async function FacultyBlogs({ facultySlug }: { facultySlug: string }) {
  let stories: Story[] = [];
  let faculty: any = null;

  try {
    // Try to find the faculty in the DB by slug
    const [faculties]: any = await db.query(
      "SELECT id, title FROM faculty WHERE slug = ? LIMIT 1",
      [facultySlug]
    );

    if (!faculties || faculties.length === 0) return null;

    faculty = faculties[0];

    // Fetch blogs for this faculty
    const [rows]: any = await db.query(
      `
      SELECT b.*, 
        (
          SELECT GROUP_CONCAT(c.name SEPARATOR ', ')
          FROM blog_categories c
          WHERE FIND_IN_SET(c.id, b.category)
        ) AS category_names
      FROM blogs b
      WHERE b.status = 'published' AND b.faculty_id = ?
      ORDER BY COALESCE(b.publish_at, b.created_at) DESC 
      LIMIT 10
      `,
      [faculty.id]
    );

    if (rows && rows.length > 0) {
      stories = rows.map((blog: any) => ({
        tag: blog.category_names || "General",
        tagClass: "bg-brand/10 text-brand ring-1 ring-brand/20",
        title: blog.title,
        body: blog.excerpt,
        image: blog.featured_image,
        link: `/blog/${blog.slug}`,
        date: blog.publish_at || blog.created_at,
        author_name: blog.author_name,
      }));
    }
  } catch (error) {
    console.error(`[FacultyBlogs] Failed to fetch blogs for ${facultySlug}:`, error);
    // Gracefully fail during build or runtime DB outages
    return null;
  }

  if (stories.length === 0) return null;

  const insightHeading = insightsText[facultySlug] || "Insights for your future.";

  return (
    <section className="py-16 md:py-24 bg-white relative z-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">From the blog</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-brand tracking-tight mb-4">
              {insightHeading}
            </h2>
            <p className="text-lg text-gray-600">
              Latest guides and stories from the {faculty.title} - careers, placements and student journeys.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#0caadd] text-white rounded-full font-medium hover:bg-opacity-90 transition-all shrink-0"
          >
            All Blogs
          </Link>
        </div>

        <FacultyBlogsSlider stories={stories} />
      </div>
    </section>
  );
}
