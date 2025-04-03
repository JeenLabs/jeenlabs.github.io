"use client"

import type React from "react"
import { useState } from "react"
import { Logo } from "@/components/ui/Logo"
import { NavLink, type NavLinkItem } from "@/components/ui/NavLink"
import { useRouter } from "next/navigation"
import { smoothScrollToElement } from "@/utils/smoothScroll"
import { AnimatedButton } from "@/components/ui/AnimatedButton"

interface NavbarProps {
  leftLinks: NavLinkItem[]
  rightLinks: NavLinkItem[]
  buttonText: string
  className?: string
  isHomePage?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ leftLinks, rightLinks, buttonText, className = "", isHomePage = false }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const handleGetStarted = () => {
    if (isHomePage) {
      // If on home page, just scroll to services section
      smoothScrollToElement("services", 50)
    } else {
      // If on another page, navigate to home page and then scroll to services
      router.push("/#services")
    }

    // Close mobile menu if open
    if (menuOpen) {
      setMenuOpen(false)
    }
  }

  return (
    <nav
      className={`w-full bg-black text-white shadow-md fixed top-0 left-0 right-0 z-[100] pt-4 pb-3 md:pt-5 md:pb-4 ${className}`}
    >
      {/* Desktop Navbar */}
      <div className="hidden lg:flex w-full h-full px-8 py-3 bg-black justify-between items-center">
        {/* Left Links */}
        <ul className="font-bold text-white px-2 justify-center items-center gap-[30px] flex tracking-wide">
          {leftLinks.map((link, index) => (
            <li key={index}>
              <NavLink link={link} />
            </li>
          ))}
        </ul>

        {/* Logo - Centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Logo size="sm" />
        </div>

        {/* Right Links + Button */}
        <ul className="font-bold text-white px-2 justify-center items-center gap-[30px] flex tracking-wide">
          {rightLinks.map((link, index) => (
            <li key={index}>
              <NavLink link={link} />
            </li>
          ))}
          <AnimatedButton
            variant="neon"
            size="sm"
            onClick={handleGetStarted}
            centered={false}
            className="text-white font-bold"
          >
            {buttonText}
          </AnimatedButton>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex w-full h-full px-6 py-3 bg-black justify-between items-center">
        {/* Logo and Text in Mobile - Side by Side */}
        <div className="flex items-center">
          <Logo size="sm" showText={false} className="mr-2" />
          <div className="text-xl tracking-[0.2em] text-center">
            <span className="text-white">JEENL</span>
            <span className="text-jeenlabs-red">A</span>
            <span className="text-white">BS</span>
          </div>
        </div>

        {/* Menu Toggle */}
        <button
          className={`text-2xl font-bold text-jeenlabs-red transition-transform duration-300 ${
            menuOpen ? "rotate-90" : "rotate-0"
          }`}
          onClick={toggleMenu}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-16 left-0 right-0 bg-black z-[100] px-6 py-4 flex-col justify-center items-start gap-4 inline-flex text-white text-base font-semibold tracking-wide transition-all duration-500 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-screen opacity-100 border-b border-jeenlabs-red" : "max-h-0 opacity-0"
          }`}
        >
          {[...leftLinks, ...rightLinks].map((link, index) => (
            <NavLink key={index} link={link} onClick={toggleMenu} />
          ))}

          {/* Button */}
          <div className="w-full flex justify-center mt-2">
            <AnimatedButton variant="neon" size="md" onClick={handleGetStarted} className="text-white font-bold">
              {buttonText}
            </AnimatedButton>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

