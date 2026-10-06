import Link from "next/link";
import { ArrowUpRight, Handshake } from "lucide-react";
export default function Partnership() {
  return (
    <main>
      <section className="inner-hero">
        <div className="page-shell">
          <p className="eyebrow">AFLEWO / Partnership</p>
          <h1>
            Build the next <em>chapter.</em>
          </h1>
          <p className="body-large" style={{ maxWidth: 720 }}>
            A clear partnership path: understand the purpose, prepare your
            details, then open a direct conversation with the AFLEWO team.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 60 }}>
        <div className="page-shell inner-grid">
          <div className="dark-card">
            <Handshake size={30} color="var(--gold2)" />
            <h3>Partnership pathway</h3>
            <p>
              Use this space for partnership guidelines, sponsor information,
              church or ministry collaboration, media collaboration and chapter
              support. Official requirements can be updated here without
              changing the overall design.
            </p>
            <Link href="/contact?topic=partnership" className="gold-button">
              Start a partnership enquiry <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="dark-card">
            <h3>What to prepare</h3>
            <p>
              Organization or church name, contact person, proposed
              collaboration, resources offered, timeline and the best way for
              the team to respond.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
