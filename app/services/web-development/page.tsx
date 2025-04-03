"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import type { NavLinkItem } from "@/components/ui/NavLink"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { ServiceStep } from "@/components/ui/ServiceStep"
import { useScrollToTop } from "@/hooks/useScrollToTop"
import { useRouter } from "next/navigation"
import { GradientBeams } from "@/components/ui/advanced-backgrounds/GradientBeams"
import { GridPattern } from "@/components/ui/advanced-backgrounds/GridPattern"
import { GlowingOrbs } from "@/components/ui/advanced-backgrounds/GlowingOrbs"
import { AnimatedButton } from "@/components/ui/AnimatedButton"

export default function WebDevelopmentPage() {
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
        <GradientBeams beamCount={8} beamColor="mixed" beamOpacity={0.4} />
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-jeenlabs-red">Web Development</span> Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Create a stunning online presence with our comprehensive web development solutions tailored to your business
            needs.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-neutral-950">
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <GridPattern lineColor="rgba(227, 25, 55, 0.2)" lineOpacity={0.15} />
        </div>
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
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Web Development Services?</h2>
                <div className="h-1 w-20 bg-jeenlabs-red mb-8"></div>
                <p className="text-gray-300 mb-8">
                  At JeenLabs, we create websites that not only look stunning but also deliver results. Our web
                  development team combines technical expertise with creative design to build websites that engage
                  visitors, drive conversions, and grow your business.
                </p>

                <h3 className="text-2xl font-bold mb-4">Our Development Process</h3>
                <p className="text-gray-300 mb-6">
                  We follow a comprehensive development process to ensure your website meets your business objectives:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-jeenlabs-red rounded-full p-2 mr-4 mt-1">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Discovery</h4>
                      <p className="text-gray-300">
                        We start by understanding your business, target audience, and goals to create a website strategy
                        that aligns with your objectives.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-jeenlabs-red rounded-full p-2 mr-4 mt-1">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Planning</h4>
                      <p className="text-gray-300">
                        We create a detailed project plan, including sitemap, wireframes, and content strategy to guide
                        the development process.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-jeenlabs-red rounded-full p-2 mr-4 mt-1">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Design</h4>
                      <p className="text-gray-300">
                        Our designers create visually appealing mockups that reflect your brand identity and provide an
                        optimal user experience.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-jeenlabs-red rounded-full p-2 mr-4 mt-1">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Development</h4>
                      <p className="text-gray-300">
                        Our developers build your website using clean, efficient code and the latest technologies to
                        ensure optimal performance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-jeenlabs-red rounded-full p-2 mr-4 mt-1">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Testing</h4>
                      <p className="text-gray-300">
                        We thoroughly test your website across different devices and browsers to ensure it works
                        flawlessly for all users.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-jeenlabs-red rounded-full p-2 mr-4 mt-1">
                      <span className="text-white font-bold">6</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Launch & Support</h4>
                      <p className="text-gray-300">
                        We deploy your website and provide ongoing support and maintenance to ensure it continues to
                        perform optimally.
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
                      <path d="M12 19c-2.3 0-6.4-.2-8.1-.6-.7-.2-1.2-.7-1.4-1.4-.3-1.1-.5-3.4-.5-5s.2-3.9.5-5c.2-.7.7-1.2 1.4-1.4C5.6 5.2 9.7 5 12 5s6.4.2 8.1.6c.7.2 1.2.7 1.4 1.4.3 1.1.5 3.4.5 5s-.2 3.9-.5 5c-.2.7-.7 1.2-1.4 1.4-1.7.4-5.8.6-8.1.6 0 0 0 0 0 0z" />
                      <polygon points="10 15 15 12 10 9" />
                    </svg>
                  </div>
                  <p className="text-xl font-bold relative z-20 mt-2 text-white">Portfolio Websites</p>
                  <div className="text-neutral-200 mt-4 relative z-20">
                    Showcase your work with a professional portfolio:
                    <ul className="list-none mt-2">
                      <ServiceStep title="Personal and professional portfolios" />
                      <ServiceStep title="Creative showcases" />
                      <ServiceStep title="Interactive galleries" />
                      <ServiceStep title="Resume and CV websites" />
                      <ServiceStep title="Personal branding sites" />
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
                      <circle cx="8" cy="21" r="1" />
                      <circle cx="19" cy="21" r="1" />
                      <path d="M2.05 2" />
                      <circle cx="19" cy="21" r="1" />
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                  </div>
                  <p className="text-xl font-bold relative z-20 mt-2 text-white">E-commerce Solutions</p>
                  <div className="text-neutral-200 mt-4 relative z-20">
                    Sell your products online with our e-commerce solutions:
                    <ul className="list-none mt-2">
                      <ServiceStep title="Online stores and marketplaces" />
                      <ServiceStep title="Shopping cart and checkout systems" />
                      <ServiceStep title="Payment gateway integration" />
                      <ServiceStep title="Inventory management" />
                      <ServiceStep title="Order processing and fulfillment" />
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
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M7 7h10" />
                      <path d="M7 12h10" />
                      <path d="M7 17h10" />
                    </svg>
                  </div>
                  <p className="text-xl font-bold relative z-20 mt-2 text-white">Interactive Web Applications</p>
                  <div className="text-neutral-200 mt-4 relative z-20">
                    Create dynamic web applications:
                    <ul className="list-none mt-2">
                      <ServiceStep title="Single-page applications (SPAs)" />
                      <ServiceStep title="Progressive web apps (PWAs)" />
                      <ServiceStep title="Interactive dashboards" />
                      <ServiceStep title="Web-based tools and calculators" />
                      <ServiceStep title="Custom web applications" />
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
        <GlowingOrbs count={5} color="mixed" minSize={150} maxSize={350} />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We leverage the latest web technologies to build fast, secure, and scalable websites and applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-900 p-6 rounded-lg border border-jeenlabs-red text-center backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-3">Frontend</h3>
              <p className="text-gray-300">React, Vue.js, Angular, Next.js, HTML5, CSS3, JavaScript, TypeScript</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-900 p-6 rounded-lg border border-jeenlabs-red text-center backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-3">Backend</h3>
              <p className="text-gray-300">Node.js, Express, Django, Ruby on Rails, PHP, Laravel, ASP.NET</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-neutral-900 p-6 rounded-lg border border-jeenlabs-red text-center backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-3">Databases</h3>
              <p className="text-gray-300">MongoDB, MySQL, PostgreSQL, Firebase, Redis, SQLite</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-neutral-900 p-6 rounded-lg border border-jeenlabs-red text-center backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-3">CMS</h3>
              <p className="text-gray-300">WordPress, Shopify, Magento, Drupal, Contentful, Strapi</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black">
        <GradientBeams beamCount={6} beamColor="red" beamOpacity={0.3} />
        <div className="container mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Ready to Build Your Dream Website?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Contact us today to discuss your web development project and how we can help you create a stunning online
            presence.
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

