"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { TailSpin } from "react-loader-spinner";
interface HeroSectionProps {
  btn: string;
}
const Scene = dynamic(() => import("@/app/_components/Scene"), {
  loading: () => (
    <TailSpin
      visible={true}
      height="30"
      width="30"
      color="#ffffff"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />
  ),
  ssr: false,
});

const HeroSection = ({ btn }: HeroSectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <section className="hero-section">
      <div className="top-content">
        <Scene />
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
