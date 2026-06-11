"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export default function Toast({ message, open, onClose, duration = 1600 }) {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => onClose?.(), duration);
    return () => clearTimeout(t);
  }, [open, duration, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none fixed bottom-6 left-1/2 z-[10000] -translate-x-1/2"
        >
          <div className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 font-mono text-[0.7rem] uppercase tracking-wide text-[var(--accent)] shadow-lg shadow-black/40">
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
