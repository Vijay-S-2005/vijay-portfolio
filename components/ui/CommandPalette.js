"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { buildCommands } from "@/lib/data/commands";
import { useIsMac } from "@/lib/hooks/useIsMac";
import { SearchIcon } from "./Icons";

function smoothScrollTo(hash) {
  if (typeof window === "undefined") return;
  if (window.location.pathname !== "/") {
    window.location.href = `/${hash}`;
    return;
  }
  const el = document.querySelector(hash);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.location.hash = hash;
  }
}

function openExternal(url) {
  if (typeof window === "undefined") return;
  window.open(url, "_blank", "noopener,noreferrer");
}

export default function CommandPalette() {
  const router = useRouter();
  const isMac = useIsMac();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [prevOpen, setPrevOpen] = useState(false);
  const [prevQuery, setPrevQuery] = useState("");
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Reset active selection whenever the query or open-state changes.
  // React 19's recommended "adjust state during render" pattern.
  if (open !== prevOpen || query !== prevQuery) {
    setPrevOpen(open);
    setPrevQuery(query);
    if (active !== 0) setActive(0);
  }

  const commands = useMemo(
    () =>
      buildCommands({
        router,
        scrollTo: smoothScrollTo,
        openExternal,
      }),
    [router]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => {
      const hay = `${c.label} ${c.description ?? ""} ${c.keywords ?? ""}`.toLowerCase();
      return hay.includes(q);
    });
  }, [commands, query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
  }, []);

  // Global ⌘K / Ctrl+K listener and toggle event
  useEffect(() => {
    const handler = (e) => {
      const mod = isMac ? e.metaKey : e.ctrlKey;
      if (mod && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);

    const customOpen = () => setOpen(true);
    window.addEventListener("portfolio:open-palette", customOpen);

    return () => {
      window.removeEventListener("keydown", handler);
      window.removeEventListener("portfolio:open-palette", customOpen);
    };
  }, [isMac]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const runCommand = (cmd) => {
    if (!cmd) return;
    close();
    Promise.resolve().then(() => cmd.run());
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(filtered.length - 1, a + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(0, a - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      runCommand(filtered[active]);
    }
  };

  // Keep active item visible
  useEffect(() => {
    if (!open) return;
    const node = listRef.current?.querySelector(
      `[data-cmd-index="${active}"]`
    );
    if (node) node.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[10001] flex items-start justify-center bg-black/70 px-4 pt-[14vh] backdrop-blur-md"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -6 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-lg overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl shadow-black/60"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-3">
              <SearchIcon className="text-[var(--muted)]" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Type a command or search…"
                className="w-full bg-transparent font-mono text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none"
                spellCheck={false}
                autoComplete="off"
              />
              <kbd className="hidden rounded border border-[var(--border)] px-1.5 py-0.5 font-mono text-[0.65rem] text-[var(--muted)] sm:inline-block">
                ESC
              </kbd>
            </div>

            <div
              ref={listRef}
              className="max-h-[50vh] overflow-y-auto py-2"
              role="listbox"
            >
              {filtered.length === 0 && (
                <p className="px-4 py-6 text-center font-mono text-xs text-[var(--muted)]">
                  No matches.
                </p>
              )}
              {filtered.map((cmd, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={cmd.id}
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    data-cmd-index={i}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => runCommand(cmd)}
                    className={`flex w-full items-start justify-between gap-3 px-4 py-2.5 text-left transition-colors ${
                      isActive
                        ? "bg-[var(--bg)]"
                        : "bg-transparent hover:bg-[var(--bg)]/60"
                    }`}
                  >
                    <span className="flex flex-col">
                      <span
                        className={`text-sm ${
                          isActive
                            ? "text-[var(--text)]"
                            : "text-[var(--text)]/90"
                        }`}
                      >
                        {cmd.label}
                      </span>
                      {cmd.description && (
                        <span className="font-mono text-[0.7rem] text-[var(--muted)]">
                          {cmd.description}
                        </span>
                      )}
                    </span>
                    <span className="mt-1 shrink-0 font-mono text-[0.6rem] uppercase tracking-wider text-[var(--muted)]">
                      {cmd.group}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between border-t border-[var(--border)] px-4 py-2 font-mono text-[0.65rem] text-[var(--muted)]">
              <span>↑↓ navigate · Enter select</span>
              <span>{isMac ? "⌘K" : "Ctrl+K"}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
