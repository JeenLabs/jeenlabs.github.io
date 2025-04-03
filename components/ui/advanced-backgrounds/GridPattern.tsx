"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface GridPatternProps {
  className?: string
  lineColor?: string
  lineOpacity?: number
  lineSize?: number
  cellSize?: number
  animate?: boolean
}

export const GridPattern = ({
  className,
  lineColor = "rgba(227, 25, 55, 0.3)",
  lineOpacity = 0.2,
  lineSize = 1,
  cellSize = 50,
  animate = true,
}: GridPatternProps) => {
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

    let animationFrameId: number
    let rotation = 0
    let scale = 1

    const draw = () => {
      if (!canvas || !ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()

      // Set line properties
      ctx.strokeStyle = lineColor
      ctx.globalAlpha = lineOpacity
      ctx.lineWidth = lineSize

      // Calculate grid dimensions
      const width = canvas.width / window.devicePixelRatio
      const height = canvas.height / window.devicePixelRatio

      // Optimize by reducing the number of lines drawn
      const optimizedCellSize = window.innerWidth < 768 ? cellSize * 2 : cellSize

      // Draw vertical lines
      for (let x = 0; x <= width; x += optimizedCellSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      // Draw horizontal lines
      for (let y = 0; y <= height; y += optimizedCellSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // Only animate on desktop
      if (animate && window.innerWidth >= 768) {
        // Apply subtle animation with reduced frequency
        rotation += 0.0002
        scale = 1 + Math.sin(Date.now() / 8000) * 0.03

        ctx.translate(width / 2, height / 2)
        ctx.rotate(rotation)
        ctx.scale(scale, scale)
        ctx.translate(-width / 2, -height / 2)
      }

      ctx.restore()

      // Reduce animation frame rate on mobile
      if (window.innerWidth < 768) {
        setTimeout(() => {
          animationFrameId = requestAnimationFrame(draw)
        }, 100) // Lower frame rate on mobile
      } else {
        animationFrameId = requestAnimationFrame(draw)
      }
    }

    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [lineColor, lineOpacity, lineSize, cellSize, animate])

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

