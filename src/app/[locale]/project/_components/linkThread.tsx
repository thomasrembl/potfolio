import { LinkUrlProps } from "@/types/project";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

interface LinkThreadProps {
  linksData: LinkUrlProps[];
}

const LinkThread = ({ linksData }: LinkThreadProps) => {
  return (
    <>
      <div className="link-thread">
        {linksData.map((item: LinkUrlProps) => (
          <div className="link-container" key={item._id}>
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
