"use client";

import { useScrollPosition } from "@/hooks";
import { cn } from "@/lib";

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
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-40",
        "w-12 h-12 rounded-full",
        "bg-secondary-base text-background-DEFAULT",
        "flex items-center justify-center",
        "shadow-lg hover:shadow-xl",
        "transition-all duration-300",
        "hover:scale-110 active:scale-95",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-base focus-visible:ring-offset-2 focus-visible:ring-offset-background-DEFAULT",
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
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
    </button>
  );
}
