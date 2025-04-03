"use client"

import { useRef } from "react"
import { animate } from "framer-motion"

const useSmoothScroll = () => {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const registerSection = (id: string) => (el: HTMLElement | null) => {
    if (el) sectionRefs.current[id] = el
  }

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      const offsetPosition = section.offsetTop - 50 // Adjust offset if needed

      animate(window.scrollY, offsetPosition, {
        duration: 0.8,
        ease: [0.165, 0.84, 0.44, 1], // Cubic bezier easing
        onUpdate: (value) => window.scrollTo(0, value),
      })
    } else {
      console.log(`Section with id "${id}" not found`)
    }
  }

  return { registerSection, scrollToSection }
}

export default useSmoothScroll

