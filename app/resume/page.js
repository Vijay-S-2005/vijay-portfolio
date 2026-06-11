import { personal } from "@/lib/data/personal";
import MagneticButton from "@/components/ui/MagneticButton";
import { DownloadIcon } from "@/components/ui/Icons";

export const metadata = {
  title: "Resume",
  description: `Resume of ${personal.name} — ${personal.role}.`,
};

export default function ResumePage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-5 py-16 sm:px-8 sm:py-20">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-2">
          <h1
            className="text-[var(--text)]"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 300,
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
            }}
          >
            {personal.name}
          </h1>
          <p className="font-mono text-[0.8rem] uppercase tracking-[0.18em] text-[var(--accent)]">
            {personal.role}
          </p>
        </div>

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
      </header>

      <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
        <iframe
          src={`${personal.resumePdf}#view=FitH`}
          title={`Resume of ${personal.name}`}
          className="h-[80vh] w-full"
        />
      </div>

      <p className="text-center font-mono text-[0.75rem] text-[var(--muted)]">
        Can&apos;t see the preview?{" "}
        <a
          href={personal.resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] underline-offset-4 hover:underline"
        >
          Open the PDF in a new tab
        </a>
        .
      </p>
    </div>
  );
}
