"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  ["Story", "/#story"],
  ["Journey", "/#journey"],
  ["Chapters", "/chapters"],
  ["Moments", "/#moments"],
  ["Team", "/team"],
  ["Connect", "/#connect"],
];
export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-nav">
      <Link href="/" className="brand">
        <img src="/images/aflewo-logo.png" alt="AFLEWO" />
        <span>AFLEWO</span>
      </Link>
      <nav className="desktop-nav">
        {links.map(([label, href]) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
        <Link className="nav-cta" href="/contact">
          Get involved
        </Link>
      </nav>
      <button
        className="menu-button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open navigation"
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <div className="mobile-menu">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="gold-button"
          >
            Get involved
          </Link>
        </div>
      )}
    </header>
  );
}
