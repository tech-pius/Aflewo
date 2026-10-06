"use client";
import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Play } from "lucide-react";
import { heroSlides } from "@/data/aflewo";

gsap.registerPlugin(ScrollTrigger);

export default function HeroExperience() {
  const root = useRef<HTMLElement>(null);
  const layers = useRef<(HTMLDivElement | null)[]>([]);
  const words = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "+=300%",
          scrub: 1.1,
          pin: true,
          anticipatePin: 1,
        },
      });
      layers.current.forEach((layer, i) => {
        if (!layer || i === 0) return;
        timeline
          .to(
            layers.current[i - 1],
            { opacity: 0, scale: 1.06, duration: 0.8, ease: "none" },
            `slide${i}`,
          )
          .fromTo(
            layer,
            { opacity: 0, scale: 1.02 },
            { opacity: 1, scale: 1, duration: 0.8, ease: "none" },
            `slide${i}`,
          )
          .fromTo(
            words.current[i],
            { y: 35, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45 },
            `slide${i}+=0.1`,
          )
          .to(
            words.current[i - 1],
            { y: -25, opacity: 0, duration: 0.35 },
            `slide${i}`,
          );
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="hero-experience">
      <div className="hero-media">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.title}
            ref={(node) => {
              layers.current[i] = node;
            }}
            className={`hero-layer ${i === 0 ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        <div className="hero-vignette" />
      </div>
      <div className="hero-content page-shell">
        <div className="hero-mark">
          <span>AFLEWO</span>
          <small>Africa Let&apos;s Worship</small>
        </div>
        {heroSlides.map((slide, i) => (
          <div
            key={slide.title}
            ref={(node) => {
              words.current[i] = node;
            }}
            className={`hero-copy ${i === 0 ? "is-active" : ""} ${i >= heroSlides.length - 2 ? "hero-copy-late" : ""}`}
          >
            <p className="eyebrow">{slide.kicker} </p>
            <h1>{slide.title}</h1>
            <p className="hero-copy-text">{slide.copy}</p>
          </div>
        ))}
        <div className="hero-actions">
          <Link href="#story" className="gold-button">
            Enter the story <ArrowDown size={16} />
          </Link>
          <Link href="/worship" className="ghost-button">
            <Play size={15} fill="currentColor" /> Explore worship
          </Link>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll to move through the story</span>
      </div>
      <div className="hero-count">
        <strong>2004</strong>
        <span>to</span>
        <span>2026</span>
      </div>
    </section>
  );
}
