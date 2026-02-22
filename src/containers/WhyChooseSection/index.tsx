"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Container, Logo, ReasonCard } from "@/components/ui";
import type { ReasonCardProps } from "@/components/ui";
import { fadeInUp, scaleIn, staggerContainer, defaultTransition } from "@/lib/animations";

const reasons: ReasonCardProps[] = [
  {
    title: "Smart Pricing",
    description:
      "Significantly lower costs without compromising on quality or results.",
    accent: "from-[#0a2c38] to-[#09161b]",
    align: "left",
  },
  {
    title: "World-Class Quality",
    description:
      "Professional designs and clean code that meet enterprise standards.",
    accent: "from-[#09263a] to-[#0c171d]",
    align: "right",
  },
  {
    title: "Fast Delivery",
    description:
      "Efficient workflows and modern tools mean faster project completion.",
    accent: "from-[#091c2f] to-[#080f18]",
    align: "left",
  },
  {
    title: "Reliable & Secure",
    description:
      "Built with best practices, security, and scalability in mind.",
    accent: "from-[#0c1f2c] to-[#0b141a]",
    align: "right",
  },
  {
    title: "Growth-Focused",
    description: "Solutions designed to scale with your business.",
    accent: "from-[#0c1d29] to-[#0a1118]",
    align: "left",
  },
  {
    title: "Collaborative Process",
    description: "We work closely with you every step of the way.",
    accent: "from-[#0a1e2f] to-[#09121c]",
    align: "right",
  },
];

export function WhyChooseSection() {
  const leftItems = reasons.filter((item) => item.align === "left");
  const rightItems = reasons.filter((item) => item.align === "right");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#0e1d2b_0%,#050609_60%)] opacity-20" />
      <Container className="relative z-10">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={defaultTransition}
        >
          <h2 className="mt-4 text-[32px] md:text-[48px] leading-[38px] md:leading-[58px] text-text-title font-sans font-bold">
            Why Choose Two Wings?
          </h2>
          <p className="mt-4 text-lg md:text-2xl leading-[26px] md:leading-[30px] text-text-body font-sans">
            Professional quality at smart prices. We deliver exceptional results
            that fit your budget.
          </p>
        </motion.div>

        {/* Desktop layout */}
        <div className="mt-16 hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-10 relative">
          {/* Overlay SVG for connecting lines */}
          <svg
            className="absolute inset-0 pointer-events-none z-0"
            style={{ width: "100%", height: "100%" }}
          >
            {/* Lines from left cards to center circle */}
            {leftItems.map((_, index) => {
              // Approximate positions: cards are in flex-col with gap-10
              // Center circle is at 50% height, 50% of middle column
              const cardY = index * 200 + 100; // Approximate card center Y
              const centerX = 50; // Center of middle column (percentage)
              const centerY = 50; // Center of circle (percentage)
              const cardX = 25; // Left side of left column (percentage)
              
              return (
                <line
                  key={`left-${index}`}
                  x1={`${cardX}%`}
                  y1={`${cardY}px`}
                  x2={`${centerX}%`}
                  y2={`${centerY}%`}
                  stroke="#f1d48f"
                  strokeWidth="1"
                  strokeOpacity="0.6"
                  className="drop-shadow-sm"
                />
              );
            })}
            
            {/* Lines from right cards to center circle */}
            {rightItems.map((_, index) => {
              const cardY = index * 200 + 100;
              const centerX = 50;
              const centerY = 50;
              const cardX = 75; // Right side of right column (percentage)
              
              return (
                <line
                  key={`right-${index}`}
                  x1={`${centerX}%`}
                  y1={`${centerY}%`}
                  x2={`${cardX}%`}
                  y2={`${cardY}px`}
                  stroke="#f1d48f"
                  strokeWidth="1"
                  strokeOpacity="0.6"
                  className="drop-shadow-sm"
                />
              );
            })}
          </svg>

          <motion.div
            className="flex flex-col gap-10 relative z-10"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {leftItems.map((reason) => (
              <motion.div key={reason.title} className="relative" variants={fadeInUp} transition={defaultTransition}>
                <ReasonCard {...reason} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center z-10"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={scaleIn}
            transition={defaultTransition}
          >
            {/* Center circle with logo */}
            <div className="relative flex h-[360px] w-[360px] items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle,#09121c_0%,#05080d_70%)] shadow-[0_0_120px_rgba(2,12,24,0.6)]">
              <div className="absolute inset-[18%] rounded-full border border-white/5" />
              <div className="absolute inset-[32%] rounded-full border border-white/5 opacity-60" />
              <Logo className="relative z-10 scale-110" />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-10 relative z-10"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {rightItems.map((reason) => (
              <motion.div key={reason.title} className="relative" variants={fadeInUp} transition={defaultTransition}>
                <ReasonCard {...reason} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile layout */}
        <motion.div
          className="mt-16 grid gap-6 lg:hidden"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="flex justify-center" variants={fadeInUp} transition={defaultTransition}>
            <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle,#09121c_0%,#05080d_70%)]">
              <Logo className="scale-90" />
            </div>
          </motion.div>
          {reasons.map((reason) => (
            <motion.div key={reason.title} variants={fadeInUp} transition={defaultTransition}>
              <ReasonCard {...reason} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
