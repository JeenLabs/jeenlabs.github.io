"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { animate } from "framer-motion"

export function useScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Use framer-motion's animate function for smooth scrolling
    animate(window.scrollY, 0, {
      duration: 0.8, // Animation duration in seconds
      ease: [0.165, 0.84, 0.44, 1], // Cubic bezier easing for smooth motion
      onUpdate: (value) => window.scrollTo(0, value),
    })
  }, [pathname])
}

