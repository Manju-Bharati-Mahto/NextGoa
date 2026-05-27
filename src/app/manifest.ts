import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * Generates /manifest.webmanifest. Improves mobile/PWA signals and gives the
 * "add to home screen" experience. Icons are referenced from /public — add the
 * real PNGs (192px and 512px) when brand assets are exported from Figma.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff", // TODO: set to brand primary once design tokens are in
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
