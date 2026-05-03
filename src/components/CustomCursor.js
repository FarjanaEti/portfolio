"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const bubbleRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const bubble = bubbleRef.current;

    // Set initial position
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(bubble, { xPercent: -50, yPercent: -50 });

    const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });

    const xToBubble = gsap.quickTo(bubble, "x", { duration: 0.6, ease: "power3" });
    const yToBubble = gsap.quickTo(bubble, "y", { duration: 0.6, ease: "power3" });

    const mouseMove = (e) => {
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToBubble(e.clientX);
      yToBubble(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, .project-card, .skill-pill, .tech-item");
      if (target) {
        gsap.to(bubble, { scale: 1.8, backgroundColor: "rgba(168, 85, 247, 0.4)", duration: 0.3 });
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest("a, button, .project-card, .skill-pill, .tech-item");
      if (target) {
        gsap.to(bubble, { scale: 1, backgroundColor: "transparent", duration: 0.3 });
      }
    };

    const mouseDown = () => {
      gsap.to(cursor, { scale: 0.8, duration: 0.1 });
      gsap.to(bubble, { scale: 0.9, duration: 0.1 });
    };

    const mouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.1, ease: "back.out(1.7)" });
      gsap.to(bubble, { scale: 1, duration: 0.3, ease: "back.out(1.7)" });
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor-dot"></div>
      <div ref={bubbleRef} className="custom-cursor-bubble"></div>
    </>
  );
}
