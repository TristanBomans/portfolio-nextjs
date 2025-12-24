import "./globals.css";
import LanguageSwitcher from "./LanguageSwitcher";

export const metadata = {
  title: "Portfolio — Freelance .NET & Next.js",
  description: "The portfolio of Tristan Bomans, a freelance .NET & Next.js developer.",
  icons: { icon: "/icon.svg" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <header className="topbar">
          <div className="container topbar-inner">
            <div className="brand">
              <div className="logo-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="brand-name">Portfolio</span>
              <span className="badge">Freelance</span>
            </div>
            <nav className="nav-links">
              <a className="nav-link" href="?lang=nl" aria-label="Switch to Dutch">NL</a>
              <a className="nav-link" href="?lang=en" aria-label="Switch to English">EN</a>
            </nav>
          </div>
        </header>
        <LanguageSwitcher />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        {children}
      </body>
    </html>
  );
}
