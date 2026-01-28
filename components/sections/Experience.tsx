'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export default function Experience() {
  const { t, language } = useI18n()
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%'])

  const experiences = [
    {
      company: 'Puratos',
      role: 'Freelance Azure Integration Developer',
      period: 'Mar 2025 — present',
      location: language === 'en' ? 'Dilbeek · Hybrid' : 'Dilbeek · Hybride',
      description: t('experience.items.puratos'),
      type: t('experience.types.freelance'),
    },
    {
      company: 'Fluvius',
      role: 'Freelance .NET Developer',
      period: 'Jan 2024 — Mar 2025',
      location: language === 'en' ? 'Melle · Hybrid' : 'Melle · Hybride',
      description: t('experience.items.fluvius'),
      type: t('experience.types.freelance'),
    },
    {
      company: 'Ferm vzw',
      role: 'Freelance .NET Developer',
      period: 'Jan 2022 — Dec 2023',
      location: language === 'en' ? 'Leuven · Hybrid' : 'Leuven · Hybride',
      description: t('experience.items.ferm'),
      type: t('experience.types.freelance'),
    },
    {
      company: 'Delen Private Bank',
      role: '.NET Developer',
      period: 'Aug 2020 — Jan 2022',
      location: language === 'en' ? 'Antwerpen' : 'Antwerpen',
      description: t('experience.items.delen'),
      type: t('experience.types.permanent'),
    },
    {
      company: 'Cegeka',
      role: 'Analyst Developer (Deloitte)',
      period: 'Feb 2020 — Aug 2020',
      location: language === 'en' ? 'Zaventem · Tax & Legal' : 'Zaventem · Tax & Legal',
      description: t('experience.items.cegekaDeloitte'),
      type: t('experience.types.consultant'),
    },
    {
      company: 'Cegeka',
      role: 'Analyst Developer (AT&T)',
      period: 'Aug 2018 — Feb 2020',
      location: language === 'en' ? 'Vilvoorde · Billing, full-stack .NET & Angular' : 'Vilvoorde · Billing, full-stack .NET & Angular',
      description: t('experience.items.cegekaATT'),
      type: t('experience.types.consultant'),
    },
    {
      company: 'Cegeka',
      role: 'Intern .NET Developer (AT&T)',
      period: 'Feb 2018 — May 2018',
      location: language === 'en' ? 'Vilvoorde' : 'Vilvoorde',
      description: t('experience.items.cegekaIntern'),
      type: t('experience.types.internship'),
    },
  ]

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
            {t('experience.title')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('experience.subtitle')}{' '}
            <span className="gradient-text-accent">{t('experience.subtitleHighlight')}</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            {t('experience.description')}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-accent to-transparent"
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 md:text-right">
                  <div
                    className={`p-6 rounded-2xl border transition-all duration-300 ${
                      hoveredIndex === index
                        ? 'border-accent/50 bg-card-hover'
                        : 'border-border bg-card'
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          exp.type === t('experience.types.freelance')
                            ? 'bg-green-500/20 text-green-400'
                            : exp.type === t('experience.types.permanent')
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-purple-500/20 text-purple-400'
                        }`}
                      >
                        {exp.type}
                      </span>
                      <span className="text-xs text-muted">{exp.period}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-accent font-medium mb-2">{exp.role}</p>
                    <p className="text-sm text-muted mb-2">{exp.location}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.5 : 1,
                      backgroundColor:
                        hoveredIndex === index ? '#3b82f6' : '#27272a',
                    }}
                    className="w-full h-full rounded-full border-2 border-background"
                    style={{
                      boxShadow:
                        hoveredIndex === index
                          ? '0 0 20px rgba(59, 130, 246, 0.5)'
                          : 'none',
                    }}
                  />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
