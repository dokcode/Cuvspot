"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FashionGame {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
}

const fashionGames: FashionGame[] = [
  {
    id: 1,
    title: "Style Match",
    description: "Match outfits to create perfect looks",
    image: "https://res.cloudinary.com/subframe/image/upload/v1724690142/uploads/302/fashion-game-1.png",
    color: "#FFD166",
  },
  {
    id: 2,
    title: "Trend Hunter",
    description: "Find and collect the latest fashion trends",
    image: "https://res.cloudinary.com/subframe/image/upload/v1724690142/uploads/302/fashion-game-2.png",
    color: "#EF476F",
  },
  {
    id: 3,
    title: "Runway Rush",
    description: "Create runway-ready looks against the clock",
    image: "https://res.cloudinary.com/subframe/image/upload/v1724690142/uploads/302/fashion-game-3.png",
    color: "#06D6A0",
  },
  {
    id: 4,
    title: "Fashion Puzzle",
    description: "Solve puzzles to unlock exclusive styles",
    image: "https://res.cloudinary.com/subframe/image/upload/v1724690142/uploads/302/fashion-game-4.png",
    color: "#118AB2",
  },
];

export const FashionGamesSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % fashionGames.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % fashionGames.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + fashionGames.length) % fashionGames.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[500px]">
      <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full"
            style={{ backgroundColor: fashionGames[currentIndex].color }}
          >
            <div className="relative w-full h-full flex flex-col justify-between p-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-[32px] font-[600] text-white">
                  {fashionGames[currentIndex].title}
                </h2>
                <p className="text-[16px] text-white/90">
                  {fashionGames[currentIndex].description}
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="w-full h-[180px] bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white text-[14px]">Game Preview</span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-white rounded-lg text-[16px] font-[500] text-gray-800"
                >
                  Play Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center z-10"
          aria-label="Previous game"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center z-10"
          aria-label="Next game"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="flex gap-2 mt-4">
        {fashionGames.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
