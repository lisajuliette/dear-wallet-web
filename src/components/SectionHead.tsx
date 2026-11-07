import type { ReactNode } from "react";

type SectionHeadProps = {
  label: string;
  title: string;
  titleId: string;
  children?: ReactNode;
  center?: boolean;
};

export function SectionHead({
  label,
  title,
  titleId,
  children,
  center = false,
}: SectionHeadProps) {
  return (
    <div className={`section-head${center ? " center" : ""}`}>
      <span className="label">{label}</span>
      <h2 id={titleId}>{title}</h2>
      {children}
    </div>
  );
}
