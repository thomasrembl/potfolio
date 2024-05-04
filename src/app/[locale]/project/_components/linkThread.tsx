import { LinkIcon } from "lucide-react";
import Link from "next/link";

interface LinkData {
  id: number;
  name: string;
  url: string;
}

interface LinkThreadProps {
  linksData: LinkData[];
}

const LinkThread = ({ linksData }: LinkThreadProps) => {
  return (
    <>
      <div className="link-thread">
        {linksData.map((item: LinkData) => (
          <div className="link-container" key={item.id}>
            <LinkIcon size={18} color="white" />
            <Link href={item.url} target="_blanck">
              <p> {item.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default LinkThread;
