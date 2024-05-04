import fs from "fs";
import path from "path";
import Card from "./card";
import { Link } from "../../../navigation";

interface ProjectData {
  id: number;
  projectData: string;
  slug: string;
  imgCover: string;
}

const ProjectThread = () => {
  const filePath = path.join(process.cwd(), "./data/projects/data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  return (
    <>
      {data.map((item: ProjectData) => (
        <Link
          href={{
            pathname: "/project/[...slug]",
            params: { slug: [item.slug] },
            query: { id: item.id },
          }}
          key={item.id}
        >
          <Card key={item.id} table={item.projectData} cover={item.imgCover} />
        </Link>
      ))}
    </>
  );
};

export default ProjectThread;
