"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data/experience";
import { education } from "@/lib/data/education";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";

function TimelineItem({
  primary,
  secondary,
  period,
  location,
  highlights,
  note,
}) {
  return (
    <div className="relative pl-8">
      <span
        aria-hidden="true"
        className="absolute left-0 top-1.5 flex h-3 w-3 -translate-x-[5.5px] items-center justify-center rounded-full"
        style={{
          background: "var(--accent)",
          boxShadow: "0 0 0 4px var(--bg)",
        }}
      />

      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div>
          <h3 className="text-[1.05rem] font-medium leading-snug text-[var(--text)]">
            {primary}
          </h3>
          <p className="mt-1 text-[0.9rem] text-[var(--muted)]">{secondary}</p>
        </div>
        <div className="shrink-0 text-left sm:text-right">
          <p className="font-mono text-[0.75rem] tracking-wider text-[var(--muted)]">
            {period}
          </p>
          {location && (
            <p className="mt-1 font-mono text-[0.7rem] text-[var(--muted)]/80">
              {location}
            </p>
          )}
        </div>
      </div>

      {note && (
        <p className="mt-2 font-mono text-[0.75rem] text-[var(--accent)]">
          {note}
        </p>
      )}

      {highlights?.length > 0 && (
        <ul className="mt-4 flex flex-col gap-2">
          {highlights.map((h, i) => (
            <li
              key={i}
              className="relative pl-5 text-[0.92rem] leading-[1.7] text-[var(--text)]/85"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 font-mono text-[var(--muted)]"
              >
                —
              </span>
              {h}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function TimelineColumn({ items, getProps }) {
  return (
    <div className="relative">
      <motion.span
        aria-hidden="true"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-0 h-full w-px origin-top"
        style={{ background: "var(--border)" }}
      />
      <div className="flex flex-col gap-12">
        {items.map((item, i) => (
          <RevealOnScroll key={i} delay={0.05 * i} y={20}>
            <TimelineItem {...getProps(item)} />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full scroll-mt-20 border-t border-[var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <RevealOnScroll>
          <SectionLabel>Experience</SectionLabel>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <h2 className="mt-3 text-3xl font-light leading-tight tracking-tight text-[var(--text)] sm:text-4xl">
            A short timeline.
          </h2>
        </RevealOnScroll>

        <div className="mt-14">
          <TimelineColumn
            items={experience}
            getProps={(e) => ({
              primary: e.company,
              secondary: e.role,
              period: e.period,
              location: e.location,
              highlights: e.highlights,
            })}
          />
        </div>

        <div className="mt-20">
          <RevealOnScroll>
            <SectionLabel>Education</SectionLabel>
          </RevealOnScroll>
          <div className="mt-10">
            <TimelineColumn
              items={education}
              getProps={(e) => ({
                primary: e.institution,
                secondary: e.degree,
                period: e.period,
                location: e.location,
                note: e.note,
              })}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
