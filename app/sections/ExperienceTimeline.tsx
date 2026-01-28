'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useI18n } from '@/lib/i18n'

gsap.registerPlugin(ScrollTrigger)

export default function ExperienceTimeline() {
  const { t, language } = useI18n()
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const experiences = [
    {
      company: 'Puratos',
      role: 'Freelance Azure Integration Developer',
      period: 'Mar 2025 — present',
      location: language === 'en' ? 'Dilbeek · Hybrid' : 'Dilbeek · Hybride',
      description: t('experience.items.puratos'),
      type: t('experience.types.freelance'),
      typeColor: '#00f0ff',
    },
    {
      company: 'Fluvius',
      role: 'Freelance .NET Developer',
      period: 'Jan 2024 — Mar 2025',
      location: language === 'en' ? 'Melle · Hybrid' : 'Melle · Hybride',
      description: t('experience.items.fluvius'),
      type: t('experience.types.freelance'),
      typeColor: '#00f0ff',
    },
    {
      company: 'Ferm vzw',
      role: 'Freelance .NET Developer',
      period: 'Jan 2022 — Dec 2023',
      location: language === 'en' ? 'Leuven · Hybrid' : 'Leuven · Hybride',
      description: t('experience.items.ferm'),
      type: t('experience.types.freelance'),
      typeColor: '#00f0ff',
    },
    {
      company: 'Delen Private Bank',
      role: '.NET Developer',
      period: 'Aug 2020 — Jan 2022',
      location: 'Antwerpen',
      description: t('experience.items.delen'),
      type: t('experience.types.permanent'),
      typeColor: '#3b82f6',
    },
    {
      company: 'Cegeka',
      role: 'Analyst Developer (Deloitte)',
      period: 'Feb 2020 — Aug 2020',
      location: language === 'en' ? 'Zaventem · Tax & Legal' : 'Zaventem · Tax & Legal',
      description: t('experience.items.cegekaDeloitte'),
      type: t('experience.types.consultant'),
      typeColor: '#8b5cf6',
    },
    {
      company: 'Cegeka',
      role: 'Analyst Developer (AT&T)',
      period: 'Aug 2018 — Feb 2020',
      location: language === 'en' ? 'Vilvoorde · Billing, full-stack .NET & Angular' : 'Vilvoorde · Billing, full-stack .NET & Angular',
      description: t('experience.items.cegekaATT'),
      type: t('experience.types.consultant'),
      typeColor: '#8b5cf6',
    },
    {
      company: 'Cegeka',
      role: 'Intern .NET Developer (AT&T)',
      period: 'Feb 2018 — May 2018',
      location: 'Vilvoorde',
      description: t('experience.items.cegekaIntern'),
      type: t('experience.types.internship'),
      typeColor: '#ffd700',
    },
  ]

  useEffect(() => {
    const section = sectionRef.current
    const timeline = timelineRef.current

    if (!section || !timeline) return

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        section.querySelectorAll('.header-reveal'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Timeline line animation
      const line = timeline.querySelector('.timeline-line')
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: timeline,
              start: 'top 70%',
              end: 'bottom 70%',
              scrub: 1,
            },
          }
        )
      }

      // Experience cards animation
      const cards = timeline.querySelectorAll('.experience-card')
      cards.forEach((card, i) => {
        const isEven = i % 2 === 0

        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: isEven ? -50 : 50,
            rotateY: isEven ? 15 : -15,
          },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // Timeline dots animation
      const dots = timeline.querySelectorAll('.timeline-dot')
      dots.forEach((dot, i) => {
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            delay: i * 0.1,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: dot,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="header-reveal text-xs font-mono text-[#00f0ff] uppercase tracking-[0.3em] block mb-4">
            {t('experience.title')}
          </span>
          <h2 className="header-reveal text-4xl md:text-5xl font-bold mb-6">
            {t('experience.subtitle')}{' '}
            <span className="gradient-text">{t('experience.subtitleHighlight')}</span>
          </h2>
          <p className="header-reveal text-[#666] max-w-2xl mx-auto">
            {t('experience.description')}
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Center line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2">
            <div className="timeline-line absolute inset-0 bg-[#1a1a1a] origin-top" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#00f0ff] via-[#ff006e] to-[#ffd700] opacity-50" />
          </div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0

              return (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className="relative flex flex-col md:flex-row gap-8"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Left side - content for even items, empty for odd */}
                  <div className={`flex-1 md:px-12 ${isEven ? 'md:text-right' : 'hidden md:block'}`}>
                    {isEven && (
                      <div
                        className="experience-card p-6 rounded-2xl border transition-all duration-500"
                        style={{
                          borderColor: activeIndex === index ? `${exp.typeColor}50` : '#1a1a1a',
                          background: activeIndex === index
                            ? `linear-gradient(135deg, ${exp.typeColor}08, transparent)`
                            : 'rgba(10,10,10,0.5)',
                        }}
                      >
                        {/* Type badge */}
                        <div className="flex items-center gap-3 mb-3 md:justify-end">
                          <span
                            className="text-xs font-mono px-2 py-1 rounded-full"
                            style={{
                              background: `${exp.typeColor}20`,
                              color: exp.typeColor,
                            }}
                          >
                            {exp.type}
                          </span>
                          <span className="text-xs font-mono text-[#666]">{exp.period}</span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                        <p className="text-[#00f0ff] font-medium mb-2">{exp.role}</p>
                        <p className="text-sm text-[#666] mb-2">{exp.location}</p>
                        <p className="text-sm text-[#888]">{exp.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 md:top-6 -translate-x-1/2">
                    <div
                      className="timeline-dot w-4 h-4 rounded-full border-2 border-[#050505] transition-all duration-300"
                      style={{
                        background: exp.typeColor,
                        boxShadow: activeIndex === index
                          ? `0 0 20px ${exp.typeColor}`
                          : 'none',
                        transform: activeIndex === index ? 'scale(1.5)' : 'scale(1)',
                      }}
                    />
                  </div>

                  {/* Right side - empty for even, content for odd */}
                  <div className={`flex-1 pl-8 md:pl-0 md:px-12 ${!isEven ? '' : 'hidden md:block'}`}>
                    {!isEven && (
                      <div
                        className="experience-card p-6 rounded-2xl border transition-all duration-500"
                        style={{
                          borderColor: activeIndex === index ? `${exp.typeColor}50` : '#1a1a1a',
                          background: activeIndex === index
                            ? `linear-gradient(135deg, ${exp.typeColor}08, transparent)`
                            : 'rgba(10,10,10,0.5)',
                        }}
                      >
                        {/* Type badge */}
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className="text-xs font-mono px-2 py-1 rounded-full"
                            style={{
                              background: `${exp.typeColor}20`,
                              color: exp.typeColor,
                            }}
                          >
                            {exp.type}
                          </span>
                          <span className="text-xs font-mono text-[#666]">{exp.period}</span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                        <p className="text-[#00f0ff] font-medium mb-2">{exp.role}</p>
                        <p className="text-sm text-[#666] mb-2">{exp.location}</p>
                        <p className="text-sm text-[#888]">{exp.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
