import { CopyButton } from "@/components/CopyButton";
import { SUPPORT_EMAIL } from "@/content/site";

export const supportToc = [
  { href: "#contact-s", label: "contact us" },
  { href: "#start", label: "getting started" },
  { href: "#phone", label: "new phone" },
  { href: "#data", label: "export and delete" },
  { href: "#lock", label: "app lock" },
  { href: "#rewards-s", label: "stickers and rewards" },
];

export function SupportContent() {
  return (
    <>
      <h2 id="contact-s">Contact us</h2>
      <p>
        Email us and a real person will reply, usually within two working days.
      </p>
      <div className="contact-card">
        <code id="email">{SUPPORT_EMAIL}</code>
        <CopyButton text={SUPPORT_EMAIL} />
        <a href={`mailto:${SUPPORT_EMAIL}`}>open in mail</a>
      </div>
      <p className="note">
        It helps to tell us your phone model, its iOS or Android version, and
        the app version from Settings › about.
      </p>

      <h2 id="start">Getting started</h2>
      <h3>How do I log something?</h3>
      <p>
        Tap the round LOG button in the middle of the bottom bar, type the amount
        and what it was, then tap nvm!. Only those two are needed; category, note
        and photo are optional.
      </p>
      <h3>What&apos;s the difference between &quot;didn&apos;t buy&quot; and &quot;loved it&quot;?</h3>
      <p>
        &quot;Didn&apos;t buy&quot; adds to your kept total. &quot;Loved it&quot; is for things you
        bought and adored; they go to your loved list with an optional photo and
        never change your kept total.
      </p>
      <h3>I bought it after all. Now what?</h3>
      <p>
        Open the item and tap &quot;i bought it after all&quot;. It leaves your tally, and
        &quot;undo, i didn&apos;t buy it&quot; brings it back. Rewards you&apos;ve earned stay.
      </p>

      <h2 id="phone">Moving to a new phone</h2>
      <p>
        Sign in on your old phone first (Settings › account) so your data is
        backed up. Then install Dear Wallet on the new phone, iPhone or Android,
        and sign in with the same Apple account or email. Everything, including
        your decorated diary pages, comes across.
      </p>
      <p>
        If you never signed in, your data lives only on the old phone. Use
        Settings › export my data to keep a copy.
      </p>

      <h2 id="data">Export and delete</h2>
      <ul>
        <li>
          <strong>Export:</strong> Settings › export my data creates a CSV of
          your items and diary plus a zip of your photos, and opens the share
          sheet.
        </li>
        <li>
          <strong>Delete your account:</strong> Settings › account › delete
          account. This removes your account, entries, diary and photos from our
          servers. It can&apos;t be undone.
        </li>
        <li>
          <strong>Can&apos;t open the app?</strong> Email us from the address on your
          account and we&apos;ll delete it for you.
        </li>
      </ul>

      <h2 id="lock">App lock</h2>
      <p>
        Turn on Settings › app lock to protect just the diary or the whole app
        with Face ID or fingerprint unlock, with a six-digit passcode as backup.
        Forgot the passcode? Tap &quot;forgot passcode?&quot; on the lock screen and
        confirm with your account to reset it.
      </p>

      <h2 id="rewards-s">Stickers and rewards</h2>
      <p>
        You get one star per day you use the app, and stars never reset. Stickers
        drop randomly as you log and write; if a few actions in a row don&apos;t drop
        one, the next one always does. Sticker packs unlock at milestones, and
        seasonal packs open during their season. Nothing can be bought.
      </p>
    </>
  );
}
