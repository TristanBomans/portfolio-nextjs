"use client";

import { useState, useEffect } from "react";
import { PDFDownloadButton } from "./components/ResumePDF";

function monthsSince(start) {
  const now = new Date();
  let months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());
  if (now.getDate() < start.getDate()) months -= 1;
  return Math.max(0, months);
}

const translations = {
  nl: {
    title: "Tristan",
    subtitle: "Freelance Engineer",
    role: ".NET, Azure Integrations, Next.js",
    location: "Vlaanderen, België",
    kpi1: "8+ jaar ervaring",
    kpi2: "Hybrid · Remote",
    aboutTitle: "Over mij",
    aboutText:
      "IT fascineert me omdat er altijd iets nieuws te leren valt. Ik haal energie uit het bouwen van doordachte, effectieve oplossingen met technologie.\n\nIn mijn dagelijkse werk focus ik op integratieprojecten met Azure, waarbij ik onder andere werk met Logic Apps, Service Bus en Azure Functions in .NET. Daarnaast experimenteer ik graag met nieuwe technologieën — zo bouw ik momenteel een .NET-applicatie die gebruikmaakt van een taalmodel op Azure.",
    links: "Links",
    availability: "Beschikbaarheid",
    availabilityStatus: "Actief op project",
    availabilityStatusDesc: "Puratos — Azure Integration Developer",
    availabilitySideProjects: "Side projects",
    availabilitySideDesc: "Open voor side projects",
    stack: "React/Next · .NET 8/9 · Azure",
    tech: "Tech",
    experience: "Ervaring",
    present: "heden",
    monthsSuffix: "mnd",
    selectedWork: "Geselecteerd werk",
    live: "Live",
    hybrid: "Hybride",
    rights: "Alle rechten voorbehouden.",
  },
  en: {
    title: "Tristan",
    subtitle: "Freelance Engineer",
    role: ".NET, Azure Integrations, Next.js",
    location: "Flanders, Belgium",
    kpi1: "8+ years experience",
    kpi2: "Hybrid · Remote",
    aboutTitle: "About",
    aboutText:
      "I'm drawn to IT because there's always something new to learn. I enjoy building practical, effective solutions using technology.\n\nIn my day-to-day work, I focus on integration projects in Azure, working with services like Logic Apps, Service Bus, and Azure Functions in .NET. I'm also currently building a .NET application that leverages an Azure-hosted language model.",
    links: "Links",
    availability: "Availability",
    availabilityStatus: "Fully committed",
    availabilityStatusDesc: "Puratos — Azure Integration Developer",
    availabilitySideProjects: "Side projects",
    availabilitySideDesc: "Open for side projects",
    tech: "Tech",
    experience: "Experience",
    present: "present",
    monthsSuffix: "mo",
    selectedWork: "Selected Work",
    live: "Live",
    hybrid: "Hybrid",
    rights: "All rights reserved.",
  },
};

export default function Page() {
  const [lang, setLang] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const p = new URLSearchParams(window.location.search);
    if (p.get("lang") === "nl") setLang("nl");
  }, []);

  const toggleLang = (newLang) => {
    setLang(newLang);
    const url = new URL(window.location);
    url.searchParams.set("lang", newLang);
    window.history.pushState({}, "", url);
  };

  const t = translations[lang];

  const monthsPuratos = monthsSince(new Date(2025, 2, 1)); // March 1, 2025

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <main className="container">
      {/* Language Switcher */}

      <div className="grid grid-2 animate-in">
        <section className="card">
          <div className="section">
            <h1 className="h1">
              {t.title} <span className="h1-accent">— {t.subtitle}</span>
            </h1>
            <p className="h2" style={{ fontSize: "14px", marginTop: "4px" }}>
              {t.location}
            </p>
            <div className="kpis">
              <span className="kpi">{t.kpi1}</span>
              <span className="kpi">{t.kpi2}</span>
            </div>
          </div>
          <div className="section">
            <div className="section-title">{t.aboutTitle}</div>
            {t.aboutText.split('\n\n').map((paragraph, i) => (
              <p key={i} style={{ margin: i === 0 ? 0 : '12px 0 0 0', color: "var(--muted)", lineHeight: "1.6" }}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="section">
            <div className="section-title">{t.links}</div>
            <div className="links">
              <a
                className="link"
                href="https://www.linkedin.com/in/tristan-bomans-3b34b5140/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="link"
                href="https://github.com/TristanBomans"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="link"
                href="mailto:bomanstristan@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                E‑mail
              </a>
              <PDFDownloadButton lang={lang} />
            </div>
          </div>
        </section>

        <div className="grid right-col" style={{ gap: "24px" }}>
          <section className="card">
            <div className="section availability-split">
              {/* Main Assignment */}
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

              {/* Side Projects */}
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
                <span className="tag">Azure</span>{" "}
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
                  className="timeline-item"
                  href="https://groepspraktijkmeiselaan.be/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "block", textDecoration: "none" }}
                >
                  <div className="timeline-dot"></div>
                  <div className="item-header">
                    <h4 className="item-title">Groepspraktijk Meiselaan</h4>
                    <span
                      className="item-meta"
                      style={{
                        color: "var(--accent)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#22c55e",
                          display: "inline-block",
                        }}
                      ></span>
                      {t.live}
                    </span>
                  </div>
                  <p className="item-desc">
                    {lang === "nl"
                      ? "Angular + .NET 9 + SQL · Moderne website met interactieve elementen"
                      : "Angular + .NET 9 + SQL · Modern website with some interactive elements"}
                  </p>
                </a>
                <a
                  className="timeline-item"
                  href="https://physiofocus.be/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "block", textDecoration: "none" }}
                >
                  <div className="timeline-dot"></div>
                  <div className="item-header">
                    <h4 className="item-title">PhysioFocus</h4>
                    <span
                      className="item-meta"
                      style={{
                        color: "var(--accent)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#22c55e",
                          display: "inline-block",
                        }}
                      ></span>
                      {t.live}
                    </span>
                  </div>
                  <p className="item-desc">
                    {lang === "nl"
                      ? "Next.js · Cloudflare · Moderne website met interactieve elementen"
                      : "Next.js · Cloudflare · Modern website with some interactive elements"}
                  </p>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section
        className="card animate-in"
        style={{ marginTop: 24, animationDelay: "0.1s" }}
      >
        <div className="section">
          <div className="section-title">{t.experience}</div>
          <div className="timeline">
            <div className="timeline-item">
              <div
                className="timeline-dot"
                style={{ background: "var(--accent)" }}
              ></div>
              <div className="item-header">
                <h4 className="item-title">
                  Puratos — Freelance Azure Integration Developer
                </h4>
                <span className="item-meta">
                  {lang === "nl" ? "mrt. 2025" : "Mar 2025"} — {t.present}
                </span>
              </div>
              <p className="item-desc">Dilbeek · {t.hybrid}</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="item-header">
                <h4 className="item-title">
                  Fluvius — Freelance .NET Developer
                </h4>
                <span className="item-meta">
                  {lang === "nl"
                    ? "jan. 2024 — mrt. 2025"
                    : "Jan 2024 — Mar 2025"}
                </span>
              </div>
              <p className="item-desc">Melle · {t.hybrid}</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="item-header">
                <h4 className="item-title">
                  Ferm vzw — Freelance .NET Developer
                </h4>
                <span className="item-meta">
                  {lang === "nl"
                    ? "jan. 2022 — dec. 2023"
                    : "Jan 2022 — Dec 2023"}
                </span>
              </div>
              <p className="item-desc">Leuven · {t.hybrid}</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="item-header">
                <h4 className="item-title">
                  Delen Private Bank — .NET Developer
                </h4>
                <span className="item-meta">
                  {lang === "nl"
                    ? "aug. 2020 — jan. 2022"
                    : "Aug 2020 — Jan 2022"}
                </span>
              </div>
              <p className="item-desc">Antwerpen</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="item-header">
                <h4 className="item-title">
                  Cegeka — Analyst Developer (Deloitte)
                </h4>
                <span className="item-meta">
                  {lang === "nl"
                    ? "feb. 2020 — aug. 2020"
                    : "Feb 2020 — Aug 2020"}
                </span>
              </div>
              <p className="item-desc">Zaventem — Tax & Legal</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="item-header">
                <h4 className="item-title">
                  Cegeka — Analyst Developer (AT&T)
                </h4>
                <span className="item-meta">
                  {lang === "nl"
                    ? "aug. 2018 — feb. 2020"
                    : "Aug 2018 — Feb 2020"}
                </span>
              </div>
              <p className="item-desc">
                Vilvoorde — Billing, full‑stack .NET & Angular
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="item-header">
                <h4 className="item-title">
                  Cegeka — Intern .NET Developer (AT&T)
                </h4>
                <span className="item-meta">
                  {lang === "nl"
                    ? "feb. 2018 — mei 2018"
                    : "Feb 2018 — May 2018"}
                </span>
              </div>
              <p className="item-desc">Vilvoorde</p>
            </div>
          </div>
        </div>
      </section>

      <div className="footer">
        © {new Date().getFullYear()} Tristan — {t.rights}
      </div>
    </main>
  );
}
