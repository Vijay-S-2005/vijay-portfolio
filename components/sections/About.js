"use client";

import { about } from "@/lib/data/about";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full scroll-mt-20 border-t border-[var(--border)]"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[3fr_2fr] lg:gap-20">
        <div className="flex flex-col gap-6">
          <RevealOnScroll>
            <SectionLabel>About</SectionLabel>
          </RevealOnScroll>

          {about.paragraphs.map((p, i) => (
            <RevealOnScroll key={i} delay={0.05 + i * 0.05}>
              <p className="max-w-xl text-[1rem] leading-[1.75] text-[var(--text)]/90">
                {p}
              </p>
            </RevealOnScroll>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 self-start sm:gap-4">
          {about.stats.map((s, i) => (
            <RevealOnScroll key={s.label} delay={0.05 * i}>
              <div className="group relative flex h-full flex-col justify-between gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors duration-200 hover:border-[var(--accent-dim)]">
                <span className="font-mono text-[2rem] leading-none text-[var(--accent)] sm:text-[2.4rem]">
                  {s.value}
                </span>
                <span className="text-[0.78rem] leading-snug text-[var(--muted)]">
                  {s.label}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
