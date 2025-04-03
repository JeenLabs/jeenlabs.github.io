import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  // Base styles
  const baseStyles = "cursor-pointer rounded-full justify-center items-center flex transition-all duration-300"

  // Variant styles
  const variantStyles = {
    primary: "bg-jeenlabs-red text-white hover:bg-jeenlabs-red-600",
    outline: "bg-black border border-jeenlabs-red text-zinc-300 hover:bg-jeenlabs-red hover:border-white",
    ghost: "bg-transparent text-white hover:bg-black/20",
  }

  // Size styles
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  }

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

