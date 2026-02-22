"use client";

import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui";
import { cn } from "@/lib";
import { useModal } from "@/contexts/ModalContext";
import { fadeInUp, defaultTransition } from "@/lib/animations";

const faqs = [
  {
    question: "What services does Two Wings offer?",
    answer:
      "We design and develop marketing websites, web apps, e-commerce experiences, and internal tools. We also provide strategy, branding, and on-going support.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Most marketing sites launch in 4–6 weeks. More complex dashboards or applications typically take 8–12 weeks depending on scope.",
  },
  {
    question: "What makes Two Wings different from other agencies?",
    answer:
      "We operate as a lean, remote team with enterprise-level standards. That means senior talent, fast delivery, and pricing that stays accessible.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes. We offer flexible retainers for improvements, new features, performance tuning, and dedicated support after launch.",
  },
  {
    question: "Can you work with my existing website or application?",
    answer:
      "Absolutely. We routinely optimize, redesign, or rebuild existing products while keeping your content, data, and integrations intact.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is project-based and tailored to your specific needs. We provide detailed proposals after understanding your requirements. Contact us for a custom quote.",
  },
  {
    question: "Do I need technical knowledge to work with you?",
    answer:
      "Not at all. We guide you through every step, translate technical decisions, and provide documentation plus training post-launch.",
  },
  {
    question: "What happens after the project is completed?",
    answer:
      "After launch, we provide training on how to manage your website or application, along with documentation. We offer ongoing support packages and are always available for future updates or expansions. We also provide a warranty period for bug fixes and adjustments.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(7); // Last item open by default
  const { openContactModal } = useModal();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-20 md:py-32">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <h2 className="text-[32px] md:text-[48px] leading-[38px] md:leading-[100%] text-text-title font-sans font-bold">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg md:text-[24px] leading-[26px] md:leading-[30px] text-text-body font-sans font-medium">
              Got questions? We&apos;ve got answers. Find everything you need to
              know about working with Two Wings.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={faq.question}
                  className={cn(
                    "rounded-[10px] flex bg-[#16181b] p-4 md:p-6 transition-all duration-300 border border-transparent",
                    isOpen
                      ? " flex-col gap-4 border-white/10"
                      : "h-[78px] md:h-[72px] items-center hover:border-white/10"
                  )}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={fadeInUp}
                  transition={defaultTransition}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="text-[16px] leading-container-x-sm text-text-title font-sans font-normal">
                      {faq.question}
                    </span>
                    <motion.svg
                      className="h-4 w-4 shrink-0 text-text-title"
                      fill="none"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={defaultTransition}
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.p
                        className="text-[16px] leading-container-x-sm text-text-body-2 font-sans font-normal"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={defaultTransition}
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            className="mt-12 flex flex-col items-center gap-4 text-center"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.1 }}
          >
            <p className="text-lg md:text-[24px] leading-[26px] md:leading-[30px] text-text-body font-sans font-medium">
              Still have questions? We&apos;re here to help!
            </p>
            <motion.button
              type="button"
              onClick={openContactModal}
              className="h-12 px-6 rounded-button bg-secondary-base text-background-DEFAULT text-[16px] leading-container-x-sm font-sans font-bold hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={defaultTransition}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
