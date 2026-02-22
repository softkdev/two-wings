"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
}

export function ImageCarousel({ images, alt, className }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) return null;

  const goTo = (index: number) => {
    setCurrentIndex(
      ((index % images.length) + images.length) % images.length
    );
  };

  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative aspect-video w-full overflow-hidden rounded-[14px] bg-[#050a10]">
        <Image
          src={images[currentIndex]!}
          alt={`${alt} - ${currentIndex + 1}`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 80vw"
          priority
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(currentIndex - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            aria-label="Previous image"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(currentIndex + 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            aria-label="Next image"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-colors",
                  i === currentIndex
                    ? "bg-secondary-base"
                    : "bg-white/30 hover:bg-white/50"
                )}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
