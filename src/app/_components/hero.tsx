"use client";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { TailSpin } from "react-loader-spinner";
import Icon from "@/components/icon";
import { motion, useAnimation } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

interface HeroSectionProps {
  btn: string;
}

const Scene = dynamic(() => import("@/app/_components/Scene"), {
  loading: () => (
    <TailSpin
      visible={true}
      height="30"
      width="30"
      color="#ffffff"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />
  ),
  ssr: false,
});

const HeroSection = ({ btn }: HeroSectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const [isAnimation, setIsAnimation] = useState(true);

  useEffect(() => {
    // Animer la boîte pour la faire descendre au chargement de la page
    controls.start({
      y: 20,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    });
  }, [controls]);

  const handleClick = () => {
    // Animer la boîte pour la faire remonter quand on clique sur la croix
    controls.start({ y: -100, opacity: 0 });
  };
  const toggleAnimation = () => {
    setIsAnimation(false);
    handleClick();
    console.log(isAnimation);
  };
  setTimeout(() => {
    handleClick();
  }, 8000);
  return (
    <section className="hero-section">
      <motion.div
        className="low-box"
        initial={{ y: -100, opacity: 0 }}
        animate={controls}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="square">
          <div onClick={toggleAnimation}>
            <p>Stop 3D</p>
          </div>
          <div className="cross" onClick={handleClick}>
            <Icon icon={X} color="white" />
          </div>
        </div>
      </motion.div>
      <div className="top-content">
        {isAnimation ? (
          <Scene />
        ) : (
          <div className="img-container">
            <Image
              src="/medias/logo3d.png"
              alt="Logo 3D"
              width={1920}
              height={1080}
            />
          </div>
        )}
      </div>
      <div className="bottom-content">
        <div className="btn">
          <p
            id="h2"
            onClick={() => {
              ref.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {btn}
          </p>
        </div>
      </div>
      <div ref={ref}></div>
    </section>
  );
};

export default HeroSection;
