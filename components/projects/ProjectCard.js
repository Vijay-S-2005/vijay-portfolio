"use client";

import Image from "next/image";
import Link from "next/link";
import TiltCard from "@/components/ui/TiltCard";
import Pill from "@/components/ui/Pill";
import { ArrowRightIcon } from "@/components/ui/Icons";

export default function ProjectCard({ project }) {
  return (
    <TiltCard className="group relative w-full">
      <Link
        href={`/projects/${project.id}`}
        className="block overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-colors duration-200 hover:border-[var(--accent)] focus-visible:border-[var(--accent)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-[45%_1fr]">
          <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-[var(--border)] md:aspect-auto md:border-b-0 md:border-r">
            <Image
              src={project.cover}
              alt={`${project.title} cover`}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </div>

          <div className="flex flex-col gap-4 p-6 md:p-7">
            <div className="flex items-start justify-between gap-3">
              <p className="label-mono uppercase tracking-wider text-[var(--muted)]">
                {project.category}
              </p>
              <p className="label-mono shrink-0 text-[var(--muted)]">
                {project.year}
              </p>
            </div>

            <h3 className="text-[1.5rem] font-medium leading-tight text-[var(--text)]">
              {project.title}
            </h3>

            <p className="text-[0.95rem] leading-relaxed text-[var(--muted)]">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tech.slice(0, 6).map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>

            <div className="mt-2 inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-wider text-[var(--accent)] transition-transform duration-200 group-hover:translate-x-0.5">
              View Project
              <ArrowRightIcon />
            </div>
          </div>
        </div>

        {project.featured && (
          <span className="absolute right-4 top-4 rounded border border-[var(--accent-dim)] bg-[var(--bg)]/70 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[var(--accent)] backdrop-blur">
            Featured
          </span>
        )}
      </Link>
    </TiltCard>
  );
}
