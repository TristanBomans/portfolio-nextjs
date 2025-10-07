export default function Page() {
  return (
    <main className="container">
      <div className="grid grid-2">
        <section className="card">
          <div className="section">
            <h1 className="h1">Tristan <span className="h1-accent">— Freelance Engineer</span></h1>
            <p className="h2">.NET, Azure Integrations, Next.js — Vlaanderen, België</p>
            <div className="kpis">
              <span className="kpi">8+ jaar ervaring</span>
              <span className="kpi">Hybrid · Remote</span>
              <span className="kpi">Focus: integraties, webapps</span>
            </div>
          </div>
          <div className="section">
            <div className="section-title">Over mij</div>
            <p style={{margin:0,color:"var(--muted)"}}>
              Ik leer graag bij en push technologie in projecten. Recent bouwde ik apps in Angular + .NET 9 en Next.js
              (Cloudflare Pages + Workers). Onlangs overgestapt naar macOS; tools wissel ik vaak, maar momenteel ben ik
              gesetteld op Zen & Helium, Zed en Rider.
            </p>
          </div>
          <div className="section">
            <div className="section-title">Links</div>
            <div className="links">
              <a className="link" href="#" aria-disabled>LinkedIn</a>
              <a className="link" href="#" aria-disabled>GitHub</a>
              <a className="link" href="mailto:your@email" target="_blank" rel="noreferrer">E‑mail</a>
            </div>
          </div>
        </section>

        <section className="card">
          <div className="section">
            <div className="section-title">Beschikbaarheid</div>
            <div className="item">
              <div>
                <h4>Freelance opdrachten</h4>
                <p>Azure integraties, .NET API's, Next.js frontends</p>
              </div>
              <small>React/Next · .NET 8/9 · Azure</small>
            </div>
          </div>
          <div className="section">
            <div className="section-title">Tech</div>
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
          <div className="section-title">Ervaring</div>
          <div className="item">
            <div>
              <h4>Puratos — Freelance Azure Integration Developer</h4>
              <p>Dilbeek · Hybride</p>
            </div>
            <small>mrt. 2025 — heden · 8 mnd</small>
          </div>
          <div className="item">
            <div>
              <h4>Fluvius — Freelance .NET Developer</h4>
              <p>Melle · Hybride</p>
            </div>
            <small>jan. 2024 — mrt. 2025 · 1 jr 3 mnd</small>
          </div>
          <div className="item">
            <div>
              <h4>Ferm vzw — Freelance .NET Developer</h4>
              <p>Leuven · Hybride</p>
            </div>
            <small>jan. 2022 — dec. 2023 · 2 jr</small>
          </div>
          <div className="item">
            <div>
              <h4>Delen Private Bank — .NET Developer</h4>
              <p>Antwerpen</p>
            </div>
            <small>aug. 2020 — jan. 2022 · 1 jr 6 mnd</small>
          </div>
          <div className="item">
            <div>
              <h4>Cegeka — Analyst Developer (Deloitte)</h4>
              <p>Zaventem — Tax & Legal</p>
            </div>
            <small>feb. 2020 — aug. 2020 · 7 mnd</small>
          </div>
          <div className="item">
            <div>
              <h4>Cegeka — Analyst Developer (AT&T)</h4>
              <p>Vilvoorde — Billing, full‑stack .NET & Angular</p>
            </div>
            <small>aug. 2018 — feb. 2020 · 1 jr 7 mnd</small>
          </div>
          <div className="item">
            <div>
              <h4>Cegeka — Intern .NET Developer (AT&T)</h4>
              <p>Vilvoorde</p>
            </div>
            <small>feb. 2018 — mei 2018 · 4 mnd</small>
          </div>
        </div>
      </section>

      <section className="card" style={{marginTop:16}}>
        <div className="section">
          <div className="section-title">Geselecteerd werk</div>
          <a className="item" href="https://groepspraktijkmeiselaan.be/" target="_blank" rel="noreferrer">
            <div>
              <h4>Groepspraktijk Meiselaan — Dokterspraktijk website</h4>
              <p>Angular + .NET 9 + SQL · Admin voor artsen, contentbeheer</p>
            </div>
            <small>Live</small>
          </a>
          <a className="item" href="https://physiofocus.be/" target="_blank" rel="noreferrer" style={{marginTop:10}}>
            <div>
              <h4>PhysioFocus — Coaching & kinesitherapie</h4>
              <p>Next.js · Cloudflare Pages + Workers · Fase 2: interacties/oefeningen</p>
            </div>
            <small>Live</small>
          </a>
        </div>
      </section>

      <div className="footer">© {new Date().getFullYear()} Tristan — Alle rechten voorbehouden.</div>
    </main>
  );
}
