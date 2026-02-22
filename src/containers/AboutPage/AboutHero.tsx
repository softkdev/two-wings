import { Container } from "@/components/ui";
import { ABOUT_HERO } from "@/data/about";

export function AboutHero() {
  return (
    <section className="py-12 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-[32px] md:text-[48px] leading-[38px] md:leading-[58px] font-sans font-bold text-text-title">
            {ABOUT_HERO.title}
          </h1>
          <p className="mt-4 text-lg md:text-[24px] leading-[26px] md:leading-[30px] text-text-body font-sans">
            {ABOUT_HERO.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
