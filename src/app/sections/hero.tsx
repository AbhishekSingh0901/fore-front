"use client";
import gsap from "gsap";
import { useState, useRef, useEffect } from "react";

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState<number>(0);
  const videoRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];

  const videos: string[] = [
    "/videos/construction_1.mp4",
    "/videos/construction_2.mp4",
  ];

  const cursorRef = useRef<HTMLDivElement | null>(null);
  const innerContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const innerContent = innerContentRef.current;

    if (!cursor || !innerContent) return;

    // Use gsap.quickTo for better performance
    const moveX = gsap.quickTo(cursor, "x", {
      delay: 0.3,
      duration: 0.5,
      ease: "power3.out",
    });
    const moveY = gsap.quickTo(cursor, "y", {
      delay: 0.3,
      duration: 0.5,
      ease: "power3.out",
    });

    const handleMouseMove = (e: MouseEvent) => {
      moveX(e.clientX);
      moveY(e.clientY);
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 1, opacity: 1 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 0, opacity: 0 });
    };

    innerContent.addEventListener("mousemove", handleMouseMove);
    innerContent.addEventListener("mouseenter", handleMouseEnter);
    innerContent.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      innerContent.removeEventListener("mousemove", handleMouseMove);
      innerContent.removeEventListener("mouseenter", handleMouseEnter);
      innerContent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length); // Switch to next video
    const nextVideoRef = videoRefs[(currentVideo + 1) % videos.length].current;
    if (nextVideoRef) {
      nextVideoRef.play();
    }
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden font-polySans page1"
      ref={innerContentRef}
    >
      {videos.map((videoSrc, index) => (
        <video
          key={index}
          ref={videoRefs[index]}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            currentVideo === index ? "opacity-100" : "opacity-0"
          }`}
          src={videoSrc}
          autoPlay
          muted
          loop={false} // We handle looping manually
          playsInline
          onEnded={handleVideoEnd}
        />
      ))}

      <div
        className=" w-24 h-24 bg-burntumber fixed z-10 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        ref={cursorRef}
      ></div>
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end mb-28 text-white text-center z-20 inner-content">
        <h1 className="text-8xl  uppercase tracking-widest mb-6 font-extrabold ">
          <span>F</span>
          <span>o</span>
          <span>r</span>
          <span>e</span>
          <span>f</span>
          <span>r</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span> </span>
          <span>i</span>
          <span>n</span>
          <span>d</span>
          <span>u</span>
          <span>s</span>
          <span>t</span>
          <span>r</span>
          <span>i</span>
          <span>a</span>
          <span>l</span>
          <span> </span>
          <span>s</span>
          <span>o</span>
          <span>l</span>
          <span>u</span>
          <span>t</span>
          <span>i</span>
          <span>o</span>
          <span>n</span>
          <span>s</span>
        </h1>
        <p className="text-xl uppercase font-light tracking-widest">
          Excellence in Innovation. Reliability in Solutions
        </p>
      </div>

      {/* Dark Overlay for Better Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000e3] to-transparent bg-opacity- z-0" />
    </div>
  );
}
