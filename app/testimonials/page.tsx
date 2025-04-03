"use client"
import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"
import type { NavLinkItem } from "@/components/ui/NavLink"
import { useScrollToTop } from "@/hooks/useScrollToTop"
// Import Footer
import Footer from "@/components/Footer"
// Import the AnimatedButton component
import { AnimatedButton } from "@/components/ui/AnimatedButton"

interface TestimonialProps {
  quote: string
  name: string
  company: string
  category: string
  delay?: number
}

const Testimonial = ({ quote, name, company, category, delay = 0 }: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-neutral-900 border border-jeenlabs-red rounded-lg p-8 relative"
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
      <div className="mb-2">
        <span className="inline-block bg-jeenlabs-red bg-opacity-20 text-jeenlabs-red text-xs px-2 py-1 rounded">
          {category}
        </span>
      </div>
      <p className="text-gray-300 italic mb-6 pt-2">{quote}</p>
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

export default function TestimonialsPage() {
  useScrollToTop()

  // Define navigation links
  const leftLinks: NavLinkItem[] = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "About", path: "/#about" },
  ]

  const rightLinks: NavLinkItem[] = [
    { name: "Portfolio", path: "/#portfolio" },
    { name: "Team", path: "/#team" },
    { name: "Contact", path: "/#contact" },
  ]

  const testimonials = [
    {
      quote:
        "JeenLabs transformed our automation processes, reducing manual work by 70% and allowing our team to focus on strategic initiatives. Their expertise and dedication to our success was evident throughout the project.",
      name: "Sarah Johnson",
      company: "TechInnovate Solutions",
      category: "Automation",
    },
    {
      quote:
        "The e-commerce platform JeenLabs developed for us exceeded our expectations. Sales increased by 45% within three months, and the user experience feedback has been overwhelmingly positive.",
      name: "Michael Chen",
      company: "Global Retail Group",
      category: "Web Development",
    },
    {
      quote:
        "Working with JeenLabs on our software infrastructure was a game-changer. Their team's technical knowledge combined with their understanding of our business needs resulted in a solution that perfectly addressed our challenges.",
      name: "Emily Rodriguez",
      company: "FinServe Corporation",
      category: "Software Development",
    },
    {
      quote:
        "The custom CRM solution developed by JeenLabs has streamlined our customer management process and improved our team's productivity by 60%. Their attention to detail and responsive support have made them a valuable partner.",
      name: "David Thompson",
      company: "Nexus Marketing",
      category: "Software Development",
    },
    {
      quote:
        "JeenLabs helped us automate our inventory management system, reducing errors by 95% and saving us countless hours of manual work. Their solution has been running flawlessly for over a year now.",
      name: "Jennifer Lee",
      company: "Precision Manufacturing",
      category: "Automation",
    },
    {
      quote:
        "Our website redesign by JeenLabs resulted in a 35% increase in conversion rates and a significant improvement in user engagement metrics. Their design expertise and technical implementation were exceptional.",
      name: "Robert Garcia",
      company: "Horizon Digital",
      category: "Web Development",
    },
    {
      quote:
        "The data analytics dashboard JeenLabs created has given us unprecedented insights into our business operations. Their ability to translate complex data into actionable visualizations has been invaluable.",
      name: "Amanda Wilson",
      company: "DataDrive Analytics",
      category: "Software Development",
    },
    {
      quote:
        "JeenLabs automated our entire customer onboarding process, reducing the time from 3 days to just 2 hours. Their solution has significantly improved our customer satisfaction scores.",
      name: "Thomas Wright",
      company: "ServicePro Solutions",
      category: "Automation",
    },
    {
      quote:
        "The mobile app developed by JeenLabs has received outstanding feedback from our users. Their focus on user experience and performance optimization resulted in an app that exceeded our expectations.",
      name: "Sophia Martinez",
      company: "MobileFirst Technologies",
      category: "Web Development",
    },
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
            Client <span className="text-jeenlabs-red">Testimonials</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Discover what our clients have to say about their experience working with JeenLabs and how our solutions
            have transformed their businesses.
          </motion.p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-10 px-4 bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                company={testimonial.company}
                category={testimonial.category}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Contact us today to discuss how JeenLabs can help you achieve your business goals through our innovative
            solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatedButton variant="outline" size="lg">
              Get in Touch
            </AnimatedButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

