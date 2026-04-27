const projects = [
  {
    id: "mds",
    thumbLabel: "MDS",
    thumbBg: "linear-gradient(135deg, #1a1a2e 0%, #0e0e16 100%)",
    tag: "Current",
    tagStyle: {},
    thumb: (
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.15,
        }}
        viewBox="0 0 400 200"
      >
        <defs>
          <pattern
            id="g1"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#ffb347"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="400" height="200" fill="url(#g1)" />
      </svg>
    ),
    name: "Magenta Design System",
    desc: "A unified collection of design standards, components, and guidelines powering the entire ONE ecosystem. Architected for consistency, accessibility, and tree-shakable distribution.",
    tags: ["React", "Storybook", "Panda CSS", "TurboRepo", "tsdown"],
    links: ["90% Test Coverage", "Accessibility A11Y", "Aug 2023 – Now"],
    delay: undefined,
  },
  {
    id: "lumisight",
    thumbLabel: "LMI",
    thumbBg: "linear-gradient(135deg, #0d1f1a 0%, #0a0a0f 100%)",
    tag: "PaaS",
    tagStyle: { background: "var(--teal)", color: "#0a0a0f" },
    thumb: (
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.12,
        }}
        viewBox="0 0 400 200"
      >
        <circle
          cx="200"
          cy="100"
          r="80"
          fill="none"
          stroke="#00e5c0"
          strokeWidth="0.5"
        />
        <circle
          cx="200"
          cy="100"
          r="120"
          fill="none"
          stroke="#00e5c0"
          strokeWidth="0.3"
        />
        <circle
          cx="200"
          cy="100"
          r="60"
          fill="none"
          stroke="#00e5c0"
          strokeWidth="0.5"
        />
      </svg>
    ),
    name: "LumiSight Platform",
    desc: "A powerful PaaS solution integrating cloud infrastructure, applications, and security services. Built to help businesses and schools navigate COVID-19 challenges and beyond.",
    tags: ["React", "TypeScript", "AWS", "GCP"],
    links: ["Multi-Industry", "COVID Response", "Dec 2020 – 2023"],
    delay: ".1s",
  },
  {
    id: "cicd",
    thumbLabel: "CI/CD",
    thumbBg: "linear-gradient(135deg, #1a1400 0%, #0e0e16 100%)",
    tag: "DevOps",
    tagStyle: {},
    thumb: (
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.15,
        }}
        viewBox="0 0 400 200"
      >
        <line
          x1="0"
          y1="40"
          x2="400"
          y2="40"
          stroke="#ffb347"
          strokeWidth="0.4"
        />
        <line
          x1="0"
          y1="80"
          x2="400"
          y2="80"
          stroke="#ffb347"
          strokeWidth="0.4"
        />
        <line
          x1="0"
          y1="120"
          x2="400"
          y2="120"
          stroke="#ffb347"
          strokeWidth="0.4"
        />
        <line
          x1="0"
          y1="160"
          x2="400"
          y2="160"
          stroke="#ffb347"
          strokeWidth="0.4"
        />
        <rect
          x="80"
          y="28"
          width="60"
          height="24"
          rx="2"
          fill="rgba(255,179,71,0.12)"
          stroke="#ffb347"
          strokeWidth="0.5"
        />
        <rect
          x="200"
          y="68"
          width="60"
          height="24"
          rx="2"
          fill="rgba(255,179,71,0.08)"
          stroke="#ffb347"
          strokeWidth="0.5"
        />
        <rect
          x="140"
          y="108"
          width="80"
          height="24"
          rx="2"
          fill="rgba(255,179,71,0.1)"
          stroke="#ffb347"
          strokeWidth="0.5"
        />
      </svg>
    ),
    name: "Automated Release Pipeline",
    desc: "Full CI/CD automation using GitHub Actions and GCP for the design system monorepo. Reduced deployment time by 50% with automated versioning, changelog generation, and npm publishing.",
    tags: ["GitHub Actions", "GCP", "TurboRepo"],
    links: ["50% Faster Deploys", "Automated"],
    delay: ".2s",
  },
  {
    id: "planning-poker",
    thumbLabel: "PP",
    thumbBg: "linear-gradient(135deg, #12172b 0%, #071018 100%)",
    tag: "Personal",
    tagStyle: {
      background: "linear-gradient(135deg, #6b7cff 0%, #35d0ff 100%)",
      color: "#071018",
    },
    thumb: (
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.18,
        }}
        viewBox="0 0 400 200"
      >
        <defs>
          <linearGradient id="planningGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6b7cff" />
            <stop offset="100%" stopColor="#35d0ff" />
          </linearGradient>
        </defs>
        <path
          d="M0 40 H400 M0 80 H400 M0 120 H400 M0 160 H400 M80 0 V200 M160 0 V200 M240 0 V200 M320 0 V200"
          fill="none"
          stroke="url(#planningGlow)"
          strokeWidth="0.35"
        />
        <rect
          x="45"
          y="112"
          width="46"
          height="62"
          rx="8"
          transform="rotate(-12 68 143)"
          fill="rgba(107,124,255,0.08)"
          stroke="#6b7cff"
          strokeWidth="0.8"
        />
        <rect
          x="103"
          y="118"
          width="46"
          height="62"
          rx="8"
          transform="rotate(-6 126 149)"
          fill="rgba(107,124,255,0.08)"
          stroke="#6b7cff"
          strokeWidth="0.8"
        />
        <rect
          x="161"
          y="124"
          width="46"
          height="62"
          rx="8"
          fill="rgba(53,208,255,0.08)"
          stroke="#35d0ff"
          strokeWidth="0.8"
        />
        <rect
          x="219"
          y="118"
          width="46"
          height="62"
          rx="8"
          transform="rotate(6 242 149)"
          fill="rgba(53,208,255,0.08)"
          stroke="#35d0ff"
          strokeWidth="0.8"
        />
        <rect
          x="277"
          y="112"
          width="46"
          height="62"
          rx="8"
          transform="rotate(12 300 143)"
          fill="rgba(53,208,255,0.08)"
          stroke="#35d0ff"
          strokeWidth="0.8"
        />
      </svg>
    ),
    name: "Planning Poker",
    desc: "A personal project for Scrum and Agile teams to run smooth, real-time estimation sessions with instant room setup, secret voting, shared reveals, and cross-device support.",
    tags: ["Next.js", "Realtime", "Agile", "Responsive UI"],
    links: [
      "Real-time Multiplayer",
      "Free Forever",
      {
        label: "Open App",
        href: "https://planning-poker.tue-truonga.work/",
      },
    ],
    delay: ".3s",
  },
];

function handleMouseMove(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const dx = (e.clientX - cx) / (rect.width / 2);
  const dy = (e.clientY - cy) / (rect.height / 2);
  e.currentTarget.style.transform = `translateY(-6px) rotateX(${-dy * 4}deg) rotateY(${dx * 4}deg)`;
}

function handleMouseLeave(e) {
  e.currentTarget.style.transform = "";
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label">03 — Projects</div>
      <h2 className="section-title reveal">
        FEATURED
        <br />
        <span className="dim">WORK</span>
      </h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div
            key={p.id}
            className="project-card reveal"
            style={p.delay ? { transitionDelay: p.delay } : undefined}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="project-thumb">
              <div
                className="project-thumb-bg"
                style={{ background: p.thumbBg }}
              >
                {p.thumb}
              </div>
              <div className="project-thumb-label">{p.thumbLabel}</div>
              <span className="project-thumb-tag" style={p.tagStyle}>
                {p.tag}
              </span>
            </div>
            <div className="project-body">
              <div className="project-name">{p.name}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-tags">
                {p.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {p.links.map((link, i) => (
                  <span
                    key={typeof link === "string" ? link : link.href}
                    style={{ display: "contents" }}
                  >
                    {i > 0 && <span className="project-link-divider" />}
                    {typeof link === "string" ? (
                      <span className="project-link">{link}</span>
                    ) : (
                      <a
                        className="project-link project-link-external"
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                        <svg
                          className="project-link-icon"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M10 5H8.2C7.08 5 6.52 5 6.09 5.22A3 3 0 0 0 5.22 6.09C5 6.52 5 7.08 5 8.2V15.8c0 1.12 0 1.68.22 2.11.19.38.49.68.87.87.43.22.99.22 2.11.22h7.6c1.12 0 1.68 0 2.11-.22.38-.19.68-.49.87-.87.22-.43.22-.99.22-2.11V14M20 9V4m0 0h-5m5 0-7 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
