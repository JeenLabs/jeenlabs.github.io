"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import type { NavLinkItem } from "@/components/ui/NavLink"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { ServiceStep } from "@/components/ui/ServiceStep"
import { useRouter } from "next/navigation"
import { useScrollToTop } from "@/hooks/useScrollToTop"
import { GradientBeams } from "@/components/ui/advanced-backgrounds/GradientBeams"
import { GridPattern } from "@/components/ui/advanced-backgrounds/GridPattern"
import { GlowingOrbs } from "@/components/ui/advanced-backgrounds/GlowingOrbs"
import { AnimatedButton } from "@/components/ui/AnimatedButton"

export default function AutomationPage() {
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
      <section className="relative py-20 px-4 bg-black overflow-hidden">
        <GradientBeams beamCount={10} beamColor="mixed" beamOpacity={0.4} />
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-jeenlabs-red">Automation</span> Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Streamline your business processes, reduce manual work, and increase productivity with our comprehensive
            automation solutions.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-16 px-4 bg-neutral-950 overflow-hidden">
        <GridPattern lineColor="rgba(227, 25, 55, 0.2)" lineOpacity={0.15} cellSize={60} />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Automation Services?</h2>
                <div className="h-1 w-20 bg-jeenlabs-red mb-8"></div>
                <p className="text-gray-300 mb-8">
                  At JeenLabs, we specialize in creating custom automation solutions that transform manual,
                  time-consuming processes into efficient, error-free workflows. Our automation experts analyze your
                  business needs and develop tailored solutions that deliver measurable results.
                </p>

                <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                <p className="text-gray-300 mb-6">
                  We follow a systematic approach to automation that ensures optimal results:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-jeenlabs-red rounded-full p-2 mr-4 mt-1 shadow-lg shadow-jeenlabs-red/20">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Analysis</h4>
                      <p className="text-gray-300">
                        We thoroughly analyze your current processes, identifying bottlenecks, repetitive tasks, and
                        opportunities for automation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-jeenlabs-red rounded-full p-2 mr-4 mt-1 shadow-lg shadow-jeenlabs-red/20">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Design</h4>
                      <p className="text-gray-300">
                        Our team designs a custom automation solution that addresses your specific needs and integrates
                        seamlessly with your existing systems.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-jeenlabs-red rounded-full p-2 mr-4 mt-1 shadow-lg shadow-jeenlabs-red/20">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Development</h4>
                      <p className="text-gray-300">
                        We develop the automation solution using the most appropriate technologies and tools for your
                        specific requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-jeenlabs-red rounded-full p-2 mr-4 mt-1 shadow-lg shadow-jeenlabs-red/20">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Testing</h4>
                      <p className="text-gray-300">
                        We rigorously test the automation solution to ensure it works flawlessly and handles all
                        possible scenarios.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-jeenlabs-red rounded-full p-2 mr-4 mt-1 shadow-lg shadow-jeenlabs-red/20">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Implementation</h4>
                      <p className="text-gray-300">
                        We implement the solution in your environment, providing training and support to ensure a smooth
                        transition.
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
                      className="drop-shadow-[0_0_8px_rgba(227,25,55,0.5)]"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M8 13h2" />
                      <path d="M8 17h2" />
                      <path d="M14 13h2" />
                      <path d="M14 17h2" />
                    </svg>
                  </div>
                  <p className="text-xl font-bold relative z-20 mt-2 text-white">Excel Automation</p>
                  <div className="text-neutral-200 mt-4 relative z-20">
                    Automate your Excel workflows:
                    <ul className="list-none mt-2">
                      <ServiceStep title="Custom macros and VBA scripts" />
                      <ServiceStep title="Data processing and analysis" />
                      <ServiceStep title="Automated report generation" />
                      <ServiceStep title="Excel to database integration" />
                      <ServiceStep title="Complex calculations and formulas" />
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
                      className="drop-shadow-[0_0_8px_rgba(227,25,55,0.5)]"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <p className="text-xl font-bold relative z-20 mt-2 text-white">Web Automation</p>
                  <div className="text-neutral-200 mt-4 relative z-20">
                    Automate your web-based tasks:
                    <ul className="list-none mt-2">
                      <ServiceStep title="Web scraping and data extraction" />
                      <ServiceStep title="Form filling and submission" />
                      <ServiceStep title="Browser automation" />
                      <ServiceStep title="Scheduled web tasks" />
                      <ServiceStep title="API integration and automation" />
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
                      className="drop-shadow-[0_0_8px_rgba(227,25,55,0.5)]"
                    >
                      <rect width="16" height="16" x="4" y="4" rx="2" />
                      <rect width="4" height="4" x="10" y="10" rx="1" />
                      <path d="M15 2v2" />
                      <path d="M15 20v2" />
                      <path d="M2 15h2" />
                      <path d="M20 15h2" />
                    </svg>
                  </div>
                  <p className="text-xl font-bold relative z-20 mt-2 text-white">Desktop Automation</p>
                  <div className="text-neutral-200 mt-4 relative z-20">
                    Automate your desktop applications:
                    <ul className="list-none mt-2">
                      <ServiceStep title="GUI automation" />
                      <ServiceStep title="File and folder management" />
                      <ServiceStep title="System task automation" />
                      <ServiceStep title="Batch processing" />
                      <ServiceStep title="Cross-application workflows" />
                    </ul>
                  </div>
                </CardSpotlight>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-neutral-950 overflow-hidden">
        <GlowingOrbs count={6} color="mixed" minSize={150} maxSize={300} />
        <div className="container mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Ready to Automate Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Contact us today to discuss how our automation solutions can help your business save time, reduce costs, and
            improve efficiency.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AnimatedButton variant="outline" size="lg" onClick={() => handleNavigation("/contact")}>
              Contact Us
            </AnimatedButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

