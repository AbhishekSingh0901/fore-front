"use client";
import { useEffect } from "react";
import gsap from "gsap";
import Animatedlogo from "../components/animated-logo";

function Loader() {
  useEffect(() => {
    const h3Elements = document.querySelectorAll(".loader h3");

    h3Elements.forEach((h3, index) => {
      // Set initial positions
      gsap.set(h3, {
        x: index % 2 === 0 && "-100%",
      });

      // Create animation based on index parity
      if (index % 2 === 0) {
        // Even indices (0, 2, 4...)
        gsap.to(h3, {
          x: "-100%",
          duration: 15,
          ease: "none",
          repeat: -1,
          opacity: 0.7,
        });
      } else {
        // Odd indices (1, 3, 5...)
        gsap.to(h3, {
          x: "100%",
          duration: 15,
          ease: "none",
          repeat: -1,
          opacity: 0.7,
        });
      }
    });
  }, []);

  return (
    <div className="loader absolute z-50 h-screen bg-white w-full flex flex-col justify-center gap-10 items-center text-burntumber uppercase text-[7vw] font-medium overflow-hidden tracking-widest">
      <div className="w-full overflow-hidden whitespace-nowrap">
        <h3 className="inline-block">
          Forefront Industrial Solutions • Forefront Industrial Solutions •
          Forefront Industrial Solutions •
        </h3>
      </div>
      <div className="w-full overflow-hidden whitespace-nowrap">
        <h3 className="inline-block">
          Forefront Industrial Solutions • Forefront Industrial Solutions •
          Forefront Industrial Solutions •
        </h3>
      </div>
      <div className="w-full overflow-hidden whitespace-nowrap">
        <h3 className="inline-block">
          Forefront Industrial Solutions • Forefront Industrial Solutions •
          Forefront Industrial Solutions •
        </h3>
      </div>
      <div className="w-full overflow-hidden whitespace-nowrap">
        <h3 className="inline-block">
          Forefront Industrial Solutions • Forefront Industrial Solutions •
          Forefront Industrial Solutions •
        </h3>
      </div>

      <div className="absolute left-1/2 top-1/2 p-20 shadow-xl bg-white -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
        <Animatedlogo />
      </div>
    </div>
  );
}

export default Loader;
