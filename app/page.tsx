import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Heart, Handshake, Users, Music } from "lucide-react";
import HeroExperience from "@/components/HeroExperience";
import Reveal from "@/components/Reveal";
import { chapters, gallery, teamRoles, site } from "@/data/aflewo";
import Journey from "@/components/Journey";

export default function Home() {
  return (
    <main>
      <HeroExperience />
      <section id="story" className="story">
        <div className="page-shell story-grid">
          <Reveal>
            <p className="section-kicker"> The story</p>
            <h2>
              A gathering became a <em>journey.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="story-copy">
              AFLEWO  Africa Let’s Worship   is documented on its original
              website as an annual interdenominational all-night worship
              project. The story traces back to Sing Africa alumni and a 2004
              beginning in Nairobi.
            </p>
            <div className="story-quote">
              “Uniting in worship.”<span>AFLEWO vision / mission language</span>
            </div>
          </Reveal>
        </div>
      </section>
      <section id="journey" className="journey-section">
        <div className="page-shell">
          <Reveal>
            <p className="section-kicker"> The journey</p>
            <h2 className="section-title">
              Watch the story <em>move.</em>
            </h2>
            <p className="body-large" style={{ maxWidth: 700 }}>
              This is not a timeline you simply read. Select a chapter and watch
              the visual story change — from Nairobi to the wider network.
            </p>
          </Reveal>
          <div style={{ marginTop: 70 }}>
            <Journey />
          </div>
        </div>
      </section>
      <section id="chapters" className="section chapters">
        <div className="page-shell">
          <Reveal>
            <p className="section-kicker">Chapters</p>
            <h2 className="section-title">
              Different places.
              <br />
              <em>One story.</em>
            </h2>
          </Reveal>
          <div className="chapter-grid">
            {chapters.map(([name, year, desc]) => (
              <div className="chapter" key={name}>
                <span>{year}</span>
                <h3>{name}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link
              href="/chapters"
              className="ghost-button"
              style={{ color: "#111", borderColor: "#777" }}
            >
              Explore chapter archive <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
      <section id="team" className="section people">
        <div className="page-shell people-grid">
          <Reveal>
            <p className="section-kicker">People</p>
            <h2 className="section-title">
              Many hands.
              <br />
              <em>One vision.</em>
            </h2>
            <p className="body-large">
              The original AFLEWO site describes a management structure drawn
              from different churches, with worship, logistics, prayer, church
              relations, events and partnership roles working together.
            </p>
            <div className="role-list">
              {teamRoles.map((r) => (
                <div key={r}>{r}</div>
              ))}
            </div>
            <Link
              href="/team"
              className="gold-button"
              style={{ marginTop: 30 }}
            >
              Meet the team structure <ArrowUpRight size={15} />
            </Link>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="people-image" />
          </Reveal>
        </div>
      </section>
      <section id="moments" className="section moments">
        <div className="page-shell">
          <Reveal>
            <p className="section-kicker">Moments</p>
            <h2 className="section-title">
              Memory, movement, <em>presence.</em>
            </h2>
            <p className="body-large" style={{ maxWidth: 700 }}>
              The gallery becomes a living archive — photography, worship
              scenes, practice, prayer and future video moments in one place.
            </p>
          </Reveal>
          <div className="gallery">
            {gallery.map(([src, label], i) => (
              <Link href="/gallery" className="gallery-card" key={i}>
                <Image src={src} alt={label} width={1000} height={700} />
                <span>{label}</span>
              </Link>
            ))}
          </div>
          <div
            style={{
              marginTop: 30,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Link href="/gallery" className="gold-button">
              Open photo gallery <ArrowUpRight size={15} />
            </Link>
            <Link href="/worship" className="ghost-button">
              Watch worship <Music size={15} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section impact">
        <div className="page-shell">
          <Reveal>
            <p className="section-kicker" style={{ color: "#46350a" }}>
             What it carries
            </p>
            <h2 className="section-title">
              A story with <em>weight.</em>
            </h2>
            <p
              className="body-large"
              style={{ color: "#332808", maxWidth: 760 }}
            >
              Instead of inventing modern impact numbers, the new site keeps
              historical records visible and contextualized — so the story feels
              credible while the current work can be updated by the AFLEWO team.
            </p>
          </Reveal>
          <div className="impact-grid">
            <div className="impact-stat">
              <strong>2004</strong>
              <span>Nairobi beginning</span>
            </div>
            <div className="impact-stat">
              <strong>7+</strong>
              <span>documented historic chapters</span>
            </div>
            <div className="impact-stat">
              <strong>1,000</strong>
              <span>voice choir referenced in the 2013 archive</span>
            </div>
          </div>
          <p className="impact-note">
            Historical figures and chapter details above are drawn from the
            original AFLEWO website and should be treated as archive records,
            not current attendance or impact measurements.
          </p>
        </div>
      </section>
      <section className="section find">
        <div className="page-shell">
          <Reveal>
            <p className="section-kicker">Find your place</p>
            <h2 className="section-title">
              There is more than <em>one way</em> to join.
            </h2>
          </Reveal>
          <div className="path-grid">
            <div className="path">
              <small>
                <Music size={15} /> Worship
              </small>
              <h3>Worship</h3>
              <p>Explore worship media and the music-led experience.</p>
              <Link href="/worship">Enter worship →</Link>
            </div>
            <div className="path">
              <small>
                <Heart size={15} /> Prayer
              </small>
              <h3>Pray</h3>
              <p>
                Reach the prayer support pathway without hunting through the
                site.
              </p>
              <Link href="/prayer">Prayer support →</Link>
            </div>
            <div className="path">
              <small>
                <Users size={15} /> Community
              </small>
              <h3>Serve</h3>
              <p>
                Discover ways to participate, volunteer and connect with the
                wider community.
              </p>
              <Link href="/community">Join community →</Link>
            </div>
            <div className="path">
              <small>
                <Handshake size={15} /> Partnership
              </small>
              <h3>Partner</h3>
              <p>
                See the partnership pathway, what to prepare and how to start
                the conversation.
              </p>
              <Link href="/partnership">Partner with AFLEWO →</Link>
            </div>
          </div>
        </div>
      </section>
      <section id="connect" className="section connect">
        <div className="page-shell connect-grid">
          <Reveal>
            <p className="section-kicker">Connect</p>
            <h2>
              Bring your question.
              <br />
              <em>Start a conversation.</em>
            </h2>
            <p className="body-large" style={{ marginTop: 35 }}>
              The new contact experience is designed around a simple idea: tell
              the team what you need, then choose the right route — message,
              WhatsApp, call or email.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                marginTop: 30,
              }}
            >
              <Link href="/contact" className="gold-button">
                Contact the team <ArrowUpRight size={15} />
              </Link>
              <a href={`mailto:${site.email}`} className="ghost-button">
                Email {site.email}
              </a>
            </div>
          </Reveal>
          <ContactPreview />
        </div>
      </section>
    </main>
  );
}
function ContactPreview() {
  return (
    <form
      className="contact-card"
      action={`mailto:${site.email}`}
      method="post"
      encType="text/plain"
    >
      <label>Name</label>
      <input name="name" placeholder="Your name" required />
      <label>Email</label>
      <input type="email" name="email" placeholder="you@example.com" required />
      <label>What are you reaching out about?</label>
      <select name="topic" defaultValue="general">
        <option value="general">General enquiry</option>
        <option value="worship">Worship</option>
        <option value="prayer">Prayer support</option>
        <option value="partnership">Partnership</option>
        <option value="community">Community / serving</option>
      </select>
      <label>Message</label>
      <textarea
        name="message"
        placeholder="Tell the team what you need..."
        required
      />
      <button className="gold-button" type="submit">
        Send a message <ArrowUpRight size={15} />
      </button>
    </form>
  );
}
