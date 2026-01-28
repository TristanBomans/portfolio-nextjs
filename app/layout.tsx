import type { Metadata } from 'next'
import './globals.css'
import { I18nProvider } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Tristan — Freelance Engineer',
  description: '.NET, Azure Integrations, Next.js — 8+ years experience building effective solutions',
  keywords: ['Freelance', '.NET', 'Azure', 'Next.js', 'React', 'Integration Developer'],
  authors: [{ name: 'Tristan' }],
  openGraph: {
    title: 'Tristan — Freelance Engineer',
    description: '.NET, Azure Integrations, Next.js — 8+ years experience',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth">
      <body className="antialiased bg-background text-foreground">
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
