import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <section id="contact">
      <div className="contact-glow" />
      <div className="contact-inner">
        <div className="section-label" style={{ justifyContent: "center" }}>
          05 — Contact
        </div>
        <div className="contact-big reveal">
          LET&apos;S <span>BUILD</span>
          <br />
          TOGETHER
        </div>
        <p className="contact-sub reveal">
          I&apos;m open to senior engineering roles, design system work, and
          interesting fullstack projects. Drop me a message and let&apos;s talk.
        </p>
        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <button
            type="submit"
            className="form-submit"
            disabled={submitted}
            style={
              submitted
                ? { background: "var(--teal)", color: "var(--bg)" }
                : undefined
            }
          >
            {submitted ? (
              "✓ Message Sent!"
            ) : (
              <>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Send Message
              </>
            )}
          </button>
        </form>
        <div className="contact-links reveal">
          <a href="mailto:anhtuetnmt@gmail.com" className="contact-link">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            anhtuetnmt@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/tue-truong-anh"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            linkedin.com/in/tue-truong-anh
          </a>
          <a href="tel:+840335062007" className="contact-link">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +84 033 506 2007
          </a>
        </div>
      </div>
    </section>
  );
}
