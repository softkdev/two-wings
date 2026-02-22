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
import { getProjectsList } from "@/lib/projects";

const RECENT_PROJECTS_COUNT = 6;

export default async function Home() {
  const allProjects = await getProjectsList();
  const recentProjects = allProjects.slice(0, RECENT_PROJECTS_COUNT);

  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <WhyChooseSection />
      <ProjectsSection projects={recentProjects} />
      <WorkingProcessSection />
      <AboutSection />
      <TestimonialsSection />
      <LetsBuildSection />
      <FAQSection />
      <ReadyToLaunchSection />
    </>
  );
}
