import Link from "next/link";

const categories = [
  "Academic",
  "Placement",
  "Research",
  "Student Life",
  "Admissions Tips"
];

const slugifyCategory = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function SidebarCategories() {
  return (
    <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="bg-gradient-to-r from-brand to-ocean px-6 py-3.5 border-b border-black/5">
        <h3 className="text-white font-semibold text-[17px] tracking-wide font-poppins">
          Categories
        </h3>
      </div>
      <div className="p-5 flex flex-wrap gap-2.5">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/blog/category/${slugifyCategory(cat)}`}
            className="px-4 py-1.5 bg-gray-100 text-ink/80 hover:bg-brand hover:text-white rounded text-[14px] font-medium transition-colors shadow-sm"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
}
