import Link from 'next/link';
import { ArrowUpRight, Users } from 'lucide-react';

export default function Community() {
  return (
    <main>
      <section className="inner-hero">
        <div className="page-shell">
          <p className="eyebrow">AFLEWO / Community</p>
          <h1>
            Belong to the <em>gathering.</em>
          </h1>
          <p className="body-large" style={{ maxWidth: 720 }}>
            AFLEWO has historically involved people across ages, churches,
            music teams, logistics teams and local chapters. This page makes
            the participation path visible.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="page-shell inner-grid">
          <div className="dark-card">
            <Users size={30} color="var(--gold2)" />
            <h3>Serve & participate</h3>
            <p>
              Tell the team how you would like to participate. The current site
              can later connect this to official volunteer, choir, chapter or
              event registration systems.
            </p>
            <Link href="/contact?topic=community" className="gold-button">
              Tell the team <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="dark-card">
            <h3>Chapter network</h3>
            <p>
              Explore the documented chapter story, then use the contact route
              for current chapter information rather than relying on historical
              event details.
            </p>
            <Link href="/chapters" className="ghost-button">
              Explore chapters <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}