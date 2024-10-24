import Image from "next/image";

import { useActiveLocale } from "@/utils/getTraduction";
import { getProjetById } from "@/actions/get-project";

interface CardProps {
  id: string;
}

const Card = async ({ id }: CardProps) => {
  const data = await getProjetById(id);
  const activeLocale = useActiveLocale();
  const linkText = {
    en: " Read more",
    fr: " En savoir plus",
  };
  const link = linkText[activeLocale];

  return (
    <div className="card">
      <div className="elipse">
        <Image
          src="/Ellipse-hover.png"
          alt="elipse"
          width={2735}
          height={930}
        />
      </div>
      <div className="content">
        <div className="top-content">
          <div className="project-title">
            <h2>{data.translation[activeLocale]?.title}</h2>
          </div>
          <div className="project-info">
            <p>
              {data.translation[activeLocale]?.category} -
              <span className="description">{link}</span>
            </p>
          </div>
        </div>
        <div className="img-container">
          <Image
            src={data.imgCover}
            alt="projectCover"
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
