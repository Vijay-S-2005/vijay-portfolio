import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
      <p className="font-mono text-[0.75rem] uppercase tracking-[0.2em] text-[var(--accent)]">
        404 · Not Found
      </p>
      <h1
        className="mt-4 text-[var(--text)]"
        style={{
          fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
          fontWeight: 300,
          letterSpacing: "-0.025em",
        }}
      >
        That route is off the map.
      </h1>
      <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-[var(--muted)]">
        The page you are looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-md border border-[var(--accent)] px-5 py-3 font-mono text-[0.75rem] uppercase tracking-wider text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--bg)]"
      >
        Back to Home
      </Link>
    </div>
  );
}
