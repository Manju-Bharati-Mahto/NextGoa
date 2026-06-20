"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="flex-1 flex flex-col min-h-screen">
        {/* The Overlay Columns */}
        <div className="fixed inset-0 z-[9999] pointer-events-none flex">
          <motion.div
            className="w-full h-full bg-[#7ec2f3]"
            style={{ willChange: "transform" }}
            initial={{ x: "0%" }}
            animate={{ 
              x: "100vw",
              transition: { 
                duration: 0.4, 
                ease: [0.22, 1, 0.36, 1]
              } 
            }}
            exit={{ 
              x: ["-100vw", "0%"],
              transition: { 
                duration: 0.4, 
                ease: [0.22, 1, 0.36, 1]
              } 
            }}
          />
        </div>
        <ScrollToTopInstant />
        {/* Page Content */}
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function ScrollToTopInstant() {
  const pathname = usePathname();
  
  // Use standard static import hook
  useEffect(() => {
    // Wait for the blue columns to completely cover the screen (400ms)
    // before we snap the scroll to the top. This hides the jump!
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
      
      // A safety backup snap just in case Next.js tries to be clever
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 50);
    }, 400);

    return () => clearTimeout(timeout);
  }, [pathname]);
  
  return null;
}
