import Link from "next/link";
import { resources } from "@/data/aflewo";
import { ArrowUpRight } from "lucide-react";
export default function Resources() {
  return (
    <main>
      <section className="inner-hero">
        <div className="page-shell">
          <p className="eyebrow">AFLEWO / Resources</p>
          <h1>
            Keep what <em>builds.</em>
          </h1>
          <p className="body-large" style={{ maxWidth: 720 }}>
            The original website had an archive of downloads, a documentary,
            promotional material, an FAQ and prayer resources. This new library
            turns that list into a cleaner, searchable-ready home.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="page-shell">
          <div className="resource-list">
            {resources.map(([title, type, desc]) => (
              <div className="resource" key={title}>
                <small className="eyebrow">{type}</small>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link href="/contact?topic=resources" className="ghost-button">
                  Request resource <ArrowUpRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
