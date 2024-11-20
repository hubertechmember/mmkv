import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedTagline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const phrases = [
    "zawsze na czas",
    "bez stresu i zmartwień",
    "w profesjonalnych rękach",
    "zgodna z przepisami",
    "pod pełną kontrolą",
    "z gwarancją spokoju",
    "prowadzona kompleksowo",
    "w najlepszych cenach",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center text-white mt-8">
      <div className="text-xl font-medium mb-2">Twoja księgowość</div>
      <div className="h-8 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full text-lg"
            style={{ color: "#b8860b" }}
          >
            {phrases[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedTagline;
