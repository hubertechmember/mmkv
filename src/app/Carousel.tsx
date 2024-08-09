"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

const ImageModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}> = ({ isOpen, onClose, images, currentIndex, onPrevious, onNext }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold z-10"
          aria-label="Zamknij"
        >
          &times;
        </button>
        <button
          onClick={onPrevious}
          className="absolute top-1/2 -left-4 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold z-10"
          aria-label="Poprzedni obrazek"
        >
          &lsaquo;
        </button>
        <button
          onClick={onNext}
          className="absolute top-1/2 -right-4 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold z-10"
          aria-label="Następny obrazek"
        >
          &rsaquo;
        </button>
        <div className="bg-white p-1 rounded-lg">
          <Image
            src={images[currentIndex]}
            alt={`Powiększony obrazek ${currentIndex + 1}`}
            width={800}
            height={600}
            objectFit="contain"
            className="max-h-[80vh] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          onClick={openModal}
        >
          <Image
            src={src}
            alt={`Obrazek karuzeli ${index + 1}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Przejdź do slajdu ${index + 1}`}
          />
        ))}
      </div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={images}
        currentIndex={currentIndex}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </div>
  );
};

export default Carousel;
