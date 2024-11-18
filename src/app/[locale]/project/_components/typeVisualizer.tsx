"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

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

  const [isOpen, setIsOpen] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => {
      setDimensions({ width: img.width, height: img.height });
    };
    img.src = url;

    if (img.complete) {
      setDimensions({ width: img.width, height: img.height });
    }
  }, [url]);

  return (
    <>
      {type === "img" ? (
        <>
          <div className="img-content">
            <div className="img-container">
              <div>
                <Image
                  src={url}
                  alt={alt}
                  width={1920}
                  height={1080}
                  onClick={openModal}
                  style={{ cursor: "pointer" }}
                />

                {isOpen && (
                  <div className="modal-overlay" onClick={closeModal}>
                    <div
                      className="modal-content"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Image
                        className="modal-image"
                        style={{
                          height: "90vh",
                        }}
                        onClick={closeModal}
                        src={url}
                        alt={alt}
                        width={dimensions.width}
                        height={dimensions.height}
                      />
                    </div>
                  </div>
                )}
              </div>
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
