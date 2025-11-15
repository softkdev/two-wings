import { Button, Badge, Container } from "@/components/ui";
import { SparkleIcon } from "@/assets/icons";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-24 lg:py-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-8 max-w-[584px]">
            {/* Badge */}
            <div className="flex">
              <Badge color="primary" size="md">
                <SparkleIcon className="w-6 h-6 mr-2" />
                Premium Quality at Smart Prices
              </Badge>
            </div>

            {/* Title */}
            <div className="flex flex-col">
              <h1 className="font-display text-[36px] md:text-[48px] lg:text-[64px] font-bold text-text-title leading-tight">
                Two wings
              </h1>
              <h1 className="font-display text-[36px] md:text-[48px] lg:text-[64px] font-bold text-text-title leading-tight">
                from vision to flight
              </h1>
            </div>

            {/* Description */}
            <p className="text-[20px] md:text-body-lg font-sans font-medium text-text-body leading-[30px]">
              We build high-performing websites with Custom Code, No-Code, and
              Low-Code—tailored to your goals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="md" className="w-[174px]">
                Price Overview
              </Button>
              <Button variant="outline" size="md" className="w-[174px]">
                Oure Work
              </Button>
            </div>
          </div>

          {/* Right: 3D Asset */}
          <div className="relative w-full aspect-square lg:aspect-auto lg:h-[569px]">
            <Image
              src="/assets/hero-3d.png"
              alt="Dashboard Development Illustration"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 519px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
