import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  getProjectsData,
  getProjectsList,
  getRelatedProjects,
} from "@/lib/projects";
import { ROUTES } from "@/lib";
import { Container, Badge, Button, ProjectCard, ImageCarousel } from "@/components/ui";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getProjectsList();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const data = await getProjectsData();
  const project = data.projects.find((p) => p.slug === slug) ?? null;

  if (!project) notFound();

  const relatedProjects = getRelatedProjects(
    data.projects,
    project.relatedProjectIds
  );
  const { contactSection } = data;

  return (
    <article className="pb-20 md:pb-32">
      <Container>
        <div className="max-w-[900px] mx-auto space-y-12 md:space-y-16">
          {/* Hero */}
          <header className="space-y-4">
            <h1 className="text-[32px] md:text-[48px] leading-[38px] md:leading-[58px] font-sans font-bold text-text-title">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl leading-[26px] md:leading-[30px] text-text-body font-sans">
              {project.fullDescription}
            </p>
            {project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} size="sm" color="text">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          {/* Carousel */}
          <ImageCarousel
            images={project.carouselImages}
            alt={project.title}
            className="max-w-full"
          />

          {/* Overview / Problem / Solution */}
          <div className="space-y-10">
            <section>
              <h2 className="text-[24px] md:text-[28px] font-sans font-bold text-text-title mb-3">
                Overview
              </h2>
              <p className="text-text-body font-sans leading-relaxed">
                {project.overview}
              </p>
            </section>
            <section>
              <h2 className="text-[24px] md:text-[28px] font-sans font-bold text-text-title mb-3">
                Problem
              </h2>
              <p className="text-text-body font-sans leading-relaxed">
                {project.problem}
              </p>
            </section>
            <section>
              <h2 className="text-[24px] md:text-[28px] font-sans font-bold text-text-title mb-3">
                Solution
              </h2>
              <p className="text-text-body font-sans leading-relaxed">
                {project.solution}
              </p>
            </section>
          </div>

          {/* Our Commitment */}
          <section className="rounded-button border border-white/10 bg-[#16181b] p-6 md:p-8">
            <h2 className="text-[24px] md:text-[28px] font-sans font-bold text-text-title mb-3">
              {project.commitment.title}
            </h2>
            <p className="text-text-body font-sans leading-relaxed">
              {project.commitment.description}
            </p>
          </section>

          {/* Today's Work */}
          <section className="rounded-button border border-white/10 bg-[#16181b] p-6 md:p-8">
            <h2 className="text-[24px] md:text-[28px] font-sans font-bold text-text-title mb-3">
              {project.todayWork.title}
            </h2>
            <p className="text-text-body font-sans leading-relaxed mb-4">
              {project.todayWork.description}
            </p>
            {project.todayWork.image && (
              <div className="relative aspect-video w-full max-w-xl overflow-hidden rounded-[14px] bg-[#050a10]">
                <Image
                  src={project.todayWork.image}
                  alt={project.todayWork.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 512px"
                />
              </div>
            )}
          </section>

          {/* Explore more */}
          {relatedProjects.length > 0 && (
            <section>
              <h2 className="text-[24px] md:text-[28px] font-sans font-bold text-text-title mb-6">
                Explore more
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((related) => (
                  <ProjectCard
                    key={related.id}
                    title={related.title}
                    description={related.shortDescription}
                    href={`${ROUTES.PROJECTS}/${related.slug}`}
                    image={
                      <Image
                        src={related.thumbnailImage}
                        alt={related.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 352px"
                        className="object-cover object-top"
                        loading="lazy"
                      />
                    }
                  />
                ))}
              </div>
            </section>
          )}

          {/* Contact section from JSON */}
          <section className="rounded-button border border-white/10 bg-[#16181b] p-6 md:p-12">
            <h2 className="text-[28px] md:text-[36px] font-sans font-bold text-text-title mb-4">
              {contactSection.title}
            </h2>
            <p className="text-text-body font-sans leading-relaxed mb-4">
              {contactSection.description}
            </p>
            <p className="text-text-body font-sans mb-6">
              <a
                href={`mailto:${contactSection.email}`}
                className="text-secondary-base underline decoration-dotted hover:no-underline"
              >
                {contactSection.email}
              </a>
            </p>
            <Link href={ROUTES.CONTACT}>
              <Button>{contactSection.submitLabel}</Button>
            </Link>
          </section>
        </div>
      </Container>
    </article>
  );
}
