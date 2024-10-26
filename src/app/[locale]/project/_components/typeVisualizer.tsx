"use client";
import Image from "next/image";

interface TypeVisualyzerProps {
  url: string;
  alt: string;
  text: string;
}

const TypeVisualyzer = ({ url, alt, text }: TypeVisualyzerProps) => {
  let type = "img";
  if (url.includes("https")) {
    type = "img";
  } else {
    type = "video";
  }

  return (
    <>
      {type === "img" ? (
        <>
          <div className="img-content">
            <div className="img-container">
              <Image src={url} alt={alt} width={1920} height={1080} />
            </div>

            <p>{text}</p>
          </div>
        </>
      ) : (
        <div className="iframe-container">
          <iframe
            className="iframe"
            src="https://player.cloudinary.com/embed/?public_id=zrdhqtm3uceyibxjc2fv&cloud_name=dnhydbscw&player[autoplay]=true&player[muted]=true&player[loop]=true&player[showLogo]=false"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default TypeVisualyzer;
