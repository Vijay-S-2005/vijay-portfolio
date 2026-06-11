"use client";

import { projects } from "@/lib/data/projects";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full scroll-mt-20 border-t border-[var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <RevealOnScroll>
          <SectionLabel>Selected Work</SectionLabel>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <h2 className="mt-3 max-w-2xl text-3xl font-light leading-tight tracking-tight text-[var(--text)] sm:text-4xl">
            Real systems, deployed in the real world.
          </h2>
        </RevealOnScroll>

        <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-8">
          {projects.map((p, i) => (
            <RevealOnScroll key={p.id} delay={0.05 * i} y={40}>
              <ProjectCard project={p} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
