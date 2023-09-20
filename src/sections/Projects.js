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
    name: "Megenta Design System",
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
                  <span key={link} style={{ display: "contents" }}>
                    {i > 0 && <span className="project-link-divider" />}
                    <span className="project-link">{link}</span>
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
