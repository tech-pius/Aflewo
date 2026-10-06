import Link from 'next/link';
import { chapters } from '@/data/aflewo';

export default function Chapters() {
  return (
    <main>
      <section className="inner-hero">
        <div className="page-shell">
          <p className="eyebrow">AFLEWO / Chapters</p>
          <h1>
            From one city to a <em>wider story.</em>
          </h1>
          <p className="body-large" style={{ maxWidth: 760 }}>
            The chapter archive preserves the documented history while leaving
            current locations, dates and event details ready for the AFLEWO
            team to update.
          </p>
        </div>
      </section>

      <section className="section chapters">
        <div className="page-shell">
          <div className="chapter-grid">
            {chapters.map(([name, year, desc]) => (
              <div className="chapter" key={name}>
                <span>{year}</span>
                <h3>{name}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <Link
            href="/contact?topic=chapter"
            className="gold-button"
            style={{ marginTop: 30 }}
          >
            Ask about a chapter
          </Link>
        </div>
      </section>
    </main>
  );
}