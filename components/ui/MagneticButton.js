"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import clsx from "clsx";

const MAX_DISPLACEMENT = 8;

export default function MagneticButton({
  children,
  variant = "solid",
  href,
  onClick,
  download,
  target,
  rel,
  type = "button",
  className = "",
  ariaLabel,
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 20, mass: 0.4 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const tx = Math.max(
      -MAX_DISPLACEMENT,
      Math.min(MAX_DISPLACEMENT, dx * 0.3)
    );
    const ty = Math.max(
      -MAX_DISPLACEMENT,
      Math.min(MAX_DISPLACEMENT, dy * 0.3)
    );
    x.set(tx);
    y.set(ty);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses = clsx(
    "group relative inline-flex select-none items-center justify-center gap-2",
    "rounded-md px-5 py-3 font-mono text-[0.8rem] tracking-wide uppercase",
    "transition-colors duration-200 will-change-transform",
    variant === "solid"
      ? "border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)]"
      : "border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
    className
  );

  const motionProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: reset,
    style: { x: springX, y: springY },
    className: baseClasses,
    "aria-label": ariaLabel,
  };

  if (href) {
    return (
      <motion.a
        {...motionProps}
        href={href}
        target={target}
        rel={rel}
        download={download}
        onClick={onClick}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button {...motionProps} type={type} onClick={onClick}>
      {children}
    </motion.button>
  );
}
