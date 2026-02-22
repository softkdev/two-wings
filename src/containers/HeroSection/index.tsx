"use client";

import { Button, Container } from "@/components/ui";
import { SparkleIconBadge } from "@/assets/icons";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, defaultTransition } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="bg-background-section-hero absolute opacity-50 h-full w-full" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Right: 3D Asset */}
          <div className="relative hidden lg:block">
            <motion.div
              className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary-base/20 blur-[120px]"
              aria-hidden="true"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ ...defaultTransition, delay: 0.5 }}
            />
            <motion.div
              className="pointer-events-none absolute -bottom-16 -left-20 h-64 w-64 rounded-full bg-secondary-base/20 blur-[100px]"
              aria-hidden="true"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ ...defaultTransition, delay: 0.6 }}
            />

            <motion.div
              className="relative z-10 w-full max-w-[519px] transition-transform duration-500 hover:scale-105"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...defaultTransition, delay: 0.4 }}
            >
              <Image
                src="/assets/bg-holder.png"
                alt="Two Wings Dashboard Development - Professional web development services"
                width={519}
                height={569}
                priority
                className="h-auto w-full object-contain"
              />
            </motion.div>
          </div>
          {/* Left: Text Content */}
          <div className="text-center lg:text-left max-w-[584px] w-full justify-self-center lg:justify-self-start">
            <motion.div
              className="flex justify-center lg:justify-start mb-8"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ ...defaultTransition, delay: 0.1 }}
            >
              <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-4 py-2 rounded-[50px] flex items-center gap-2 transition-all duration-300 hover:border-[rgba(255,255,255,0.2)]">
                <div className="w-6 h-6 shrink-0">
                  <SparkleIconBadge className="w-full h-full" />
                </div>
                <span className="font-sans text-[16px] leading-[24px] text-[#4dbbcf]">
                  Premium Quality at Smart Prices
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="font-display font-bold text-[36px] md:text-[48px] lg:text-[64px] leading-normal text-text-title mb-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.15,
                  },
                },
              }}
            >
              <motion.span
                className="block"
                variants={fadeInUp}
                transition={defaultTransition}
              >
                Two wings
              </motion.span>
              <motion.span
                className="block"
                variants={fadeInUp}
                transition={defaultTransition}
              >
                from vision to flight
              </motion.span>
            </motion.h1>

            <motion.p
              className="font-sans font-medium text-[20px] md:text-[24px] leading-[30px] text-text-body mb-8"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ ...defaultTransition, delay: 0.3 }}
            >
              We build high-performing websites with Custom Code, No-Code, and
              Low-Code—tailored to your goals.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ ...defaultTransition, delay: 0.4 }}
            >
              <Button
                variant="primary"
                className="bg-secondary-base text-background-DEFAULT rounded-[32px] h-[48px] w-full sm:w-[174px] px-4"
              >
                Price Overview
              </Button>
              <Button
                variant="outline"
                className="border border-secondary-base text-secondary-base rounded-[32px] h-[48px] w-full sm:w-[174px] px-4"
              >
                Oure Work
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
