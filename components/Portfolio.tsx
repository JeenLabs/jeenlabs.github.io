"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"

interface PortfolioItemProps {
  title: string
  category: string
  description: string
  imageUrl: string
  delay?: number
}

const PortfolioItem = ({ title, category, description, imageUrl, delay = 0 }: PortfolioItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-neutral-900 rounded-lg overflow-hidden group"
    >
      <div className="h-64 relative overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-jeenlabs-red text-white text-xs px-2 py-1 rounded">{category}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
        <button className="mt-4 text-jeenlabs-red hover:text-white transition-colors duration-300 flex items-center">
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.div>
  )
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const router = useRouter()

  const portfolioItems = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description:
        "A custom e-commerce solution with advanced product filtering, user accounts, and secure payment processing.",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Inventory Management System",
      category: "Automation",
      description:
        "Automated inventory tracking system that reduced manual work by 85% and improved accuracy to 99.8%.",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Financial Dashboard",
      category: "Software Development",
      description: "Real-time financial analytics dashboard with customizable reports and data visualization tools.",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
  ]

  const filters = ["All", "Web Development", "Automation", "Software Development"]

  const filteredItems =
    activeFilter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  const handleViewAllProjects = () => {
    router.push("/portfolio")
    smoothScrollToTop()
  }

  return (
    <section id="portfolio" className="relative py-20 px-4 bg-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our recent projects and see how we've helped businesses across various industries achieve their
            goals.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  activeFilter === filter
                    ? "bg-jeenlabs-red text-white"
                    : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.slice(0, 3).map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              category={item.category}
              description={item.description}
              imageUrl={item.imageUrl}
              delay={0.1 * index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => router.push("/projects")}
            className="bg-black text-jeenlabs-red py-3 px-8 rounded-full border-2 border-jeenlabs-red hover:bg-jeenlabs-red hover:text-white transition-all duration-300 transform hover:scale-105 font-medium"
          >
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio

