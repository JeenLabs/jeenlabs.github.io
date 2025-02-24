"use client";

import { useRef } from "react";

const useSmoothScroll = () => {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const registerSection = (id: string) => (el: HTMLElement | null) => {
    if (el) sectionRefs.current[id] = el;
  };

  const scrollToSection = (id: string) => {
    const section = sectionRefs.current[id];
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50, // Adjust offset if needed
        behavior: "smooth",
      });
    }
  };

  return { registerSection, scrollToSection };
};

export default useSmoothScroll;
