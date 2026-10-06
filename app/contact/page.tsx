'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react';
import { site } from '@/data/aflewo';

function ContactInner() {
  const params = useSearchParams();
  const topic = params.get('topic') || 'general';
  const mode = params.get('mode');
  const subject = `AFLEWO enquiry — ${topic}`;

  return (
    <>
      <section className="inner-hero">
        <div className="page-shell">
          <p className="eyebrow">AFLEWO / Connect</p>
          <h1>
            Let’s start a <em>conversation.</em>
          </h1>
          <p className="body-large" style={{ maxWidth: 720 }}>
            Choose a route or send a message. The page is intentionally simple
            so prayer, worship, community and partnership enquiries do not get
            lost.
          </p>
          {mode && (
            <p style={{ color: 'var(--gold2)', marginTop: 20 }}>
              You selected {mode}. Choose the direct route below.
            </p>
          )}
        </div>
      </section>

      <section className="section">
        <div className="page-shell connect-grid">
          <div>
            <div className="dark-card">
              <h3>Direct routes</h3>
              <p>Email: {site.email}</p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  marginTop: 20,
                }}
              >
                <a
                  className="ghost-button"
                  href={`mailto:${site.email}?subject=${encodeURIComponent(subject)}`}
                >
                  <Mail size={16} /> Email the team
                </a>

                {site.whatsapp ? (
                  <a className="ghost-button" href={site.whatsapp}>
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                ) : (
                  <span
                    className="ghost-button"
                    style={{ opacity: 0.5, cursor: 'not-allowed' }}
                  >
                    <MessageCircle size={16} /> WhatsApp — add official number
                  </span>
                )}

                {site.phone ? (
                  <a className="ghost-button" href={`tel:${site.phone}`}>
                    <Phone size={16} /> Call the team
                  </a>
                ) : (
                  <span
                    className="ghost-button"
                    style={{ opacity: 0.5, cursor: 'not-allowed' }}
                  >
                    <Phone size={16} /> Call — add official number
                  </span>
                )}
              </div>
            </div>
          </div>

          <form
            className="contact-card"
            action={`mailto:${site.email}`}
            method="post"
            encType="text/plain"
          >
            <input type="hidden" name="subject" value={subject} />

            <label>Topic</label>
            <select name="topic" defaultValue={topic}>
              <option value="general">General enquiry</option>
              <option value="worship">Worship</option>
              <option value="prayer">Prayer support</option>
              <option value="community">Community / serving</option>
              <option value="partnership">Partnership</option>
              <option value="chapter">Chapter enquiry</option>
              <option value="resources">Resources</option>
            </select>

            <label>Name</label>
            <input name="name" required placeholder="Your name" />

            <label>Email</label>
            <input name="email" type="email" required placeholder="you@example.com" />

            <label>Message</label>
            <textarea
              name="message"
              required
              placeholder="Write your message here..."
            />

            <button className="gold-button" type="submit">
              Send message <ArrowUpRight size={15} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default function Contact() {
  return (
    <main>
      <Suspense
        fallback={
          <main>
            <section className="inner-hero">
              <div className="page-shell">
                <h1>Connect.</h1>
              </div>
            </section>
          </main>
        }
      >
        <ContactInner />
      </Suspense>
    </main>
  );
}