"use client"
import { motion } from "framer-motion"
import { CardSpotlight } from "./ui/card-spotlight"
import { GridPattern } from "./ui/advanced-backgrounds/GridPattern"

const About = () => {
  return (
    <section id="about" className="relative py-20 px-4 bg-black">
      {/* Add a grid pattern background */}
      <GridPattern lineColor="rgba(227, 25, 55, 0.3)" lineOpacity={0.15} />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About Us</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Discover the story behind JeenLabs and our passion for creating innovative solutions that transform
            businesses through technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <CardSpotlight className="h-full flex flex-col p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
              <p className="text-neutral-200 mb-6">
                At JeenLabs, our mission is to unlock the possibilities of tomorrow by delivering cutting-edge
                automation and development solutions that empower businesses to thrive in the digital landscape.
              </p>
              <p className="text-neutral-200 mb-6">
                We combine technical expertise with a deep understanding of business needs to create solutions that
                drive real value and growth for our clients.
              </p>
              <div className="mt-auto">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-jeenlabs-red mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Innovative solutions for complex challenges</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-jeenlabs-red mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Client-focused approach to every project</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-jeenlabs-red mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Commitment to quality and excellence</span>
                  </li>
                </ul>
              </div>
            </CardSpotlight>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <CardSpotlight className="p-6">
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
                  <path d="M18.6 18.6L12 12L5.4 18.6" />
                  <path d="M12 12L5.4 5.4" />
                  <path d="M12 12L18.6 5.4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Innovation</h4>
              <p className="text-neutral-300">
                We embrace the latest technologies and methodologies to deliver innovative solutions that give our
                clients a competitive edge.
              </p>
            </CardSpotlight>

            <CardSpotlight className="p-6">
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Collaboration</h4>
              <p className="text-neutral-300">
                We work closely with our clients, fostering partnerships based on trust, transparency, and mutual
                respect.
              </p>
            </CardSpotlight>

            <CardSpotlight className="p-6">
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
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Quality</h4>
              <p className="text-neutral-300">
                We are committed to delivering solutions of the highest quality, with attention to detail and a focus on
                excellence.
              </p>
            </CardSpotlight>

            <CardSpotlight className="p-6">
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
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m16 12-4-4-4 4" />
                  <path d="M12 16V8" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Growth</h4>
              <p className="text-neutral-300">
                We are dedicated to continuous learning and improvement, staying at the forefront of technology to drive
                growth for our clients.
              </p>
            </CardSpotlight>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

