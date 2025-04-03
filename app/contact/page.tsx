"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import type { NavLinkItem } from "@/components/ui/NavLink"
import { useScrollToTop } from "@/hooks/useScrollToTop"
import { useState } from "react"
import type React from "react"
import { GradientBeams } from "@/components/ui/advanced-backgrounds/GradientBeams"
import { ParticleField } from "@/components/ui/advanced-backgrounds/ParticleField"
import { GlowingOrbs } from "@/components/ui/advanced-backgrounds/GlowingOrbs"
import { AnimatedButton } from "@/components/ui/AnimatedButton"

export default function ContactPage() {
  useScrollToTop()

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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    hearAbout: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create subject line
    const subjectLine = formData.subject ? `JeenLabs Inquiry: ${formData.subject}` : "JeenLabs Website Inquiry"

    // Create email body with form data
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
${formData.company ? `Company: ${formData.company}\n` : ""}
Subject: ${formData.subject}
${formData.hearAbout ? `How they heard about us: ${formData.hearAbout}\n` : ""}

Project Details:
${formData.message}
`

    // Encode the email parameters
    const mailtoLink = `mailto:contact@jeenlabs.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(emailBody)}`

    // Open the user's mail client directly
    window.location.href = mailtoLink
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar leftLinks={leftLinks} rightLinks={rightLinks} buttonText="Get Started" isHomePage={false} />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-black overflow-hidden">
        <GradientBeams beamCount={12} beamColor="mixed" beamOpacity={0.4} />
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-jeenlabs-red">Contact</span> Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 max-w-3xl mx-auto mb-12"
          >
            We're excited to hear about your project. Reach out to discuss how JeenLabs can help transform your business
            through innovative automation and development solutions.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-16 px-4 bg-neutral-950 overflow-hidden">
        <ParticleField
          particleCount={80}
          particleColor="mixed"
          connectParticles={true}
          connectionDistance={200}
          connectionOpacity={0.2}
        />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Column - Contact Information */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="h-1 w-20 bg-jeenlabs-red mb-8"></div>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="text-jeenlabs-red mr-5 mt-1">
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
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-300">contact@jeenlabs.com</p>
                      <p className="text-gray-400 text-sm mt-1">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-jeenlabs-red mr-5 mt-1">
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
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-gray-300">Bhiwandi, Mumbai, India 421305</p>
                      <p className="text-gray-400 text-sm mt-1">Remote consultations available worldwide</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-neutral-900 rounded-lg border border-jeenlabs-red shadow-lg shadow-jeenlabs-red/5 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4">Our Commitment</h3>
                  <p className="text-gray-300 mb-4">
                    At JeenLabs, we're committed to providing exceptional service and delivering solutions that drive
                    real business value. When you contact us, we promise:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-jeenlabs-red mr-2 mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Quick response within 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-jeenlabs-red mr-2 mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Personalized consultation tailored to your needs</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-jeenlabs-red mr-2 mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Transparent communication throughout your project</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-jeenlabs-red mr-2 mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Professional advice and expertise</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold mb-6">Let's Discuss Your Project</h2>
              <div className="h-1 w-20 bg-jeenlabs-red mb-8"></div>
              <p className="text-gray-300 mb-8">
                Please fill out the form below with details about your project. The more information you provide, the
                better we can understand your needs and provide a tailored solution.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name <span className="text-jeenlabs-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-jeenlabs-red text-white"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Email <span className="text-jeenlabs-red">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-jeenlabs-red text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company Field */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-jeenlabs-red text-white"
                      placeholder="Your Company"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subject <span className="text-jeenlabs-red">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-jeenlabs-red text-white"
                    >
                      <option value="">Select a service you're interested in</option>
                      <option value="Automation Services">Automation Services</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Software Development">Software Development</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Partnership">Partnership Opportunity</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* How did you hear about us Field */}
                <div>
                  <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-300 mb-1">
                    How did you hear about us?
                  </label>
                  <select
                    id="hearAbout"
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-jeenlabs-red text-white"
                  >
                    <option value="">Select an option</option>
                    <option value="Search Engine">Search Engine (Google, Bing, etc.)</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Referral">Referral from a Friend or Colleague</option>
                    <option value="Portfolio">Our Portfolio</option>
                    <option value="Blog">Blog or Article</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Project Details <span className="text-jeenlabs-red">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-jeenlabs-red text-white"
                    placeholder="Please describe your project, including your goals, challenges, and any specific requirements."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <AnimatedButton type="submit" variant="outline" size="lg" className="w-full">
                    Submit Message
                  </AnimatedButton>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 px-4 bg-black overflow-hidden">
        <GlowingOrbs count={7} color="mixed" minSize={150} maxSize={350} />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services, process, and how we can help your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-900 p-6 rounded-lg border border-jeenlabs-red shadow-lg shadow-jeenlabs-red/5 hover:shadow-jeenlabs-red/10 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-3">What is your project process?</h3>
              <p className="text-gray-300">
                Our process typically involves an initial consultation, requirements gathering, proposal and quotation,
                project kickoff, regular progress updates, testing, delivery, and post-launch support. We ensure clear
                communication throughout each stage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-900 p-6 rounded-lg border border-jeenlabs-red shadow-lg shadow-jeenlabs-red/5 hover:shadow-jeenlabs-red/10 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-3">How much does a typical project cost?</h3>
              <p className="text-gray-300">
                Project costs vary based on complexity, features, and timeline. We provide detailed quotes after
                understanding your specific requirements. We're transparent about costs and will work with you to find a
                solution that fits your budget.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-neutral-900 p-6 rounded-lg border border-jeenlabs-red shadow-lg shadow-jeenlabs-red/5 hover:shadow-jeenlabs-red/10 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-3">How long does a project take to complete?</h3>
              <p className="text-gray-300">
                Project timelines depend on scope and complexity. Small projects might take 2-4 weeks, while larger
                projects could take several months. We'll provide a realistic timeline during our initial consultation
                and keep you updated throughout the process.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-neutral-900 p-6 rounded-lg border border-jeenlabs-red shadow-lg shadow-jeenlabs-red/5 hover:shadow-jeenlabs-red/10 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-3">Do you offer ongoing support?</h3>
              <p className="text-gray-300">
                Yes, we offer various support and maintenance packages to ensure your solution continues to perform
                optimally. Whether you need regular updates, bug fixes, or feature enhancements, we're here to support
                you after launch.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-neutral-900 p-6 rounded-lg border border-jeenlabs-red shadow-lg shadow-jeenlabs-red/5 hover:shadow-jeenlabs-red/10 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-3">Can you work with an existing system?</h3>
              <p className="text-gray-300">
                We specialize in integrating with and enhancing existing systems. Our team can assess your current
                infrastructure and recommend the best approach to meet your goals, whether that's building on what you
                have or creating something new.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-neutral-900 p-6 rounded-lg border border-jeenlabs-red shadow-lg shadow-jeenlabs-red/5 hover:shadow-jeenlabs-red/10 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-3">What industries do you work with?</h3>
              <p className="text-gray-300">
                We work with clients across various industries including finance, healthcare, education, e-commerce,
                manufacturing, and more. Our solutions are tailored to meet the specific needs and challenges of each
                industry and business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

