"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

interface NavLink {
  name: string;
  path: string;
}

interface NavbarProps {
  leftLinks: NavLink[];
  rightLinks: NavLink[];
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  buttonText: string;
}

const Navbar: React.FC<NavbarProps> = ({
  leftLinks,
  rightLinks,
  logoSrc,
  logoAlt,
  logoWidth,
  logoHeight,
  buttonText,
}) => {
  const [isVisible, setIsVisible] = useState(true); // Default visible
  const [prevScrollY, setPrevScrollY] = useState(0); // Track previous scroll position
  const [isHome, setIsHome] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If we are at the top of the page (scroll position 0), hide the navbar
      if (currentScrollY === 0) {
        setIsVisible(false);
      } else if (currentScrollY > prevScrollY) {
        setIsVisible(false); // Scrolling down, hide navbar
      } else {
        setIsVisible(true); // Scrolling up, show navbar
      }

      // Update the previous scroll position
      setPrevScrollY(currentScrollY);
    };

    const checkHash = () => {
      setIsHome(window.location.hash === "#home");
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", checkHash);
    checkHash(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", checkHash);
    };
  }, [prevScrollY]);

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full bg-black text-white shadow-md transition-opacity duration-500 z-50",
        {
          "opacity-0 pointer-events-none": !isVisible, // If not visible, hide the navbar
          "opacity-100": isVisible, // If visible, show the navbar
        }
      )}
    >
      <div className="hidden lg:flex w-full h-full px-12 py-5 bg-black justify-center items-center gap-2.5 inline-flex">
        {/* Left Links */}
        <ul className="font-bold text-white px-2 justify-center items-center gap-[42px] flex tracking-wide">
          {leftLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="cursor-pointer text-sm hover:text-red-600"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <Link href="/">
          <div className="cursor-pointer mx-14 flex-col justify-center items-center inline-flex font-bold">
            <Image
              className="w-12"
              src={logoSrc}
              alt={logoAlt}
              width={logoWidth}
              height={logoHeight}
              priority
            />
            <div className="text-2xl tracking-[0.4em]">
              <span className="text-white">JEENL</span>
              <span className="text-red-600">A</span>
              <span className="text-white">BS</span>
            </div>
          </div>
        </Link>

        {/* Right Links + Login Button */}
        <ul className="font-bold text-white px-2 justify-center items-center gap-[42px] flex tracking-wide">
          {rightLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="cursor-pointer text-sm hover:text-red-600"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <button className="cursor-pointer px-8 py-3 bg-black rounded-full border border-red-600 justify-center items-center gap-3 flex overflow-hidden leading-3 text-zinc-300 text-sm hover:bg-red-600 hover:border-white">
            {buttonText}
          </button>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex flex-col w-full h-full px-12 py-5 bg-black justify-center items-center gap-2.5">
        {/* Logo in Mobile */}
        <Link href="/">
          <div className="cursor-pointer mx-14 flex-col justify-center items-center inline-flex font-bold">
            <Image
              className="w-12"
              src={logoSrc}
              alt={logoAlt}
              width={logoWidth}
              height={logoHeight}
              priority
            />
            <div className="text-2xl tracking-[0.4em]">
              <span className="text-white">JEENL</span>
              <span className="text-red-600">A</span>
              <span className="text-white">BS</span>
            </div>
          </div>
        </Link>

        {/* Menu Toggle */}
        <button
          className={`text-2xl font-bold text-red-600 transition-transform duration-300 ${
            menuOpen ? "rotate-90" : "rotate-0"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Menu */}
        <div
          className={`h-full px-3 flex-col justify-center items-start gap-5 inline-flex text-white text-sm font-semibold tracking-wide transition-all duration-500 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-screen mt-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {[...leftLinks, ...rightLinks].map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="cursor-pointer text-sm hover:text-red-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {link.name}
            </Link>
          ))}

          {/* Login & Signup Buttons */}
          <div className="justify-start items-start gap-5 inline-flex">
            <button
              className="cursor-pointer px-8 py-3 bg-black rounded-full border border-red-600 justify-center items-center gap-3 flex overflow-hidden leading-3 text-zinc-300 text-sm hover:bg-red-600 hover:border-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
