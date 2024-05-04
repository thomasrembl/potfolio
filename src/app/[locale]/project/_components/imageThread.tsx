import Image from "next/image";

interface ImageData {
  id: number;
  src: string;
}

interface ImageThreadProps {
  imgsData: ImageData[];
}

const ImageThread = ({ imgsData }: ImageThreadProps) => {
  const imgPath = "/projects/";
  return (
    <div className="img-thread">
      {imgsData.map((item: ImageData) => (
        <div className="img-container" key={item.id}>
          <Image
            src={`${imgPath}${item.src}`}
            alt="image"
            width={1920}
            height={1080}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageThread;
