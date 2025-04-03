"use client"
import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"
import type { NavLinkItem } from "@/components/ui/NavLink"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { ServiceStep } from "@/components/ui/ServiceStep"
import { useScrollToTop } from "@/hooks/useScrollToTop"
import { useRouter } from "next/navigation"
// Import Footer
import Footer from "@/components/Footer"
// Import the AnimatedButton component
import { AnimatedButton } from "@/components/ui/AnimatedButton"

export default function SoftwareDevelopmentPage() {
  useScrollToTop()
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  // Define navigation links
  const leftLinks: NavLinkItem[] = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "About", path: "/#about" },
  ]

  const rightLinks: NavLinkItem[] = [
    { name: "Team", path: "/#team" },
    { name: "Contact", path: "/contact" },
  ]

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
            <span className="text-jeenlabs-red">Software Development</span> Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Power your business with custom software solutions designed to address your specific challenges and drive
            growth.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-neutral-950">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Software Development Services?</h2>
                <div className="h-1 w-20 bg-jeenlabs-red mb-8"></div>
                <p className="text-gray-300 mb-8">
                  At JeenLabs, we develop custom software solutions that help businesses streamline operations, improve
                  efficiency, and gain a competitive edge. Our team of experienced developers combines technical
                  expertise with business acumen to deliver software that meets your specific needs.
                </p>

                <h3 className="text-2xl font-bold mb-4">Our Development Methodology</h3>
                <p className="text-gray-300 mb-6">
                  We follow an agile development methodology that ensures transparency, flexibility, and quality
                  throughout the development process:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-jeenlabs-red rounded-full p-2 mr-4 mt-1">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Requirements Analysis</h4>
                      <p className="text-gray-300">
                        We work closely with you to understand your business needs, challenges, and goals to define
                        clear requirements for your software solution.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-jeenlabs-red rounded-full p-2 mr-4 mt-1">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Design & Architecture</h4>
                      <p className="text-gray-300">
                        Our architects design a robust and scalable software architecture that serves as the foundation
                        for your solution.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-jeenlabs-red rounded-full p-2 mr-4 mt-1">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Iterative Development</h4>
                      <p className="text-gray-300">
                        We develop your software in short, iterative cycles, delivering working features that you can
                        review and provide feedback on.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-jeenlabs-red rounded-full p-2 mr-4 mt-1">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Quality Assurance</h4>
                      <p className="text-gray-300">
                        Our QA team rigorously tests each feature to ensure it meets the highest quality standards and
                        functions as expected.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-jeenlabs-red rounded-full p-2 mr-4 mt-1">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Deployment & Integration</h4>
                      <p className="text-gray-300">
                        We deploy your software and ensure it integrates seamlessly with your existing systems and
                        workflows.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-jeenlabs-red rounded-full p-2 mr-4 mt-1">
                      <span className="text-white font-bold">6</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Maintenance & Support</h4>
                      <p className="text-gray-300">
                        We provide ongoing maintenance and support to ensure your software continues to perform
                        optimally and evolves with your business needs.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Service Cards */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <CardSpotlight>
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
                      <path d="M18 10h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z" />
                    </svg>
                  </div>
                  <p className="text-xl font-bold relative z-20 mt-2 text-white">API Development</p>
                  <div className="text-neutral-200 mt-4 relative z-20">
                    Connect your systems and applications:
                    <ul className="list-none mt-2">
                      <ServiceStep title="RESTful API design and development" />
                      <ServiceStep title="GraphQL APIs" />
                      <ServiceStep title="API integration services" />
                      <ServiceStep title="API documentation" />
                      <ServiceStep title="API security and authentication" />
                    </ul>
                  </div>
                </CardSpotlight>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <CardSpotlight>
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
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    </svg>
                  </div>
                  <p className="text-xl font-bold relative z-20 mt-2 text-white">Database Solutions</p>
                  <div className="text-neutral-200 mt-4 relative z-20">
                    Manage your data effectively:
                    <ul className="list-none mt-2">
                      <ServiceStep title="Database design and modeling" />
                      <ServiceStep title="SQL and NoSQL database development" />
                      <ServiceStep title="Data migration and integration" />
                      <ServiceStep title="Database optimization" />
                      <ServiceStep title="Data warehousing" />
                    </ul>
                  </div>
                </CardSpotlight>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <CardSpotlight>
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
                      <rect width="16" height="16" x="4" y="4" rx="2" />
                      <rect width="4" height="4" x="10" y="10" rx="1" />
                      <path d="M4 12h3" />
                      <path d="M17 12h3" />
                      <path d="M12 4v3" />
                      <path d="M12 17v3" />
                    </svg>
                  </div>
                  <p className="text-xl font-bold relative z-20 mt-2 text-white">Desktop Applications</p>
                  <div className="text-neutral-200 mt-4 relative z-20">
                    Build powerful desktop software:
                    <ul className="list-none mt-2">
                      <ServiceStep title="Cross-platform desktop applications" />
                      <ServiceStep title="Windows-specific applications" />
                      <ServiceStep title="macOS applications" />
                      <ServiceStep title="Linux applications" />
                      <ServiceStep title="Electron-based applications" />
                    </ul>
                  </div>
                </CardSpotlight>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We leverage a wide range of technologies to build robust, scalable, and secure software solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-900 p-6 rounded-lg border border-jeenlabs-red text-center"
            >
              <h3 className="text-xl font-bold mb-3">Languages</h3>
              <p className="text-gray-300">Python, JavaScript, TypeScript, Java, C#, C++, Go, Ruby</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-900 p-6 rounded-lg border border-jeenlabs-red text-center"
            >
              <h3 className="text-xl font-bold mb-3">Frameworks</h3>
              <p className="text-gray-300">Node.js, Django, .NET, Spring Boot, Flask, Express, Laravel</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-neutral-900 p-6 rounded-lg border border-jeenlabs-red text-center"
            >
              <h3 className="text-xl font-bold mb-3">Databases</h3>
              <p className="text-gray-300">PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, SQL Server</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-neutral-900 p-6 rounded-lg border border-jeenlabs-red text-center"
            >
              <h3 className="text-xl font-bold mb-3">Cloud</h3>
              <p className="text-gray-300">AWS, Azure, Google Cloud, Docker, Kubernetes, Serverless</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Business with Custom Software?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Contact us today to discuss your software development needs and how we can help you build a solution that
            drives your business forward.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AnimatedButton variant="outline" size="lg" onClick={() => handleNavigation("/contact")}>
              Get in Touch
            </AnimatedButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

