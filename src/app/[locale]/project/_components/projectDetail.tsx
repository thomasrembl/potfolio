import { useTranslations } from "next-intl";
import Image from "next/image";
import ImageThread from "./imageThread";
import LinkThread from "./linkThread";

interface ProjectData {
  project: {
    id: number;
    projectData: string;
    imgCover: string;
    link: boolean;
    linkUrl: [];
    images: [];
  };
}
const ProjectDetail = ({ project }: ProjectData) => {
  const text = project.projectData;
  const t = useTranslations(text);
  const b = useTranslations("projectBase");
  const imgPath = `/projects/${project.imgCover}`;
  return (
    <section className="project-detail">
      <div id="drop-lt" className="project-title">
        <h1 id="h1">{t("title")}</h1>
        <p id="bt">{t("main")}</p>
      </div>
      <div className="project-img">
        <Image src={imgPath} alt={t("title")} width={1920} height={1080} />
      </div>
      <div className="project-text">
        <div className="left-content">
          <div id="drop-lt" className="lt-title">
            <div className="circle"></div>
            <h3 id="bt">{b("informationTitle")}</h3>
          </div>
          <p id="base">{t("informationText")}</p>
        </div>
        <div className="right-content">
          <div id="drop-lt" className="lt-title">
            <div className="circle"></div>
            <h3 id="bt">{b("descriptionTitle")}</h3>
          </div>
          <p id="base">{t("descriptionText")}</p>
        </div>
      </div>
      {project.link && (
        <div className="project-link">
          <div id="drop-lt" className="lt-title">
            <div className="circle"></div>
            <h2 id="bt">{b("linkTitle")}</h2>
          </div>
          <LinkThread linksData={project.linkUrl} />
        </div>
      )}
      <div className="project-thread">
        <div id="drop-lt" className="lt-title">
          <div className="circle"></div>
          <h2 id="h2">{b("imageTitle")}</h2>
        </div>
        <ImageThread imgsData={project.images} />
      </div>
    </section>
  );
};

export default ProjectDetail;
