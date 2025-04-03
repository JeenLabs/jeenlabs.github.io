"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "gradient" | "glow" | "neon"
  size?: "sm" | "md" | "lg" | "xl"
  children: React.ReactNode
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  withArrow?: boolean
  className?: string
  hoverScale?: number
  centered?: boolean // Add a className to center the button when it's in a flex container
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  variant = "outline",
  size = "md",
  children,
  icon,
  iconPosition = "left",
  withArrow = false,
  className = "",
  hoverScale = 1.05,
  centered = true, // Default to true to center all buttons
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false)

  // Base styles - matching the navbar button style
  const baseStyles =
    "cursor-pointer rounded-full justify-center items-center flex transition-all duration-300 text-white"

  // Variant styles - with outline as default to match navbar
  const variantStyles = {
    primary: "bg-jeenlabs-red text-white hover:bg-jeenlabs-red-600",
    outline: "bg-black border border-jeenlabs-red text-white hover:bg-jeenlabs-red hover:border-white",
    ghost: "bg-transparent text-white hover:bg-black/20",
    gradient:
      "text-white bg-gradient-to-r from-jeenlabs-red to-jeenlabs-red-600 hover:from-jeenlabs-red-600 hover:to-jeenlabs-red",
    glow: "bg-jeenlabs-red text-white shadow-[0_0_15px_rgba(227,25,55,0.5)] hover:shadow-[0_0_25px_rgba(227,25,55,0.7)]",
    neon: "bg-black text-jeenlabs-red border-2 border-jeenlabs-red hover:bg-jeenlabs-red hover:text-white",
  }

  // Size styles
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-4 text-base",
    xl: "px-12 py-5 text-lg",
  }

  // Arrow component
  const Arrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-4 w-4 ml-2 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )

  return (
    <div className={cn(centered ? "flex justify-center" : "")}>
      {" "}
      {/* In the return statement, add a div wrapper with flex justify-center if needed */}
      <motion.button
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        whileHover={{ scale: hoverScale }}
        whileTap={{ scale: 0.98 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        {...props}
      >
        {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
        {withArrow && <Arrow />}
      </motion.button>
    </div>
  )
}

