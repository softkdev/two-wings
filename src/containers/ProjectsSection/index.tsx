import { Container, Button } from "@/components/ui";
import Image from "next/image";

// Project data with real Figma content
const projects = [
  {
    id: "six-flags",
    title: "Six Flags – Qiddiya City",
    description:
      "An immersive landing experience for Six Flags Qiddiya City, the first Six Flags...",
    technologies: ["Animation", "Swiper.js", "Svelte", "+3"],
    mockupImage: "/assets/projects/sixflags-mockup.png",
  },
  {
    id: "my-sport-time",
    title: "My Sport Time",
    description:
      "A multi-platform sports management ecosystem consisting of two panels and...",
    technologies: ["TypeScript", "Next.js", "React.js", "+3"],
    mockupImage: "/assets/projects/mysporttime-mockup.png",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-20 md:py-32 bg-background-section">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-[40px] md:text-h1 text-text-title mb-6 font-heading leading-tight">
            Recent Projects
          </h2>
          <p className="text-body-lg text-text-body-2">
            From simple landing pages to complex enterprise systems, we deliver
            excellence at every scale
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-background-section border border-border-DEFAULT rounded-card overflow-hidden hover:border-primary-base/30 transition-all"
            >
              {/* Project Mockup */}
              <div className="relative bg-background-DEFAULT h-[293px] overflow-hidden">
                <Image
                  src={project.mockupImage}
                  alt={project.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 352px"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-body-para text-primary-base font-sans mb-3">
                  {project.title}
                </h3>
                <p className="text-body text-text-body font-sans mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] text-primary-base px-3 py-1 rounded-lg text-[12px] font-sans"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            variant="primary"
            size="lg"
            rightIcon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            }
          >
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
