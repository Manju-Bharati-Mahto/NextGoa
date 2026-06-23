"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from 'lenis/react';

export function ScrollRestoration() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    // Force immediate scroll to top on route change to mimic native navigation
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
    }
  }, [pathname, lenis]);

  return null;
}
