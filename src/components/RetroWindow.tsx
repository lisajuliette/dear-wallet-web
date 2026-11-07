import type { CSSProperties, ElementType, ReactNode } from "react";

type TintToken = "c1" | "c2" | "c3" | "c4" | "c5";

type RetroWindowProps = {
  title: string;
  tint?: TintToken;
  dots?: 0 | 1 | 2 | 3;
  holo?: boolean;
  children: ReactNode;
  className?: string;
  as?: ElementType;
  "aria-label"?: string;
};

const tintVars: Record<TintToken, string> = {
  c1: "var(--c1)",
  c2: "var(--c2)",
  c3: "var(--c3)",
  c4: "var(--c4)",
  c5: "var(--c5)",
};

export function RetroWindow({
  title,
  tint = "c2",
  dots = 0,
  holo = false,
  children,
  className = "",
  as: Tag = "article",
  "aria-label": ariaLabel,
}: RetroWindowProps) {
  const style = { "--tint": tintVars[tint] } as CSSProperties;

  return (
    <Tag
      className={`window ${className}`.trim()}
      style={style}
      aria-label={ariaLabel}
    >
      <div className={`bar${holo ? " holo-bar" : ""}`}>
        <span className="title">{title}</span>
        {dots > 0 ? (
          <span className="dots">
            {Array.from({ length: dots }, (_, i) => (
              <i key={i} />
            ))}
          </span>
        ) : null}
      </div>
      {children}
    </Tag>
  );
}

export function WindowBody({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`body ${className}`.trim()}>{children}</div>;
}
