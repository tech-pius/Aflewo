import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import FloatingVideo from "@/components/FloatingVideo";
import FloatingActions from "@/components/FloatingActions";
import Link from "next/link";
import {
  Instagram,
  Linkedin,
  Music2,
  Youtube,
  Facebook,
  Twitter,
} from "lucide-react";
import { site } from "@/data/aflewo";
export const metadata: Metadata = {
  title: "AFLEWO   Africa Let’s Worship",
  description:
    "AFLEWO a movement of worship, prayer, music, people and chapters across Africa.",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <FloatingVideo />
        <FloatingActions />
        <footer className="footer">
          <div className="page-shell">
            <div className="footer-grid">
              <div>
                <div className="brand">
                  <img src="/images/aflewo-logo.png" alt="AFLEWO" />
                  <span>AFLEWO</span>
                </div>
                <p style={{ maxWidth: 330, marginTop: 18 }}>
                  Africa Let’s Worship  a story of worship, prayer, unity,
                  music and people carrying one vision across generations.
                </p>
              </div>
              <div>
                <h4>Explore</h4>
                <Link href="/#story">Our story</Link>
                <Link href="/#journey">Journey</Link>
                <Link href="/chapters">Chapters</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/resources">Resources</Link>
              </div>
              <div>
                <h4>Connect</h4>
                <Link href="/worship">Worship</Link>
                <Link href="/prayer">Prayer support</Link>
                <Link href="/community">Community</Link>
                <Link href="/partnership">Partnership</Link>
                <Link href="/contact">Contact the team</Link>
              </div>
              <div>
                <h4>Follow</h4>
                <div style={{ display: "flex", gap: 10, marginBottom: 15 }}>
                  {site.youtube && (
                    <a href={site.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                      <Youtube />
                    </a>
                  )}
                  {site.x && (
                    <a href={site.x} target="_blank" rel="noopener noreferrer" aria-label="X">
                      <Twitter />
                    </a>
                  )}
                  {site.linkedin && (
                    <a
                      href={site.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin />
                    </a>
                  )}
                  {site.instagram && (
                    <a
                      href={site.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <Instagram />
                    </a>
                  )}
                  {site.facebook && (
                    <a
                      href={site.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <Facebook />
                    </a>
                  )}
                  {site.tiktok && (
                    <a href={site.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                      <Music2 />
                    </a>
                  )}
                </div>
                <p>
                  Instagram, TikTok and Facebook links are kept in one
                  configuration file so official URLs can be added when
                  confirmed.
                </p>
              </div>
            </div>
            <div className="footer-bottom">
              <span>
                © {new Date().getFullYear()} AFLEWO. All rights reserved.
              </span>
              <span>
                <Link href="/privacy">Privacy</Link> ·{" "}
                <Link href="/terms">Terms</Link> ·{" "}
                <Link href="/cookies">Cookies</Link>
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
