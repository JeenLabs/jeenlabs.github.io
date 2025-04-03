"use client"
import { motion } from "framer-motion"
import { smoothScrollToElement } from "@/utils/smoothScroll"
import { GradientBeams } from "./ui/advanced-backgrounds/GradientBeams"
import { AnimatedButton } from "./ui/AnimatedButton"

const CTA = () => {
  const handleContactUs = () => {
    smoothScrollToElement("contact", 50)
  }

  return (
    <section className="relative py-24 px-4 bg-neutral-950">
      {/* Add a gradient beams background */}
      <GradientBeams beamCount={6} beamColor="mixed" beamOpacity={0.4} />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg mb-10"
          >
            Partner with JeenLabs to unlock the full potential of your business through innovative automation and
            development solutions. Let's build the future together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4 w-full"
          >
            <AnimatedButton variant="outline" size="lg" onClick={handleContactUs} className="text-white">
              Contact Us
            </AnimatedButton>
            <AnimatedButton
              variant="outline"
              size="lg"
              onClick={() => smoothScrollToElement("services", 50)}
              className="text-white"
            >
              Explore Services
            </AnimatedButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA

