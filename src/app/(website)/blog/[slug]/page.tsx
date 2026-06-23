import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { stories } from "@/data/stories";
import { Quote } from "lucide-react";

export async function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);

  if (!story) notFound();

  // Separate quote block and content blocks
  const quoteBlock = story.blocks.find(b => b.type === 'blockquote');
  const contentBlocks = story.blocks.filter(b => b.type !== 'blockquote');

  return (
    <main className="min-h-screen bg-white pb-16">
      <article className="pt-0">
        {/* Hero Section */}
        <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src={story.image}
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

        {/* Blockquote Section */}
        {quoteBlock && (
          <section className="bg-[#f7f7f7] px-[50px] flex justify-center border-b border-gray-200 py-16 sm:py-24">
            <div className="max-w-7xl w-full text-center">
              <Quote className="w-12 h-12 text-[#ff4b5c] mx-auto mb-6 opacity-80" />
              <blockquote className="section-subheading text-ink leading-relaxed">
                "{quoteBlock.content}"
              </blockquote>
            </div>
          </section>
        )}

        {/* Main Content */}
        <section className="max-w-7xl mx-auto w-full px-[50px] py-16 sm:py-24">
          {contentBlocks.map((block, idx) => {
            if (block.type === "h2") {
              return (
                <h2 key={idx} className="section-subheading font-bold text-ink mt-12 mb-6">
                  {block.content}
                </h2>
              );
            }
            if (block.type === "h3") {
              return (
                <h3 key={idx} className="section-subheading text-ink mt-10 mb-4" style={{ fontSize: '1.25em' }}>
                  {block.content}
                </h3>
              );
            }
            if (block.type === "h4") {
              return (
                <h4 key={idx} className="section-body font-bold text-ink mt-8 mb-4">
                  {block.content}
                </h4>
              );
            }
            if (block.type === "p") {
              // Handle faux bullet points
              if (block.content?.startsWith('•')) {
                const items = block.content.split('•').filter(Boolean).map(i => i.trim());
                return (
                  <ul key={idx} className="list-disc list-outside ml-6 mb-6 space-y-2 section-body text-ink/80">
                    {items.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                );
              }
              return (
                <p key={idx} className="section-body text-ink/80 mb-6">
                  {block.content}
                </p>
              );
            }
            if (block.type === "ul" || block.type === "ol") {
              const Tag = block.type as "ul" | "ol";
              return (
                <Tag key={idx} className="list-disc list-outside ml-6 mb-6 space-y-2 section-body text-ink/80">
                  {block.items?.map((item, i) => (
                    <li key={i}>{item as string}</li>
                  ))}
                </Tag>
              );
            }
            if (block.type === "faq") {
              const faqs = block.items as { question: string; answer: string; }[];
              return (
                <div key={idx} className="my-8 space-y-4">
                  {faqs?.map((faq, i) => (
                    <details key={i} className="group bg-[#f7f7f7] rounded-lg border border-gray-200 overflow-hidden">
                      <summary className="cursor-pointer font-bold section-body text-ink px-6 py-4 flex justify-between items-center group-open:bg-gray-100 transition-colors">
                        {faq.question}
                        <span className="text-2xl font-light text-gray-400 group-open:rotate-45 transition-transform duration-200">+</span>
                      </summary>
                      <div className="px-6 pb-4 pt-2 section-body text-ink/80 border-t border-gray-200">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              );
            }
            return null;
          })}
        </section>
      </article>
    </main>
  );
}
