"use client";

import React from "react";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/pages/hero/hero";
import Explore from "@/pages/explore/explore";
import useSmoothScroll from "@/hooks/useSmoothScroll";

const Index = () => {
  const { registerSection, scrollToSection } = useSmoothScroll();

  const leftNavLinks = [
    { name: "FEATURES", path: "/features" },
    { name: "WHY US?", path: "/whyus" },
    { name: "SERVICES", path: "/services" },
  ];

  const rightNavLinks = [
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];
  return (
    <div>
      <Navbar
        leftLinks={leftNavLinks}
        rightLinks={rightNavLinks}
        logoSrc="/JeenLabs-Logo.svg"
        logoAlt="Company Logo"
        logoWidth={0}
        logoHeight={0}
        buttonText="Coming Soon"
      />
      <div ref={registerSection("hero")}>
        <Hero scrollToSection={scrollToSection} />
      </div>
      <div ref={registerSection("explore")}>
        <Explore />
      </div>
    </div>
  );
};

export default Index;
