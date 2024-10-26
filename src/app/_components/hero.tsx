"use client";
import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { TailSpin } from "react-loader-spinner";
import Icon from "@/components/icon";
import { motion, useAnimation } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
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

    // Animer la boîte pour la faire remonter après 8 secondes
    const timer = setTimeout(() => {
      controls.start({ y: -100, opacity: 0 });
    }, 8000);

    // Nettoyage du timer lors du démontage du composant
    return () => clearTimeout(timer);
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
              src="/logo-lt.png"
              alt="Logo 3D"
              width={1920}
              height={1080}
            />
          </div>
        )}
      </div>

      <div className="bottom-content">
        <div className="btn">
          <div
            id="h2"
            onClick={() => {
              ref.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <DotLottieReact
              className="lottie"
              src="https://lottie.host/f5128a87-d051-4584-8d61-5a817a0b12c0/man5jbjA0s.json"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
      <div ref={ref}></div>
    </section>
  );
};

export default HeroSection;
