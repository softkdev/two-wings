"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { StatItem } from "@/components/ui";
import { STATS } from "@/lib";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/animations";

export function StatsBar() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="w-full border border-white/10 bg-[#16181b] px-6 py-8 md:px-12 lg:px-16">
        {/* Mobile */}
        <div className="flex flex-col gap-10 md:hidden">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="flex flex-col items-center gap-4 text-center"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <StatItem
                value={stat.value}
                label={stat.label}
                color={stat.color as "primary" | "secondary"}
              />
              {index < STATS.length - 1 && (
                <span className="h-px w-16 bg-white/15 mx-auto" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center justify-center gap-12 lg:gap-16">
          {STATS.map((stat, index) => (
            <Fragment key={stat.id}>
              <motion.div variants={fadeInUp} transition={defaultTransition}>
                <StatItem
                  value={stat.value}
                  label={stat.label}
                  color={stat.color as "primary" | "secondary"}
                />
              </motion.div>
              {index < STATS.length - 1 && (
                <span className="hidden md:block h-20 w-px bg-white/20" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
