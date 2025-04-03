"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface StylishBackgroundProps {
  variant?: "dots" | "grid" | "waves" | "gradient" | "circles"
  className?: string
  intensity?: "light" | "medium" | "strong"
  color?: "red" | "dark" | "mixed"
  animate?: boolean
}

export const StylishBackground: React.FC<StylishBackgroundProps> = ({
  variant = "dots",
  className = "",
  intensity = "medium",
  color = "red",
  animate = true,
}) => {
  // Set opacity based on intensity
  const getOpacity = () => {
    switch (intensity) {
      case "light":
        return "opacity-10"
      case "medium":
        return "opacity-20"
      case "strong":
        return "opacity-30"
      default:
        return "opacity-20"
    }
  }

  // Set color based on color prop
  const getColor = () => {
    switch (color) {
      case "red":
        return "text-jeenlabs-red"
      case "dark":
        return "text-white"
      case "mixed":
        return "text-jeenlabs-red"
      default:
        return "text-jeenlabs-red"
    }
  }

  // Dots pattern
  if (variant === "dots") {
    return (
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
        <div className={cn("absolute inset-0", getOpacity(), getColor())}>
          {animate ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle, currentColor 1px, transparent 1px), radial-gradient(circle, currentColor 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                backgroundPosition: "0 0, 20px 20px",
              }}
            />
          ) : (
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle, currentColor 1px, transparent 1px), radial-gradient(circle, currentColor 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                backgroundPosition: "0 0, 20px 20px",
              }}
            />
          )}
        </div>
      </div>
    )
  }

  // Grid pattern
  if (variant === "grid") {
    return (
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
        <div className={cn("absolute inset-0", getOpacity(), getColor())}>
          {animate ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full h-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          ) : (
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          )}
        </div>
      </div>
    )
  }

  // Waves pattern
  if (variant === "waves") {
    return (
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
        <div className={cn("absolute inset-0", getOpacity())}>
          {animate ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="w-full h-full"
            >
              <svg
                className={cn("w-full h-full", getColor())}
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </motion.div>
          ) : (
            <div className="w-full h-full">
              <svg
                className={cn("w-full h-full", getColor())}
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Gradient background
  if (variant === "gradient") {
    let gradientStyle = {}

    if (color === "red") {
      gradientStyle = {
        background: "radial-gradient(circle at center, rgba(227, 25, 55, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
      }
    } else if (color === "dark") {
      gradientStyle = {
        background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%)",
      }
    } else if (color === "mixed") {
      gradientStyle = {
        background:
          "radial-gradient(circle at top right, rgba(227, 25, 55, 0.2) 0%, rgba(0, 0, 0, 0) 50%), radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 50%)",
      }
    }

    return (
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
        {animate ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
            style={gradientStyle}
          />
        ) : (
          <div className="absolute inset-0" style={gradientStyle} />
        )}
      </div>
    )
  }

  // Circles pattern
  if (variant === "circles") {
    return (
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
        <div className={cn("absolute inset-0", getOpacity())}>
          {animate ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-full h-full relative"
            >
              <div
                className={`absolute top-1/4 right-1/4 w-64 h-64 rounded-full ${color === "red" ? "bg-jeenlabs-red" : "bg-white"} blur-[100px] opacity-20`}
              ></div>
              <div
                className={`absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full ${color === "red" ? "bg-jeenlabs-red" : "bg-white"} blur-[120px] opacity-10`}
              ></div>
              {color === "mixed" && (
                <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-jeenlabs-red blur-[100px] opacity-15"></div>
              )}
            </motion.div>
          ) : (
            <div className="w-full h-full relative">
              <div
                className={`absolute top-1/4 right-1/4 w-64 h-64 rounded-full ${color === "red" ? "bg-jeenlabs-red" : "bg-white"} blur-[100px] opacity-20`}
              ></div>
              <div
                className={`absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full ${color === "red" ? "bg-jeenlabs-red" : "bg-white"} blur-[120px] opacity-10`}
              ></div>
              {color === "mixed" && (
                <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-jeenlabs-red blur-[100px] opacity-15"></div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }

  // Default fallback
  return null
}

