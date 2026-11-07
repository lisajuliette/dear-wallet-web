import type { ReactNode } from "react";

export function Todo({ children }: { children: ReactNode }) {
  return <span className="todo">{children}</span>;
}
