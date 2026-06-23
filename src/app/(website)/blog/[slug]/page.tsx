import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import db from "@/lib/db";



export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  
const { slug } = await params;

const [rows]: any = await db.query(
  `
  SELECT *
  FROM blogs
  WHERE slug=?
  LIMIT 1
  `,
  [slug]
);

if (rows.length === 0) {
  notFound();
}

const story = rows[0];
const sections = JSON.parse(story.content || "[]");
const [faqs]: any = await db.query(
  `
  SELECT *
  FROM blog_faqs
  WHERE blog_id=?
  ORDER BY sort_order
  `,
  [story.id]
);
  return (
    <main className="min-h-screen bg-white pb-16">
      <article className="pt-0">
        {/* Hero Section */}
        <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src={story.featured_image}
            alt={story.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto mt-16">
            <div className="text-white/80 text-sm md:text-base font-medium mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link> &gt;{" "}
              <Link href="/blog" className="hover:text-white transition-colors">Blogs</Link> &gt;{" "}
              <span className="text-white">{story.title}</span>
            </div>
            <h1 className="section-heading text-white mb-2 max-w-4xl drop-shadow-md">
              {story.title}
            </h1>
          </div>
        </section>

        
        {/* Main Content */}
        <section className="max-w-7xl mx-auto w-full px-[50px] py-16 sm:py-24">

          <div className="space-y-8">

  {sections.map((section: any, index: number) => {

    switch (section.tag) {

      case "h2":
        return (
         <div key={index}>
          <h2 className="text-4xl font-bold mb-4">
            {section.title}
          </h2>

          <div
            className="section-body text-ink/80"
            dangerouslySetInnerHTML={{
              __html: section.details,
            }}
          />
        </div>
        );

      case "h3":
        return (
          <div key={index}>
  <h3 className="text-3xl font-semibold mb-4">
    {section.title}
  </h3>

  <div
    className="section-body text-ink/80"
    dangerouslySetInnerHTML={{
      __html: section.details,
    }}
  />
</div>
        );

      case "h4":
        return (
          <div key={index}>
  <h4 className="text-2xl font-semibold mb-4">
    {section.title}
  </h4>

  <div
    className="section-body text-ink/80"
    dangerouslySetInnerHTML={{
      __html: section.details,
    }}
  />
</div>
        );

      default:
        return (
        <div
  key={index}
  className="section-body text-ink/80"
  dangerouslySetInnerHTML={{
    __html: section.details,
  }}
/>
        );

    }

  })}

</div>

          </section>
          {faqs.length > 0 && (

<section className="max-w-7xl mx-auto px-[50px] py-16">

<h2 className="section-subheading mb-10">

Frequently Asked Questions

</h2>

<div className="space-y-5">

{faqs.map((faq:any)=>(

<details
key={faq.id}
className="border rounded-xl overflow-hidden"
>

<summary
className="cursor-pointer bg-gray-100 px-6 py-5 font-semibold"
>

{faq.question}

</summary>

<div
className="px-6 py-5"
dangerouslySetInnerHTML={{
__html:faq.answer
}}
/>

</details>

))}

</div>

</section>

)}
      </article>
    </main>
  );
}
