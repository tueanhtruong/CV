import { useEffect } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", pct: 92 },
      { name: "TypeScript", pct: 88 },
      { name: "CSS / Panda CSS", pct: 90 },
      { name: "Storybook", pct: 85 },
    ],
  },
  {
    title: "Tooling & Build",
    delay: ".1s",
    skills: [
      { name: "TurboRepo", pct: 80 },
      { name: "Vite / Webpack", pct: 82 },
      { name: "GitHub Actions", pct: 85 },
      { name: "Cypress", pct: 78 },
    ],
  },
  {
    title: "Cloud & DevOps",
    delay: ".2s",
    skills: [
      { name: "GCP", pct: 75 },
      { name: "AWS", pct: 65 },
      { name: "npm / PNPM / Yarn", pct: 90 },
      { name: "Figma API", pct: 72 },
    ],
  },
];

const techPills = [
  "React",
  "Next.js",
  "TypeScript",
  "Panda CSS",
  "Storybook",
  "TurboRepo",
  "tsdown",
  "Vite",
  "Webpack",
  "GitHub Actions",
  "GCP",
  "AWS",
  "Cypress",
  "Figma API",
  "PNPM",
  "HTML5 / CSS3",
];

export default function Skills() {
  useEffect(() => {
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".skill-bar").forEach((bar) => {
              bar.style.width = bar.dataset.width + "%";
            });
          }
        });
      },
      { threshold: 0.3 },
    );
    document
      .querySelectorAll(".skill-cat")
      .forEach((el) => skillObserver.observe(el));
    return () => skillObserver.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="skills-inner">
        <div className="section-label">02 — Skills</div>
        <h2 className="section-title reveal">
          STACK &amp;
          <br />
          <span className="dim">CRAFT</span>
        </h2>
        <div className="skills-categories">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="skill-cat reveal"
              style={cat.delay ? { transitionDelay: cat.delay } : undefined}
            >
              <div className="skill-cat-title">{cat.title}</div>
              {cat.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar-wrap">
                    <div className="skill-bar" data-width={skill.pct} />
                  </div>
                  <span className="skill-pct">{skill.pct}%</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="tech-icons reveal">
          {techPills.map((pill) => (
            <span key={pill} className="tech-pill">
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
