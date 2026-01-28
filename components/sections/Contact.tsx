'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowUpRight, Heart } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tristan-bomans-3b34b5140/',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/TristanBomans',
    icon: Github,
  },
  {
    name: 'Email',
    href: 'mailto:bomanstristan@gmail.com',
    icon: Mail,
  },
]

export default function Contact() {
  const { t, language } = useI18n()
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -top-32"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent" />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
            {t('contact.title')}
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('contact.subtitle')}{' '}
            <span className="gradient-text-accent">{t('contact.subtitleHighlight')}</span>
          </h2>

          <p className="text-lg text-muted max-w-xl mx-auto mb-12">
            {t('contact.description')}
          </p>

          <motion.a
            href="mailto:bomanstristan@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 px-8 py-4 bg-accent hover:bg-accent-hover rounded-full text-white font-medium text-lg transition-colors group"
          >
            <Mail size={20} />
            <span>{t('contact.emailCta')}</span>
            <ArrowUpRight
              size={20}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-20"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="w-12 h-12 rounded-full border border-border bg-card hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all"
            >
              <link.icon size={20} className="text-muted hover:text-accent" />
            </motion.a>
          ))}
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-12 border-t border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted flex items-center gap-1">
              © 2026 Tristan — {t('contact.footer')}
              <Heart size={14} className="text-red-500 fill-red-500" />
              {t('contact.footerLocation')}
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="text-sm text-muted hover:text-white transition-colors"
              >
                {t('contact.backToTop')}
              </a>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  )
}
