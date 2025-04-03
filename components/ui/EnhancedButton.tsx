"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface EnhancedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "gradient" | "glow"
  size?: "sm" | "md" | "lg" | "xl"
  children: React.ReactNode
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  withArrow?: boolean
  withAnimation?: boolean
  className?: string
}

export const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "left",
  withArrow = false,
  withAnimation = true,
  className = "",
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false)

  // Base styles
  const baseStyles =
    "cursor-pointer rounded-full justify-center items-center flex transition-all duration-300 font-medium relative overflow-hidden"

  // Variant styles
  const variantStyles = {
    primary:
      "bg-jeenlabs-red text-white hover:bg-jeenlabs-red-600 shadow-lg shadow-jeenlabs-red/20 hover:shadow-jeenlabs-red/40",
    outline:
      "bg-transparent border-2 border-jeenlabs-red text-jeenlabs-red hover:bg-jeenlabs-red hover:text-white hover:shadow-lg hover:shadow-jeenlabs-red/20",
    ghost: "bg-transparent text-white hover:bg-white/10 border border-white/20 hover:border-white/40",
    gradient:
      "text-white bg-gradient-to-r from-jeenlabs-red to-jeenlabs-red-600 hover:from-jeenlabs-red-600 hover:to-jeenlabs-red shadow-lg shadow-jeenlabs-red/20 hover:shadow-jeenlabs-red/40",
    glow: "bg-jeenlabs-red text-white shadow-[0_0_15px_rgba(227,25,55,0.5)] hover:shadow-[0_0_25px_rgba(227,25,55,0.7)] hover:bg-jeenlabs-red-600",
  }

  // Size styles
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-4 text-base",
    xl: "px-12 py-5 text-lg",
  }

  // Arrow styles
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

  // Render button with or without animation
  if (withAnimation) {
    return (
      <motion.button
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        whileHover={{ scale: 1.05 }}
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
    )
  }

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
      {withArrow && <Arrow />}
    </button>
  )
}

