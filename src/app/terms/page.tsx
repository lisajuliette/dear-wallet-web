import type { Metadata } from "next";
import { DocLayout } from "@/components/DocLayout";
import { TermsContent, termsToc } from "@/content/terms";
import { TERMS_DESCRIPTION } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: TERMS_DESCRIPTION,
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Use · Dear Wallet",
    description: TERMS_DESCRIPTION,
    url: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main>
      <DocLayout
        chip="TERMS.EXE"
        title="terms of use"
        lede="The agreement between you and us, in plain English."
        toc={termsToc}
        windowTitle="TERMS.EXE"
      >
        <TermsContent />
      </DocLayout>
    </main>
  );
}
