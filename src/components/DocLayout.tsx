import type { ReactNode } from "react";
import { Chip } from "./Chip";
import { RetroWindow, WindowBody } from "./RetroWindow";

export type TocItem = { href: string; label: string };

type DocLayoutProps = {
  chip: string;
  title: string;
  lede: string;
  toc: TocItem[];
  windowTitle: string;
  children: ReactNode;
};

export function DocLayout({
  chip,
  title,
  lede,
  toc,
  windowTitle,
  children,
}: DocLayoutProps) {
  return (
    <div className="wrap">
      <div className="doc-hero">
        <Chip>{chip}</Chip>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 64px)" }}>{title}</h1>
        <p className="lede">{lede}</p>
      </div>
      <div className="doc-layout">
        <details className="toc window">
          <summary className="bar">
            <span className="title">ON THIS PAGE</span>
            <span className="toc-marker" aria-hidden="true" />
          </summary>
          <nav aria-label="On this page">
            <ol>
              {toc.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ol>
          </nav>
        </details>

        <RetroWindow title={windowTitle} className="doc" dots={2}>
          <WindowBody>{children}</WindowBody>
        </RetroWindow>
      </div>
    </div>
  );
}
