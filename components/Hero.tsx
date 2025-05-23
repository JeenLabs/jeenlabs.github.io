"use client"
import type React from "react"
import { motion } from "framer-motion"
import { FlickeringGrid } from "@/components/ui/FlickeringGrid"
import BackgroundPaths from "@/components/ui/BackgroundPaths"
import { AnimatedButton } from "@/components/ui/AnimatedButton"

interface HeroProps {
  scrollToSection: (id: string) => void
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const handleGetStarted = () => {
    // Make sure we're using the correct ID that matches the services section
    scrollToSection("services")
  }

  return (
    <div className="relative min-h-[90vh] sm:min-h-[100vh] w-full flex items-center justify-center overflow-hidden bg-black dark:bg-neutral-950">
      {/* Background Layers */}
      <BackgroundPaths />
      <FlickeringGrid
        className="[mask-image:radial-gradient(750px_circle_at_center,white,transparent)]"
        squareSize={5}
        gridGap={6}
        maxOpacity={0.8}
        flickerChance={0.2}
        color="rgb(227, 25, 55)" // JeenLabs red
      />

      {/* Main Content - Reduced vertical spacing */}
      <div className="relative z-10 flex items-center justify-center h-full w-full p-4 sm:p-6 flex-col text-white py-10 sm:py-20">
        {/* Hero Quote Section */}
        <div className="mb-3 sm:mb-6 text-center">
          <motion.h2
            className="text-base sm:text-lg font-semibold tracking-widest uppercase border-b-2 border-white inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Automation & Development Experts
          </motion.h2>
        </div>

        {/* Hero Logo - Directly embedded SVG with larger size */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex justify-center items-center mb-4 sm:mb-8 w-full"
        >
          <svg
            width="340"
            height="413"
            viewBox="0 0 340 413"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52"
          >
            <g id="Subtract">
              <path
                d="M340 35.5L279 107.5L321 196L237 276.5V357.5L180 413V369.517C180.644 369.38 181.283 369.23 181.917 369.066L184.51 372.947C188.214 371.873 191.745 370.4 195.057 368.574L194.148 363.993C195.701 363.078 197.196 362.077 198.63 360.995L202.509 363.586C205.488 361.197 208.197 358.488 210.586 355.509L207.995 351.63C209.075 350.198 210.077 348.7 210.994 347.147L215.574 348.058C217.398 344.746 218.873 341.213 219.947 337.511L216.066 334.918C216.512 333.188 216.86 331.421 217.11 329.622L221.687 328.711C221.89 326.835 222 324.93 222 323C222 321.07 221.892 319.165 221.687 317.289L217.11 316.378C216.86 314.581 216.512 312.812 216.066 311.084L219.947 308.491C218.873 304.787 217.4 301.256 215.574 297.944L210.994 298.853C210.077 297.3 209.075 295.802 207.995 294.37L210.586 290.491C208.197 287.512 205.486 284.803 202.509 282.414L198.63 285.005C197.198 283.925 195.701 282.924 194.148 282.007L195.057 277.426C191.745 275.602 188.214 274.127 184.51 273.053L181.917 276.934C181.283 276.77 180.644 276.62 180 276.483V254L254.5 183.5L230 131.5H110L85 183L159.5 254V276.592C159.025 276.699 158.553 276.813 158.083 276.934L155.49 273.053C151.788 274.127 148.255 275.6 144.943 277.426L145.854 282.007C144.301 282.922 142.806 283.923 141.372 285.005L137.493 282.414C134.515 284.803 131.805 287.512 129.416 290.491L132.007 294.37C130.925 295.802 129.923 297.3 129.006 298.853L124.426 297.944C122.602 301.256 121.125 304.787 120.053 308.491L123.934 311.084C123.488 312.812 123.142 314.579 122.89 316.378L118.313 317.289C118.11 319.165 118 321.07 118 323C118 324.93 118.108 326.835 118.313 328.711L122.89 329.622C123.14 331.421 123.488 333.19 123.934 334.918L120.053 337.511C121.127 341.213 122.6 344.746 124.426 348.058L129.006 347.147C129.925 348.7 130.925 350.196 132.007 351.63L129.416 355.509C131.805 358.486 134.514 361.197 137.493 363.586L141.372 360.995C142.804 362.075 144.301 363.076 145.854 363.993L144.943 368.574C148.255 370.398 151.786 371.874 155.49 372.947L158.083 369.066C158.553 369.187 159.025 369.301 159.5 369.407V413L102.5 357.5V276L18.5 196L60.5 108L0 35L42 0L104.5 75H235.5L297.5 0L340 35.5Z"
                fill="white"
              />
              <path
                d="M180 354.596C193.408 350.355 203.128 337.815 203.128 323.004C203.128 308.193 193.408 295.652 180 291.412V293.811C192.13 297.965 200.85 309.467 200.85 323.004C200.85 336.541 192.129 348.044 180 352.198V354.596Z"
                fill="white"
              />
              <path
                d="M159.5 352.022V354.432C146.352 350.041 136.874 337.629 136.874 323.004C136.874 308.379 146.352 295.967 159.5 291.575V293.987C147.631 298.283 139.15 309.652 139.15 323.004C139.15 336.355 147.632 347.726 159.5 352.022Z"
                fill="white"
              />
              <path
                d="M180 349.779C190.849 345.726 198.574 335.267 198.574 323.004C198.574 310.74 190.849 300.282 180 296.228V349.779Z"
                fill="white"
              />
              <path
                d="M159.5 296.421V349.586C148.916 345.401 141.428 335.077 141.428 323.004C141.428 310.93 148.915 300.606 159.5 296.421Z"
                fill="white"
              />
              <path d="M251.5 286V343.5L280.5 316V255.5L251.5 286Z" fill="white" />
              <path d="M88.5 287L59.5 255.5L59 255L59.5 316L88.5 343.5V287Z" fill="white" />
              <path
                d="M144.292 284.771C132.003 293.006 123.915 307.017 123.915 322.919C123.915 338.822 132.005 352.833 144.292 361.068C133.112 352.383 125.875 338.528 125.875 322.919C125.875 307.311 133.11 293.455 144.292 284.771Z"
                fill="white"
              />
              <path
                d="M195.514 284.771C207.803 293.006 215.891 307.017 215.891 322.919C215.891 338.822 207.801 352.833 195.514 361.068C206.694 352.383 213.931 338.528 213.931 322.919C213.931 307.311 206.696 293.455 195.514 284.771Z"
                fill="white"
              />
            </g>
          </svg>
        </motion.div>

        {/* Hero Content Text - Increased font sizes */}
        <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 w-full max-w-6xl px-2">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span className="text-jeenlabs-red">Unlocking</span> the possibilities of
          </motion.h1>
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            tomorrow
          </motion.h1>
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mt-2 sm:mt-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <span className="tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[15px]">
              <span className="text-white">JEENL</span>
              <span className="text-jeenlabs-red">A</span>
              <span className="text-white">BS</span>
            </span>
            <span className="block mt-2 sm:mt-3 md:inline md:ml-2"> is a glimpse into the digital future.</span>
          </motion.h1>
        </div>

        {/* Explore Button */}
        <motion.div
          className="mt-6 sm:mt-8 md:mt-10 flex justify-center w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <div className="z-20 relative">
            <AnimatedButton
              variant="outline"
              size="lg"
              onClick={handleGetStarted}
              className="text-white font-medium relative z-20"
            >
              Get Started
            </AnimatedButton>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero

