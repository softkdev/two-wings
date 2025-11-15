import { ProjectCard, Container, Button, IconWrapper } from "@/components/ui";

// Mock project data
const projects = [
  {
    id: "six-flags",
    title: "Six Flags – Qiddiya City",
    description:
      "An immersive landing experience for Six Flags Qiddiya City, the first Six Flags theme park in the Middle East",
    technologies: ["Animation", "Swiper.js", "Svelte", "+3"],
    mockup: (
      <div className="w-full h-48 md:h-56 bg-linear-to-br from-primary-base/20 to-secondary-base/20 rounded-lg flex items-center justify-center">
        <IconWrapper size="lg">
          <svg
            className="w-10 h-10 text-text-title"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </IconWrapper>
      </div>
    ),
  },
  {
    id: "my-sport-time",
    title: "My Sport Time",
    description:
      "A multi-platform sports management ecosystem with admin panels and mobile applications for clubs and athletes",
    technologies: ["TypeScript", "Next.js", "React.js", "Tailwind", "+2"],
    mockup: (
      <div className="w-full h-48 md:h-56 bg-linear-to-br from-secondary-base/20 to-primary-base/20 rounded-lg flex items-center justify-center">
        <IconWrapper size="lg">
          <svg
            className="w-10 h-10 text-text-title"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </IconWrapper>
      </div>
    ),
  },
  {
    id: "dashboard-analytics",
    title: "Dashboard Analytics Pro",
    description:
      "Custom analytics dashboard with real-time data visualization, team collaboration features, and AI insights",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "+4"],
    mockup: (
      <div className="w-full h-48 md:h-56 bg-linear-to-br from-primary-50/20 to-secondary-base/20 rounded-lg flex items-center justify-center">
        <IconWrapper size="lg">
          <svg
            className="w-10 h-10 text-text-title"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </IconWrapper>
      </div>
    ),
  },
];

export function ProjectsSection() {
  return (
    <section className="py-20 md:py-32 bg-background-section">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-h1 text-text-title mb-6 font-heading">
            Recent Projects
          </h2>
          <p className="text-body-lg text-text-body-2">
            Explore our portfolio of successful projects across various
            industries and technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.mockup}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
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
