"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Orb {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
}

interface GlowingOrbsProps {
  className?: string
  count?: number
  color?: "red" | "white" | "mixed"
  minSize?: number
  maxSize?: number
  minDuration?: number
  maxDuration?: number
}

export const GlowingOrbs = ({
  className,
  count = 5,
  color = "red",
  minSize = 100,
  maxSize = 300,
  minDuration = 20,
  maxDuration = 40,
}: GlowingOrbsProps) => {
  const [orbs, setOrbs] = useState<Orb[]>([])
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
    const generateOrbs = () => {
      // Reduce orb count on mobile
      const adjustedCount = isMobile ? Math.max(2, Math.floor(count / 2)) : count

      const newOrbs: Orb[] = []
      for (let i = 0; i < adjustedCount; i++) {
        // Reduce size on mobile
        const mobileMinSize = isMobile ? minSize * 0.7 : minSize
        const mobileMaxSize = isMobile ? maxSize * 0.7 : maxSize

        const size = mobileMinSize + Math.random() * (mobileMaxSize - mobileMinSize)

        // Increase duration on mobile for better performance
        const mobileDurationFactor = isMobile ? 1.5 : 1
        const duration = (minDuration + Math.random() * (maxDuration - minDuration)) * mobileDurationFactor

        let orbColor
        switch (color) {
          case "red":
            orbColor = "rgba(227, 25, 55, 0.15)"
            break
          case "white":
            orbColor = "rgba(255, 255, 255, 0.1)"
            break
          case "mixed":
            orbColor = Math.random() > 0.5 ? "rgba(227, 25, 55, 0.15)" : "rgba(255, 255, 255, 0.1)"
            break
          default:
            orbColor = "rgba(227, 25, 55, 0.15)"
        }

        newOrbs.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size,
          color: orbColor,
          duration,
          delay: Math.random() * 5,
        })
      }
      setOrbs(newOrbs)
    }

    generateOrbs()
  }, [count, color, minSize, maxSize, minDuration, maxDuration, isMobile])

  // Simplify animation on mobile
  const getAnimationProps = (orb: Orb) => {
    if (isMobile) {
      return {
        opacity: [0.3, 0.6, 0.3],
        scale: [0.9, 1.1, 0.9],
        // Reduce movement on mobile
        x: ["-5%", "5%", "-5%"],
        y: ["-5%", "5%", "-5%"],
      }
    }

    return {
      opacity: [0.3, 0.8, 0.3],
      scale: [0.8, 1.2, 0.8],
      x: ["-10%", "10%", "-10%"],
      y: ["-10%", "10%", "-10%"],
    }
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-[100px]"
          style={{
            width: orb.size,
            height: orb.size,
            backgroundColor: orb.color,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={getAnimationProps(orb)}
          transition={{
            duration: orb.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

