"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GradientBeamsProps {
  className?: string
  beamClassName?: string
  beamCount?: number
  beamOpacity?: number
  beamOrigin?: "top" | "bottom" | "left" | "right" | "center"
  beamColor?: "red" | "white" | "mixed"
}

export const GradientBeams = ({
  className,
  beamClassName,
  beamCount = 8,
  beamOpacity = 0.35,
  beamOrigin = "center",
  beamColor = "red",
}: GradientBeamsProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [beams, setBeams] = useState<Array<{ angle: number; speed: number; size: number; delay: number }>>([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    // Reduce beam count on mobile
    const adjustedBeamCount = isMobile ? Math.max(3, Math.floor(beamCount / 2)) : beamCount

    const newBeams = Array.from({ length: adjustedBeamCount }, (_, i) => ({
      angle: Math.random() * 360,
      // Slower animation on mobile
      speed: isMobile ? 0.3 + Math.random() * 0.7 : 0.5 + Math.random() * 1.5,
      // Smaller beams on mobile
      size: isMobile ? 20 + Math.random() * 40 : 30 + Math.random() * 70,
      delay: Math.random() * 2,
    }))
    setBeams(newBeams)
  }, [beamCount, isMobile])

  const getBeamColor = () => {
    switch (beamColor) {
      case "red":
        return "from-jeenlabs-red/30 to-transparent"
      case "white":
        return "from-white/20 to-transparent"
      case "mixed":
        return "from-jeenlabs-red/30 via-white/10 to-transparent"
      default:
        return "from-jeenlabs-red/30 to-transparent"
    }
  }

  const getBeamOrigin = () => {
    switch (beamOrigin) {
      case "top":
        return "top-0 left-1/2 -translate-x-1/2"
      case "bottom":
        return "bottom-0 left-1/2 -translate-x-1/2"
      case "left":
        return "left-0 top-1/2 -translate-y-1/2"
      case "right":
        return "right-0 top-1/2 -translate-y-1/2"
      case "center":
      default:
        return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    }
  }

  return (
    <div ref={containerRef} className={cn("absolute inset-0 overflow-hidden", className)}>
      {beams.map((beam, index) => (
        <motion.div
          key={index}
          className={cn(
            "absolute opacity-0 bg-gradient-to-r rounded-full blur-[80px]",
            getBeamColor(),
            getBeamOrigin(),
            beamClassName,
          )}
          initial={{
            opacity: 0,
            rotate: beam.angle,
            width: `${beam.size}%`,
            height: `${beam.size}%`,
          }}
          animate={{
            // Simpler animation on mobile
            opacity: isMobile ? [0, beamOpacity * 0.8, 0] : [0, beamOpacity, 0],
            rotate: [beam.angle, beam.angle + 360],
          }}
          transition={{
            // Longer duration on mobile for better performance
            duration: isMobile ? 30 / beam.speed : 20 / beam.speed,
            repeat: Number.POSITIVE_INFINITY,
            delay: beam.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

