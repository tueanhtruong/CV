export default function About() {
  return (
    <section id="about">
      <div className="section-label">01 — About</div>
      <h2 className="section-title reveal">
        THE
        <br />
        <span className="dim">ENGINEER</span>
      </h2>
      <div className="about-grid">
        <div className="about-text reveal-left">
          <p>
            I&apos;m <strong>Truong Anh Tue</strong> — a fullstack engineer with
            a deep focus on{" "}
            <strong>design systems, developer experience,</strong> and building
            the invisible infrastructure that makes product teams move fast.
          </p>
          <p>
            Currently at <strong>One Tech Stop Vietnam</strong>, I architect and
            lead the Megenta Design System — a unified component library
            powering the entire ONE ecosystem. I care obsessively about
            accessibility, tree-shakability, and that 90% test coverage line.
          </p>
          <p>
            Before that, at DataHouse Asia, I led engineering teams, shaped
            codebases from scratch, and shipped the LumiSight platform used by
            businesses across industries.
          </p>
          <div className="about-code">
            <div>
              <span className="code-key">const</span> me = {"{"}
            </div>
            <div>
              &nbsp;&nbsp;<span className="code-key">role</span>:{" "}
              <span className="code-str">&quot;Software Engineer II&quot;</span>
              ,
            </div>
            <div>
              &nbsp;&nbsp;<span className="code-key">location</span>:{" "}
              <span className="code-str">&quot;Da Nang City, VN&quot;</span>,
            </div>
            <div>
              &nbsp;&nbsp;<span className="code-key">focus</span>:{" "}
              <span className="code-str">
                &quot;Design Systems &amp; DX&quot;
              </span>
              ,
            </div>
            <div>
              &nbsp;&nbsp;<span className="code-key">gpa</span>:{" "}
              <span className="code-str">3.61</span>,{" "}
              <span className="code-comment">
                // Da Nang University of Technology • DUT
              </span>
            </div>
            <div>
              &nbsp;&nbsp;<span className="code-key">toeic</span>:{" "}
              <span className="code-str">850</span>
            </div>
            <div>{"}"}</div>
          </div>
        </div>

        <div className="about-right reveal-right">
          <div className="about-portrait">
            <div className="portrait-initials">TAT</div>
            <div className="portrait-corner tl" />
            <div className="portrait-corner br" />
            <div className="portrait-info">
              <div className="portrait-name">Truong Anh Tue</div>
              <div className="portrait-role">Software Engineer II</div>
            </div>
          </div>
          <div className="about-offset-badge">Passion for Technology</div>
        </div>
      </div>
    </section>
  );
}
