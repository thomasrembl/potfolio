import Button from "@/components/button";

import { Link } from "../../../../../navigation";
import { ArrowLeft } from "lucide-react";

import { useTranslations } from "next-intl";

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations("Base");

  return (
    <main className="project-page">
      <Link href="/" className="return-btn">
        <Button text={t("btn")} iconPosition="left" icon={<ArrowLeft />} />
      </Link>
      {children}
    </main>
  );
};

export default ProjectLayout;
