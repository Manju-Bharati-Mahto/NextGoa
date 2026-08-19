import Link from "next/link";
import db from "@/lib/db";

export default async function SidebarLatestPosts({ currentBlogId }: { currentBlogId: number }) {
  const [rows]: any = await db.query(
    `
    SELECT title, slug 
    FROM blogs 
    WHERE id != ? AND status = 'published' 
    ORDER BY COALESCE(publish_at, created_at) DESC 
    LIMIT 3
    `,
    [currentBlogId]
  );

  if (!rows || rows.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="bg-gradient-to-r from-brand to-ocean px-6 py-3.5 border-b border-black/5">
        <h3 className="text-white font-semibold text-[17px] tracking-wide font-poppins">
          Latest Posts
        </h3>
      </div>
      <div className="p-3">
        {rows.map((post: any) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block px-4 py-3.5 rounded-lg hover:bg-brand/5 border-b border-gray-100 last:border-0 transition-colors group"
          >
            <h4 className="font-medium text-[15px] leading-snug text-ink/80 group-hover:text-brand line-clamp-2 transition-colors">
              {post.title}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
}
