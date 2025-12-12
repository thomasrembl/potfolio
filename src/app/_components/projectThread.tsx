import Card from "./card";
import { Link } from "../../../navigation";
import { getAllProject } from "@/actions/get-all-project";

interface ProjectData {
  _id: string;
  id: string;
  slug: string;
}

const ProjectThread = async () => {
  // const data = JSON.parse(jsonData);
  const data = await getAllProject();

  const reversedData = [...data].reverse();

  return (
    <>
      {reversedData.map((item: ProjectData) => (
        <Link
          href={{
            pathname: "/project/[...slug]",
            params: { slug: [item.slug] },
            query: { id: item._id },
          }}
          key={item._id}
        >
          <Card id={item._id} />
        </Link>
      ))}
    </>
  );
};

export default ProjectThread;
