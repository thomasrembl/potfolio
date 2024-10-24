import Button from "@/components/button";
import ProjectDetail from "../_components/projectDetail";
import { Link } from "../../../../../navigation";
import { ArrowLeft } from "lucide-react";
import ProjectsData from "../../../../../data/projects/data.json";
import { useTranslations } from "next-intl";
import { getProjetById } from "@/actions/get-project";

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations("About");
  // console.log("search ", searchParams);
  // const projectData = await getProjetById(searchParams.id);
  // console.log(projectData);

  return (
    <main className="project-page">
      <Link href="/">
        <Button text={t("btn")} iconPosition="left" icon={<ArrowLeft />} />
      </Link>
      {children}
    </main>
  );
};

export default ProjectLayout;
