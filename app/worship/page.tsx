import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
export default function Worship() {
  return (
    <main>
      <section className="inner-hero">
        <div className="page-shell">
          <p className="eyebrow">AFLEWO / Worship</p>
          <h1>
            Worship is the <em>language.</em>
          </h1>
          <p className="body-large" style={{ maxWidth: 720 }}>
            Explore the sound, visuals and shared moments that sit at the heart
            of AFLEWO. The video player on the site can stay with you while you
            browse.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="page-shell inner-grid">
          <div>
            <Image
              className="inner-image"
              src="/images/aflewo-worship.jpg"
              alt="AFLEWO worship"
              width={900}
              height={600}
            />
          </div>
          <div className="dark-card">
            <p className="section-kicker">The experience</p>
            <h3>One voice. Many expressions.</h3>
            <p>
              The original AFLEWO story describes singers and instrumentalists
              from different Christian denominations leading the congregation
              through gospel praise and worship.
            </p>
            <Link href="/contact?topic=worship" className="gold-button">
              Connect with worship team <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
