import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectById, getNextProject } from "@/lib/data/projects";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectGallery from "@/components/projects/ProjectGallery";
import NextProjectLink from "@/components/projects/NextProjectLink";
import SectionLabel from "@/components/ui/SectionLabel";
import Pill from "@/components/ui/Pill";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowRightIcon } from "@/components/ui/Icons";

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) {
    return { title: "Project not found" };
  }
  return {
    title: `${project.title}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Vijay S`,
      description: project.summary,
      images: [{ url: project.cover }],
    },
  };
}

function Block({ label, children }) {
  return (
    <div className="flex flex-col gap-3">
      <SectionLabel>{label}</SectionLabel>
      <div className="text-[1rem] leading-[1.85] text-[var(--text)]/90 sm:text-[1.05rem]">
        {children}
      </div>
    </div>
  );
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  const next = getNextProject(id);

  return (
    <article className="-mt-14">
      <ProjectHeader project={project} />

      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-12">
            <Block label="Problem">
              <p>{project.problem}</p>
            </Block>

            <Block label="Approach">
              <p>{project.approach}</p>
            </Block>

            <Block label="Features">
              <ul className="flex flex-col gap-2.5">
                {project.features.map((f, i) => (
                  <li
                    key={i}
                    className="relative pl-5 text-[1rem] leading-[1.7]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 font-mono text-[var(--muted)]"
                    >
                      —
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </Block>

            <Block label="Challenges">
              <p>{project.challenges}</p>
            </Block>

            <Block label="Outcome">
              <p>{project.outcome}</p>
            </Block>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex flex-col gap-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <div className="flex flex-col gap-2">
                <SectionLabel>Year</SectionLabel>
                <p className="font-mono text-[1rem] text-[var(--text)]">
                  {project.year}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <SectionLabel>Category</SectionLabel>
                <p className="text-[0.95rem] text-[var(--text)]">
                  {project.category}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <SectionLabel>Tech Stack</SectionLabel>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </div>

              {project.liveUrl && (
                <MagneticButton
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="solid"
                  className="mt-2 w-full justify-center"
                >
                  Visit Live
                  <ArrowRightIcon />
                </MagneticButton>
              )}

              {project.repoUrl && (
                <Link
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center font-mono text-[0.75rem] uppercase tracking-wider text-[var(--muted)] underline-offset-4 transition-colors hover:text-[var(--accent)] hover:underline"
                >
                  View Source →
                </Link>
              )}
            </div>
          </aside>
        </div>

        <ProjectGallery images={project.gallery} />

        <NextProjectLink project={next} />
      </div>
    </article>
  );
}
