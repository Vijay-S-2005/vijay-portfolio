"use client";

import { motion } from "framer-motion";

export default function RevealOnScroll({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  className = "",
  as = "div",
  amount = 0.2,
}) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount, margin: "0px 0px -80px 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
