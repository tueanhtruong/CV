const timeline = [
  {
    date: "Apr 2026 — Present",
    company: "One Tech Stop Vietnam",
    role: "Senior Software Engineer",
    items: [
      <>
        Developed a <strong>Design System MCP</strong> (Model Context Protocol)
        server, enabling AI-assisted component discovery and usage directly
        within developer workflows
      </>,
      <>
        Centralized multiple dispersed packages into a single source-of-truth
        package with shared sub-path exports, reducing dependency overhead and
        improving cross-team consistency
      </>,
      <>
        Contributed to <strong>codemod migration scripts</strong> to automate
        breaking-change migrations across consuming codebases, minimizing manual
        effort
      </>,
      <>
        Modernized the documentation site with improved UX, <strong>SSG</strong>
        , and global full-text search across all documentation pages,
        significantly enhancing developer discoverability and overall experience
      </>,
      <>
        Conducted technical interviews and contributed to hiring decisions for
        engineering candidates
      </>,
    ],
  },
  {
    date: "Aug 2023 — Apr 2026",
    company: "One Tech Stop Vietnam",
    role: "Software Engineer II",
    items: [
      <>
        Led development of the <strong>OTS Design System</strong> — analyzed
        competitors, architected components with full accessibility and 90% unit
        test coverage
      </>,
      <>
        Communicated with client support teams to resolve platform issues,
        achieving a <strong>90% satisfaction rate</strong>
      </>,
      <>
        Optimized monorepo with <strong>TurboRepo + tsdown</strong> to deliver
        tree-shakable, performant packages
      </>,
      <>
        Automated the release pipeline with{" "}
        <strong>GitHub Actions + GCP</strong>, reducing deployment time by 50%
      </>,
    ],
  },
  {
    date: "Jul 2022 — Aug 2023",
    company: "Data House Asia",
    role: "Software Engineer II",
    items: [
      <>
        Led a software engineering team building and shipping web applications —{" "}
        <strong>increased project delivery speed significantly</strong>
      </>,
      <>
        Prepared the initial platform codebase,{" "}
        <strong>cutting new project setup time by 50%</strong>
      </>,
      <>
        Researched and applied emerging technologies, contributing to a{" "}
        <strong>20% increase in user satisfaction</strong>
      </>,
      <>
        Conducted interviews, code reviews, and technical training to{" "}
        <strong>improve team competency</strong>
      </>,
      <>
        Estimated effort and aligned team resources,{" "}
        <strong>increasing productivity by 35%</strong>
      </>,
    ],
  },
  {
    date: "May 2021 — Jul 2022",
    company: "Data House Asia",
    role: "Junior Software Engineer",
    items: [
      <>
        Developed software solutions for the <strong>LumiSight platform</strong>
      </>,
      <>
        Reviewed code and reduced bugs by <strong>15%</strong> through
        systematic feedback processes
      </>,
      <>
        Improved project timelines by <strong>25%</strong> through accurate
        effort estimation
      </>,
      <>
        Mentored and onboarded new interns,{" "}
        <strong>boosting early productivity by 40%</strong>
      </>,
    ],
  },
  {
    date: "Dec 2020 — May 2021",
    company: "Data House Asia",
    role: "Intern Software Engineer",
    items: [
      <>
        Participated in the <strong>Winter Software Engineer Internship</strong>{" "}
        as a Frontend Web Developer
      </>,
      <>
        Built foundational web application experience on the LumiSight platform
      </>,
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="experience-inner">
        <div className="section-label">04 — Experience</div>
        <h2 className="section-title reveal">
          CAREER
          <br />
          <span className="dim">TIMELINE</span>
        </h2>
        <div className="timeline">
          {timeline.map((item) => (
            <div key={item.date} className="timeline-item reveal">
              <div className="timeline-dot" />
              <div className="timeline-meta">
                <span className="timeline-date">{item.date}</span>
                <span className="timeline-company">{item.company}</span>
              </div>
              <div className="timeline-role">{item.role}</div>
              {item.items.length > 0 ? (
                <div className="timeline-body">
                  <ul>
                    {item.items.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
