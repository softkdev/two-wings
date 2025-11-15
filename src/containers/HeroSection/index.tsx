import { Button, Badge, Container } from "@/components/ui";
import { SparkleIcon } from "@/assets/icons";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start mb-8">
              <Badge color="primary" size="md">
                <SparkleIcon className="w-4 h-4 mr-2" />
                Premium Quality at Smart Prices
              </Badge>
            </div>

            {/* Title */}
            <h1 className="font-display text-[48px] md:text-[56px] lg:text-hero text-text-title mb-6 leading-tight">
              Two Wings
              <br />
              <span className="text-gradient-primary">
                from vision to flight
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-body md:text-body-lg text-text-body-2 mb-10 max-w-xl mx-auto lg:mx-0">
              We build high-performing websites with Custom Code, No-Code, and
              Low-Code—tailored to your goals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg">
                Price Overview
              </Button>
              <Button variant="outline" size="lg">
                Our Work
              </Button>
            </div>
          </div>

          {/* Right: 3D Image */}
          <div className="relative">
            {/* Decorative blur effects */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blur-primary opacity-60" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blur-secondary opacity-40" />

            {/* 3D Asset from Figma */}
            <div className="relative z-10 aspect-square max-w-md mx-auto lg:max-w-none">
              <div className="relative w-full h-full">
                <Image
                  src="/assets/hero-3d.png"
                  alt="Two Wings - Dashboard Development Illustration"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
