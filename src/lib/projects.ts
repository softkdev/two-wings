/**
 * Server-side project data access.
 * Read from data/projects.json. Use only in Server Components or server context.
 */

import { readFile } from "fs/promises";
import { join } from "path";
import type { Project, ProjectsData } from "@/types/project";

const DATA_PATH = join(process.cwd(), "data", "projects.json");

let cachedData: ProjectsData | null = null;

async function loadProjectsData(): Promise<ProjectsData> {
  if (cachedData) return cachedData;
  const content = await readFile(DATA_PATH, "utf-8");
  cachedData = JSON.parse(content) as ProjectsData;
  return cachedData;
}

export async function getProjectsData(): Promise<ProjectsData> {
  return loadProjectsData();
}

export async function getProjectsList(): Promise<Project[]> {
  const data = await loadProjectsData();
  return data.projects;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjectsList();
  return projects.find((p) => p.slug === slug) ?? null;
}

export function getRelatedProjects(
  projects: Project[],
  relatedIds: string[]
): Project[] {
  return relatedIds
    .map((id) => projects.find((p) => p.id === id || p.slug === id))
    .filter((p): p is Project => p != null);
}
