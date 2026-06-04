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
  const { contact } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "@id": orgId,
    name: siteConfig.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: siteConfig.description,
    ...(socialProfiles.length ? { sameAs: socialProfiles } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.streetAddress,
      addressLocality: contact.address.addressLocality,
      addressRegion: contact.address.addressRegion,
      postalCode: contact.address.postalCode,
      addressCountry: contact.address.addressCountry,
    },
    ...(contact.geo.latitude && contact.geo.longitude
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: contact.geo.latitude,
            longitude: contact.geo.longitude,
          },
        }
      : {}),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact.phone,
      email: contact.email,
      contactType: "admissions",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
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

/** Breadcrumb trail. `path` is site-relative, e.g. "/programs/btech-cse". */
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
  /** Site-relative URL of the program page, e.g. "/programs/btech-cse". */
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
