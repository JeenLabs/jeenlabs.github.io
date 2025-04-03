"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
}

interface ParticleFieldProps {
  className?: string
  particleCount?: number
  particleColor?: "red" | "white" | "mixed"
  particleSize?: [number, number]
  particleSpeed?: number
  connectParticles?: boolean
  maxConnections?: number
  connectionDistance?: number
  connectionOpacity?: number
}

export const ParticleField = ({
  className,
  particleCount = 50,
  particleColor = "red",
  particleSize = [1, 3],
  particleSpeed = 0.5,
  connectParticles = true,
  maxConnections = 3,
  connectionDistance = 150,
  connectionOpacity = 0.15,
}: ParticleFieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])

  const getColor = () => {
    switch (particleColor) {
      case "red":
        return "rgba(227, 25, 55,"
      case "white":
        return "rgba(255, 255, 255,"
      case "mixed":
        return Math.random() > 0.5 ? "rgba(227, 25, 55," : "rgba(255, 255, 255,"
      default:
        return "rgba(227, 25, 55,"
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = []
      for (let i = 0; i < particleCount; i++) {
        const size = particleSize[0] + Math.random() * (particleSize[1] - particleSize[0])
        const baseColor = getColor()
        const opacity = 0.3 + Math.random() * 0.5
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          speedX: (Math.random() - 0.5) * particleSpeed,
          speedY: (Math.random() - 0.5) * particleSpeed,
          opacity,
          color: `${baseColor}${opacity})`,
        })
      }
      particlesRef.current = particles
    }

    initParticles()

    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Reduce particle count on mobile
      const isMobile = window.innerWidth < 768
      const visibleParticles = isMobile
        ? particlesRef.current.slice(0, Math.floor(particleCount / 3))
        : particlesRef.current

      // Update and draw particles
      visibleParticles.forEach((particle, i) => {
        // Update position with reduced speed on mobile
        const speedMultiplier = isMobile ? 0.5 : 1
        particle.x += particle.speedX * speedMultiplier
        particle.y += particle.speedY * speedMultiplier

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width / window.devicePixelRatio) {
          particle.speedX *= -1
        }
        if (particle.y < 0 || particle.y > canvas.height / window.devicePixelRatio) {
          particle.speedY *= -1
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Connect particles - limit connections on mobile
        if (connectParticles) {
          const mobileMaxConnections = isMobile ? 1 : maxConnections
          const mobileConnectionDistance = isMobile ? connectionDistance * 0.7 : connectionDistance

          let connections = 0
          // Skip some particles on mobile for performance
          const step = isMobile ? 2 : 1

          for (let j = i + step; j < visibleParticles.length && connections < mobileMaxConnections; j += step) {
            const otherParticle = visibleParticles[j]
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < mobileConnectionDistance) {
              connections++
              const opacity = (1 - distance / mobileConnectionDistance) * connectionOpacity
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = `${getColor()}${opacity})`
              ctx.stroke()
            }
          }
        }
      })

      // Reduce animation frame rate on mobile
      if (isMobile) {
        setTimeout(() => {
          animationFrameId = requestAnimationFrame(animate)
        }, 50) // Lower frame rate on mobile
      } else {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [
    particleCount,
    particleColor,
    particleSize,
    particleSpeed,
    connectParticles,
    maxConnections,
    connectionDistance,
    connectionOpacity,
  ])

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

