import { ImageUrlProps } from "@/types/project";
import TypeVisualyzer from "./typeVisualizer";
import { useActiveLocale } from "@/utils/getTraduction";

interface ImageThreadProps {
  imgsData: ImageUrlProps[];
  translation: {
    fr: {
      imageText: { text: string; id: string }[];
    };
    en: {
      imageText: { text: string; id: string }[];
    };
  };
}

const ImageThread = ({ imgsData, translation }: ImageThreadProps) => {
  const imageText = translation.fr.imageText;
  const activeLocale = useActiveLocale();

  return (
    <div className="img-thread">
      {imgsData.map((item: ImageUrlProps) => {
        const index = imageText.findIndex((img) => img.id === item.textId);
        const text = translation[activeLocale].imageText[index].text;
        return (
          <TypeVisualyzer
            key={item._id}
            url={item.url}
            alt={item.alt}
            text={text}
          />
        );
      })}
    </div>
  );
};

export default ImageThread;
