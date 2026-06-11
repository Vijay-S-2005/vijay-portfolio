import Image from "next/image";
import Link from "next/link";
import Pill from "@/components/ui/Pill";
import { ChevronLeftIcon } from "@/components/ui/Icons";

export default function ProjectHeader({ project }) {
  return (
    <header className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
      <Image
        src={project.cover}
        alt={`${project.title} cover image`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, var(--bg) 0%, rgba(10,10,15,0.85) 30%, rgba(10,10,15,0.4) 60%, rgba(10,10,15,0.15) 100%)",
        }}
      />

      <Link
        href="/#projects"
        className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)]/70 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-[var(--muted)] backdrop-blur transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] sm:left-8"
      >
        <ChevronLeftIcon size={14} />
        Back
      </Link>

      <div className="absolute bottom-0 left-0 right-0 px-5 pb-10 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--accent)]">
            {project.category}
          </p>
          <h1
            className="mt-3 max-w-3xl text-[var(--text)]"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.6rem)",
              fontWeight: 300,
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
            }}
          >
            {project.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
