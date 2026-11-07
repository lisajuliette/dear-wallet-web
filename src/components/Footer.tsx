import Image from "next/image";
import Link from "next/link";
import { COMPANY, KVK, SITE_TAGLINE } from "@/content/site";

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <div>
          <Link className="brand" href="/">
            <Image src="/logo-mark.svg" alt="" width={38} height={38} />
            <span>Dear Wallet</span>
          </Link>
          <small>{SITE_TAGLINE}</small>
          <small>
            © {YEAR} {COMPANY}. All rights reserved. KvK {KVK}. Made in The
            Hague, Netherlands.
          </small>
        </div>
        <nav aria-label="Footer">
          <ul>
            <li>
              <Link href="/support">support</Link>
            </li>
            <li>
              <Link href="/privacy">privacy policy</Link>
            </li>
            <li>
              <Link href="/terms">terms of use</Link>
            </li>
            <li>
              <Link href="/#download">app store</Link>
            </li>
            <li>
              <Link href="/#download">google play</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
