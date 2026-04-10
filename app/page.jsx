"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { pageTranslations } from "./translations";

const PDFDownloadButton = dynamic(
  () => import("./components/ResumePDF").then((m) => m.PDFDownloadButton),
  { ssr: false }
);

function monthsSince(start) {
  const now = new Date();
  let months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());
  if (now.getDate() < start.getDate()) months -= 1;
  return Math.max(0, months);
}

function PageInner() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") === "nl" ? "nl" : "en";
  const [monthsPuratos, setMonthsPuratos] = useState(null);

  useEffect(() => {
    setMonthsPuratos(monthsSince(new Date(2025, 2, 1)));
  }, []);

  const t = pageTranslations[lang];

  return (
    <main className="container" suppressHydrationWarning>
      <div className="grid grid-2 animate-in">
        <section className="card">
          <div className="section">
            <h1 className="h1">
              {t.title} <span className="h1-accent">— {t.subtitle}</span>
            </h1>
            <p className="h2 location-subtitle">{t.location}</p>
            <div className="kpis">
              <span className="kpi">{t.kpi1}</span>
              <span className="kpi">{t.kpi2}</span>
              <span className="kpi">{t.kpi3}</span>
            </div>
          </div>
          <div className="section">
            <div className="section-title">{t.aboutTitle}</div>
            <div className="about-text">
              {t.aboutText.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="section">
            <div className="section-title">{t.links}</div>
            <div className="links">
              <PDFDownloadButton lang={lang} />
              <a
                className="link"
                href="https://www.linkedin.com/in/tristan-bomans-3b34b5140/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                className="link"
                href="https://github.com/TristanBomans"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                className="link"
                href="mailto:bomanstristan@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                E‑mail
              </a>
            </div>
          </div>
        </section>

        <div className="grid right-col">
          <section className="card">
            <div className="section availability-split">
              <div className="availability-block main">
                <div className="availability-indicator red" />
                <div className="availability-content">
                  <div className="availability-label">
                    {t.availabilityStatus}
                  </div>
                  <div className="availability-detail">
                    {t.availabilityStatusDesc}
                  </div>
                </div>
              </div>

              <div className="availability-divider" />

              <div className="availability-block side">
                <div className="availability-indicator green" />
                <div className="availability-content">
                  <div className="availability-label">
                    {t.availabilitySideProjects}
                  </div>
                  <div className="availability-detail">
                    {t.availabilitySideDesc}
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="section-title">{t.tech}</div>
              <div className="taglist">
                <span className="tag">C#</span>
                <span className="tag">Azure</span>
                <span className="tag">React</span>
                <span className="tag">Angular</span>
              </div>
            </div>
          </section>

          <section className="card">
            <div className="section">
              <div className="section-title">{t.selectedWork}</div>
              <div className="timeline">
                <a
                  className="timeline-item timeline-link"
                  href="https://groepspraktijkmeiselaan.be/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="timeline-dot" />
                  <div className="item-header">
                    <h4 className="item-title">Groepspraktijk Meiselaan</h4>
                    <span className="item-meta live-badge">
                      <span className="live-dot" />
                      {t.live}
                    </span>
                  </div>
                  <p className="item-desc">Angular · .NET 9 · SQL</p>
                </a>
                <a
                  className="timeline-item timeline-link"
                  href="https://physiofocus.be/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="timeline-dot" />
                  <div className="item-header">
                    <h4 className="item-title">PhysioFocus</h4>
                    <span className="item-meta live-badge">
                      <span className="live-dot" />
                      {t.live}
                    </span>
                  </div>
                  <p className="item-desc">Next.js · Cloudflare · Resend</p>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="card animate-in experience-section">
        <div className="section">
          <div className="section-title">{t.experience}</div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot accent-dot" />
              <div className="item-header">
                <h4 className="item-title">
                  Puratos — Azure Integration Developer
                </h4>
                <span className="item-meta">
                  {lang === "nl" ? "Mrt 2025" : "Mar 2025"} — {t.present}
                  {monthsPuratos != null && (
                    <>
                      {" "}
                      · {monthsPuratos} {t.monthsSuffix}
                    </>
                  )}
                </span>
              </div>
              <p className="item-desc">
                {t.freelance} · Dilbeek · {t.hybrid}
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="item-header">
                <h4 className="item-title">Fluvius — .NET Developer</h4>
                <span className="item-meta">
                  {lang === "nl"
                    ? "Jan 2024 — Mrt 2025"
                    : "Jan 2024 — Mar 2025"}
                </span>
              </div>
              <p className="item-desc">
                {t.freelance} · Melle · {t.hybrid}
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="item-header">
                <h4 className="item-title">Ferm vzw — .NET Developer</h4>
                <span className="item-meta">
                  {lang === "nl"
                    ? "Jan 2022 — Dec 2023"
                    : "Jan 2022 — Dec 2023"}
                </span>
              </div>
              <p className="item-desc">
                {t.freelance} · Leuven · {t.hybrid}
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="item-header">
                <h4 className="item-title">
                  Delen Private Bank — .NET Developer
                </h4>
                <span className="item-meta">
                  {lang === "nl"
                    ? "Aug 2020 — Jan 2022"
                    : "Aug 2020 — Jan 2022"}
                </span>
              </div>
              <p className="item-desc">
                {t.internal} · Antwerpen · {t.onsite}
              </p>
            </div>

            <div className="timeline-item timeline-item-with-children">
              <div className="timeline-dot" />
              <div className="item-header">
                <h4 className="item-title">Cegeka</h4>
              </div>
              <p className="item-desc">
                {lang === "nl"
                  ? "Contractor bij diverse klanten"
                  : "Contractor at various clients"}
              </p>

              <div className="timeline-children">
                <div className="timeline-child">
                  <div className="child-info">
                    <span className="child-company">Deloitte</span>
                    <p className="child-desc">
                      Analyst Developer · Zaventem · {t.onsite}
                    </p>
                  </div>
                  <span className="child-meta">Feb 2020 — Aug 2020</span>
                </div>

                <div className="timeline-child">
                  <div className="child-info">
                    <span className="child-company">AT&T</span>
                    <p className="child-desc">
                      Analyst Developer · Vilvoorde · {t.onsite}
                    </p>
                  </div>
                  <span className="child-meta">Aug 2018 — Feb 2020</span>
                </div>

                <div className="timeline-child">
                  <div className="child-info">
                    <span className="child-company">AT&T</span>
                    <p className="child-desc">
                      {t.internal} · Analyst Developer · Vilvoorde · {t.onsite}
                    </p>
                  </div>
                  <span className="child-meta">Feb 2018 — May 2018</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer" suppressHydrationWarning>
        © {new Date().getFullYear()} Tristan — {t.rights}
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageInner />
    </Suspense>
  );
}
