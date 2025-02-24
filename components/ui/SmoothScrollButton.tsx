import React from "react";

interface SmoothScrollButtonProps {
  targetId: string;
  scrollToSection: (id: string) => void;
  children: React.ReactNode;
  className?: string;
}

const SmoothScrollButton: React.FC<SmoothScrollButtonProps> = ({
  targetId,
  scrollToSection,
  children,
  className,
}) => {
  return (
    <button onClick={() => scrollToSection(targetId)} className={className}>
      {children}
    </button>
  );
};

export default SmoothScrollButton;
