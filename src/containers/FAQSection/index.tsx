"use client";

import { useState } from "react";
import { Button, Container } from "@/components/ui";
import { cn } from "@/lib";

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
    question: "Do I need technical knowledge to work with you?",
    answer:
      "Not at all. We guide you through every step, translate technical decisions, and provide documentation plus training post-launch.",
  },
  {
    question: "What happens after the project is completed?",
    answer:
      "We hand over documentation, provide training for your team, and stay available for support packages or future enhancements.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary-base">
            FAQ
          </p>
          <h2 className="mt-4 text-[48px] leading-[58px] text-text-title font-sans font-bold">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[20px] leading-[30px] text-text-body">
            Got questions? We’ve got answers. Here are the things people ask us
            most.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl divide-y divide-white/10 rounded-[24px] border border-white/10 bg-[#0b1015]/80">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left"
                >
                  <span className="text-[18px] font-semibold text-white">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      "text-secondary-base transition-transform",
                      isOpen ? "rotate-45" : "rotate-0"
                    )}
                  >
                    +
                  </span>
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden px-6 transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  )}
                >
                  <p className="text-[16px] leading-[26px] text-text-body">
                    {faq.answer}
                  </p>
                </div>
                <div className="h-px bg-white/5" />
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-[18px] text-text-body">
            Still have questions? We’re here to help!
          </p>
          <Button variant="outline">Talk to the team</Button>
        </div>
      </Container>
    </section>
  );
}
