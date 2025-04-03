"use client"

import { animate } from "framer-motion"

export const smoothScrollToTop = (duration = 0.8) => {
  animate(window.scrollY, 0, {
    duration: duration,
    ease: [0.165, 0.84, 0.44, 1], // Cubic bezier easing
    onUpdate: (value) => window.scrollTo(0, value),
  })
}

export const smoothScrollToElement = (elementId: string, offset = 50, duration = 0.8) => {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - offset

    animate(window.scrollY, offsetPosition, {
      duration: duration,
      ease: [0.165, 0.84, 0.44, 1],
      onUpdate: (value) => window.scrollTo(0, value),
    })
  }
}

