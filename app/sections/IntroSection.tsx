'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useI18n } from '@/lib/i18n'
import { Linkedin, Github, Mail, ExternalLink } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function IntroSection() {
  const { t, language } = useI18n()
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const shapesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const text = textRef.current
    const cards = cardsRef.current
    const shapes = shapesRef.current

    if (!section || !text || !cards || !shapes) return

    const ctx = gsap.context(() => {
      // Text reveal animation
      const textElements = text.querySelectorAll('.reveal-text')
      textElements.forEach((el, i) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 60,
            rotateX: -30,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // Cards stagger animation
      const cardElements = cards.querySelectorAll('.intro-card')
      gsap.fromTo(
        cardElements,
        {
          opacity: 0,
          x: 100,
          rotateY: 45,
        },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cards,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Shapes parallax
      const shapeElements = shapes.querySelectorAll('.shape')
      shapeElements.forEach((shape, i) => {
        gsap.to(shape, {
          y: (i % 2 === 0 ? -100 : 100) * (i + 1) * 0.3,
          rotation: i % 2 === 0 ? 180 : -180,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })

      // Large quote text scale animation
      const quoteText = section.querySelector('.quote-text')
      if (quoteText) {
        gsap.fromTo(
          quoteText,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: quoteText,
              start: 'top 80%',
              end: 'center center',
              scrub: 1,
            },
          }
        )
      }
    }, section)

    return () => ctx.revert()
  }, [])

  const links = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/tristan-bomans-3b34b5140/',
      icon: Linkedin,
      color: '#0077b5',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/TristanBomans',
      icon: Github,
      color: '#ffffff',
    },
    {
      name: 'Email',
      href: 'mailto:bomanstristan@gmail.com',
      icon: Mail,
      color: '#00f0ff',
    },
  ]

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="relative min-h-screen py-32 overflow-hidden"
    >
      {/* Background shapes */}
      <div ref={shapesRef} className="absolute inset-0 pointer-events-none">
        <div className="shape absolute top-20 left-[10%] w-32 h-32 border border-[#00f0ff]/20 rotate-45" />
        <div className="shape absolute top-40 right-[15%] w-24 h-24 bg-[#ff006e]/5 rounded-full" />
        <div className="shape absolute bottom-32 left-[20%] w-16 h-16 border border-[#ffd700]/30 rotate-12" />
        <div className="shape absolute bottom-20 right-[25%] w-40 h-40 border border-[#00f0ff]/10 rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="mb-16">
          <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-[0.3em]">
            {t('about.title')}
          </span>
          <div className="h-px w-24 bg-gradient-to-r from-[#00f0ff] to-transparent mt-4" />
        </div>

        {/* Large quote */}
        <div ref={textRef} className="mb-24" style={{ perspective: '1000px' }}>
          <h2 className="quote-text text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl">
            <span className="reveal-text block text-white">
              {language === 'en' ? (
                <>
                  I'm fascinated by the{' '}
                  <span className="gradient-text">constant learning</span>
                </>
              ) : (
                <>
                  Ik ben gefascineerd door het{' '}
                  <span className="gradient-text">constante leren</span>
                </>
              )}
            </span>
            <span className="reveal-text block text-[#666] mt-2">
              {language === 'en'
                ? 'that IT requires.'
                : 'dat IT vereist.'}
            </span>
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Description */}
          <div ref={textRef} className="space-y-8">
            <p className="reveal-text text-base md:text-lg text-[#888] leading-relaxed break-words">
              {t('about.description1')}
            </p>

            <p className="reveal-text text-base md:text-lg text-[#666] leading-relaxed break-words">
              {t('about.description2')}
            </p>

            <div className="reveal-text pt-8">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary inline-flex items-center gap-3"
              >
                <span>{t('about.cta')}</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Right: Connect cards */}
          <div ref={cardsRef} className="space-y-4" style={{ perspective: '1000px' }}>
            <h3 className="text-sm font-mono text-[#666] uppercase tracking-widest mb-6">
              {t('about.connect')}
            </h3>

            {links.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="intro-card group flex items-center justify-between p-6 rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a]/50 backdrop-blur-sm hover:border-[#00f0ff]/50 transition-all duration-500"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-center gap-3 md:gap-4 min-w-0 flex-1">
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                    style={{ background: `${link.color}15` }}
                  >
                    <link.icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: link.color }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-white group-hover:text-[#00f0ff] transition-colors text-sm md:text-base">
                      {link.name}
                    </p>
                    <p className="text-[10px] md:text-xs font-mono text-[#666] truncate">
                      {link.href.replace('mailto:', '')}
                    </p>
                  </div>
                </div>
                <ExternalLink
                  className="w-4 h-4 md:w-5 md:h-5 text-[#666] group-hover:text-[#00f0ff] transition-colors flex-shrink-0"
                />
              </a>
            ))}

            {/* Availability card */}
            <div className="intro-card p-6 rounded-2xl border border-[#00f0ff]/30 bg-[#00f0ff]/5 mt-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00f0ff]" />
                </span>
                <span className="text-sm font-mono text-[#00f0ff]">
                  {t('about.shortTerm')}
                </span>
              </div>
              <p className="text-sm text-[#888]">{t('about.availability')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
