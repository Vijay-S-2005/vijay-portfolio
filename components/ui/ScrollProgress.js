"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0"
      style={{
        height: "2px",
        background: "var(--accent)",
        transformOrigin: "0% 50%",
        scaleX,
        zIndex: 9998,
      }}
    />
  );
}
