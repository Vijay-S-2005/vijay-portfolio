"use client";

import { useRef } from "react";
import clsx from "clsx";

const MAX_TILT = 3;

export default function TiltCard({ children, className = "", as: Tag = "div" }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotY = (px - 0.5) * 2 * MAX_TILT;
    const rotX = -(py - 0.5) * 2 * MAX_TILT;
    el.style.transform = `perspective(800px) rotateX(${rotX.toFixed(
      2
    )}deg) rotateY(${rotY.toFixed(2)}deg)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={clsx("will-change-transform", className)}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 200ms cubic-bezier(.2,.8,.2,1)",
      }}
    >
      {children}
    </Tag>
  );
}
