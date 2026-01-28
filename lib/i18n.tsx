'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

type Language = 'en' | 'nl'

interface Translations {
  [key: string]: string | Translations
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      tech: 'Tech',
      work: 'Work',
      experience: 'Experience',
      contact: 'Contact',
      availability: 'Open for side projects',
    },
    hero: {
      availability: 'Open for short-term projects',
      subtitle: 'Freelance Engineer',
      description: '.NET, Azure Integrations, Next.js',
      location: 'Flanders, Belgium',
      yearsExperience: 'Years Experience',
      workMode: 'Remote · On-site',
      focus: 'Web Apps · APIs',
      scroll: 'Scroll',
    },
    about: {
      title: 'About',
      intro: "I'm fascinated by the constant learning that IT requires.",
      description1: "I'm passionate about using technology to build effective solutions. During the day, I focus mainly on integration projects with Azure Logic Apps and Service Bus, and I develop Azure Functions in .NET or other languages based on the requirements.",
      description2: 'I love integrating AI models into applications, with experience using Azure OpenAI, Mistral, and various LLM APIs to build intelligent features and automation workflows.',
      cta: "Let's work together",
      connect: 'Connect',
      shortTerm: 'Open for short-term',
      availability: 'Side projects · Evenings · Weekends',
    },
    tech: {
      title: 'Tech Stack',
      subtitle: 'Technologies I Work With',
      description: 'Modern tools and frameworks for building scalable, performant applications',
      filterAll: 'All',
      bottomText: 'Always exploring new technologies and best practices to deliver',
      bottomHighlight: 'reliable, scalable solutions',
    },
    work: {
      title: 'Selected Work',
      subtitle: 'Featured',
      subtitleHighlight: 'Projects',
      description: 'A selection of recent projects showcasing full-stack development, integrations, and modern web applications.',
      viewProject: 'View Project',
      github: 'View more on GitHub',
    },
    experience: {
      title: 'Experience',
      subtitle: 'Career',
      subtitleHighlight: 'Journey',
      description: 'Over 8 years of experience across banking, telecommunications, and public sector projects.',
      types: {
        freelance: 'Freelance',
        permanent: 'Permanent',
        consultant: 'Consultant',
        internship: 'Internship',
      },
      items: {
        puratos: 'Designing and implementing integration solutions using Azure Logic Apps, Service Bus, and Functions.',
        fluvius: 'Full-stack .NET development for energy grid management systems.',
        ferm: 'Developed and maintained .NET applications for home care and family services organization.',
        delen: 'Built secure banking applications and APIs for private banking clients.',
        cegekaDeloitte: 'Developed tax and legal software solutions for Deloitte.',
        cegekaATT: 'Full-stack development for AT&T billing systems.',
        cegekaIntern: 'Internship focused on .NET development within the AT&T team.',
      },
    },
    contact: {
      title: 'Get in Touch',
      subtitle: "Let's",
      subtitleHighlight: 'Work Together',
      description: 'Currently on a long-term mission at Puratos. Open for short-term freelance projects — Azure integrations, .NET APIs, and Next.js frontends.',
      emailCta: 'Send me an email',
      footer: 'Made with',
      footerLocation: 'in Flanders, Belgium',
      backToTop: 'Back to top',
    },
  },
  nl: {
    nav: {
      about: 'Over',
      tech: 'Tech',
      work: 'Werk',
      experience: 'Ervaring',
      contact: 'Contact',
      availability: 'Open voor side projects',
    },
    hero: {
      availability: 'Open voor kortetermijnprojecten',
      subtitle: 'Freelance Engineer',
      description: '.NET, Azure Integrations, Next.js',
      location: 'Vlaanderen, België',
      yearsExperience: 'Jaar Ervaring',
      workMode: 'Remote · On-site',
      focus: 'Web Apps · APIs',
      scroll: 'Scroll',
    },
    about: {
      title: 'Over',
      intro: 'Ik ben gefascineerd door het constante leren dat IT vereist.',
      description1: 'Ik ben gepassioneerd door het gebruik van technologie om effectieve oplossingen te bouwen. Gedurende de dag focus ik me voornamelijk op integratieprojecten met Azure Logic Apps en Service Bus, en ontwikkel ik Azure Functions in .NET of andere talen op basis van de vereisten.',
      description2: 'Ik integreer graag AI-modellen in applicaties, met ervaring in het gebruik van Azure OpenAI, Mistral en verschillende LLM API\'s om intelligente functies en automatiseringworkflows te bouwen.',
      cta: 'Laten we samenwerken',
      connect: 'Connect',
      shortTerm: 'Open voor kortetermijn',
      availability: 'Side projects · Avonden · Weekends',
    },
    tech: {
      title: 'Tech Stack',
      subtitle: 'Technologieën waarmee ik werk',
      description: 'Moderne tools en frameworks voor het bouwen van schaalbare, performante applicaties',
      filterAll: 'Alles',
      bottomText: 'Altijd op zoek naar nieuwe technologieën en best practices om',
      bottomHighlight: 'betrouwbare, schaalbare oplossingen',
      bottomTextEnd: 'te leveren',
    },
    work: {
      title: 'Geselecteerd Werk',
      subtitle: 'Uitgelichte',
      subtitleHighlight: 'Projecten',
      description: 'Een selectie van recente projecten die full-stack development, integraties en moderne webapplicaties tonen.',
      viewProject: 'Bekijk Project',
      github: 'Bekijk meer op GitHub',
    },
    experience: {
      title: 'Ervaring',
      subtitle: 'Carrière',
      subtitleHighlight: 'Pad',
      description: 'Meer dan 8 jaar ervaring in de banksector, telecommunicatie en publieke sector.',
      types: {
        freelance: 'Freelance',
        permanent: 'Vast',
        consultant: 'Consultant',
        internship: 'Stage',
      },
      items: {
        puratos: 'Ontwerpen en implementeren van integratieoplossingen met Azure Logic Apps, Service Bus en Functions.',
        fluvius: 'Full-stack .NET development voor energienetbeheersystemen.',
        ferm: 'Ontwikkelen en onderhouden van .NET applicaties voor een thuiszorg- en gezinsserviceorganisatie.',
        delen: 'Ontwikkelen van beveiligde bankapplicaties en API\'s voor private banking klanten.',
        cegekaDeloitte: 'Ontwikkelen van belasting- en juridische softwareoplossingen voor Deloitte.',
        cegekaATT: 'Full-stack development voor AT&T billingsystemen.',
        cegekaIntern: 'Stage gericht op .NET development binnen het AT&T team.',
      },
    },
    contact: {
      title: 'Neem Contact Op',
      subtitle: 'Laten we',
      subtitleHighlight: 'Samenwerken',
      description: 'Momenteel op een langetermijnopdracht bij Puratos. Open voor kortetermijn freelance projecten — Azure integraties, .NET API\'s en Next.js frontends.',
      emailCta: 'Stuur me een email',
      footer: 'Gemaakt met',
      footerLocation: 'in Vlaanderen, België',
      backToTop: 'Terug naar boven',
    },
  },
}

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  toggleLanguage: () => void
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'nl' : 'en'))
  }, [])

  const t = useCallback(
    (key: string): string => {
      const keys = key.split('.')
      let value: unknown = translations[language]

      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = (value as Record<string, unknown>)[k]
        } else {
          return key
        }
      }

      return typeof value === 'string' ? value : key
    },
    [language]
  )

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
