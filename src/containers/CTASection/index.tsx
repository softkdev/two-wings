"use client";

import { Button, Container } from "@/components/ui";
import { useModal } from "@/contexts/ModalContext";

export function CTASection() {
  const { openContactModal } = useModal();
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-h1 md:text-[52px] lg:text-[56px] text-text-title mb-6 font-heading leading-tight">
            Ready to bring your vision to flight?
          </h2>

          {/* Description */}
          <p className="text-body-lg text-text-body-2 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you build something amazing.
            Professional solutions at smart prices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              rightIcon={
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              }
            >
              Get Started
            </Button>
            <Button variant="ghost" size="lg" onClick={openContactModal}>
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
