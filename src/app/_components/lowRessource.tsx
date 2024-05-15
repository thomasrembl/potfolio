"use client";
import Icon from "@/components/icon";
import { motion, useAnimation } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface LowRessourceProps {
  animation: boolean;
}

const LowRessource = ({ animation }: LowRessourceProps) => {
  const controls = useAnimation();
  const [isAnimation, setIsAnimation] = useState(animation);
  const toggleAnimation = () => {
    setIsAnimation(false);
    alert("salut");
    console.log(animation);
  };

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

  return (
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
  );
};

export default LowRessource;
