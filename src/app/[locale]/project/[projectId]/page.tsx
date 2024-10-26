import ProjectDetail from "../_components/projectDetail";
import { getProjetById } from "@/actions/get-project";

const ProjectPage = async ({
  searchParams,
}: {
  searchParams: { id: string };
}) => {
  const projectData = await getProjetById(searchParams.id);

  return (
    <div>
      <ProjectDetail project={projectData} />
    </div>
  );
};

export default ProjectPage;
