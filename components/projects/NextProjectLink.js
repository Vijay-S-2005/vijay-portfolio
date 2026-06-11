import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";

export default function NextProjectLink({ project }) {
  if (!project) return null;
  return (
    <section className="mt-24 border-t border-[var(--border)] pt-12">
      <Link
        href={`/projects/${project.id}`}
        className="group flex flex-col gap-3 transition-colors"
      >
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]">
          Next Project
        </p>
        <div className="flex items-center justify-between gap-4">
          <h3
            className="text-[var(--text)] transition-colors group-hover:text-[var(--accent)]"
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h3>
          <ArrowRightIcon
            size={22}
            className="shrink-0 text-[var(--muted)] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[var(--accent)]"
          />
        </div>
      </Link>
    </section>
  );
}
