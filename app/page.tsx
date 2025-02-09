import React from "react";
import Navbar from "@/components/navbar/navbar";

const Index = () => {
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
      HomePage
    </div>
  );
};

export default Index;
