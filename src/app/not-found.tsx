import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { RetroWindow, WindowBody } from "@/components/RetroWindow";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "This page said nvm.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="lost">
      <div className="wrap" style={{ display: "grid", placeItems: "center" }}>
        <RetroWindow title="ERROR.EXE" tint="c3" dots={3}>
          <WindowBody>
            <Image
              src="/stickers/mood-tempted.svg"
              alt=""
              width={132}
              height={132}
            />
            <p className="code">404</p>
            <h1 style={{ fontSize: "clamp(32px, 6vw, 48px)" }}>
              this page said nvm
            </h1>
            <p className="lede">
              We looked everywhere, but it&apos;s not here. Maybe the link
              changed, or it never existed.
            </p>
            <div className="hero-ctas" style={{ justifyContent: "center" }}>
              <Button href="/">back home</Button>
              <Button href="/support" variant="ghost">
                get help
              </Button>
            </div>
          </WindowBody>
        </RetroWindow>
      </div>
    </main>
  );
}
