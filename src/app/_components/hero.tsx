"use client";

import { useRef } from "react";

interface HeroSectionProps {
  btn: string;
}

const HeroSection = ({ btn }: HeroSectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <section className="hero-section">
      <div className="top-content">
        <div className="square"></div>
      </div>
      <div className="bottom-content">
        <div className="btn">
          <p
            id="h2"
            onClick={() => {
              ref.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {btn}
          </p>
        </div>
      </div>
      <div ref={ref}></div>
    </section>
  );
};

export default HeroSection;
