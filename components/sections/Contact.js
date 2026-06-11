"use client";

import Link from "next/link";
import { useState } from "react";
import { personal } from "@/lib/data/personal";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import Toast from "@/components/ui/Toast";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/Icons";

export default function Contact() {
  const [toastOpen, setToastOpen] = useState(false);

  const copyEmail = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(personal.email);
      }
      setToastOpen(true);
    } catch {
      setToastOpen(true);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full scroll-mt-20 border-t border-[var(--border)]"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-28 text-center sm:px-8">
        <RevealOnScroll>
          <SectionLabel>Get in Touch</SectionLabel>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <h2
            className="mt-4 text-[var(--text)]"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              fontWeight: 200,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            Let&apos;s build something.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="mt-6 max-w-xl text-[1rem] leading-relaxed text-[var(--muted)]">
            Open to full-time roles, internships, and interesting projects.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <button
            type="button"
            onClick={copyEmail}
            className="group mt-10 inline-flex items-center gap-3 rounded-md px-2 py-2 text-[var(--text)] transition-colors duration-200 hover:text-[var(--accent)] focus-visible:text-[var(--accent)]"
            aria-label="Copy email to clipboard"
          >
            <MailIcon
              size={22}
              className="text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]"
            />
            <span
              className="border-b border-transparent transition-colors group-hover:border-[var(--accent)]"
              style={{
                fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                fontWeight: 300,
                letterSpacing: "-0.01em",
              }}
            >
              {personal.email}
            </span>
          </button>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="mt-10 flex items-center gap-6 text-[var(--muted)]">
            <Link
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-[var(--accent)]"
            >
              <GitHubIcon size={22} />
            </Link>
            <Link
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-[var(--accent)]"
            >
              <LinkedInIcon size={22} />
            </Link>
          </div>
        </RevealOnScroll>
      </div>

      <Toast
        message="Copied!"
        open={toastOpen}
        onClose={() => setToastOpen(false)}
      />
    </section>
  );
}
