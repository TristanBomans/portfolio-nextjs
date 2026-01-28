'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Linkedin, Github, Mail, ExternalLink } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

const links = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tristan-bomans-3b34b5140/',
    icon: Linkedin,
    color: 'hover:bg-[#0077b5]/20 hover:border-[#0077b5]/50',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/TristanBomans',
    icon: Github,
    color: 'hover:bg-white/10 hover:border-white/30',
  },
  {
    name: 'Email',
    href: 'mailto:bomanstristan@gmail.com',
    icon: Mail,
    color: 'hover:bg-accent/20 hover:border-accent/50',
  },
]

export default function About() {
  const { t, language } = useI18n()
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative pt-40 pb-32 overflow-hidden"
    >
      <motion.div style={{ opacity }} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
            {t('about.title')}
          </span>
          <div className="h-px w-20 bg-gradient-to-r from-accent to-transparent"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white"
            >
              {language === 'en' ? (
                <>
                  I'm fascinated by the{' '}
                  <span className="gradient-text-accent font-medium">constant learning</span>{' '}
                  that IT requires.
                </>
              ) : (
                <>
                  Ik ben gefascineerd door het{' '}
                  <span className="gradient-text-accent font-medium">constante leren</span>{' '}
                  dat IT vereist.
                </>
              )}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted leading-relaxed"
            >
              {t('about.description1')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted leading-relaxed"
            >
              {t('about.description2')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-8"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group inline-flex items-center gap-3 text-white hover:text-accent transition-colors"
              >
                <span className="text-lg font-medium">{t('about.cta')}</span>
                <span className="w-12 h-12 rounded-full border border-border group-hover:border-accent group-hover:bg-accent/10 flex items-center justify-center transition-all">
                  <ExternalLink size={18} />
                </span>
              </a>
            </motion.div>
          </div>

          <motion.div
            style={{ y }}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:sticky lg:top-32"
          >
            <div className="glass rounded-3xl p-8 space-y-6">
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
                {t('about.connect')}
              </h3>

              <div className="space-y-4">
                {links.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 8 }}
                    className={`group flex items-center justify-between p-4 rounded-xl border border-border ${link.color} transition-all duration-300`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                        <link.icon size={20} />
                      </div>
                      <span className="font-medium">{link.name}</span>
                    </div>
                    <ExternalLink
                      size={16}
                      className="text-muted-foreground group-hover:text-white transition-colors"
                    />
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white">{t('about.shortTerm')}</p>
                    <p className="text-xs text-muted">{t('about.availability')}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
