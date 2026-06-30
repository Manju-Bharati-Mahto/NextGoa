import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "../globals.css";
import { gotham, poppins } from "@/lib/fonts";
import { siteConfig, SITE_URL } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
const EnquiryModal = dynamic(() => import("@/components/layout/EnquiryModal").then((mod) => mod.EnquiryModal));
const DownloadBrochureModal = dynamic(() => import("@/components/admissions/DownloadBrochureModal").then((mod) => mod.DownloadBrochureModal));
const DownloadPlacementReportModal = dynamic(() => import("@/components/admissions/DownloadPlacementReportModal").then((mod) => mod.DownloadPlacementReportModal));
const CampusVisitModal = dynamic(() => import("@/components/layout/CampusVisitModal").then((mod) => mod.CampusVisitModal));
import FloatingCta from "@/components/layout/FloatingCta";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { ScrollRestoration } from "@/components/layout/ScrollRestoration";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  verification: {
    google: "KtdNIJ_eHwvI8f08Lf-HtQs88inCceXYwZuLFy9SaUo",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    url: SITE_URL,
    locale: siteConfig.locale,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: true, address: true, email: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={websiteSchema()} />
      <ScrollRestoration />

      <SiteHeader />

      {children}

      <SiteFooter />

      <EnquiryModal />
      <DownloadBrochureModal />
      <CampusVisitModal />
      <FloatingCta />
      <ScrollToTop />
    </>
  );
}
