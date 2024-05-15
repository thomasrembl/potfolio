import Header from "@/components/header";
import ProjectThread from "@/app/_components/projectThread";
import { useTranslations } from "next-intl";
import HeroSection from "../_components/hero";
import LowRessource from "../_components/lowRessource";

export default function Index() {
  const t = useTranslations("Index");
  const btn = t("title");

  return (
    <>
      <Header />
      <main className="homepage">
        <HeroSection btn={btn} />
        <section className="projects-section" id="projects-ancor">
          <ProjectThread />
        </section>
      </main>
    </>
  );
}
