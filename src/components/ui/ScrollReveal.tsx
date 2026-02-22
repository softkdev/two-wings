"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface ScrollRevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  once?: boolean;
  amount?: number;
}

export function ScrollReveal({
  children,
  variants = fadeInUp,
  className,
  once = true,
  amount = 0.2,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      animate={shouldReduceMotion || isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
