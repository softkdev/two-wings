"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Button, Container } from "@/components/ui";
import Image from "next/image";
import Lottie from "lottie-react";
import rocketAnimation from "@/assets/animations/rocket-launching.json";
import { fadeInUp, scaleIn, staggerContainer, defaultTransition } from "@/lib/animations";

export function ReadyToLaunchSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 md:py-32">
      <Container>
        <motion.div
          className="relative overflow-hidden rounded-button border border-white/10 shadow-[0px_80px_200px_rgba(0,0,0,0.55)]"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={scaleIn}
          transition={defaultTransition}
        >
          {/* Background Pattern - Full width on mobile, left half on desktop */}
          <div className="absolute inset-0 md:inset-y-0 md:left-0 md:w-1/2 opacity-[0.39] blur-[2.9px]">
            <Image
              src="/pattern-bg.svg"
              alt=""
              className="w-full h-full object-cover object-center"
              width={1440}
              height={326}
              unoptimized
              aria-hidden="true"
            />
          </div>

          {/* Mobile Layout - Centered Content with Rocket at Bottom */}
          <div className="relative flex min-h-[600px] flex-col items-center justify-between px-6 py-12 text-center md:hidden">
            {/* Content Section - Centered */}
            <motion.div
              className="flex flex-1 flex-col items-center justify-center gap-4"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.h2
                className="text-[36px] leading-[100%] text-text-title font-sans font-semibold"
                variants={fadeInUp}
                transition={defaultTransition}
              >
                Ready to launch your project?
              </motion.h2>
              <motion.p
                className="text-lg leading-[26px] text-text-body font-sans"
                variants={fadeInUp}
                transition={defaultTransition}
              >
                High-quality design. Real results.
                <br />
                Fair pricing.
                <br />
                Let&apos;s make your vision take flight
              </motion.p>
              <motion.div
                className="mt-6 flex flex-col gap-4 w-full max-w-xs"
                variants={fadeInUp}
                transition={defaultTransition}
              >
                <Button className="w-full">Price Overview</Button>
                <Button variant="outline" className="w-full">
                  Our Work
                </Button>
              </motion.div>
            </motion.div>

            {/* Rocket - Centered at bottom on mobile */}
            <div className="relative mt-8 shrink-0 w-full max-w-[300px] mx-auto aspect-square" aria-hidden="true">
              <Lottie
                animationData={rocketAnimation}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Desktop Layout - Text Left, Rocket Right */}
          <div className="relative hidden min-h-[500px] md:flex md:items-center md:justify-between md:px-12 md:py-20">
            {/* Desktop Content - Left side */}
            <motion.div
              className="relative z-10 max-w-lg"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.h2
                className="text-5xl leading-[58px] text-text-title font-sans font-bold"
                variants={fadeInUp}
                transition={defaultTransition}
              >
                Ready to launch your project?
              </motion.h2>
              <motion.p
                className="mt-4 text-2xl leading-[30px] text-text-body font-sans"
                variants={fadeInUp}
                transition={defaultTransition}
              >
                High-quality design. Real results. Fair pricing. Let&apos;s make
                your vision take flight.
              </motion.p>
              <motion.div
                className="mt-8 flex flex-col gap-4 sm:flex-row"
                variants={fadeInUp}
                transition={defaultTransition}
              >
                <Button className="w-full sm:w-auto">Price Overview</Button>
                <Button variant="outline" className="w-full sm:w-auto">
                  Our Work
                </Button>
              </motion.div>
            </motion.div>

            {/* Desktop Rocket - Right side */}
            <div className="absolute bottom-0 right-0 h-full w-1/2 flex items-center justify-center overflow-hidden" aria-hidden="true">
              <div className="w-full h-full max-w-full max-h-full flex items-center justify-center relative z-10">
                <Lottie
                  animationData={rocketAnimation}
                  loop={true}
                  autoplay={true}
                  className="w-full h-full"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
