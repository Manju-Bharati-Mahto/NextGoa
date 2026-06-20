import { NextResponse } from 'next/server';
import { getAllProgrammeSlugs, getProgrammeData } from '@/data/programmes';
import { homeFaqs, aboutFaqs, admissionsFaqs, campusLifeFaqs } from '@/data/page-faqs';

export async function GET() {
  // Fetch ALL programmes data dynamically from the codebase
  const allProgrammes = getAllProgrammeSlugs()
    .map(slug => getProgrammeData(slug))
    .filter(Boolean); // Filter out any undefined ones just in case

  // Compile the ultimate Knowledge Graph containing the entire website's data
  const comprehensiveKnowledge = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "name": "Parul University Goa",
    "alternateName": ["PU Goa", "NextGoa", "Parul University Goa Campus"],
    "url": "https://www.nextgoa.com",
    "description": "Parul University Goa Campus is a premier higher educational institution offering specialized programs in Management, Applied Sciences, Allied Healthcare, Nursing, Pharmacy, Physiotherapy, Hotel Management, and PhD research. Known for its unique 'Study Abroad Pathway' and 'Beyond Placements' initiative, PU Goa blends world-class academics with the vibrant lifestyle of Goa.",
    "location": {
      "@type": "Place",
      "name": "Parul University Goa Campus",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Goa",
        "addressRegion": "Goa",
        "addressCountry": "IN"
      }
    },
    // The entire FAQ database
    "faqs": {
      "home": homeFaqs,
      "about": aboutFaqs,
      "admissions": admissionsFaqs,
      "campusLife": campusLifeFaqs
    },
    // The entire Programmes database (every course, fee, duration, description)
    "programmes": allProgrammes,
    "uniqueSellingPropositions": [
      {
        "name": "Study Abroad Pathway",
        "description": "Complete your first two years in Goa and transition to international partner universities for your final years, saving up to 50% on total tuition costs."
      },
      {
        "name": "Beyond Placements",
        "description": "Guaranteed premium placement assistance with top-tier companies, specialized interview prep, and career counseling."
      }
    ]
  };

  // Serve this as a raw JSON file so AI LLM crawlers can ingest the whole site
  return NextResponse.json(comprehensiveKnowledge, {
    headers: {
      'Content-Type': 'application/json',
      // Cache heavily but allow revalidation if the site redeploys
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
