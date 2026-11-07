import {
  COMPANY,
  COMPANY_ADDRESS,
  COMPANY_CITY,
  KVK,
  LAST_UPDATED,
  PRIVACY_EMAIL,
} from "@/content/site";

export const termsToc = [
  { href: "#agree", label: "agreeing to these terms" },
  { href: "#what", label: "what dear wallet is" },
  { href: "#not-advice", label: "not financial advice" },
  { href: "#account", label: "your account" },
  { href: "#content", label: "your content" },
  { href: "#use", label: "fair use" },
  { href: "#rewards", label: "stars, stickers and palettes" },
  { href: "#availability", label: "changes and availability" },
  { href: "#liability", label: "liability" },
  { href: "#ending", label: "ending your use" },
  { href: "#stores", label: "app store terms" },
  { href: "#law", label: "governing law" },
  { href: "#contact-t", label: "contact" },
];

export function TermsContent() {
  return (
    <>
      <p className="muted">Last updated {LAST_UPDATED}</p>
      <h2 id="agree">Agreeing to these terms</h2>
      <p>
        These terms are an agreement between you and {COMPANY} (KvK {KVK},{" "}
        {COMPANY_ADDRESS}, the Netherlands), &quot;we&quot; in these terms. By
        downloading or using Dear Wallet you agree to them. If you don&apos;t
        agree, please don&apos;t use the app.
      </p>

      <h2 id="what">What Dear Wallet is</h2>
      <p>
        Dear Wallet is a personal diary for recording things you chose not to buy,
        things you loved, and how you felt about it. It shows totals based on what
        you enter. It does not hold, move or invest money, connect to banks, or
        make payments.
      </p>

      <h2 id="not-advice">Not financial advice</h2>
      <p>
        Totals, goals, milestones and comparisons in the app are for your own
        motivation and fun. They are not financial, tax or legal advice, and
        amounts are only as accurate as what you enter. Talk to a qualified
        adviser for decisions about your finances.
      </p>

      <h2 id="account">Your account</h2>
      <ul>
        <li>
          You can use Dear Wallet without signing in. Signing in lets you back up
          and sync your data.
        </li>
        <li>You must be at least 16 to use Dear Wallet.</li>
        <li>
          Keep your sign-in details and your phone secure. You&apos;re responsible
          for activity on your account.
        </li>
        <li>
          You can delete your account at any time in Settings › account.
        </li>
      </ul>

      <h2 id="content">Your content</h2>
      <p>
        Everything you write, log or upload stays yours. You give us permission to
        store, process and display it only to run the app for you, such as syncing
        it to your phones and turning it into recap cards you choose to save or
        share. We don&apos;t use your content for anything else. When you share a
        recap card, you decide where it goes.
      </p>

      <h2 id="use">Fair use</h2>
      <p>
        Please don&apos;t misuse the service: no attempts to access other
        people&apos;s data, disrupt our servers, reverse engineer the app beyond
        what the law allows, or upload content that is illegal or infringes
        someone else&apos;s rights. We may suspend accounts that do.
      </p>

      <h2 id="rewards">Stars, stickers and palettes</h2>
      <p>
        Stars, stickers, milestones, sticker packs and palettes are earned in the
        app. They have no monetary value, can&apos;t be bought, sold or exchanged,
        and exist only inside Dear Wallet. We may add new ones or adjust how
        they&apos;re earned; anything you&apos;ve already earned stays yours.
      </p>
      <p>
        The app&apos;s artwork, stickers, name and design belong to {COMPANY}.
      </p>

      <h2 id="availability">Changes and availability</h2>
      <p>
        We work to keep Dear Wallet running smoothly, but we can&apos;t promise it
        will always be available or error-free. We may update the app and these
        terms. If we make a significant change to these terms, we&apos;ll tell you
        in the app before it takes effect. If we ever shut down the sync service,
        we&apos;ll give you at least 60 days&apos; notice and a way to export your
        data.
      </p>

      <h2 id="liability">Liability</h2>
      <p>
        Dear Wallet is provided as is. To the extent Dutch law allows, we&apos;re
        not liable for indirect or consequential loss, or for decisions you make
        based on information in the app. Our total liability to you is limited to
        the amount you paid us for the app in the 12 months before the claim, or
        €50 if that&apos;s higher. Nothing in these terms limits liability that
        can&apos;t be limited by law, or your rights as a consumer.
      </p>

      <h2 id="ending">Ending your use</h2>
      <p>
        You can stop using Dear Wallet and delete your account at any time. We may
        end or suspend your access if you seriously or repeatedly break these
        terms. If we do, we&apos;ll tell you why where we can, and give you a
        chance to export your data unless the law prevents it.
      </p>

      <h2 id="stores">App store terms</h2>
      <p>
        If you got Dear Wallet from the Apple App Store, Apple&apos;s Standard
        Licensed Application End User License Agreement also applies. Apple is not
        responsible for the app or its support; we are. Apple and its subsidiaries
        are third-party beneficiaries of these terms and may enforce them.
      </p>
      <p>
        If you got Dear Wallet from Google Play, the Google Play Terms of Service
        also apply to your download. Google is not responsible for the app or its
        support; we are.
      </p>

      <h2 id="law">Governing law</h2>
      <p>
        These terms are governed by Dutch law. Disputes go to the competent court
        in {COMPANY_CITY}, the Netherlands, unless consumer law gives you the
        right to go to a court where you live. EU consumers can also use the
        EU&apos;s online dispute resolution platform.
      </p>

      <h2 id="contact-t">Contact</h2>
      <p>
        Questions about these terms:{" "}
        <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.
      </p>
    </>
  );
}
