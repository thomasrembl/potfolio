import { ImageUrlProps } from "@/types/project";

interface ImageThreadProps {
  imgsData: ImageUrlProps[];
}

const ImageThread = ({ imgsData }: ImageThreadProps) => {
  return (
    <div className="img-thread">
      {imgsData.map((item: ImageUrlProps) => (
        <div className="img-container" key={item.textId}></div>
      ))}
    </div>
  );
};

export default ImageThread;
