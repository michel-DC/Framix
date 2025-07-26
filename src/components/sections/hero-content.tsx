import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

// Composant pour l'animation typing des mots clés
const HeroContent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="inline-block"
    >
      <ReactTyped
        strings={["landing pages", "sites web", "expériences", "conversions"]}
        typeSpeed={80}
        backSpeed={50}
        backDelay={2000}
        loop
        className="text-[#635BFF] font-bold"
        cursorChar="|"
        showCursor={true}
      />
    </motion.div>
  );
};

export default HeroContent;
