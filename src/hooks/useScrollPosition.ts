/**
 * useScrollPosition Hook
 *
 * Track scroll position for scroll-based effects
 *
 * @example
 * const scrollY = useScrollPosition();
 * const isScrolled = scrollY > 100;
 */

"use client";

import { useState, useEffect } from "react";
import { debounce } from "@/lib";

export function useScrollPosition(): number {
  const [scrollY, setScrollY] = useState(() => {
    if (typeof window !== "undefined") {
      return window.scrollY;
    }
    return 0;
  });

  useEffect(() => {
    const handleScroll = debounce(() => {
      setScrollY(window.scrollY);
    }, 100);

    // Add listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}

/**
 * Check if page is scrolled past a threshold
 */
export function useIsScrolled(threshold = 50): boolean {
  const scrollY = useScrollPosition();
  return scrollY > threshold;
}
