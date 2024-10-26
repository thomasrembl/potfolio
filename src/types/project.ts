export interface TranslationProps {
  category: string;
  descriptionText: string;
  imageText: { text: string; id: string }[];
  informationText: string;
  title: string;
}

export interface LinkUrlProps {
  name: string;
  url: string;
  _id: string;
}

export interface ImageUrlProps {
  alt: string;
  textId: string;
  url: string;
  _id: string;
}

export interface ProjectProps {
  createdAt: string;
  image: boolean;
  imagesUrl: ImageUrlProps[]; 
  imgCover: string;
  link: boolean;
  linkUrl: LinkUrlProps[];
  slug: string;
  translation: {
    en: TranslationProps;
    fr: TranslationProps;
  };
  updatedAt: string; 
  __v: number;
  _id: string;
}
