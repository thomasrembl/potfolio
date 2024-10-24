import { useTranslations } from "next-intl";
import Image from "next/image";
import ImageThread from "./imageThread";
import LinkThread from "./linkThread";
import { ProjectProps } from "@/types/project";
import { useActiveLocale } from "@/utils/getTraduction";

interface ProjectDetailProps {
  project: ProjectProps;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const activeLocale = useActiveLocale();

  const b = useTranslations("projectBase");
  const imgPath = `/projects/${project.imgCover}`;
  return (
    <section className="project-detail">
      <div className="project-title">
        <div className="underline">
          <h1 id="h1">{project.translation[activeLocale]?.title}</h1>
          <div className="rectangle"></div>
        </div>
        <p id="bt">{project.translation[activeLocale]?.category}</p>
      </div>
      <div className="project-img">
        <Image
          src={project.imgCover}
          alt="imgCover"
          width={1920}
          height={1080}
        />
      </div>
      <div className="project-text">
        <div className="left-content">
          <div className="lt-title">
            <div className="circle"></div>
            <h3 id="bt">{b("informationTitle")}</h3>
          </div>
          <p id="base">{project.translation[activeLocale]?.informationText}</p>
        </div>
        <div className="right-content">
          <div className="lt-title">
            <div className="circle"></div>
            <h3 id="bt">{b("descriptionTitle")}</h3>
          </div>
          <p id="base">{project.translation[activeLocale]?.descriptionText}</p>
        </div>
      </div>
      {project.link && (
        <div className="project-link">
          <div className="lt-title">
            <div className="circle"></div>
            <h2 id="bt">{b("linkTitle")}</h2>
          </div>
          <LinkThread linksData={project.linkUrl} />
        </div>
      )}
      {project.imagesUrl && (
        <div className="project-thread">
          <div className="lt-title">
            <div className="circle"></div>
            <h2 id="h2">{b("imageTitle")}</h2>
          </div>
          <ImageThread imgsData={project.imagesUrl} />
        </div>
      )}
    </section>
  );
};

export default ProjectDetail;
