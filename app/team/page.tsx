import Image from "next/image";
import { teamRoles } from "@/data/aflewo";
export default function Team() {
  return (
    <main>
      <section className="inner-hero">
        <div className="page-shell">
          <p className="eyebrow">AFLEWO / Team</p>
          <h1>
            People behind the <em>vision.</em>
          </h1>
          <p className="body-large" style={{ maxWidth: 720 }}>
            The original website documented an AFLEWO Summit / management
            structure made up of people from different churches and several
            functional offices. Current individual names should be refreshed by
            the organization before publication.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="page-shell people-grid">
          <div>
            <Image
              className="inner-image"
              src="/images/aflewo-choir.jpg"
              alt="AFLEWO choir"
              width={900}
              height={600}
            />
          </div>
          <div>
            <div className="role-list">
              {teamRoles.map((x) => (
                <div key={x}>{x}</div>
              ))}
            </div>
            <p className="body-large" style={{ marginTop: 30 }}>
              This structure is preserved as organizational history; current
              office holders and pastoral advisers can be added once AFLEWO
              confirms the latest list.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
