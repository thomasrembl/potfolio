import Button from "@/components/button";
import Social from "@/components/social";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "../../../../navigation";
import JobThread from "@/app/[locale]/about/_components/jobThread";
import ToolBox from "./_components/toolBox";
import Image from "next/image";
const About = () => {
  const t = useTranslations("About");
  return (
    <main className="about-page">
      <div className="return">
        <Link href="/">
          <Button text={t("btn")} iconPosition="left" icon={<ArrowLeft />} />
        </Link>
      </div>
      <div className="title">
        <div id="drop-lt" className="lt-title">
          <div className="circle"></div>
          <h3 id="bt">{t("ltTitle")}</h3>
        </div>
        <h1 id="h1">{t("title")}</h1>
      </div>
      <div className="about">
        <div className="img-container">
          <Image src="/me.jpg" alt="about" width={1920} height={1080} />
        </div>
        <div className="description">
          <p>{t("description")}</p>
        </div>
      </div>
      <div className="social">
        <div id="drop-lt" className="lt-title">
          <div className="circle"></div>
          <h3 id="bt">{t("reseau")}</h3>
        </div>
        <span id="desk">
          <Social size={55} />
        </span>
        <span id="mobile">
          <Social size={37} />
        </span>
      </div>
      <div className="toolbox">
        <div id="drop-lt" className="lt-title">
          <div className="circle"></div>
          <h3 id="bt">{t("boite")}</h3>
        </div>
        <div className="toolbox-anim">
          <ToolBox />
        </div>
      </div>
      <div className="experience">
        <h2 id="h2">{t("title2")}</h2>
        <div className="job-container">
          <JobThread />
        </div>
      </div>
    </main>
  );
};

export default About;
