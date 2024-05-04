"use client";
import { Languages } from "lucide-react";
import { Link } from "../../../navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const LangueSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="langue-switcher">
      <div className="btn-opener" onClick={toggleContent}>
        <motion.div
          initial={{ rotate: 0 }}
          whileHover={{
            rotate: [0, 120, 0],
          }}
        >
          <Languages />
        </motion.div>
      </div>
      <motion.div
        className="content"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "100%" : 0,
          opacity: isOpen ? 100 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="c-title">
          <p>Langues</p>
        </div>
        <div className="c-item">
          <Link href="/" locale="en">
            English
          </Link>
        </div>
        <div className="c-item">
          <Link href="/" locale="fr">
            Français
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default LangueSwitcher;
