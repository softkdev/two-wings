import { Button, Container } from "@/components/ui";
import Image from "next/image";

export function ReadyToLaunchSection() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-button border border-white/10 px-6 py-16 md:py-20 shadow-[0px_80px_200px_rgba(0,0,0,0.55)] md:px-12">
          <div className="absolute bottom-0 right-0 h-full w-full opacity-70 blur-sm">
            <Image
              src="/star-pattern-bg.svg"
              alt="Ready to launch"
              className="w-full h-full object-cover object-center"
              width={1200}
              height={500}
              unoptimized
            />
          </div>
          <div className="absolute bottom-0 right-0 h-full">
            <Image
              src="/rocket-two-wings.svg"
              alt="Ready to launch"
              className="h-full w-full object-contain object-center"
              width={600}
              height={600}
              unoptimized
            />
          </div>
          <div className="relative">
            <h2 className="mt-4 text-[32px] md:text-5xl leading-[38px] md:leading-[58px] text-text-title font-sans font-bold">
              Ready to launch your project?
            </h2>
            <p className="mt-4 text-lg md:text-2xl leading-[26px] md:leading-[30px] max-w-md text-text-body">
              High-quality design. Real results. Fair pricing. Let’s make your
              vision take flight.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button className="w-full sm:w-auto">Price Overview</Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Our Work
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
