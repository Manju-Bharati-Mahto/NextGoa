import { Metadata } from 'next';
import db from '@/lib/db';

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const [rows]: any = await db.query(
      "SELECT meta_title, meta_description, keywords, canonical_url, title, card_description FROM vacancies WHERE slug = ? AND is_deleted = 0 LIMIT 1",
      [slug]
    );
    
    if (rows && rows.length > 0) {
      const job = rows[0];
      const metadata: Metadata = {
        title: job.meta_title || job.title,
        description: job.meta_description || job.card_description,
      };

      if (job.keywords) {
        metadata.keywords = job.keywords.split(',').map((k: string) => k.trim());
      }
      
      if (job.canonical_url) {
        metadata.alternates = {
          canonical: job.canonical_url,
        };
      }

      return metadata;
    }
  } catch (error) {
    console.error("Error generating metadata for career:", error);
  }
  
  return {
    title: 'Vacancy - Parul University Goa',
    description: 'Explore career opportunities at Parul University Goa.',
  };
}

export default function CareerDetailsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
