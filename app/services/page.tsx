"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import type { NavLinkItem } from "@/components/ui/NavLink"
import { useScrollToTop } from "@/hooks/useScrollToTop"
import { useRouter } from "next/navigation"
import { GradientBeams } from "@/components/ui/advanced-backgrounds/GradientBeams"
import { GridPattern } from "@/components/ui/advanced-backgrounds/GridPattern"
import { GlowingOrbs } from "@/components/ui/advanced-backgrounds/GlowingOrbs"
import { ParticleField } from "@/components/ui/advanced-backgrounds/ParticleField"
import { AnimatedButton } from "@/components/ui/AnimatedButton"

export default function ServicesPage() {
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
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar leftLinks={leftLinks} rightLinks={rightLinks} buttonText="Get Started" isHomePage={false} />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-black overflow-hidden">
        {/* Background effect */}
        <div className="absolute inset-0 z-0">
          <GradientBeams beamCount={8} beamColor="mixed" beamOpacity={0.4} />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center"
          >
            Our <span className="text-jeenlabs-red">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 max-w-3xl mx-auto mb-12 text-center"
          >
            JeenLabs offers comprehensive solutions to help businesses automate processes, establish a strong online
            presence, and develop custom software applications.
          </motion.p>
        </div>
      </section>

      {/* Automation Section */}
      <section className="relative py-16 px-4 bg-neutral-950 overflow-hidden">
        {/* Background effect */}
        <div className="absolute inset-0 z-0">
          <GridPattern lineColor="rgba(227, 25, 55, 0.2)" lineOpacity={0.15} cellSize={50} />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Automation Services</h2>
            <div className="h-1 w-20 bg-jeenlabs-red mb-8"></div>
            <p className="text-gray-300 max-w-3xl mb-8">
              Our automation services help businesses streamline repetitive tasks, reduce human error, and increase
              productivity. We specialize in creating custom automation solutions tailored to your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black p-6 rounded-lg border border-jeenlabs-red shadow-lg shadow-jeenlabs-red/5 hover:shadow-jeenlabs-red/20 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4">Excel Automation</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Custom Excel macros and VBA scripts</li>
                <li>• Data processing and analysis automation</li>
                <li>• Report generation and formatting</li>
                <li>• Excel to database integration</li>
                <li>• Complex calculations and formulas</li>
              </ul>
              <div className="mt-6">
                <AnimatedButton
                  variant="outline"
                  size="sm"
                  withArrow
                  onClick={() => handleNavigation("/services/automation")}
                >
                  Learn more
                </AnimatedButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black p-6 rounded-lg border border-jeenlabs-red shadow-lg shadow-jeenlabs-red/5 hover:shadow-jeenlabs-red/20 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4">Web Automation</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Web scraping and data extraction</li>
                <li>• Form filling and submission</li>
                <li>• Browser automation</li>
                <li>• Scheduled web tasks</li>
                <li>• API integration and automation</li>
              </ul>
              <div className="mt-6">
                <AnimatedButton
                  variant="outline"
                  size="sm"
                  withArrow
                  onClick={() => handleNavigation("/services/automation")}
                >
                  Learn more
                </AnimatedButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-black p-6 rounded-lg border border-jeenlabs-red shadow-lg shadow-jeenlabs-red/5 hover:shadow-jeenlabs-red/20 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4">Desktop Automation</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• GUI automation</li>
                <li>• File and folder management</li>
                <li>• System task automation</li>
                <li>• Batch processing</li>
                <li>• Cross-application workflows</li>
              </ul>
              <div className="mt-6">
                <AnimatedButton
                  variant="outline"
                  size="sm"
                  withArrow
                  onClick={() => handleNavigation("/services/automation")}
                >
                  Learn more
                </AnimatedButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Website Development Section */}
      <section className="relative py-16 px-4 bg-black overflow-hidden">
        {/* Background effect */}
        <div className="absolute inset-0 z-0">
          <ParticleField
            particleCount={60}
            particleColor="mixed"
            connectParticles={true}
            connectionDistance={150}
            connectionOpacity={0.15}
          />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-right"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Website Development</h2>
            <div className="h-1 w-20 bg-jeenlabs-red mb-8 ml-auto"></div>
            <p className="text-gray-300 max-w-3xl ml-auto mb-8">
              Our website development services focus on creating responsive, user-friendly, and visually appealing
              websites that help businesses establish a strong online presence and connect with their audience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black p-6 rounded-lg border border-jeenlabs-red shadow-lg shadow-jeenlabs-red/5 hover:shadow-jeenlabs-red/20 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4">Portfolio Websites</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Personal and professional portfolios</li>
                <li>• Creative showcases</li>
                <li>• Interactive galleries</li>
                <li>• Resume and CV websites</li>
                <li>• Personal branding sites</li>
              </ul>
              <div className="mt-6">
                <AnimatedButton
                  variant="outline"
                  size="sm"
                  withArrow
                  onClick={() => handleNavigation("/services/web-development")}
                >
                  Learn more
                </AnimatedButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black p-6 rounded-lg border border-jeenlabs-red shadow-lg shadow-jeenlabs-red/5 hover:shadow-jeenlabs-red/20 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4">E-commerce Solutions</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Online stores and marketplaces</li>
                <li>• Shopping cart and checkout systems</li>
                <li>• Payment gateway integration</li>
                <li>• Inventory management</li>
                <li>• Order processing and fulfillment</li>
              </ul>
              <div className="mt-6">
                <AnimatedButton
                  variant="outline"
                  size="sm"
                  withArrow
                  onClick={() => handleNavigation("/services/web-development")}
                >
                  Learn more
                </AnimatedButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-black p-6 rounded-lg border border-jeenlabs-red shadow-lg shadow-jeenlabs-red/5 hover:shadow-jeenlabs-red/20 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4">Interactive Web Applications</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Single-page applications (SPAs)</li>
                <li>• Progressive web apps (PWAs)</li>
                <li>• Interactive dashboards</li>
                <li>• Web-based tools and calculators</li>
                <li>• Custom web applications</li>
              </ul>
              <div className="mt-6">
                <AnimatedButton
                  variant="outline"
                  size="sm"
                  withArrow
                  onClick={() => handleNavigation("/services/web-development")}
                >
                  Learn more
                </AnimatedButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Software Development Section */}
      <section className="relative py-16 px-4 bg-neutral-950 overflow-hidden">
        {/* Background effect */}
        <div className="absolute inset-0 z-0">
          <GlowingOrbs count={6} color="mixed" minSize={150} maxSize={350} />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Software Development</h2>
            <div className="h-1 w-20 bg-jeenlabs-red mb-8"></div>
            <p className="text-gray-300 max-w-3xl mb-8">
              Our software development services provide businesses with custom solutions designed to address specific
              challenges, improve efficiency, and drive growth through innovative technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black p-6 rounded-lg border border-jeenlabs-red shadow-lg shadow-jeenlabs-red/5 hover:shadow-jeenlabs-red/20 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4">API Development</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• RESTful API design and development</li>
                <li>• GraphQL APIs</li>
                <li>• API integration services</li>
                <li>• API documentation</li>
                <li>• API security and authentication</li>
              </ul>
              <div className="mt-6">
                <AnimatedButton
                  variant="outline"
                  size="sm"
                  withArrow
                  onClick={() => handleNavigation("/services/software-development")}
                >
                  Learn more
                </AnimatedButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black p-6 rounded-lg border border-jeenlabs-red shadow-lg shadow-jeenlabs-red/5 hover:shadow-jeenlabs-red/20 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4">Database Solutions</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Database design and modeling</li>
                <li>• SQL and NoSQL database development</li>
                <li>• Data migration and integration</li>
                <li>• Database optimization</li>
                <li>• Data warehousing</li>
              </ul>
              <div className="mt-6">
                <AnimatedButton
                  variant="outline"
                  size="sm"
                  withArrow
                  onClick={() => handleNavigation("/services/software-development")}
                >
                  Learn more
                </AnimatedButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-black p-6 rounded-lg border border-jeenlabs-red shadow-lg shadow-jeenlabs-red/5 hover:shadow-jeenlabs-red/20 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4">Authentication Systems</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• User authentication and authorization</li>
                <li>• Single sign-on (SSO) solutions</li>
                <li>• Multi-factor authentication</li>
                <li>• OAuth and OpenID Connect</li>
                <li>• Role-based access control</li>
              </ul>
              <div className="mt-6">
                <AnimatedButton
                  variant="outline"
                  size="sm"
                  withArrow
                  onClick={() => handleNavigation("/services/software-development")}
                >
                  Learn more
                </AnimatedButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-black p-6 rounded-lg border border-jeenlabs-red shadow-lg shadow-jeenlabs-red/5 hover:shadow-jeenlabs-red/20 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4">Desktop Applications</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Cross-platform desktop applications</li>
                <li>• Windows-specific applications</li>
                <li>• macOS applications</li>
                <li>• Linux applications</li>
                <li>• Electron-based applications</li>
              </ul>
              <div className="mt-6">
                <AnimatedButton
                  variant="outline"
                  size="sm"
                  withArrow
                  onClick={() => handleNavigation("/services/software-development")}
                >
                  Learn more
                </AnimatedButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-black overflow-hidden">
        {/* Background effect */}
        <div className="absolute inset-0 z-0">
          <GradientBeams beamCount={6} beamColor="red" beamOpacity={0.3} />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Contact us today to discuss how JeenLabs can help you achieve your business goals through our comprehensive
            range of services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AnimatedButton variant="glow" size="lg" withArrow onClick={() => handleNavigation("/contact")}>
              Contact Us
            </AnimatedButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

