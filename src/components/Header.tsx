import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/#how", label: "how it works" },
  { href: "/#features", label: "features" },
  { href: "/#privacy", label: "privacy" },
  { href: "/#faq", label: "faq" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <nav className="nav" aria-label="Main">
          <Link className="brand" href="/">
            <Image
              src="/logo-mark.svg"
              alt=""
              width={38}
              height={38}
              priority
            />
            <span>Dear Wallet</span>
          </Link>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="nav-end">
            <Link className="btn" href="/#download">
              get the app
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
