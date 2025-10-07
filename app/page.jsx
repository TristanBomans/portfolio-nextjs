'use client';

function getLang() {
  if (typeof window === 'undefined') return 'en';
  const p = new URLSearchParams(window.location.search);
  return (p.get('lang') === 'nl' ? 'nl' : 'en');
}

function monthsSince(start) {
  const now = new Date();
  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  if (now.getDate() < start.getDate()) months -= 1;
  return Math.max(0, months);
}

export default function Page() {
  const lang = getLang();

  const t = {
    nl: {
      title: 'Tristan — Freelance Engineer',
      subtitle: '.NET, Azure Integrations, Next.js — Vlaanderen, België',
      kpi1: '8+ jaar ervaring',
      kpi2: 'Hybrid · Remote',
      kpi3: 'Focus: integraties, webapps',
      aboutTitle: 'Over mij',
      aboutText:
        'Ik leer graag bij en push technologie in projecten. Recent bouwde ik apps in Angular + .NET 9 en Next.js (Cloudflare Pages + Workers). Onlangs overgestapt naar macOS; tools wissel ik vaak, maar momenteel ben ik gesetteld op Zen & Helium, Zed en Rider.',
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
      title: 'Tristan — Freelance Engineer',
      subtitle: '.NET, Azure Integrations, Next.js — Flanders, Belgium',
      kpi1: '8+ years experience',
      kpi2: 'Hybrid · Remote',
      kpi3: 'Focus: integrations, web apps',
      aboutTitle: 'About',
      aboutText:
        'I love learning and pushing technology in projects. Recently built apps with Angular + .NET 9 and Next.js (Cloudflare Pages + Workers). I recently switched to macOS; I rotate tools often but currently settled on Zen & Helium, Zed and Rider.',
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

  return (
    <main className="container">
      <div className="grid grid-2">
        <section className="card">
          <div className="section">
            <h1 className="h1">Tristan <span className="h1-accent">— Freelance Engineer</span></h1>
            <p className="h2">{t.subtitle}</p>
            <div className="kpis">
              <span className="kpi">{t.kpi1}</span>
              <span className="kpi">{t.kpi2}</span>
              <span className="kpi">{t.kpi3}</span>
            </div>
          </div>
          <div className="section">
            <div className="section-title">{t.aboutTitle}</div>
            <p style={{margin:0,color:"var(--muted)"}}>
              {t.aboutText}
            </p>
          </div>
          <div className="section">
            <div className="section-title">{t.links}</div>
            <div className="links">
              <a className="link" href="https://www.linkedin.com/in/tristan-bomans-3b34b5140/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="link" href="https://github.com/TristanBomans" target="_blank" rel="noreferrer">GitHub</a>
              <a className="link" href="mailto:bomanstristan@gmail.com" target="_blank" rel="noreferrer">E‑mail</a>
            </div>
          </div>
        </section>

        <section className="card">
          <div className="section">
            <div className="section-title">{t.availability}</div>
            <div className="item">
              <div>
                <h4>{t.availabilityTitle}</h4>
                <p>{t.availabilityDesc}</p>
              </div>
              <small>{t.stack}</small>
            </div>
          </div>
          <div className="section">
            <div className="section-title">{t.tech}</div>
            <div className="taglist">
              <span className="tag">.NET 8/9</span>
              <span className="tag">C#</span>
              <span className="tag">Azure</span>
              <span className="tag">Azure Integration Services</span>
              <span className="tag">SQL</span>
              <span className="tag">Next.js</span>
              <span className="tag">React</span>
              <span className="tag">Angular</span>
              <span className="tag">Cloudflare</span>
            </div>
          </div>
        </section>
      </div>

      <section className="card" style={{marginTop:16}}>
        <div className="section">
          <div className="section-title">{t.experience}</div>
          <div className="item">
            <div>
              <h4>Puratos — Freelance Azure Integration Developer</h4>
              <p>Dilbeek · {t.hybrid}</p>
            </div>
            <small>{lang === 'nl' ? 'mrt. 2025' : 'Mar 2025'} — {t.present} · {monthsPuratos} {t.monthsSuffix}</small>
          </div>
          <div className="item">
            <div>
              <h4>Fluvius — Freelance .NET Developer</h4>
              <p>Melle · {t.hybrid}</p>
            </div>
            {lang === 'nl' ? (
              <small>jan. 2024 — mrt. 2025 · 1 jr 3 mnd</small>
            ) : (
              <small>Jan 2024 — Mar 2025 · 1 yr 3 mo</small>
            )}
          </div>
          <div className="item">
            <div>
              <h4>Ferm vzw — Freelance .NET Developer</h4>
              <p>Leuven · {t.hybrid}</p>
            </div>
            {lang === 'nl' ? (
              <small>jan. 2022 — dec. 2023 · 2 jr</small>
            ) : (
              <small>Jan 2022 — Dec 2023 · 2 yr</small>
            )}
          </div>
          <div className="item">
            <div>
              <h4>Delen Private Bank — .NET Developer</h4>
              <p>Antwerpen</p>
            </div>
            {lang === 'nl' ? (
              <small>aug. 2020 — jan. 2022 · 1 jr 6 mnd</small>
            ) : (
              <small>Aug 2020 — Jan 2022 · 1 yr 6 mo</small>
            )}
          </div>
          <div className="item">
            <div>
              <h4>Cegeka — Analyst Developer (Deloitte)</h4>
              <p>Zaventem — Tax & Legal</p>
            </div>
            {lang === 'nl' ? (
              <small>feb. 2020 — aug. 2020 · 7 mnd</small>
            ) : (
              <small>Feb 2020 — Aug 2020 · 7 mo</small>
            )}
          </div>
          <div className="item">
            <div>
              <h4>Cegeka — Analyst Developer (AT&T)</h4>
              <p>Vilvoorde — Billing, full‑stack .NET & Angular</p>
            </div>
            {lang === 'nl' ? (
              <small>aug. 2018 — feb. 2020 · 1 jr 7 mnd</small>
            ) : (
              <small>Aug 2018 — Feb 2020 · 1 yr 7 mo</small>
            )}
          </div>
          <div className="item">
            <div>
              <h4>Cegeka — Intern .NET Developer (AT&T)</h4>
              <p>Vilvoorde</p>
            </div>
            {lang === 'nl' ? (
              <small>feb. 2018 — mei 2018 · 4 mnd</small>
            ) : (
              <small>Feb 2018 — May 2018 · 4 mo</small>
            )}
          </div>
        </div>
      </section>

      <section className="card" style={{marginTop:16}}>
        <div className="section">
          <div className="section-title">{t.selectedWork}</div>
          <a className="item" href="https://groepspraktijkmeiselaan.be/" target="_blank" rel="noreferrer">
            <div>
              <h4>Groepspraktijk Meiselaan — Dokterspraktijk website</h4>
              {lang === 'nl' ? (
                <p>Angular + .NET 9 + SQL · Admin voor artsen, contentbeheer</p>
              ) : (
                <p>Angular + .NET 9 + SQL · Admin for doctors, content management</p>
              )}
            </div>
            <small>{t.live}</small>
          </a>
          <a className="item" href="https://physiofocus.be/" target="_blank" rel="noreferrer" style={{marginTop:10}}>
            <div>
              <h4>PhysioFocus — Coaching & kinesitherapie</h4>
              {lang === 'nl' ? (
                <p>Next.js · Cloudflare Pages + Workers · Fase 2: interacties/oefeningen</p>
              ) : (
                <p>Next.js · Cloudflare Pages + Workers · Phase 2: interactions/exercises</p>
              )}
            </div>
            <small>{t.live}</small>
          </a>
        </div>
      </section>

      <div className="footer">© {new Date().getFullYear()} Tristan — {t.rights}</div>
    </main>
  );
}
