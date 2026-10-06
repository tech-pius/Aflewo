"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { journey } from "@/data/aflewo";
import Link from "next/link";
export default function Journey() {
  const [active, setActive] = useState(0);
  const item = journey[active];
  return (
    <div className="journey-wrap">
      <div className="journey-list">
        {journey.map((j, i) => (
          <button
            type="button"
            className={`journey-item ${active === i ? "active" : ""}`}
            key={j.year + j.place}
            onClick={() => setActive(i)}
          >
            <span className="journey-year">
              {j.year} · {j.place}
            </span>
            <h3>{j.title}</h3>
            <p>{j.text}</p>
          </button>
        ))}
        <Link
          href="/chapters"
          className="ghost-button"
          style={{ marginLeft: 38, marginTop: 2 }}
        >
          Open chapter archive <ArrowUpRight size={14} />
        </Link>
      </div>
      <div className="journey-visual">
        {journey.map((j, i) => (
          <div
            key={j.place}
            className={`journey-frame ${active === i ? "active" : ""}`}
            style={{ backgroundImage: `url(${j.image})` }}
          >
            <div className="journey-overlay" />
          </div>
        ))}
        <div className="journey-label">
          <span>
            {item.year} · {item.place}
          </span>
          <strong>{item.title}</strong>
        </div>
      </div>
    </div>
  );
}
