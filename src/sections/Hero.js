import { useEffect, useRef, useState } from "react";
import ParticlesCanvas from "../components/ParticlesCanvas";

const phrases = [
  "design systems.",
  "component libraries.",
  "developer tools.",
  "scalable platforms.",
  "great UX.",
];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const phraseIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  // Typewriter
  useEffect(() => {
    let timer;
    function typewriter() {
      const current = phrases[phraseIdx.current];
      if (!deleting.current) {
        setTyped(current.substring(0, charIdx.current + 1));
        charIdx.current++;
        if (charIdx.current === current.length) {
          deleting.current = true;
          timer = setTimeout(typewriter, 1800);
          return;
        }
      } else {
        setTyped(current.substring(0, charIdx.current - 1));
        charIdx.current--;
        if (charIdx.current === 0) {
          deleting.current = false;
          phraseIdx.current = (phraseIdx.current + 1) % phrases.length;
        }
      }
      timer = setTimeout(typewriter, deleting.current ? 45 : 80);
    }
    timer = setTimeout(typewriter, 2200);
    return () => clearTimeout(timer);
  }, []);

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const heroBg = document.querySelector(".hero-bg");
      if (heroBg) heroBg.style.transform = `translateY(${y * 0.3}px)`;
      const gridLines = document.querySelector(".hero-grid-lines");
      if (gridLines) gridLines.style.transform = `translateY(${y * 0.15}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-grid-lines" />
      <ParticlesCanvas />

      <div className="hero-content">
        <div className="hero-tag">Available for opportunities</div>
        <h1 className="hero-title">
          <span className="outline">TRUONG</span>
          <br />
          ANH <span className="accent">TUE</span>
        </h1>
        <p className="hero-sub">
          Fullstack Engineer crafting{" "}
          <span className="typewriter">{typed}</span>
          <br />
          Based in Vietnam · 5+ years building at scale
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            Let&apos;s Talk
          </a>
        </div>
      </div>

      <div className="hero-stat-row">
        <div className="hero-stat">
          <div className="hero-stat-num">5+</div>
          <div className="hero-stat-label">Years Exp.</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">90%</div>
          <div className="hero-stat-label">Test Coverage</div>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="scroll-label">Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
