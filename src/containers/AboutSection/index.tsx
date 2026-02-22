"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import Image from "next/image";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/animations";

const highlights = [
  {
    title: "Our Mission",
    description:
      "Make world-class web development accessible and affordable for everyone.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9966 21.9937C17.5178 21.9937 21.9937 17.5179 21.9937 11.9966C21.9937 6.47537 17.5178 1.99951 11.9966 1.99951C6.47531 1.99951 1.99945 6.47537 1.99945 11.9966C1.99945 17.5179 6.47531 21.9937 11.9966 21.9937Z"
          stroke="#0A0C0F"
          strokeWidth="1.99942"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.9966 17.9946C15.3093 17.9946 17.9948 15.3091 17.9948 11.9963C17.9948 8.68356 15.3093 5.99805 11.9966 5.99805C8.68381 5.99805 5.99829 8.68356 5.99829 11.9963C5.99829 15.3091 8.68381 17.9946 11.9966 17.9946Z"
          stroke="#0A0C0F"
          strokeWidth="1.99942"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.9966 13.9959C13.1008 13.9959 13.996 13.1007 13.996 11.9965C13.996 10.8922 13.1008 9.99707 11.9966 9.99707C10.8923 9.99707 9.99713 10.8922 9.99713 11.9965C9.99713 13.1007 10.8923 13.9959 11.9966 13.9959Z"
          stroke="#0A0C0F"
          strokeWidth="1.99942"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Our Values",
    description: "Quality, transparency, and client success above all else.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.99945 9.49747C1.99947 8.38499 2.33695 7.29869 2.9673 6.38203C3.59766 5.46538 4.49125 4.7615 5.53004 4.36335C6.56883 3.96521 7.70396 3.89153 8.7855 4.15206C9.86704 4.41258 10.8441 4.99505 11.5877 5.82253C11.64 5.87853 11.7034 5.92317 11.7737 5.95369C11.844 5.98421 11.9199 5.99996 11.9966 5.99996C12.0732 5.99996 12.1491 5.98421 12.2194 5.95369C12.2898 5.92317 12.3531 5.87853 12.4054 5.82253C13.1467 4.98967 14.124 4.40231 15.2073 4.13862C16.2906 3.87493 17.4285 3.94742 18.4696 4.34644C19.5106 4.74546 20.4055 5.45209 21.0351 6.37227C21.6646 7.29246 21.999 8.38255 21.9937 9.49747C21.9937 11.7868 20.4941 13.4963 18.9945 14.9959L13.5041 20.3073C13.3178 20.5213 13.0882 20.6931 12.8304 20.8115C12.5726 20.9299 12.2925 20.992 12.0088 20.9938C11.7252 20.9956 11.4444 20.937 11.1851 20.8219C10.9258 20.7068 10.694 20.5379 10.505 20.3263L4.99858 14.9959C3.49902 13.4963 1.99945 11.7968 1.99945 9.49747Z"
          stroke="#0A0A0F"
          strokeWidth="1.99942"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Our Approach",
    description: "Smart solutions tailored to your needs and budget.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.9957 13.996C15.1956 12.9963 15.6955 12.2965 16.4953 11.4968C17.495 10.597 17.9948 9.2974 17.9948 7.99778C17.9948 6.40694 17.3629 4.88126 16.238 3.75636C15.1131 2.63147 13.5874 1.99951 11.9966 1.99951C10.4057 1.99951 8.88004 2.63147 7.75514 3.75636C6.63025 4.88126 5.99829 6.40694 5.99829 7.99778C5.99829 8.99749 6.19823 10.1971 7.49786 11.4968C8.19765 12.1966 8.79748 12.9963 8.99742 13.996"
          stroke="#0A0C0F"
          strokeWidth="1.99942"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.99738 17.9946H14.9956"
          stroke="#0A0C0F"
          strokeWidth="1.99942"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.99713 21.9937H13.996"
          stroke="#0A0C0F"
          strokeWidth="1.99942"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-20 md:py-32">
      <Container>
        <motion.div
          className="grid gap-12 lg:grid-cols-2 lg:items-center"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Illustration */}
          <motion.div
            className="relative order-2 lg:order-1"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <Image
              src="/about-us.svg"
              alt="Two Wings team - Professional designers and developers creating digital solutions"
              width={520}
              height={520}
              unoptimized
              className="opacity-90 transition-opacity duration-300 hover:opacity-100"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="order-1 lg:order-2 flex flex-col gap-10"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            {/* Header */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[32px] md:text-[48px] leading-[38px] md:leading-[100%] text-text-title font-sans font-bold">
                About Us
              </h2>
              <p className="text-lg md:text-[24px] leading-[26px] md:leading-[30px] text-text-body font-sans font-medium">
                We&apos;re a professional team of designers and developers
                helping brands soar digitally.
              </p>
              <p className="text-lg md:text-[24px] leading-[26px] md:leading-[30px] text-text-body font-sans font-medium">
                By leveraging the latest technologies and efficient workflows,
                we deliver the same quality you&apos;d expect from high-end
                agencies — but at a fraction of the cost.
              </p>
            </div>

            {/* Highlights */}
            <div className="flex flex-col gap-8">
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  className="flex gap-4 items-center transition-all duration-300 hover:translate-x-1"
                  variants={fadeInUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={defaultTransition}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center justify-center rounded-[10px] w-12 h-12 shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <div className="p-3 rounded-[10px] text-primary-base from-[#48ACBE] to-[#29ADC5] bg-linear-to-b group">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex flex-col font-sans">
                    <p className="text-[18px] leading-[28px] text-primary-base font-normal transition-colors duration-300">
                      {item.title}
                    </p>
                    <p className="text-[16px] leading-container-x-sm text-text-body font-normal">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={defaultTransition}
              className="h-12 px-6 rounded-button bg-secondary-base text-background-DEFAULT text-[16px] leading-container-x-sm font-sans font-bold hover:opacity-90 transition-all duration-300 w-fit hover:scale-105"
            >
              Discover More
            </motion.button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
