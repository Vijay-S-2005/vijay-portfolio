"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
} from "./Icons";

export default function Lightbox({ images, index, onClose, onChange }) {
  const open = index !== null && index !== undefined && index >= 0;
  const total = images?.length ?? 0;

  const next = useCallback(() => {
    if (!open) return;
    onChange((index + 1) % total);
  }, [open, index, total, onChange]);

  const prev = useCallback(() => {
    if (!open) return;
    onChange((index - 1 + total) % total);
  }, [open, index, total, onChange]);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose, next, prev]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/85 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute right-5 top-5 rounded-md border border-[var(--border)] bg-[var(--surface)]/70 p-2 text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            aria-label="Close"
          >
            <CloseIcon />
          </button>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-5 top-1/2 -translate-y-1/2 rounded-md border border-[var(--border)] bg-[var(--surface)]/70 p-2 text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                aria-label="Previous image"
              >
                <ChevronLeftIcon />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-5 top-1/2 -translate-y-1/2 rounded-md border border-[var(--border)] bg-[var(--surface)]/70 p-2 text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                aria-label="Next image"
              >
                <ChevronRightIcon />
              </button>
            </>
          )}

          <div
            className="relative flex max-h-[90vh] max-w-[92vw] flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              key={index}
              initial={{ opacity: 0.4, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[80vh] w-[min(92vw,1200px)]"
            >
              <Image
                src={images[index].src}
                alt={images[index].alt ?? ""}
                width={1600}
                height={1000}
                className="h-auto max-h-[80vh] w-full rounded-lg border border-[var(--border)] object-contain"
                priority
              />
            </motion.div>
            <div className="flex w-full items-center justify-between gap-4 px-1">
              <p className="font-mono text-[0.7rem] text-[var(--muted)]">
                {images[index].alt}
              </p>
              <p className="font-mono text-[0.7rem] text-[var(--muted)]">
                {index + 1} / {total}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
