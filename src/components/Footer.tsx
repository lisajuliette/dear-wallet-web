import Image from "next/image";
import Link from "next/link";
import { COMPANY, SITE_TAGLINE } from "@/content/site";

// Build-time year — avoids Cache Components / hydration issues with Date.now()
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
            © {YEAR} {COMPANY}. Made in the Netherlands.
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
