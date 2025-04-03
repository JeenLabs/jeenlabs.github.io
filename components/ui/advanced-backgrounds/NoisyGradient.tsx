"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface NoisyGradientProps {
  className?: string
  gradientColors?: string[]
  noiseOpacity?: number
  noiseSpeed?: number
  animate?: boolean
}

export const NoisyGradient = ({
  className,
  gradientColors = ["#E31937", "#000000"],
  noiseOpacity = 0.05,
  noiseSpeed = 0.003,
  animate = true,
}: NoisyGradientProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

    // Create gradient
    const createGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradientColors.forEach((color, index) => {
        gradient.addColorStop(index / (gradientColors.length - 1), color)
      })
      return gradient
    }

    // Create noise
    const createNoise = (width: number, height: number) => {
      const imageData = ctx.createImageData(width, height)
      const data = imageData.data
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255
        data[i] = value
        data[i + 1] = value
        data[i + 2] = value
        data[i + 3] = 255
      }
      return imageData
    }

    let noiseImageData: ImageData | null = null
    let time = 0
    let animationFrameId: number

    const draw = () => {
      const width = canvas.width / window.devicePixelRatio
      const height = canvas.height / window.devicePixelRatio

      // Draw gradient
      ctx.fillStyle = createGradient()
      ctx.fillRect(0, 0, width, height)

      // Initialize noise if not already done
      if (!noiseImageData) {
        noiseImageData = createNoise(width, height)
      }

      // Apply noise with animation
      if (animate) {
        time += noiseSpeed
        const tempCanvas = document.createElement("canvas")
        tempCanvas.width = width
        tempCanvas.height = height
        const tempCtx = tempCanvas.getContext("2d")
        if (tempCtx && noiseImageData) {
          tempCtx.putImageData(noiseImageData, 0, 0)
          ctx.save()
          ctx.globalAlpha = noiseOpacity
          ctx.translate(Math.sin(time) * 10, Math.cos(time) * 10)
          ctx.drawImage(tempCanvas, 0, 0)
          ctx.restore()
        }
      } else if (noiseImageData) {
        ctx.globalAlpha = noiseOpacity
        ctx.putImageData(noiseImageData, 0, 0)
        ctx.globalAlpha = 1
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [gradientColors, noiseOpacity, noiseSpeed, animate])

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

