/**
 * Typed builders for the schema.org structures this site emits as JSON-LD.
 *
 * Why these specific types:
 * - CollegeOrUniversity / EducationalOrganization → entity definition for
 *   Google's Knowledge Graph and the primary signal AI answer engines use to
 *   describe the institution.
 * - BreadcrumbList → breadcrumb rich results + clearer page hierarchy.
 * - FAQPage → eligible for FAQ rich results and heavily mined by AI engines
 *   (AI Overviews, ChatGPT, Perplexity) when answering questions.
 * - Course → program pages become eligible for the Courses rich result.
 *
 * Keep the output minimal and accurate; never emit markup for content that
 * isn't visible on the page (Google penalizes mismatched structured data).
 */
import { siteConfig, SITE_URL, socialProfiles } from "@/lib/site-config";

const orgId = `${SITE_URL}/#organization`;

/**
 * The institution entity. Emit once site-wide (in the root layout).
 * Uses a stable @id so other nodes (Course.provider, breadcrumbs) can reference it.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "@id": "https://goa.paruluniversity.ac.in/#university",
    name: "Parul University Goa",
    url: "https://goa.paruluniversity.ac.in/",
    logo: "https://goa.paruluniversity.ac.in/logo.svg",
    image: "https://goa.paruluniversity.ac.in/goa-uploads/pages/hero/d92f5cf7-a1e1-4666-a83d-c84b6eb1b6d1-0f028141-b9a1-4710-b56f-18b3e5479cad-hero-bg.jpg",
    description: "Parul University Goa is Goa's First State Private University, backed by three decades of teaching, research, and placements at Parul University in Gujarat. Admissions open for 2026.",
    telephone: "+91-18008909090",
    email: "admissions@goa.paruluniversity.ac.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near ONGC, Betul",
      addressLocality: "Quepem",
      addressRegion: "Goa",
      postalCode: "403723",
      addressCountry: "IN"
    },
    sameAs: [
      "https://www.facebook.com/p/Parul-University-Goa-100084545576383/",
      "https://www.instagram.com/paruluniversitygoa/",
      "https://www.linkedin.com/company/parul-university-goa",
      "https://www.youtube.com/channel/UCwn-ALLelk9BJziTZCU5S4g"
    ]
  };
}

export function baseOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Parul University Goa",
    alternateName: "Goa Parul University",
    url: "https://goa.paruluniversity.ac.in/",
    logo: "https://goa.paruluniversity.ac.in/logo.svg"
  };
}

/** WebSite entity enabling the sitelinks search box; emit once in root layout. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: siteConfig.name,
    publisher: { "@id": orgId },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export type Crumb = { name: string; path: string };

/** Breadcrumb trail. `path` is site-relative, e.g. "/faculty/btech-cse". */
export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

export type FaqItem = { question: string; answer: string };

/** FAQ block. Only include Q&As that are actually rendered on the page. */
export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
}

export type CourseInfo = {
  name: string;
  description: string;
  /** Site-relative URL of the program page, e.g. "/faculty/btech-cse". */
  path: string;
  /** e.g. "Bachelor's degree", "Master's degree", "Doctoral". */
  credential?: string;
};

/** A single program/course for Course rich results, linked to the org as provider. */
export function courseSchema(course: CourseInfo) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    url: `${SITE_URL}${course.path}`,
    provider: { "@type": "CollegeOrUniversity", "@id": orgId, name: siteConfig.legalName },
    ...(course.credential
      ? {
          educationalCredentialAwarded: {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: course.credential,
          },
        }
      : {}),
  };
}
