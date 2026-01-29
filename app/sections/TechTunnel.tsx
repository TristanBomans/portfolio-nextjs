'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useI18n } from '@/lib/i18n'

gsap.registerPlugin(ScrollTrigger)

const technologies = [
  { name: '.NET 8/9', category: 'Backend', color: '#512BD4', icon: '◈' },
  { name: 'C#', category: 'Language', color: '#239120', icon: '◉' },
  { name: 'Azure', category: 'Cloud', color: '#0089D6', icon: '▲' },
  { name: 'SQL', category: 'Database', color: '#CC2927', icon: '◆' },
  { name: 'Next.js', category: 'Frontend', color: '#ffffff', icon: '◇' },
  { name: 'React', category: 'Frontend', color: '#61DAFB', icon: '◎' },
  { name: 'Angular', category: 'Frontend', color: '#DD0031', icon: '◐' },
  { name: 'Cloudflare', category: 'Infrastructure', color: '#F38020', icon: '◑' },
]

export default function TechTunnel() {
  const { t, language } = useI18n()
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    const container = containerRef.current

    if (!section || !container) return

    const ctx = gsap.context(() => {
      // Check if mobile
      const isMobile = window.innerWidth < 768

      if (!isMobile) {
        // Desktop: horizontal scroll
        const cards = container.querySelectorAll('.tech-card-tunnel')
        const totalWidth = (cards.length - 1) * 400

        const scrollTween = gsap.to(container, {
          x: () => -(totalWidth - window.innerWidth + 200),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${totalWidth}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            onUpdate: (self) => {
              const progress = self.progress
              const newIndex = Math.floor(progress * cards.length)
              setActiveIndex(Math.min(newIndex, cards.length - 1))
            },
          },
        })

        cards.forEach((card) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              scale: 0.8,
              rotateY: 45,
            },
            {
              opacity: 1,
              scale: 1,
              rotateY: 0,
              duration: 0.5,
              scrollTrigger: {
                trigger: card,
                containerAnimation: scrollTween,
                start: 'left 80%',
                end: 'left 20%',
                toggleActions: 'play none none reverse',
              },
            }
          )
        })
      }
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="relative min-h-screen md:min-h-screen overflow-hidden bg-[#050505] py-24 md:py-0"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Header */}
      <div className="px-6 md:px-8 mb-12 md:mb-0 md:absolute md:top-0 md:left-0 md:right-0 md:z-[60] md:pt-24 md:pb-12 md:bg-gradient-to-b md:from-[#050505] md:via-[#050505]/95 md:to-transparent">
        <div className="flex items-start justify-between max-w-7xl mx-auto">
          {/* Section header */}
          <div>
            <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-[0.3em]">
              {t('tech.title')}
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-[#00f0ff] to-transparent mt-4" />
          </div>

          {/* Progress indicator - hidden on mobile (shown inline with cards instead) */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm font-mono text-[#666]">
              {String(activeIndex + 1).padStart(2, '0')} / {String(technologies.length).padStart(2, '0')}
            </span>
            <div className="w-32 h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#00f0ff] transition-all duration-300"
                style={{ width: `${((activeIndex + 1) / technologies.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Main title */}
        <div className="mt-8 md:mt-12 max-w-md">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('tech.subtitle').split(' ').slice(0, -2).join(' ')}{' '}
            <span className="gradient-text">
              {t('tech.subtitle').split(' ').slice(-2).join(' ')}
            </span>
          </h2>
          <p className="text-[#666] text-sm md:text-base">{t('tech.description')}</p>
        </div>
      </div>

      {/* Mobile: Vertical Grid Layout */}
      <div className="md:hidden px-6">
        <div className="grid grid-cols-2 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="relative flex flex-col items-center p-4 rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a]/80 overflow-hidden group"
            >
              {/* Card background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${tech.color}15, transparent 70%)`,
                }}
              />

              {/* Category */}
              <span
                className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full mb-3"
                style={{
                  background: `${tech.color}20`,
                  color: tech.color,
                }}
              >
                {tech.category}
              </span>

              {/* Icon */}
              <div
                className="text-4xl font-bold mb-2 transition-transform duration-500 group-hover:scale-110"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </div>

              {/* Name */}
              <h3 className="text-sm font-bold text-white text-center">{tech.name}</h3>

              {/* Number */}
              <span className="text-[#333] font-mono text-[10px] mt-2">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile bottom text */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#666]">
            {t('tech.bottomText')}{' '}
            <span className="text-white">{t('tech.bottomHighlight')}</span>
            {language === 'nl' && t('tech.bottomTextEnd')}
          </p>
        </div>
      </div>

      {/* Desktop: Horizontal scrolling container */}
      <div
        ref={containerRef}
        className="hidden md:flex absolute top-[65%] left-0 items-center gap-8 pl-8 z-10"
        style={{
          transform: 'translateY(-50%)',
          paddingLeft: '50vw',
        }}
      >
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="tech-card-tunnel relative flex-shrink-0 w-[350px] h-[450px] rounded-3xl border border-[#1a1a1a] bg-[#0a0a0a]/80 backdrop-blur-xl overflow-hidden group"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
          >
            {/* Card background glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${tech.color}15, transparent 70%)`,
              }}
            />

            {/* Card content */}
            <div className="relative h-full p-8 flex flex-col justify-between">
              {/* Top: Category */}
              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full"
                  style={{
                    background: `${tech.color}20`,
                    color: tech.color,
                  }}
                >
                  {tech.category}
                </span>
                <span className="text-[#333] font-mono text-xs">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Middle: Icon and Name */}
              <div className="text-center">
                <div
                  className="text-8xl font-bold mb-4 transition-transform duration-500 group-hover:scale-110"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </div>
                <h3 className="text-3xl font-bold text-white">{tech.name}</h3>
              </div>

              {/* Bottom: Decorative line */}
              <div className="space-y-4">
                <div
                  className="h-px w-full"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${tech.color}50, transparent)`,
                  }}
                />
                <div className="flex items-center justify-between text-xs font-mono text-[#666]">
                  <span>EXP: {['8+', '8+', '5+', '8+', '3+', '5+', '6+', '4+'][index]} yrs</span>
                  <span style={{ color: tech.color }}>●</span>
                </div>
              </div>
            </div>

            {/* Corner decorations */}
            <div
              className="absolute top-0 right-0 w-20 h-20 opacity-20"
              style={{
                background: `linear-gradient(135deg, transparent 50%, ${tech.color} 50%)`,
              }}
            />
          </div>
        ))}

        {/* End spacer */}
        <div className="flex-shrink-0 w-[50vw]" />
      </div>

      {/* Desktop bottom text */}
      <div className="hidden md:flex absolute bottom-8 left-8 right-8 items-center justify-between">
        <p className="text-sm text-[#666] max-w-md">
          {t('tech.bottomText')}{' '}
          <span className="text-white">{t('tech.bottomHighlight')}</span>
          {language === 'nl' && t('tech.bottomTextEnd')}
        </p>
        <div className="flex items-center gap-2 text-[#00f0ff] font-mono text-sm">
          <span>SCROLL</span>
          <span className="animate-pulse">→</span>
        </div>
      </div>
    </section>
  )
}
