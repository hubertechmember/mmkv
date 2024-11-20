"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedTagline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const phrases = [
    "ZAWSZE NA CZAS",
    "BEZ STRESU\nI ZMARTWIEŃ",
    "ZGODNA Z PRZEPISAMI",
    "POD PEŁNĄ KONTROLĄ",
    "Z GWARANCJĄ SPOKOJU",
    "PROWADZONA KOMPLEKSOWO",
    "W NAJLEPSZYCH CENACH",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center text-white mt-8">
      <div className="text-[32px] tracking-wider mb-2 font-light">
        TWOJA KSIĘGOWOŚĆ
      </div>
      <div className="h-24 md:h-32 relative overflow-hidden w-full max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full text-[32px] tracking-wider whitespace-pre-line font-light"
            style={{ color: "#white" }}
          >
            {phrases[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedTagline;
