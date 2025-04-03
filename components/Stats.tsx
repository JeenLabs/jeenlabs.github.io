"use client"
import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { GlowingOrbs } from "./ui/advanced-backgrounds/GlowingOrbs"

interface StatProps {
  value: number
  suffix?: string
  label: string
  duration?: number
  delay?: number
}

const StatCounter = ({ value, suffix = "", label, duration = 2, delay = 0 }: StatProps) => {
  const [count, setCount] = useState(0)
  const nodeRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (nodeRef.current) {
      observer.observe(nodeRef.current)
    }

    return () => {
      if (nodeRef.current) {
        observer.unobserve(nodeRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    const incrementTime = (duration * 1000) / end
    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        start += 1
        setCount(start)
        if (start >= end) clearInterval(counter)
      }, incrementTime)

      return () => clearInterval(counter)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [value, duration, delay, isInView])

  return (
    <div ref={nodeRef} className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
      >
        <h3 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2">
          {count}
          {suffix}
        </h3>
        <p className="text-jeenlabs-red font-medium">{label}</p>
      </motion.div>
    </div>
  )
}

const Stats = () => {
  return (
    <section className="relative py-20 px-4 bg-black">
      {/* Add a glowing orbs background */}
      <GlowingOrbs count={4} color="red" minSize={200} maxSize={350} />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Since our inception, we've helped businesses achieve remarkable results through our dedicated services.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
          <StatCounter value={3} suffix="+" label="Clients Served" delay={0.1} />
          <StatCounter value={21} suffix="+" label="Projects Completed" delay={0.2} />
          <StatCounter value={50} suffix="K+" label="Lines of Code Written" delay={0.3} />
          <StatCounter value={98} suffix="%" label="Client Satisfaction" delay={0.4} />
        </div>
      </div>
    </section>
  )
}

export default Stats

