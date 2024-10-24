import ProjectDetail from "../_components/projectDetail";
import { getProjetById } from "@/actions/get-project";

const ProjectPage = async ({
  searchParams,
}: {
  searchParams: { id: string };
}) => {
  console.log("search ", searchParams);
  const projectData = await getProjetById(searchParams.id);
  console.log(projectData);

  return (
    <div>
      <ProjectDetail project={projectData} />
    </div>
  );
};

export default ProjectPage;
