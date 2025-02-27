"use client";
import { useEffect, useRef } from "react";
import Animatedlogo from "../components/animated-logo";
import gsap from "gsap";

function Loader() {
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const spansRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!loaderRef.current) return;

    const tl = gsap.timeline();

    if (!spansRef.current) return;

    tl.from(spansRef.current, {
      x: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.03,
      delay: 0.1,
    })
      .to(spansRef.current, {
        x: 100,
        duration: 0.6,
        opacity: 0,
        stagger: 0.03,
      })
      .to(loaderRef.current, {
        duration: 0.8,
        y: "-100%",
        opacity: 0,
        display: "none",
      });
  }, []);

  return (
    <div
      ref={loaderRef}
      className="loader absolute z-50 h-screen bg-neutral-100 w-full flex justify-center items-center "
    >
      <Animatedlogo />
      <h3 className="text-2xl uppercase font-thin text-burntumber loader">
        <span ref={spansRef}>ForeFront Industrial Solutions</span>
      </h3>
    </div>
  );
}

export default Loader;
