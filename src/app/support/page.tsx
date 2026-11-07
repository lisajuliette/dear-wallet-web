import type { Metadata } from "next";
import { DocLayout } from "@/components/DocLayout";
import { SupportContent, supportToc } from "@/content/support";
import { SUPPORT_DESCRIPTION } from "@/content/site";

export const metadata: Metadata = {
  title: "Support",
  description: SUPPORT_DESCRIPTION,
  alternates: { canonical: "/support" },
  openGraph: {
    title: "Support · Dear Wallet",
    description: SUPPORT_DESCRIPTION,
    url: "/support",
  },
};

export default function SupportPage() {
  return (
    <main>
      <DocLayout
        chip="SUPPORT.EXE"
        title="how can we help?"
        lede="Answers to the common ones, and a real person if you need one."
        toc={supportToc}
        windowTitle="SUPPORT.EXE"
      >
        <SupportContent />
      </DocLayout>
    </main>
  );
}
