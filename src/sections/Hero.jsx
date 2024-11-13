import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 bg-black text-orange-500">
      <div className="flex flex-col items-center justify-center mb-8 gap-4 md:flex-row md:items-end md:px-8">
        <h2
          className="text-4xl font-bold text-center md:text-5xl w-full md:max-w-2xl whitespace-nowrap mr-20"
          style={{ fontFamily: "'Tiny5', sans-serif" }}
        >
          Mozilla Firefox Club X Board Gamers Club{" "}
          <div className="text-orange-300 ml-40">arena.exe</div>
        </h2>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <a href="https://fox-game-web-gl.vercel.app/" target="_blank" rel="noopener noreferrer" className="col-span-12 md:col-span-4">
          <BounceCard>
            <ImageCard src="/assets/fox.png" alt="Fox Game" />
          </BounceCard>
        </a>
        <a href="https://game-xi-topaz.vercel.app/" target="_blank" rel="noopener noreferrer" className="col-span-12 md:col-span-8">
          <BounceCard>
            <ImageCard src="/assets/maze.png" alt="Maze Game" />
          </BounceCard>
        </a>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <a href="https://snake-game-eight-fawn.vercel.app/" target="_blank" rel="noopener noreferrer" className="col-span-12 md:col-span-8">
          <BounceCard>
            <ImageCard src="/assets/snake1.png" alt="Snake Game" />
          </BounceCard>
        </a>
        <a href="https://sudoku-vert-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="col-span-12 md:col-span-4">
          <BounceCard>
            <ImageCard src="/assets/sudoku.png" alt="Sudoku Game" />
          </BounceCard>
        </a>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl ${className}`}
      style={{ border: 'none', padding: 0 }}
    >
      {children}
    </motion.div>
  );
};

const ImageCard = ({ src, alt }) => {
  return (
    <div
      className="relative w-full h-full bg-transparent rounded-lg overflow-hidden group-hover:border-orange-500 border-4 border-transparent transition-all duration-300"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Hero;
