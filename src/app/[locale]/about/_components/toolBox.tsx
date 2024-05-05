"use client";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ToolBox = () => {
  const toolData = [
    {
      id: 1,
      cover: "/tools/JavaScript.png",
      alt: "JavaScript Logo",
    },
    {
      id: 2,
      cover: "/tools/Html.png",
      alt: "HTML Logo",
    },
    {
      id: 3,
      cover: "/tools/CSS3.png",
      alt: "CSS3 Logo",
    },
    {
      id: 4,
      cover: "/tools/Saas.png",
      alt: "Saas Logo",
    },
    {
      id: 5,
      cover: "/tools/React.png",
      alt: "React Logo",
    },
    {
      id: 6,
      cover: "/tools/Figma.png",
      alt: "Figma Logo",
    },
    {
      id: 7,
      cover: "/tools/Git.png",
      alt: "Git Logo",
    },
    {
      id: 8,
      cover: "/tools/Node.png",
      alt: "Node.js Logo",
    },
    {
      id: 9,
      cover: "/tools/WordPress.png",
      alt: "WordPress Logo",
    },
    {
      id: 10,
      cover: "/tools/TypeScript.png",
      alt: "TypeScript Logo",
    },
    {
      id: 11,
      cover: "/tools/Tailwind.png",
      alt: "Tailwind CSS Logo",
    },
    {
      id: 12,
      cover: "/tools/AfterEffect.png",
      alt: "After Effects Logo",
    },
    {
      id: 13,
      cover: "/tools/Photoshop.png",
      alt: "Photoshop Logo",
    },
    {
      id: 14,
      cover: "/tools/Illustrator.png",
      alt: "Illustrator Logo",
    },
    {
      id: 15,
      cover: "/tools/AdobeXd.png",
      alt: "Adobe XD Logo",
    },
    {
      id: 16,
      cover: "/tools/Premierpro.png",
      alt: "Premiere Pro Logo",
    },
  ];

  const settings = {
    dots: false,
    swipe: false,
    draggable: false,
    arrows: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplayspeed: 10,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {toolData.map((item) => (
        <div className="container" key={item.id}>
          <Image src={item.cover} alt={item.alt} width={100} height={100} />
        </div>
      ))}
    </Slider>
  );
};

export default ToolBox;
