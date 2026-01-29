'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useI18n } from '@/lib/i18n'
import { ArrowDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const { t, language } = useI18n()
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const decorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const subtitle = subtitleRef.current
    const stats = statsRef.current
    const decor = decorRef.current

    if (!section || !title || !subtitle || !stats || !decor) return

    const ctx = gsap.context(() => {
      // Initial entrance animation
      const tl = gsap.timeline({ delay: 0.3 })

      // Title character animation
      const chars = title.querySelectorAll('.char')
      tl.fromTo(
        chars,
        {
          opacity: 0,
          y: 100,
          rotateX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.08,
          ease: 'power4.out',
        }
      )

      // Subtitle
      tl.fromTo(
        subtitle,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )

      // Stats
      tl.fromTo(
        stats.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
        '-=0.4'
      )

      // Decorative elements
      tl.fromTo(
        decor.children,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 1, stagger: 0.1, ease: 'back.out(1.7)' },
        '-=0.6'
      )

      // Scroll-triggered exit animation (pinning)
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 1,
        },
      })

      // Title explodes and rotates on scroll
      scrollTl.to(
        title,
        {
          rotateX: 45,
          z: -200,
          opacity: 0,
          scale: 1.5,
          duration: 1,
        },
        0
      )

      // Subtitle fades and moves up
      scrollTl.to(
        subtitle,
        {
          y: -100,
          opacity: 0,
          duration: 0.8,
        },
        0
      )

      // Stats scatter
      scrollTl.to(
        stats.children,
        {
          y: (i) => (i % 2 === 0 ? -150 : 150),
          x: (i) => (i % 2 === 0 ? -100 : 100),
          opacity: 0,
          rotateZ: (i) => (i % 2 === 0 ? -15 : 15),
          stagger: 0.05,
          duration: 0.8,
        },
        0
      )

      // Decor elements zoom past
      scrollTl.to(
        decor.children,
        {
          z: 500,
          opacity: 0,
          stagger: 0.02,
          duration: 0.6,
        },
        0
      )
    }, section)

    return () => ctx.revert()
  }, [])

  const stats = [
    { value: '8+', label: t('hero.yearsExperience') },
    { value: language === 'en' ? 'Hybrid' : 'Hybride', label: t('hero.workMode') },
    { value: language === 'en' ? 'Integrations' : 'Integraties', label: t('hero.focus') },
  ]

  return (
    <section
      ref={sectionRef}
      className="section-pinned flex items-center justify-center relative overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Floating geometric decorations */}
      <div ref={decorRef} className="absolute inset-0 pointer-events-none">
        {/* Large rotating ring */}
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 border border-[#00f0ff]/20 rounded-full"
          style={{
            animation: 'spin 20s linear infinite',
          }}
        >
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#00f0ff] rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Small squares */}
        <div className="absolute top-1/3 left-[15%] w-8 h-8 border border-[#ff006e]/40 rotate-45 animate-float" />
        <div
          className="absolute bottom-1/3 right-[20%] w-12 h-12 border border-[#ffd700]/30 rotate-12"
          style={{ animation: 'float 8s ease-in-out infinite reverse' }}
        />

        {/* Code-like decorations */}
        <div className="absolute top-[20%] left-[10%] font-mono text-[#00f0ff]/20 text-xs">
          {'<dev />'}
        </div>
        <div className="absolute bottom-[25%] right-[15%] font-mono text-[#ff006e]/20 text-xs">
          {'{ code }'}
        </div>
        <div className="absolute top-[60%] left-[8%] font-mono text-[#ffd700]/20 text-xs">
          'Azure'
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6" style={{ transformStyle: 'preserve-3d' }}>
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/5 mb-6 md:mb-8 max-w-[90vw]">
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]" />
          </span>
          <span className="text-xs md:text-sm font-mono text-[#00f0ff] truncate">{t('hero.availability')}</span>
        </div>

        {/* Main title with 3D effect */}
        <h1
          ref={titleRef}
          className="text-[15vw] md:text-[12vw] font-bold leading-none tracking-tighter mb-6"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {'TRISTAN'.split('').map((char, i) => (
            <span
              key={i}
              className="char inline-block"
              style={{
                color: i % 2 === 0 ? '#ffffff' : '#00f0ff',
                textShadow: i % 2 === 0 ? '0 0 40px rgba(0,240,255,0.3)' : 'none',
              }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl lg:text-3xl text-[#888] font-light mb-4"
        >
          {t('hero.subtitle')}
          <span className="gradient-text font-medium"> — {t('hero.description')}</span>
        </p>

        <p className="text-[#666] font-mono text-sm mb-6 md:mb-12">{t('hero.location')}</p>

        {/* Stats */}
        <div ref={statsRef} className="flex flex-wrap justify-center gap-3 md:gap-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="tech-card px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl min-w-[100px] md:min-w-[140px]"
            >
              <p className="text-xl md:text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-[10px] md:text-xs font-mono text-[#666] uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] md:text-xs font-mono text-[#666] uppercase tracking-widest">{t('hero.scroll')}</span>
        <ArrowDown className="text-[#00f0ff] animate-bounce w-4 h-4 md:w-5 md:h-5" />
      </div>

      {/* Corner decorations - Hidden on mobile, visible on desktop */}
      <div className="hidden md:block absolute top-8 left-8 w-16 h-16 border-l border-t border-[#1a1a1a]" />
      <div className="hidden md:block absolute top-8 right-8 w-16 h-16 border-r border-t border-[#1a1a1a]" />
      <div className="hidden md:block absolute bottom-8 left-8 w-16 h-16 border-l border-b border-[#1a1a1a]" />
      <div className="hidden md:block absolute bottom-8 right-8 w-16 h-16 border-r border-b border-[#1a1a1a]" />

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
