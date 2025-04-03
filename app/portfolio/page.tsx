"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import type { NavLinkItem } from "@/components/ui/NavLink"
import { useScrollToTop } from "@/hooks/useScrollToTop"
// Import the AnimatedButton component
import { AnimatedButton } from "@/components/ui/AnimatedButton"

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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
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

export default function PortfolioPage() {
  useScrollToTop()
  const [activeFilter, setActiveFilter] = useState("All")

  // Define navigation links
  const leftLinks: NavLinkItem[] = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "About", path: "/#about" },
  ]

  const rightLinks: NavLinkItem[] = [
    { name: "Portfolio", path: "/#portfolio" },
    { name: "Team", path: "/#team" },
    { name: "Contact", path: "/#contact" },
  ]

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
    {
      title: "Healthcare Patient Portal",
      category: "Web Development",
      description:
        "Secure patient portal allowing appointment scheduling, medical record access, and provider communication.",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Manufacturing Process Automation",
      category: "Automation",
      description: "End-to-end automation solution that streamlined production processes and increased output by 40%.",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "CRM Integration System",
      category: "Software Development",
      description:
        "Custom CRM solution that integrated with existing systems and improved sales team efficiency by 65%.",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Corporate Website Redesign",
      category: "Web Development",
      description:
        "Complete redesign of a corporate website with improved UX, responsive design, and content management system.",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Data Processing Automation",
      category: "Automation",
      description: "Automated data processing system that reduced processing time by 90% and eliminated manual errors.",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Mobile Banking Application",
      category: "Software Development",
      description:
        "Secure mobile banking application with biometric authentication, transaction history, and payment features.",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
  ]

  const filters = ["All", "Web Development", "Automation", "Software Development"]

  const filteredItems =
    activeFilter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar leftLinks={leftLinks} rightLinks={rightLinks} buttonText="Get Started" isHomePage={false} />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-black">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-jeenlabs-red">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Explore our complete portfolio of projects and see how we've helped businesses across various industries
            achieve their goals through innovative solutions.
          </motion.p>

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
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-10 px-4 bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <PortfolioItem
                key={index}
                title={item.title}
                category={item.category}
                description={item.description}
                imageUrl={item.imageUrl}
                delay={0.1 * (index % 6)} // Stagger the animations in groups of 6
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Contact us today to discuss how JeenLabs can help you achieve your business goals through our innovative
            solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatedButton variant="outline" size="lg" onClick={() => (window.location.href = "/#contact")}>
              Contact Us
            </AnimatedButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

