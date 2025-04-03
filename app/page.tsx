"use client"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import About from "@/components/About"
import Stats from "@/components/Stats"
import Team from "@/components/Team"
// import Portfolio from "@/components/Portfolio" // Commented out to hide
// import Testimonials from "@/components/Testimonials" // Commented out to hide
import CTA from "@/components/CTA"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import useSmoothScroll from "@/hooks/useSmoothScroll"
import type { NavLinkItem } from "@/components/ui/NavLink"

export default function Home() {
  const { registerSection, scrollToSection } = useSmoothScroll()

  // Define navigation links
  const leftLinks: NavLinkItem[] = [
    { name: "Home", path: "/" },
    { name: "Services", path: "#services" },
    { name: "About", path: "#about" },
  ]

  const rightLinks: NavLinkItem[] = [
    // { name: "Portfolio", path: "#portfolio" }, // Commented out to hide from navbar
    { name: "Team", path: "#team" },
    { name: "Contact", path: "#contact" },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar leftLinks={leftLinks} rightLinks={rightLinks} buttonText="Get Started" isHomePage={true} />
      <Hero scrollToSection={scrollToSection} />
      <Services id="services" />
      <About />
      <Stats />
      <Team />
      {/* Portfolio component hidden */}
      {/* Testimonials component hidden */}
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}

