"use client";

import { useScrollPosition } from "@/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { defaultTransition } from "@/lib/animations";

export function ScrollToTop() {
  const scrollY = useScrollPosition();
  const isVisible = scrollY > 300;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={defaultTransition}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-secondary-base text-background-DEFAULT flex items-center justify-center shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-base focus-visible:ring-offset-2 focus-visible:ring-offset-background-DEFAULT"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
