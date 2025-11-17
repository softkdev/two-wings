import { Button, Container } from "@/components/ui";
import Image from "next/image";

export function ReadyToLaunchSection() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-button border border-white/10 shadow-[0px_80px_200px_rgba(0,0,0,0.55)]">
          {/* Background Pattern - Same for both mobile and desktop */}
          <div className="absolute inset-0 opacity-70 blur-sm">
            <Image
              src="/star-pattern-bg.svg"
              alt=""
              className="w-full h-full object-cover object-center"
              width={1200}
              height={500}
              unoptimized
            />
          </div>

          {/* Mobile Layout - Centered Content with Rocket at Bottom */}
          <div className="relative flex min-h-[600px] flex-col items-center justify-between px-6 py-12 text-center md:hidden">
            {/* Content Section - Centered */}
            <div className="flex flex-1 flex-col items-center justify-center gap-4">
              <h2 className="text-[36px] leading-[100%] text-text-title font-sans font-semibold">
                Ready to launch your project?
              </h2>
              <p className="text-lg leading-[26px] text-text-body font-sans">
                High-quality design. Real results.
                <br />
                Fair pricing.
                <br />
                Let&apos;s make your vision take flight
              </p>
              <div className="mt-6 flex flex-col gap-4 w-full max-w-xs">
                <Button className="w-full">Price Overview</Button>
                <Button variant="outline" className="w-full">
                  Our Work
                </Button>
              </div>
            </div>

            {/* Rocket - Centered at bottom on mobile */}
            <div className="relative mt-8 flex-shrink-0">
              <Image
                src="/rocket-ready-luch-mobile.svg"
                alt="Ready to launch"
                className="h-auto w-full max-w-[300px] object-contain mx-auto"
                width={300}
                height={300}
                unoptimized
              />
            </div>
          </div>

          {/* Desktop Layout - Text Left, Rocket Right */}
          <div className="relative hidden min-h-[500px] md:flex md:items-center md:justify-between md:px-12 md:py-20">
            {/* Desktop Content - Left side */}
            <div className="relative z-10 max-w-lg">
              <h2 className="text-5xl leading-[58px] text-text-title font-sans font-bold">
                Ready to launch your project?
              </h2>
              <p className="mt-4 text-2xl leading-[30px] text-text-body font-sans">
                High-quality design. Real results. Fair pricing. Let&apos;s make
                your vision take flight.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button className="w-full sm:w-auto">Price Overview</Button>
                <Button variant="outline" className="w-full sm:w-auto">
                  Our Work
                </Button>
              </div>
            </div>

            {/* Desktop Rocket - Right side */}
            <div className="absolute bottom-0 right-0 h-full w-1/2">
              <Image
                src="/rocket-two-wings.svg"
                alt="Ready to launch"
                className="h-full w-full object-contain object-center"
                width={600}
                height={600}
                unoptimized
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
