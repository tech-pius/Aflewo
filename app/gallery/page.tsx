import Image from "next/image";
import { gallery } from "@/data/aflewo";
export default function Gallery() {
  return (
    <main>
      <section className="inner-hero">
        <div className="page-shell">
          <p className="eyebrow">AFLEWO / Moments</p>
          <h1>
            The archive is <em>alive.</em>
          </h1>
          <p className="body-large" style={{ maxWidth: 720 }}>
            A visual gallery for photography now, with a dedicated video gallery
            ready to grow alongside the photo archive.
          </p>
        </div>
      </section>
      <section className="section moments">
        <div className="page-shell">
          <div className="gallery">
            {gallery.concat(gallery).map(([src, label], i) => (
              <div className="gallery-card" key={i}>
                <Image src={src} alt={label} width={1000} height={700} />
                <span>
                  {label} · {i + 1}
                </span>
              </div>
            ))}
          </div>
          <div className="dark-card" style={{ marginTop: 18 }}>
            <p className="section-kicker">Video gallery</p>
            <h3>Watch the story</h3>
            <p>
              Use the floating player on the website to keep a worship video
              open while moving through the archive, or add a larger video
              library here later.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
