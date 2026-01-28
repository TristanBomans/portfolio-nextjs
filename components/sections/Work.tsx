'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

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

export default function Work() {
  const { t } = useI18n()
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const lineWidth = useTransform(scrollYProgress, [0, 0.3], ['0%', '100%'])

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
            {t('work.title')}
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {(t('work.subtitle') as string)}<br />
              <span className="gradient-text-accent">{t('work.subtitleHighlight')}</span>
            </h2>
            <p className="text-muted max-w-md">
              {t('work.description')}
            </p>
          </div>

          <motion.div
            style={{ width: lineWidth }}
            className="h-px bg-gradient-to-r from-accent to-transparent mt-8"
          />
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div
                  className={`relative p-8 md:p-12 rounded-3xl border transition-all duration-500 ${
                    hoveredProject === index
                      ? 'border-white/20 bg-card-hover'
                      : 'border-border bg-card'
                  }`}
                  style={{
                    boxShadow: hoveredProject === index
                      ? `0 0 60px ${project.color}15`
                      : 'none',
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span
                          className="text-xs font-medium px-3 py-1 rounded-full"
                          style={{
                            background: `${project.color}20`,
                            color: project.color,
                          }}
                        >
                          {project.year}
                        </span>
                        <div className="flex gap-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs text-muted-foreground px-2 py-1 rounded-md bg-white/5 whitespace-nowrap"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-muted max-w-xl">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="hidden md:block text-sm text-muted group-hover:text-white transition-colors">
                        {t('work.viewProject')}
                      </span>
                      <motion.div
                        animate={{
                          scale: hoveredProject === index ? 1.1 : 1,
                          rotate: hoveredProject === index ? 45 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-14 h-14 rounded-full border border-border group-hover:border-accent group-hover:bg-accent/10 flex items-center justify-center transition-all"
                      >
                        <ArrowUpRight
                          size={24}
                          className="text-muted group-hover:text-accent transition-colors"
                        />
                      </motion.div>
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 80% 50%, ${project.color}08, transparent 60%)`,
                    }}
                  />
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/TristanBomans"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border hover:border-accent hover:bg-accent/5 transition-all group"
          >
            <ExternalLink size={18} className="text-muted group-hover:text-accent" />
            <span className="text-muted group-hover:text-white transition-colors">
              {t('work.github')}
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
