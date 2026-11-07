import Image from "next/image";
import { Button } from "./Button";

const items = [
  {
    title: "No bank connection.",
    text: "Dear Wallet never asks for your bank, cards or transactions. You type what you want to remember.",
  },
  {
    title: "No ads, no trackers.",
    text: "There are no advertising or analytics SDKs in the app, and we never sell your data.",
  },
  {
    title: "Lock it with Face ID or fingerprint.",
    text: "Lock just the diary or the whole app. Your face and fingerprint never leave your phone.",
  },
  {
    title: "Start without an account.",
    text: "Sign in only if you want a backup and your diary on a new phone.",
  },
  {
    title: "Export or delete anytime.",
    text: "Both live in settings, and delete means everything.",
  },
];

export function PrivacyList() {
  return (
    <div className="privacy-grid">
      <div className="main">
        <h2 id="priv-title" style={{ marginBottom: 18 }}>
          your diary is yours
        </h2>
        <ul>
          {items.map((item) => (
            <li key={item.title}>
              <span>
                <strong>{item.title}</strong> {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="side">
        <Image
          src="/stickers/common-dear-wallet-letter.svg"
          alt=""
          width={120}
          height={120}
        />
        <p className="muted">
          The full details are in plain English in our privacy policy.
        </p>
        <Button href="/privacy" variant="ghost">
          read the privacy policy
        </Button>
      </div>
    </div>
  );
}
