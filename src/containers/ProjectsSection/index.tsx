import { Container, Button, ProjectCard } from "@/components/ui";
import { ROUTES } from "@/lib";
import Image from "next/image";
import Link from "next/link";

type ProjectItem = {
  id: string;
  title: string;
  description: string;
  mockupImage: string;
};

const baseProjects: ProjectItem[] = [
  {
    id: "six-flags",
    title: "Six Flags – Qiddiya City",
    description:
      "An immersive landing experience for Six Flags Qiddiya City, the first Six Flags park in the Middle East.",
    mockupImage: "/assets/projects/sixflags-mockup.png",
  },
  {
    id: "my-sport-time",
    title: "My Sport Time",
    description:
      "A multi-platform sports management ecosystem consisting of two panels and native mobile apps.",
    mockupImage: "/assets/projects/mysporttime-mockup.png",
  },
  {
    id: "jesus-revival",
    title: "Jesus Revival Church",
    description:
      "A faith-centered website designed to share religious events, community news, and streaming content.",
    mockupImage: "/assets/projects/jesus-revival-mockup.webp",
  },
];

// Duplicate set to mirror Figma's two-row grid layout
const projects: ProjectItem[] = [
  ...baseProjects,
  ...baseProjects.map((project) => ({
    ...project,
    id: `${project.id}-repeat`,
  })),
];

export function ProjectsSection() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="max-w-[1104px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-[32px] md:text-[48px] leading-[38px] md:leading-[58px] font-sans font-bold text-text-title">
              Recent Projects
            </h2>
            <p className="text-lg md:text-[24px] leading-[26px] md:leading-[30px] text-text-body font-sans">
              See how we&apos;ve helped businesses achieve their goals with
              beautiful, functional solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                href={`${ROUTES.PROJECTS}/${project.id}`}
                image={
                  <Image
                    src={project.mockupImage}
                    alt={`${project.title} - ${project.description}`}
                    fill
                    priority={project.id === "six-flags"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 352px"
                    className="object-cover object-top"
                    loading={project.id === "six-flags" ? "eager" : "lazy"}
                  />
                }
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-end">
            <Link href={ROUTES.PROJECTS}>
              <Button
                variant="outline"
                size="md"
                className="w-[174px] h-12 rounded-button border-secondary-base text-secondary-base"
                rightIcon={
                  <svg
                    className="w-5 h-5 shrink-0 text-secondary-base"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14m-6-6 6 6-6 6"
                    />
                  </svg>
                }
              >
                All Project
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
