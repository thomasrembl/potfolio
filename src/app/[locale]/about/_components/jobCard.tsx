import Image from "next/image";
import { useTranslations } from "next-intl";

interface CardProps {
  table: string;
  cover: string;
}

const JobCard = ({ table, cover }: CardProps) => {
  const t = useTranslations(table);
  const coverPath = `/job/${cover}`;
  return (
    <div className="job-card" id={t("id")}>
      <div className="left-content">
        <Image src={coverPath} alt={table} width={158} height={158} />
      </div>
      <div className="right-content">
        <div className="top-content">
          <h3>{t("title")}</h3>
          <p className="date" id="xs">
            {t("date")}
          </p>
          <p id="h3">{t("poste")}</p>
        </div>
        <p id="xs" className="description">
          {t("description")}
        </p>
      </div>
    </div>
  );
};

export default JobCard;
