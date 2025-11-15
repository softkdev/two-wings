import { Button, Container } from "@/components/ui";
import { SparkleIconBadge } from "@/assets/icons";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left max-w-[584px] mx-auto lg:mx-0">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-4 py-2 rounded-[50px] flex items-center gap-2">
                <div className="w-6 h-6 shrink-0">
                  <SparkleIconBadge className="w-full h-full" />
                </div>
                <span className="font-sans text-[16px] leading-[24px] text-[#4dbbcf]">
                  Premium Quality at Smart Prices
                </span>
              </div>
            </div>

            {/* Title - Exact Figma text */}
            <h1 className="font-display font-bold text-[36px] md:text-[48px] lg:text-[64px] leading-normal text-text-title mb-6">
              Two wings
              <br />
              from vision to flight
            </h1>

            {/* Description */}
            <p className="font-sans font-medium text-[20px] md:text-[24px] leading-[30px] text-text-body mb-8">
              We build high-performing websites with Custom Code, No-Code, and
              Low-Code—tailored to your goals.
            </p>

            {/* CTA Buttons - Exact Figma text including typo */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
            </div>
          </div>

          {/* Right: 3D Asset */}
          <div className="relative hidden lg:block">
            {/* Decorative ellipses as per Figma */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blur-primary opacity-40" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blur-secondary opacity-30" />

            {/* 3D Laptop Asset */}
            <div className="relative z-10 w-full max-w-[519px]">
              <Image
                src="/assets/hero-3d.png"
                alt="Two Wings Dashboard Development"
                width={519}
                height={569}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
