"use client";
import React from "react";
import { FlickeringGrid } from "@/components/ui/FlickeringGrid";
import { motion } from "framer-motion";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <FlickeringGrid
        className="[mask-image:radial-gradient(750px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        maxOpacity={0.5}
        flickerChance={0.1}
      />
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full p-8 flex-col text-white">
        {/* Hero Quote Section */}
        <div className="mb-4 text-center animate__animated animate__fadeIn">
          <motion.h2
            className="text-lg font-semibold tracking-widest uppercase border-b-2 border-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Automation & Web Design Experts
          </motion.h2>
        </div>

        {/* Hero Logo */}
        <div className="mt-8">
          <motion.img
            src="/jeenlabs-logo.svg"
            alt="JeenLabs Logo"
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/3 xl:w-1/2 mx-auto object-contain transition-all transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          />
        </div>

        {/* Hero Content Text */}
        <div className="text-center space-y-4 animate__animated animate__fadeIn animate__delay-1s">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span className="text-red-600">Unlocking</span> the possibilities of
          </motion.h1>
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            tomorrow
          </motion.h1>
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <span className="tracking-[15px]">
              <span className="text-white">JEENL</span>
              <span className="text-red-600">A</span>
              <span className="text-white">BS</span>
            </span>
            is a glimpse into the digital future.
          </motion.h1>
        </div>

        {/* Explore Button */}
        <div className="mt-8 md:mt-12 lg:mt-16 xl:mt-20">
          <motion.button
            onClick={() => scrollToSection("explore")}
            className="bg-white text-black py-3 px-8 rounded-full border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            Explore Our Services
          </motion.button>
        </div>
      </div>
      <div className="absolute inset-0">
        <FloatingPaths position={-1} />
      </div>
    </div>
  );
};
export default Hero;
