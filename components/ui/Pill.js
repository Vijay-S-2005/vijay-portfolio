import clsx from "clsx";

export default function Pill({ children, className = "", as: Tag = "span" }) {
  return (
    <Tag
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 font-mono",
        "border border-[var(--border)] bg-[var(--surface)]",
        "text-[0.7rem] tracking-wide text-[var(--muted)]",
        "transition-colors duration-200",
        "hover:border-[var(--accent)] hover:text-[var(--text)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
