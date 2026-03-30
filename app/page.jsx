'use client';

import { useState, useEffect } from 'react';

function monthsSince(start) {
  const now = new Date();
  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  if (now.getDate() < start.getDate()) months -= 1;
  return Math.max(0, months);
}

export default function Page() {
  const [lang, setLang] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const p = new URLSearchParams(window.location.search);
    if (p.get('lang') === 'nl') setLang('nl');
  }, []);

  const toggleLang = (newLang) => {
    setLang(newLang);
    const url = new URL(window.location);
    url.searchParams.set('lang', newLang);
    window.history.pushState({}, '', url);
  };

  const t = {
    nl: {
      title: 'Tristan',
      subtitle: 'Freelance Engineer',
      role: '.NET, Azure Integrations, Next.js',
      location: 'Vlaanderen, België',
      kpi1: '8+ jaar ervaring',
      kpi2: 'Hybrid · Remote',
      kpi3: 'Focus: integraties, webapps',
      aboutTitle: 'Over mij',
      aboutText:
        'IT boeit me enorm omdat je constant kan bijleren. Ik ben gepassioneerd door het inzetten van technologie om effectieve oplossingen te bouwen. Overdag focus ik me voornamelijk op integratieprojecten met Azure Logic Apps en Service Bus, en ontwikkel ik Azure Functions in .NET of andere talen naargelang de vereisten. Momenteel bouw ik ook een .NET-applicatie die gebruikmaakt van een op Azure gedeployeerd taalmodel.',
      links: 'Links',
      availability: 'Beschikbaarheid',
      availabilityTitle: 'Freelance opdrachten',
      availabilityDesc: "Azure integraties, .NET API's, Next.js frontends",
      stack: 'React/Next · .NET 8/9 · Azure',
      tech: 'Tech',
      experience: 'Ervaring',
      present: 'heden',
      monthsSuffix: 'mnd',
      selectedWork: 'Geselecteerd werk',
      live: 'Live',
      hybrid: 'Hybride',
      rights: 'Alle rechten voorbehouden.',
    },
    en: {
      title: 'Tristan',
      subtitle: 'Freelance Engineer',
      role: '.NET, Azure Integrations, Next.js',
      location: 'Flanders, Belgium',
      kpi1: '8+ years experience',
      kpi2: 'Hybrid · Remote',
      kpi3: 'Focus: integrations, web apps',
      aboutTitle: 'About',
      aboutText:
        'I\'m fascinated by the constant learning that IT requires. I\'m passionate about using technology to build effective solutions. During the day, I focus mainly on integration projects with Azure Logic Apps and Service Bus, and I develop Azure Functions in .NET or other languages based on the requirements. I am also currently building a .NET application that uses an Azure-deployed language model.',
      links: 'Links',
      availability: 'Availability',
      availabilityTitle: 'Freelance projects',
      availabilityDesc: "Azure integrations, .NET APIs, Next.js frontends",
      stack: 'React/Next · .NET 8/9 · Azure',
      tech: 'Tech',
      experience: 'Experience',
      present: 'present',
      monthsSuffix: 'mo',
      selectedWork: 'Selected Work',
      live: 'Live',
      hybrid: 'Hybrid',
      rights: 'All rights reserved.',
    },
  }[lang];

  const monthsPuratos = monthsSince(new Date(2025, 2, 1)); // March 1, 2025

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <main className="container">
      {/* Language Switcher */}


      <div className="grid grid-2 animate-in">
        <section className="card">
          <div className="section">
            <h1 className="h1">{t.title} <span className="h1-accent">— {t.subtitle}</span></h1>
            <p className="h2">{t.role}</p>
            <p className="h2" style={{ fontSize: '14px', marginTop: '4px' }}>{t.location}</p>
            <div className="kpis">
              <span className="kpi">{t.kpi1}</span>
              <span className="kpi">{t.kpi2}</span>
              <span className="kpi">{t.kpi3}</span>
            </div>
          </div>
          <div className="section">
            <div className="section-title">{t.aboutTitle}</div>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: '1.6' }}>
              {t.aboutText}
            </p>
          </div>
          <div className="section">
            <div className="section-title">{t.links}</div>
            <div className="links">
              <a className="link" href="https://www.linkedin.com/in/tristan-bomans-3b34b5140/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="link" href="https://github.com/TristanBomans" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="link" href="mailto:bomanstristan@gmail.com" target="_blank" rel="noreferrer">
                E‑mail
              </a>
            </div>
          </div>
        </section>

        <div className="grid" style={{ gap: '24px' }}>
          <section className="card">
            <div className="section">
              <div className="section-title">{t.availability}</div>
              <div className="timeline-item" style={{ paddingLeft: '0' }}>
                <div className="item-header">
                  <h4 className="item-title">{t.availabilityTitle}</h4>
                </div>
                <p className="item-desc">{t.availabilityDesc}</p>
                <small style={{ display: 'block', marginTop: '8px', color: 'var(--accent)' }}>{t.stack}</small>
              </div>
            </div>
            <div className="section">
              <div className="section-title">{t.tech}</div>
              <div className="taglist">
                <span className="tag">.NET 8/9</span>
                <span className="tag">C#</span>
                <span className="tag">Azure</span>
                <span className="tag">SQL</span>
                <span className="tag">Next.js</span>
                <span className="tag">React</span>
                <span className="tag">Angular</span>
                <span className="tag">Cloudflare</span>
              </div>
            </div>
          </section>

          <section className="card">
            <div className="section">
              <div className="section-title">{t.selectedWork}</div>
              <div className="timeline">
                <a className="timeline-item" href="https://groepspraktijkmeiselaan.be/" target="_blank" rel="noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
                  <div className="timeline-dot"></div>
                  <div className="item-header">
                    <h4 className="item-title">Groepspraktijk Meiselaan</h4>
                    <span className="item-meta" style={{ color: 'var(--accent)' }}>{t.live}</span>
                  </div>
                  <p className="item-desc">
                    {lang === 'nl' ? 'Angular + .NET 9 + SQL · Moderne website met interactieve elementen' : 'Angular + .NET 9 + SQL · Modern website with some interactive elements'}
                  </p>
                </a>
                <a className="timeline-item" href="https://physiofocus.be/" target="_blank" rel="noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
                  <div className="timeline-dot"></div>
                  <div className="item-header">
                    <h4 className="item-title">PhysioFocus</h4>
                    <span className="item-meta" style={{ color: 'var(--accent)' }}>{t.live}</span>
                  </div>
                  <p className="item-desc">
                    {lang === 'nl' ? 'Next.js · Cloudflare · Moderne website met interactieve elementen' : 'Next.js · Cloudflare · Modern website with some interactive elements'}
                  </p>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="card animate-in" style={{ marginTop: 24, animationDelay: '0.1s' }}>
        <div className="section">
          <div className="section-title">{t.experience}</div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" style={{ background: 'var(--accent)' }}></div>
              <div className="item-header">
                <h4 className="item-title">Puratos — Freelance Azure Integration Developer</h4>
                <span className="item-meta">{lang === 'nl' ? 'mrt. 2025' : 'Mar 2025'} — {t.present}</span>
              </div>
              <p className="item-desc">Dilbeek · {t.hybrid}</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="item-header">
                <h4 className="item-title">Fluvius — Freelance .NET Developer</h4>
                <span className="item-meta">
                  {lang === 'nl' ? 'jan. 2024 — mrt. 2025' : 'Jan 2024 — Mar 2025'}
                </span>
              </div>
              <p className="item-desc">Melle · {t.hybrid}</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="item-header">
                <h4 className="item-title">Ferm vzw — Freelance .NET Developer</h4>
                <span className="item-meta">
                  {lang === 'nl' ? 'jan. 2022 — dec. 2023' : 'Jan 2022 — Dec 2023'}
                </span>
              </div>
              <p className="item-desc">Leuven · {t.hybrid}</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="item-header">
                <h4 className="item-title">Delen Private Bank — .NET Developer</h4>
                <span className="item-meta">
                  {lang === 'nl' ? 'aug. 2020 — jan. 2022' : 'Aug 2020 — Jan 2022'}
                </span>
              </div>
              <p className="item-desc">Antwerpen</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="item-header">
                <h4 className="item-title">Cegeka — Analyst Developer (Deloitte)</h4>
                <span className="item-meta">
                  {lang === 'nl' ? 'feb. 2020 — aug. 2020' : 'Feb 2020 — Aug 2020'}
                </span>
              </div>
              <p className="item-desc">Zaventem — Tax & Legal</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="item-header">
                <h4 className="item-title">Cegeka — Analyst Developer (AT&T)</h4>
                <span className="item-meta">
                  {lang === 'nl' ? 'aug. 2018 — feb. 2020' : 'Aug 2018 — Feb 2020'}
                </span>
              </div>
              <p className="item-desc">Vilvoorde — Billing, full‑stack .NET & Angular</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="item-header">
                <h4 className="item-title">Cegeka — Intern .NET Developer (AT&T)</h4>
                <span className="item-meta">
                  {lang === 'nl' ? 'feb. 2018 — mei 2018' : 'Feb 2018 — May 2018'}
                </span>
              </div>
              <p className="item-desc">Vilvoorde</p>
            </div>
          </div>
        </div>
      </section>

      <div className="footer">© {new Date().getFullYear()} Tristan — {t.rights}</div>
    </main>
  );
}
