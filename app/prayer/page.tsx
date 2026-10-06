import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Heart } from "lucide-react";
export default function Prayer() {
  return (
    <main>
      <section className="inner-hero">
        <div className="page-shell">
          <p className="eyebrow">AFLEWO / Prayer</p>
          <h1>
            Make room for <em>prayer.</em>
          </h1>
          <p className="body-large" style={{ maxWidth: 720 }}>
            A direct pathway for people looking for prayer support, prayer
            resources or a way to connect with the AFLEWO team.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="page-shell inner-grid">
          <div className="dark-card">
            <Heart size={30} color="var(--gold2)" />
            <h3>Prayer support</h3>
            <p>
              Share what you would like the team to pray about. The form routes
              the enquiry to the contact pathway so the organization can connect
              it to the appropriate prayer team.
            </p>
            <Link href="/contact?topic=prayer" className="gold-button">
              Request prayer <ArrowUpRight size={15} />
            </Link>
          </div>
          <div>
            <Image
              src="/images/aflewo-hero.jpg"
              alt="AFLEWO gathering"
              width={900}
              height={600}
              className="inner-image"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
