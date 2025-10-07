export const metadata = {
  title: "Portfolio — Freelance .NET & Next.js",
  description: "Minimal one‑page portfolio in a dark OpenAI‑like style",
  icons: { icon: "/icon.svg" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="topbar">
          <div className="container topbar-inner">
            <div className="brand">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="9" stroke="#7c9cff" strokeWidth="2"/>
                <path d="M12 6v6l4 2" stroke="#5eead4" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Portfolio</span>
              <span className="badge">Freelance</span>
            </div>
            <div style={{marginLeft:'auto', display:'flex', gap:8}}>
              <a className="link" href="?lang=nl" aria-label="Switch to Dutch">NL</a>
              <a className="link" href="?lang=en" aria-label="Switch to English">EN</a>
            </div>
          </div>
        </div>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
