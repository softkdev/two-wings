import { Container, Button, ProjectCard } from "@/components/ui";
import { ROUTES } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
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
                description={project.shortDescription}
                href={`${ROUTES.PROJECTS}/${project.slug}`}
                image={
                  <Image
                    src={project.thumbnailImage}
                    alt={project.title}
                    fill
                    priority={project.id === projects[0]?.id}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 352px"
                    className="object-cover object-top"
                    loading={project.id === projects[0]?.id ? "eager" : "lazy"}
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
