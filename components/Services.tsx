"use client"
import type React from "react"
import { motion } from "framer-motion"
import { CardSpotlight } from "./ui/card-spotlight"
import { ServiceStep } from "./ui/ServiceStep"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"
import { ParticleField } from "./ui/advanced-backgrounds/ParticleField"
import { AnimatedButton } from "./ui/AnimatedButton"

interface ServicesProps {
  id: string
}

const Services: React.FC<ServicesProps> = ({ id }) => {
  const router = useRouter()

  const handleNavigation = (path: string) => {
    // Navigate to the path
    router.push(path)
    // Smooth scroll to the top
    smoothScrollToTop()
  }

  return (
    <section id={id} className="relative py-20 px-4 bg-black overflow-hidden">
      {/* Add the ParticleField background */}
      <div className="absolute inset-0 z-0">
        <ParticleField
          particleCount={50}
          particleColor="mixed"
          connectParticles={true}
          connectionDistance={150}
          connectionOpacity={0.15}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            JeenLabs delivers cutting-edge solutions in automation, web development, and software development to help
            businesses thrive in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Automation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <CardSpotlight className="h-full flex flex-col">
              <div className="text-jeenlabs-red mb-4 text-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                  <path d="M12 13v8" />
                  <path d="M5 13v6a2 2 0 0 0 2 2h8" />
                </svg>
              </div>
              <p className="text-xl font-bold relative z-20 mt-2 text-white">Automation</p>
              <div className="text-neutral-200 mt-4 relative z-20">
                Streamline your workflows with our automation solutions:
                <ul className="list-none mt-2">
                  <ServiceStep title="Excel data processing & analysis" />
                  <ServiceStep title="Web scraping & form automation" />
                  <ServiceStep title="Desktop task automation" />
                  <ServiceStep title="Workflow optimization" />
                </ul>
              </div>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                Our automation solutions help businesses save time, reduce errors, and increase productivity by
                automating repetitive tasks.
              </p>
              <div className="mt-auto pt-4 flex justify-center">
                <AnimatedButton
                  variant="outline"
                  size="sm"
                  withArrow
                  onClick={() => handleNavigation("/services/automation")}
                >
                  Learn More
                </AnimatedButton>
              </div>
            </CardSpotlight>
          </motion.div>

          {/* Website Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <CardSpotlight className="h-full flex flex-col">
              <div className="text-jeenlabs-red mb-4 text-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <line x1="3" x2="21" y1="9" y2="9" />
                  <line x1="9" x2="9" y1="21" y2="9" />
                </svg>
              </div>
              <p className="text-xl font-bold relative z-20 mt-2 text-white">Website Development</p>
              <div className="text-neutral-200 mt-4 relative z-20">
                Create a stunning online presence with our web solutions:
                <ul className="list-none mt-2">
                  <ServiceStep title="Responsive portfolio websites" />
                  <ServiceStep title="E-commerce platforms & stores" />
                  <ServiceStep title="Interactive web applications" />
                  <ServiceStep title="Content management systems" />
                </ul>
              </div>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                Our web development team creates visually appealing, user-friendly websites that help businesses
                establish a strong online presence and connect with their audience.
              </p>
              <div className="mt-auto pt-4 flex justify-center">
                <AnimatedButton
                  variant="outline"
                  size="sm"
                  withArrow
                  onClick={() => handleNavigation("/services/web-development")}
                >
                  Learn More
                </AnimatedButton>
              </div>
            </CardSpotlight>
          </motion.div>

          {/* Software Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <CardSpotlight className="h-full flex flex-col">
              <div className="text-jeenlabs-red mb-4 text-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 16 4-4-4-4" />
                  <path d="m6 8-4 4 4 4" />
                  <path d="m14.5 4-5 16" />
                </svg>
              </div>
              <p className="text-xl font-bold relative z-20 mt-2 text-white">Software Development</p>
              <div className="text-neutral-200 mt-4 relative z-20">
                Power your business with custom software solutions:
                <ul className="list-none mt-2">
                  <ServiceStep title="API development & integration" />
                  <ServiceStep title="Database design & management" />
                  <ServiceStep title="Authentication & security systems" />
                  <ServiceStep title="Cross-platform desktop applications" />
                </ul>
              </div>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                Our software development services provide businesses with custom solutions designed to address specific
                challenges and drive growth through innovative technology.
              </p>
              <div className="mt-auto pt-4 flex justify-center">
                <AnimatedButton
                  variant="outline"
                  size="sm"
                  withArrow
                  onClick={() => handleNavigation("/services/software-development")}
                >
                  Learn More
                </AnimatedButton>
              </div>
            </CardSpotlight>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <AnimatedButton variant="outline" size="lg" onClick={() => handleNavigation("/services")}>
            View All Services
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

