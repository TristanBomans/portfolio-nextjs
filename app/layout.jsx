import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});
import { LanguageSwitcher } from "./components/LanguageSwitcher";

export const metadata = {
  title: "Tristan Bomans · Freelance Azure Integration & .NET Developer",
  description:
    "Portfolio of Tristan Bomans, a freelance software engineer specialised in Azure integration (Logic Apps, Service Bus, Functions) and .NET.",
  icons: { icon: "/icon.svg" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <body>
        <header className="topbar">
          <div className="container topbar-inner">
            <div className="brand">
              <span className="monogram" aria-hidden="true">TB</span>
              <span className="brand-name">Tristan Bomans</span>
              <span className="badge">Freelance</span>
            </div>
            <LanguageSwitcher />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
