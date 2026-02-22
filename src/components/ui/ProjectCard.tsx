"use client";

import type { ProjectCardProps } from "@/types/ui";
import { motion } from "framer-motion";
import { cn } from "@/lib";
import Link from "next/link";
import { defaultTransition } from "@/lib/animations";

export function ProjectCard({
  image,
  title,
  description,
  href,
  className,
}: ProjectCardProps) {
  return (
    <motion.article
      className={cn(
        "group flex flex-col",
        "bg-[#0f1317] border border-white/10 rounded-[24px]",
        "overflow-hidden shadow-[0px_20px_60px_rgba(0,0,0,0.35)]",
        "transition-all duration-300",
        "hover:border-primary-base/40",
        className
      )}
      whileHover={{ y: -6 }}
      transition={defaultTransition}
    >
      {/* Image/Mockup Container */}
      <div className="relative bg-[#050a10] p-2 overflow-hidden">
        <motion.div
          className="relative z-10 rounded-[14px] overflow-hidden flex items-center justify-center min-h-[260px]"
          whileHover={{ scale: 1.05 }}
          transition={defaultTransition}
        >
          <div className="relative w-full h-[260px]">{image}</div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        <h3 className="text-[18px] leading-[28px] font-normal text-text-title">
          {title}
        </h3>
        <p className="text-base ellipse-line-2 pb-1 leading-container-x-sm text-text-body font-sans">
          {description}
        </p>

        {href && (
          <Link
            href={href}
            className="inline-flex items-center gap-2 mt-2 text-text-title font-sans text-base leading-container-x-sm hover:text-secondary-base transition-colors"
          >
            View Project
            <svg
              className="w-5 h-5 text-secondary-base shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m-6-6 6 6-6 6"
              />
            </svg>
          </Link>
        )}
      </div>
    </motion.article>
  );
}
