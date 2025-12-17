import {
  HeroSection,
  StatsBar,
  ServicesSection,
  ProjectsSection,
  WhyChooseSection,
  WorkingProcessSection,
  AboutSection,
  TestimonialsSection,
  LetsBuildSection,
  FAQSection,
  ReadyToLaunchSection,
} from "@/containers";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <WhyChooseSection />
      <ProjectsSection />
      <WorkingProcessSection />
      <AboutSection />
      <TestimonialsSection />
      <LetsBuildSection />
      <FAQSection />
      <ReadyToLaunchSection />
    </>
  );
}
