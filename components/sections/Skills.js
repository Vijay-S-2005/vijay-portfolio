"use client";

import { skills } from "@/lib/data/skills";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import Pill from "@/components/ui/Pill";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full scroll-mt-20 border-t border-[var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <RevealOnScroll>
          <SectionLabel>Skills</SectionLabel>
        </RevealOnScroll>

        <div className="mt-10 flex flex-col divide-y divide-[var(--border)]">
          {skills.map((group, i) => (
            <RevealOnScroll key={group.category} delay={0.04 * i}>
              <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-[200px_1fr] md:gap-8 md:py-7">
                <p className="font-mono text-[0.8rem] uppercase tracking-wider text-[var(--muted)]">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
