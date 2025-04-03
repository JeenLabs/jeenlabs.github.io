"use client"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { smoothScrollToTop } from "@/utils/smoothScroll"

interface TestimonialProps {
  quote: string
  name: string
  company: string
  delay?: number
}

const Testimonial = ({ quote, name, company, delay = 0 }: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-black border border-jeenlabs-red rounded-lg p-8 relative"
    >
      <div className="text-jeenlabs-red text-5xl absolute -top-6 left-6">
        <svg
          width="40"
          height="32"
          viewBox="0 0 40 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-jeenlabs-red"
        >
          <path d="M12.9137 0.853333L19.9993 0.853333C19.1404 10.24 13.7726 19.6267 0.555908 23.04L0.555908 31.1467C17.4282 27.7333 28.5848 15.36 28.5848 0.853333L12.9137 0.853333ZM32.9137 0.853333L39.9993 0.853333C39.1404 10.24 33.7726 19.6267 20.5559 23.04L20.5559 31.1467C37.4282 27.7333 48.5848 15.36 48.5848 0.853333L32.9137 0.853333Z" />
        </svg>
      </div>
      <p className="text-gray-300 italic mb-6 pt-4">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-gray-400 text-sm">{company}</p>
        </div>
      </div>
    </motion.div>
  )
}

const Testimonials = () => {
  const router = useRouter()

  // Update the handleViewMore function to navigate to the testimonials page
  const handleViewMore = () => {
    router.push("/testimonials")
    smoothScrollToTop()
  }

  return (
    <section id="testimonials" className="relative py-20 px-4 bg-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Hear from businesses who have transformed their operations with our solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial
            quote="JeenLabs transformed our automation processes, reducing manual work by 70% and allowing our team to focus on strategic initiatives. Their expertise and dedication to our success was evident throughout the project."
            name="Sarah Johnson"
            company="TechInnovate Solutions"
            delay={0.1}
          />
          <Testimonial
            quote="The e-commerce platform JeenLabs developed for us exceeded our expectations. Sales increased by 45% within three months, and the user experience feedback has been overwhelmingly positive."
            name="Michael Chen"
            company="Global Retail Group"
            delay={0.2}
          />
          <Testimonial
            quote="Working with JeenLabs on our software infrastructure was a game-changer. Their team's technical knowledge combined with their understanding of our business needs resulted in a solution that perfectly addressed our challenges."
            name="Emily Rodriguez"
            company="FinServe Corporation"
            delay={0.3}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={handleViewMore}
            className="bg-jeenlabs-red text-white py-3 px-8 rounded-full hover:bg-jeenlabs-red-600 transition-all duration-300 transform hover:scale-105"
          >
            View More Testimonials
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

