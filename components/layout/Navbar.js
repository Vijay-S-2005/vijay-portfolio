"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { personal } from "@/lib/data/personal";
import { MenuIcon, CloseIcon } from "@/components/ui/Icons";
import { useIsMac } from "@/lib/hooks/useIsMac";

const NAV_ITEMS = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMac = useIsMac();
  const shortcutLabel = isMac ? "⌘K" : "Ctrl+K";

  const openPalette = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("portfolio:open-palette"));
    }
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="no-print fixed inset-x-0 top-0 z-50"
      style={{
        backgroundColor: "rgba(10,10,15,0.8)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
      }}
      aria-label="Primary"
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          aria-label={`${personal.name} home`}
          className="group flex items-center"
        >
          {personal.avatarSrc ? (
            <span className="relative block h-9 w-9 overflow-hidden rounded-full border border-[var(--border)] transition-colors group-hover:border-[var(--accent)]">
              <Image
                src={personal.avatarSrc}
                alt={`${personal.name} portrait`}
                fill
                sizes="36px"
                className="object-cover"
                // style={{ objectPosition: "72% 28%", transform: "scale(1.28)" }}
              />
            </span>
          ) : (
            <span className="font-mono text-sm tracking-wide text-[var(--accent)] transition-colors group-hover:text-[var(--text)]">
              {personal.monogram}
            </span>
          )}
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 font-mono text-[0.75rem] uppercase tracking-wider text-[var(--muted)] transition-colors hover:text-[var(--text)]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openPalette}
            className="hidden items-center gap-2 rounded-md border border-[var(--border)] px-2.5 py-1 font-mono text-[0.7rem] tracking-wide text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] sm:inline-flex"
            aria-label="Open command palette"
          >
            <kbd className="font-mono text-[0.7rem]">{shortcutLabel}</kbd>
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md border border-[var(--border)] p-1.5 text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[var(--border)] md:hidden"
            style={{ backgroundColor: "rgba(10,10,15,0.95)" }}
          >
            <div className="flex flex-col px-5 py-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-[var(--border)] py-3 font-mono text-[0.8rem] uppercase tracking-wider text-[var(--muted)] transition-colors hover:text-[var(--accent)] last:border-b-0"
                >
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={openPalette}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-md border border-[var(--border)] px-3 py-2 font-mono text-[0.7rem] tracking-wide text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Command Palette
                <span className="font-mono text-[0.65rem]">{shortcutLabel}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
