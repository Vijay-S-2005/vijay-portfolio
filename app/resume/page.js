import Link from "next/link";
import { resume } from "@/lib/data/resume";
import { personal } from "@/lib/data/personal";
import MagneticButton from "@/components/ui/MagneticButton";
import { DownloadIcon } from "@/components/ui/Icons";

export const metadata = {
  title: "Resume",
  description: `Resume of ${personal.name} — ${personal.role}.`,
};

function Divider() {
  return (
    <hr
      aria-hidden="true"
      className="my-10 border-0 border-t border-[var(--border)]"
    />
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="font-mono text-[0.75rem] uppercase tracking-[0.2em] text-[var(--muted)]">
      {children}
    </h2>
  );
}

function ResumeRow({ left, right }) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <div className="min-w-0">{left}</div>
      <p className="shrink-0 font-mono text-[0.75rem] tracking-wider text-[var(--muted)]">
        {right}
      </p>
    </div>
  );
}

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-5 py-16 sm:px-8 sm:py-20 resume-prose">
      <header className="flex flex-col gap-4">
        <h1
          className="text-[var(--text)]"
          style={{
            fontSize: "clamp(2.4rem, 5vw, 3.4rem)",
            fontWeight: 300,
            letterSpacing: "-0.025em",
            lineHeight: 1.05,
          }}
        >
          {resume.header.name}
        </h1>
        <p className="font-mono text-[0.85rem] uppercase tracking-[0.18em] text-[var(--accent)]">
          {resume.header.role}
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[0.78rem] text-[var(--muted)]">
          {resume.header.contact.map((c) => (
            <li key={c.label}>
              <Link
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  c.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="transition-colors hover:text-[var(--accent)]"
              >
                {c.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-2" data-print-hide>
          <MagneticButton
            href={personal.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            download
            variant="solid"
            ariaLabel="Download resume PDF"
          >
            <DownloadIcon />
            Download PDF
          </MagneticButton>
        </div>
      </header>

      <Divider />

      <section className="flex flex-col gap-4">
        <SectionTitle>Professional Summary</SectionTitle>
        <p className="text-[0.98rem] leading-[1.85] text-[var(--text)]/90">
          {resume.summary}
        </p>
      </section>

      <Divider />

      <section className="flex flex-col gap-6">
        <SectionTitle>Experience</SectionTitle>
        {resume.experience.map((e) => (
          <div key={e.company} className="flex flex-col gap-3">
            <ResumeRow
              left={
                <>
                  <p className="text-[1rem] font-medium text-[var(--text)]">
                    {e.company}
                  </p>
                  <p className="text-[0.92rem] text-[var(--muted)]">{e.role}</p>
                </>
              }
              right={`${e.period} · ${e.location}`}
            />
            <ul className="mt-1 flex flex-col gap-1.5">
              {e.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <Divider />

      <section className="flex flex-col gap-6">
        <SectionTitle>Projects</SectionTitle>
        {resume.projects.map((p) => (
          <div key={p.id} className="flex flex-col gap-3">
            <ResumeRow
              left={
                <>
                  <p className="text-[1rem] font-medium text-[var(--text)]">
                    {p.title}
                  </p>
                  <p className="font-mono text-[0.78rem] text-[var(--muted)]">
                    {p.tech.join(", ")}
                  </p>
                </>
              }
              right={p.period}
            />
            <p className="text-[0.95rem] leading-[1.75] text-[var(--text)]/85">
              {p.summary}
            </p>
            <ul className="mt-1 flex flex-col gap-1.5">
              {p.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <Divider />

      <section className="flex flex-col gap-6">
        <SectionTitle>Education</SectionTitle>
        {resume.education.map((e) => (
          <div key={e.institution} className="flex flex-col gap-1">
            <ResumeRow
              left={
                <>
                  <p className="text-[1rem] font-medium text-[var(--text)]">
                    {e.institution}
                  </p>
                  <p className="text-[0.92rem] text-[var(--muted)]">
                    {e.degree}
                  </p>
                </>
              }
              right={`${e.period}${e.location ? ` · ${e.location}` : ""}`}
            />
            {e.note && (
              <p className="font-mono text-[0.78rem] text-[var(--accent)]">
                {e.note}
              </p>
            )}
          </div>
        ))}
      </section>

      <Divider />

      <section className="flex flex-col gap-4">
        <SectionTitle>Skills</SectionTitle>
        <div className="flex flex-col gap-3">
          {resume.skills.map((g) => (
            <div
              key={g.category}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <p className="w-44 shrink-0 font-mono text-[0.78rem] uppercase tracking-wider text-[var(--muted)]">
                {g.category}
              </p>
              <p className="text-[0.95rem] text-[var(--text)]/90">
                {g.items.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
