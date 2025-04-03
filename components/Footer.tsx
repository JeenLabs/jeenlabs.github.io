"use client"
import { Logo } from "@/components/ui/Logo"
import Link from "next/link"
import { motion } from "framer-motion"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-jeenlabs-red to-transparent"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-jeenlabs-red/10 blur-3xl"></div>
      <div className="absolute top-1/2 -left-24 w-48 h-48 rounded-full bg-jeenlabs-red/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo and about section */}
          <div className="space-y-4 flex flex-col items-center text-center">
            <Logo size="md" showText={true} />
            <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-md mx-auto">
              Unlocking the possibilities of tomorrow through innovative automation and development solutions that
              transform businesses.
            </p>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 pb-2 border-b border-neutral-800">Our Services</h3>
            <ul className="space-y-2">
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/services/automation"
                  className="text-gray-400 hover:text-jeenlabs-red transition-colors duration-300 inline-block py-1"
                >
                  Automation
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/services/web-development"
                  className="text-gray-400 hover:text-jeenlabs-red transition-colors duration-300 inline-block py-1"
                >
                  Web Development
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/services/software-development"
                  className="text-gray-400 hover:text-jeenlabs-red transition-colors duration-300 inline-block py-1"
                >
                  Software Development
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-jeenlabs-red transition-colors duration-300 inline-block py-1"
                >
                  All Services
                </Link>
              </motion.li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 pb-2 border-b border-neutral-800">Company</h3>
            <ul className="space-y-2">
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/#about"
                  className="text-gray-400 hover:text-jeenlabs-red transition-colors duration-300 inline-block py-1"
                >
                  About Us
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/#team"
                  className="text-gray-400 hover:text-jeenlabs-red transition-colors duration-300 inline-block py-1"
                >
                  Our Team
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/#contact"
                  className="text-gray-400 hover:text-jeenlabs-red transition-colors duration-300 inline-block py-1"
                >
                  Contact Us
                </Link>
              </motion.li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 pb-2 border-b border-neutral-800">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-jeenlabs-red mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400">Bhiwandi, Mumbai, India 421305</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-jeenlabs-red mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-400">contact@jeenlabs.com</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-jeenlabs-red mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="text-gray-400">
                  <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                  <div>Saturday - Sunday: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with copyright */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-center items-center">
          <div className="text-gray-500 text-sm">&copy; {currentYear} JeenLabs. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

