"use client";
import { useRef, useState, type PointerEvent } from "react";
import { Grip, Minimize2, Play, X } from "lucide-react";
import { site } from "@/data/aflewo";
export default function FloatingVideo() {
  const [open, setOpen] = useState(true);
  const [mini, setMini] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const drag = useRef({ x: 0, y: 0, left: 0, top: 0, on: false });
  const down = (e: PointerEvent) => {
    if (!box.current) return;
    drag.current = {
      x: e.clientX,
      y: e.clientY,
      left: box.current.offsetLeft,
      top: box.current.offsetTop,
      on: true,
    };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const move = (e: PointerEvent) => {
    if (!drag.current.on || !box.current) return;
    box.current.style.left = `${drag.current.left + e.clientX - drag.current.x}px`;
    box.current.style.top = `${drag.current.top + e.clientY - drag.current.y}px`;
    box.current.style.right = "auto";
    box.current.style.bottom = "auto";
  };
  const up = () => {
    drag.current.on = false;
  };
  if (!open)
    return (
      <button className="video-reopen" onClick={() => setOpen(true)}>
        <Play size={14} fill="currentColor" /> Watch
      </button>
    );
  return (
    <div ref={box} className={`floating-video ${mini ? "mini" : ""}`}>
      <div
        className="video-bar"
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
      >
        <span>
          <Grip size={14} /> AFLEWO / WATCH
        </span>
        <div>
          <button onClick={() => setMini((v) => !v)} aria-label="Minimize">
            <Minimize2 size={14} />
          </button>
          <button onClick={() => setOpen(false)} aria-label="Close">
            <X size={14} />
          </button>
        </div>
      </div>
      {mini ? (
        <button className="mini-play" onClick={() => setMini(false)}>
          <Play fill="currentColor" />
        </button>
      ) : (
        <iframe
          src="https://www.youtube.com/embed/DU5ihVDWs0c"
          title="AFLEWO worship video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
