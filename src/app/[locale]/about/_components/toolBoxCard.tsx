import fs from "fs";
import path from "path";
import JobCard from "./jobCard";
import Image from "next/image";

interface ToolDataProps {
  id: number;
  cover: string;
}

const ToolBoxCard = () => {
  const filePath = path.join(process.cwd(), "./data/tools/data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  return (
    <>
      {data.map((item: ToolDataProps) => (
        <div className="keen-slider__slide number-slide1" key={item.id}>
          <Image src={item.cover} alt="cover" width={200} height={200} />
        </div>
      ))}
    </>
  );
};

export default ToolBoxCard;
