import { getProjectsData } from "@/lib/projects";
import { ProjectsListClient } from "@/containers";

export default async function ProjectsPage() {
  const data = await getProjectsData();
  return <ProjectsListClient data={data} />;
}
