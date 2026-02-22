"use client";

import { useState, useMemo } from "react";
import { Container, Button, ProjectCard } from "@/components/ui";
import { ROUTES } from "@/lib";
import Image from "next/image";
import type { ProjectsData } from "@/types/project";
import { cn } from "@/lib";

const PAGE_SIZE = 8;

interface ProjectsListClientProps {
  data: ProjectsData;
}

export function ProjectsListClient({ data }: ProjectsListClientProps) {
  const { meta, listPage, projects } = data;
  const [filterSlug, setFilterSlug] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = useMemo(() => {
    if (filterSlug === "all") return projects;
    return projects.filter((p) => p.category === filterSlug);
  }, [projects, filterSlug]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PAGE_SIZE));
  const paginatedProjects = useMemo(
    () =>
      filteredProjects.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
      ),
    [filteredProjects, currentPage]
  );

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const handleFilterChange = (slug: string) => {
    setFilterSlug(slug);
    setCurrentPage(1);
  };

  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="max-w-[1104px] mx-auto">
          {/* Hero */}
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h1 className="text-[32px] md:text-[48px] leading-[38px] md:leading-[58px] font-sans font-bold text-text-title">
              {listPage.title}
            </h1>
            <p className="text-lg md:text-[24px] leading-[26px] md:leading-[30px] text-text-body font-sans max-w-3xl mx-auto">
              {listPage.description}
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
            {meta.filters.map((f) => (
              <button
                key={f.slug}
                type="button"
                onClick={() => handleFilterChange(f.slug)}
                className={cn(
                  "rounded-button px-4 py-2 md:px-6 md:py-3 text-button font-sans font-medium transition-all",
                  filterSlug === f.slug
                    ? "bg-secondary-base text-background-DEFAULT"
                    : "bg-white/5 border border-white/10 text-text-body hover:border-white/20 hover:bg-white/[0.07]"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {paginatedProjects.map((project) => (
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
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                    loading={project.id === projects[0]?.id ? "eager" : "lazy"}
                  />
                }
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage <= 1}
                className="min-w-0"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 12H5m0 0l6 6m-6-6l6-6"
                  />
                </svg>
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    className={cn(
                      "w-10 h-10 rounded-button font-sans font-medium transition-all",
                      currentPage === page
                        ? "bg-secondary-base text-background-DEFAULT"
                        : "bg-white/5 border border-white/10 text-text-body hover:border-white/20"
                    )}
                  >
                    {page}
                  </button>
                )
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="min-w-0"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-6 6 6-6 6"
                  />
                </svg>
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
