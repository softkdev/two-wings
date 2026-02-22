"use client";

import { useState } from "react";
import { Container } from "@/components/ui";
import { cn } from "@/lib";
import { useModal } from "@/contexts/ModalContext";
import {
  ABOUT_FAQS,
  FAQ_INTRO,
  FAQ_CTA_TEXT,
  FAQ_CTA_BUTTON,
} from "@/data/about";

export function AboutFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openContactModal } = useModal();

  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-[32px] md:text-[48px] leading-[38px] md:leading-[100%] text-text-title font-sans font-bold">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg md:text-[24px] leading-[26px] md:leading-[30px] text-text-body font-sans font-medium">
              {FAQ_INTRO}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {ABOUT_FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className={cn(
                    "rounded-[10px] flex bg-[#16181b] p-4 md:p-6 transition-all duration-300 border border-transparent",
                    isOpen
                      ? " flex-col gap-4 border-white/10"
                      : "h-[78px] md:h-[72px] items-center hover:border-white/10"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="text-[16px] leading-container-x-sm text-text-title font-sans font-normal">
                      {faq.question}
                    </span>
                    <svg
                      className={cn(
                        "h-4 w-4 shrink-0 text-text-title transition-transform",
                        isOpen && "rotate-180"
                      )}
                      fill="none"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <p className="text-[16px] leading-container-x-sm text-text-body-2 font-sans font-normal">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="text-lg md:text-[24px] leading-[26px] md:leading-[30px] text-text-body font-sans font-medium">
              {FAQ_CTA_TEXT}
            </p>
            <button
              type="button"
              onClick={openContactModal}
              className="h-12 px-6 rounded-button bg-secondary-base text-background-DEFAULT text-[16px] leading-container-x-sm font-sans font-bold hover:opacity-90 transition-opacity"
            >
              {FAQ_CTA_BUTTON}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
