import { Container } from "@/components/ui";
import Image from "next/image";
import { OUR_STORY } from "@/data/about";

export function OurStorySection() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">
          <div className="relative order-2 lg:order-1 min-h-[280px] lg:min-h-[400px]">
            <Image
              src={OUR_STORY.imageSrc}
              alt="Our story - team collaboration"
              fill
              className="object-cover object-center rounded-[14px] opacity-90"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized={OUR_STORY.imageSrc.endsWith(".svg")}
            />
          </div>
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <h2 className="text-[28px] md:text-[36px] leading-tight font-sans font-bold text-text-title">
              {OUR_STORY.title}
            </h2>
            <div className="mt-6 space-y-4">
              {OUR_STORY.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-text-body font-sans"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
