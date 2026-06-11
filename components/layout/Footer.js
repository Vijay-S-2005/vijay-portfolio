import Link from "next/link";
import { personal } from "@/lib/data/personal";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="no-print mt-24 border-t border-[var(--border)]"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-5 py-6 font-mono text-[0.7rem] tracking-wide text-[var(--muted)] sm:flex-row sm:justify-between sm:px-8">
        <p>© {year} {personal.name}</p>

        <div className="flex items-center gap-4">
          <Link
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-[var(--accent)]"
          >
            <GitHubIcon size={18} />
          </Link>
          <Link
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-[var(--accent)]"
          >
            <LinkedInIcon size={18} />
          </Link>
        </div>

        <p>
          Built with{" "}
          <span className="text-[var(--text)]">Next.js</span>
        </p>
      </div>
    </footer>
  );
}
