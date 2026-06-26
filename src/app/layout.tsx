import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { AnimatedFavicon } from "@/components/layout/AnimatedFavicon";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body>
        <AnimatedFavicon />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}