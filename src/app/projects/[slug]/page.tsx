import { notFound } from "next/navigation";
import {
  getProjectsData,
  getProjectsList,
  getRelatedProjects,
} from "@/lib/projects";
import { ProjectDetailContent } from "@/containers/ProjectDetailContent";

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
    <ProjectDetailContent
      project={project}
      relatedProjects={relatedProjects}
      contactSection={contactSection}
    />
  );
}
