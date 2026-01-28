'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useI18n } from '@/lib/i18n'
import { Mail, Linkedin, Github, ArrowUpRight, Heart } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function ContactPortal() {
  const { t } = useI18n()
  const sectionRef = useRef<HTMLElement>(null)
  const portalRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const section = sectionRef.current
    const portal = portalRef.current

    if (!section || !portal) return

    const ctx = gsap.context(() => {
      // Portal entrance animation
      gsap.fromTo(
        portal,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Text reveal
      gsap.fromTo(
        section.querySelectorAll('.reveal-text'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Social icons
      gsap.fromTo(
        section.querySelectorAll('.social-icon'),
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  // Mouse move effect for portal
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height

      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const socialLinks = [
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
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-3xl transition-transform duration-1000"
          style={{
            background: 'radial-gradient(circle, #00f0ff 0%, transparent 70%)',
            left: '10%',
            top: '20%',
            transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl transition-transform duration-1000"
          style={{
            background: 'radial-gradient(circle, #ff006e 0%, transparent 70%)',
            right: '10%',
            bottom: '20%',
            transform: `translate(${-mousePos.x * 40}px, ${-mousePos.y * 40}px)`,
          }}
        />
      </div>

      {/* Portal container */}
      <div
        ref={portalRef}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        style={{
          transform: `perspective(1000px) rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {/* Section label */}
        <span className="reveal-text text-xs font-mono text-[#00f0ff] uppercase tracking-[0.3em] block mb-4">
          {t('contact.title')}
        </span>

        {/* Main heading */}
        <h2 className="reveal-text text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          {t('contact.subtitle')}{' '}
          <span className="gradient-text">{t('contact.subtitleHighlight')}</span>
        </h2>

        {/* Description */}
        <p className="reveal-text text-lg md:text-xl text-[#888] max-w-2xl mx-auto mb-12">
          {t('contact.description')}
        </p>

        {/* CTA Button */}
        <div className="reveal-text mb-16">
          <a
            href="mailto:bomanstristan@gmail.com"
            className="group inline-flex items-center gap-4 px-10 py-5 bg-[#00f0ff] text-[#050505] rounded-full font-mono font-bold text-lg hover:bg-white transition-all duration-300 hover:scale-105"
            style={{
              boxShadow: '0 0 60px rgba(0, 240, 255, 0.4)',
            }}
          >
            <Mail size={24} />
            <span>{t('contact.emailCta')}</span>
            <ArrowUpRight
              size={24}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 mb-20">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon w-14 h-14 rounded-full border border-[#1a1a1a] bg-[#0a0a0a]/50 flex items-center justify-center transition-all duration-300 hover:border-[#00f0ff] hover:bg-[#00f0ff]/10"
              style={{
                boxShadow: `0 0 20px ${link.color}10`,
              }}
            >
              <link.icon size={22} style={{ color: link.color }} />
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="reveal-text pt-12 border-t border-[#1a1a1a]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#666] flex items-center gap-1">
              © 2026 Tristan — {t('contact.footer')}
              <Heart size={14} className="text-[#ff006e] fill-[#ff006e]" />
              {t('contact.footerLocation')}
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm text-[#666] hover:text-[#00f0ff] transition-colors font-mono"
            >
              {t('contact.backToTop')} ↑
            </button>
          </div>
        </footer>
      </div>

      {/* Corner decorations */}
      <div className="absolute bottom-8 left-8 w-24 h-24 border-l border-b border-[#1a1a1a]" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r border-b border-[#1a1a1a]" />
    </section>
  )
}
