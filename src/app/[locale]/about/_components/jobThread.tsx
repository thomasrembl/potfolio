import fs from "fs";
import path from "path";
import JobCard from "./jobCard";

interface JobDataProps {
  id: number;
  jobData: string;
  imgCover: string;
}

const JobThread = () => {
  const filePath = path.join(process.cwd(), "./data/jobs/data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  return (
    <>
      {data.map((item: JobDataProps) => (
        <JobCard key={item.id} table={item.jobData} cover={item.imgCover} />
      ))}
    </>
  );
};

export default JobThread;
