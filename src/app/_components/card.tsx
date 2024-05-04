import Image from "next/image";
import { useTranslations } from "next-intl";

interface CardProps {
  table: string;
  cover: string;
}

const Card = ({ table, cover }: CardProps) => {
  const t = useTranslations(table);
  const coverPath = `/projects/${cover}`;
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
            <h2>{t("title")}</h2>
          </div>
          <div className="project-info">
            <p>
              {t("main")} -{" "}
              <span className="description">{t("description")}</span>
            </p>
          </div>
        </div>
        <div className="img-container">
          <Image src={coverPath} alt="project" width={800} height={800} />
        </div>
      </div>
    </div>
  );
};

export default Card;
