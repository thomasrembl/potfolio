import Button from "@/components/button";
import ProjectDetail from "../_components/projectDetail";
import { Link } from "../../../../../navigation";
import { ArrowLeft } from "lucide-react";
import ProjectsData from "../../../../../data/projects/data.json";
import { useTranslations } from "next-intl";

const ProjectPage = ({ searchParams }: { searchParams: { id: number } }) => {
  const t = useTranslations("About");
  function getProjectData(projectsData: any[], searchParams: { id: number }) {
    const wichProject = Number(searchParams.id);
    const allProjects = Number(searchParams.id) + 1;

    if (searchParams.id) {
      if (projectsData.length >= allProjects) {
        const project = projectsData[wichProject];
        return project;
      }
    }
  }

  const projectData = getProjectData(ProjectsData, searchParams);

  return (
    <main className="project-page">
      <Link href="/">
        <Button text={t("btn")} iconPosition="left" icon={<ArrowLeft />} />
      </Link>
      <ProjectDetail project={projectData} />
    </main>
  );
};

export default ProjectPage;
