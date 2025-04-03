"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useMediaQuery } from "@/hooks/use-mobile"

function FloatingPaths({ position, isMobile }: { position: number; isMobile: boolean }) {
  // Adjust the number of paths and scaling for mobile
  const pathCount = isMobile ? 18 : 36
  const scaleFactor = isMobile ? 0.6 : 1

  const paths = Array.from({ length: pathCount }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position * scaleFactor} -${189 + i * 6 * scaleFactor}C-${
      380 - i * 5 * position * scaleFactor
    } -${189 + i * 6 * scaleFactor} -${312 - i * 5 * position * scaleFactor} ${216 - i * 6 * scaleFactor} ${
      152 - i * 5 * position * scaleFactor
    } ${343 - i * 6 * scaleFactor}C${616 - i * 5 * position * scaleFactor} ${470 - i * 6 * scaleFactor} ${
      684 - i * 5 * position * scaleFactor
    } ${875 - i * 6 * scaleFactor} ${684 - i * 5 * position * scaleFactor} ${875 - i * 6 * scaleFactor}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: (0.5 + i * 0.03) * (isMobile ? 0.7 : 1),
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-white opacity-30"
        viewBox={isMobile ? "0 0 350 200" : "0 0 696 316"}
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        <title>Background Paths</title>
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
  )
}

export default function BackgroundPaths() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden opacity-0">{/* Placeholder to prevent layout shift */}</div>
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <FloatingPaths position={1} isMobile={isMobile} />
      <FloatingPaths position={-1} isMobile={isMobile} />
    </div>
  )
}

