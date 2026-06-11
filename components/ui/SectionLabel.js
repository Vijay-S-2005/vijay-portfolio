import clsx from "clsx";

export default function SectionLabel({ children, className = "" }) {
  return (
    <span className={clsx("section-label", className)}>{children}</span>
  );
}
