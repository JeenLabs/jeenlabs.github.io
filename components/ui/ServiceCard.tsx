"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  link: string
  delay?: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-neutral-900 p-6 rounded-lg border border-jeenlabs-red hover:border-white transition-all duration-300 flex flex-col h-full"
    >
      <div className="text-jeenlabs-red mb-4 text-3xl">{icon}</div>
      <h3 className="text-xl sm:text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300 mb-4 flex-grow">{description}</p>
      <div className="flex justify-center">
        <Link
          href={link}
          className="text-jeenlabs-red hover:text-white transition-colors duration-300 font-medium flex items-center"
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

export default ServiceCard

