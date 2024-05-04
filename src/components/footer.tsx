import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "./button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer>
      <div className="top-content">
        <div className="left-content">
          <div className="top-content">
            <Image alt="logo" src="/logo-creux.png" width={76} height={131} />
          </div>
          <div className="bottom-content">
            <p id="bt">{t("title")}</p>
          </div>
        </div>
        <div className="right-content">
          <p className="lt-title">Contact</p>
          <div className="btn-container">
            <Link
              href="https://www.linkedin.com/in/thomas-remblier-a9805a220/"
              target="_blank"
            >
              <Button
                text="Linkedin"
                icon={<ArrowUpRight />}
                iconPosition="right"
                type="ghost"
              />
            </Link>
            <Link
              href="https://www.instagram.com/thomas_rembl/"
              target="_blank"
            >
              <Button
                text="Instagram"
                icon={<ArrowUpRight />}
                iconPosition="right"
                type="ghost"
              />
            </Link>
            <Link href="#" target="_blank">
              <Button
                text={t("CV")}
                icon={<ArrowUpRight />}
                iconPosition="right"
                type="ghost"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="bottom-content">
        <p className="bottom-text">{t("pied")}</p>
      </div>
    </footer>
  );
};

export default Footer;
