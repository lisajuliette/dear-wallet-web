import type { Metadata } from "next";
import { DocLayout } from "@/components/DocLayout";
import { PrivacyContent, privacyToc } from "@/content/privacy";
import { PRIVACY_DESCRIPTION } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: PRIVACY_DESCRIPTION,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy · Dear Wallet",
    description: PRIVACY_DESCRIPTION,
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main>
      <DocLayout
        chip="PRIVACY.EXE"
        title="privacy policy"
        lede="Written to be read. If anything is unclear, email us."
        toc={privacyToc}
        windowTitle="PRIVACY.EXE"
      >
        <PrivacyContent />
      </DocLayout>
    </main>
  );
}
