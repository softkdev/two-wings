"use client";

import { motion } from "framer-motion";
import { defaultTransition } from "@/lib/animations";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={defaultTransition}
    >
      {children}
    </motion.div>
  );
}
