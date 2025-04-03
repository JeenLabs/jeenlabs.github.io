"use client"
import { motion } from "framer-motion"
import { smoothScrollToElement } from "@/utils/smoothScroll"
import { ParticleField } from "./ui/advanced-backgrounds/ParticleField"
import { AnimatedButton } from "./ui/AnimatedButton"

const Team = () => {
  const handleContactClick = () => {
    smoothScrollToElement("contact", 50)
  }

  return (
    <section id="team" className="relative py-20 px-4 bg-neutral-950">
      {/* Add a particle field background */}
      <ParticleField
        particleCount={40}
        particleColor="white"
        particleSize={[1, 2]}
        connectParticles={true}
        connectionDistance={100}
        connectionOpacity={0.1}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our flexible team structure allows us to deliver high-quality solutions tailored to your specific needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center bg-neutral-900 rounded-lg p-8 border border-jeenlabs-red"
        >
          <h3 className="text-2xl font-bold mb-4">Freelance & Project-Based Expertise</h3>
          <p className="text-gray-300 mb-6">
            JeenLabs operates on a freelance and per-project basis, bringing together the right talent for each specific
            project. Our founder has 3 years of dedicated freelancing experience combined with 3 years of industry
            experience, providing a solid foundation of professional knowledge and practical skills.
          </p>
          <p className="text-gray-300 mb-6">
            We've built a diverse network of both talented students and experienced professionals who collaborate to
            deliver exceptional results. This flexible structure allows us to assemble specialized teams tailored to
            each project's unique requirements, ensuring you get exactly the expertise you need without unnecessary
            overhead.
          </p>
          <p className="text-gray-300 mb-8">
            Whether your project requires automation expertise, web development skills, or custom software solutions, we
            can bring together the right combination of talent to meet your specific needs. Our collaborative approach
            ensures efficient communication, innovative problem-solving, and high-quality deliverables for every project
            we undertake.
          </p>
          <AnimatedButton variant="outline" size="lg" onClick={handleContactClick}>
            Contact Our Team
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  )
}

export default Team

