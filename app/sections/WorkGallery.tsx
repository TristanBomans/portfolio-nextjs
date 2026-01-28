'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useI18n } from '@/lib/i18n'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Groepspraktijk Meiselaan',
    description: 'Modern healthcare practice website with interactive appointment booking and patient portal features.',
    tech: ['Angular', '.NET 9', 'SQL Server'],
    link: 'https://groepspraktijkmeiselaan.be/',
    color: '#3b82f6',
    year: '2025',
  },
  {
    title: 'PhysioFocus',
    description: 'Modern physiotherapy clinic website with smooth animations and Cloudflare edge deployment.',
    tech: ['Next.js', 'Cloudflare', 'Tailwind'],
    link: 'https://physiofocus.be/',
    color: '#8b5cf6',
    year: '2025',
  },
]

export default function WorkGallery() {
  const { t } = useI18n()
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    const header = headerRef.current

    if (!section || !header) return

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        header.querySelectorAll('.header-reveal'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Project cards with 3D perspective
      const cards = section.querySelectorAll('.project-card')
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            rotateX: 20,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // Parallax background elements
      const shapes = section.querySelectorAll('.parallax-shape')
      shapes.forEach((shape, i) => {
        gsap.to(shape, {
          y: (i % 2 === 0 ? -50 : 50),
          rotation: i % 2 === 0 ? 45 : -45,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="parallax-shape absolute top-20 right-[10%] w-64 h-64 border border-[#00f0ff]/10 rounded-full" />
        <div className="parallax-shape absolute bottom-40 left-[5%] w-32 h-32 bg-[#ff006e]/5 rotate-45" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="mb-20">
          <span className="header-reveal text-xs font-mono text-[#00f0ff] uppercase tracking-[0.3em] block mb-4">
            {t('work.title')}
          </span>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="header-reveal text-4xl md:text-6xl font-bold">
              {t('work.subtitle')}<br />
              <span className="gradient-text">{t('work.subtitleHighlight')}</span>
            </h2>
            <p className="header-reveal text-[#666] max-w-md">
              {t('work.description')}
            </p>
          </div>

          <div className="header-reveal h-px w-full bg-gradient-to-r from-[#00f0ff]/50 via-[#ff006e]/30 to-transparent mt-8" />
        </div>

        {/* Projects */}
        <div className="space-y-8" style={{ transformStyle: 'preserve-3d' }}>
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card block group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className={`relative p-8 md:p-12 rounded-3xl border transition-all duration-700 overflow-hidden ${
                  hoveredIndex === index
                    ? 'border-white/20'
                    : 'border-[#1a1a1a]'
                }`}
                style={{
                  background: hoveredIndex === index
                    ? `linear-gradient(135deg, rgba(10,10,10,0.95), rgba(10,10,10,0.8))`
                    : 'rgba(10,10,10,0.5)',
                  boxShadow: hoveredIndex === index
                    ? `0 0 80px ${project.color}20`
                    : 'none',
                  transform: hoveredIndex === index
                    ? 'rotateX(-5deg) translateZ(20px)'
                    : 'rotateX(0) translateZ(0)',
                }}
              >
                {/* Background glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 70% 50%, ${project.color}10, transparent 60%)`,
                  }}
                />

                <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Left content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className="text-xs font-mono px-3 py-1 rounded-full"
                        style={{
                          background: `${project.color}20`,
                          color: project.color,
                        }}
                      >
                        {project.year}
                      </span>
                      <div className="flex gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono text-[#666] px-2 py-1 rounded bg-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-[#00f0ff] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-[#888] max-w-xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Right: Action */}
                  <div className="flex items-center gap-4">
                    <span className="hidden md:block text-sm font-mono text-[#666] group-hover:text-white transition-colors">
                      {t('work.viewProject')}
                    </span>
                    <div
                      className="w-16 h-16 rounded-full border flex items-center justify-center transition-all duration-500"
                      style={{
                        borderColor: hoveredIndex === index ? project.color : '#1a1a1a',
                        background: hoveredIndex === index ? `${project.color}10` : 'transparent',
                        transform: hoveredIndex === index ? 'rotate(45deg) scale(1.1)' : 'rotate(0) scale(1)',
                      }}
                    >
                      <ArrowUpRight
                        size={24}
                        style={{ color: hoveredIndex === index ? project.color : '#666' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom line animation */}
                <div
                  className="absolute bottom-0 left-0 h-1 transition-all duration-700"
                  style={{
                    width: hoveredIndex === index ? '100%' : '0%',
                    background: `linear-gradient(90deg, ${project.color}, transparent)`,
                  }}
                />
              </div>
            </a>
          ))}
        </div>

        {/* GitHub link */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/TristanBomans"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#1a1a1a] hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/5 transition-all group"
          >
            <ExternalLink size={18} className="text-[#666] group-hover:text-[#00f0ff]" />
            <span className="font-mono text-sm text-[#888] group-hover:text-white transition-colors">
              {t('work.github')}
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
