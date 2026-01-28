'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

const technologies = [
  { name: '.NET 8/9', category: 'Backend', color: '#512BD4' },
  { name: 'C#', category: 'Language', color: '#239120' },
  { name: 'Azure', category: 'Cloud', color: '#0089D6' },
  { name: 'SQL', category: 'Database', color: '#CC2927' },
  { name: 'Next.js', category: 'Frontend', color: '#ffffff' },
  { name: 'React', category: 'Frontend', color: '#61DAFB' },
  { name: 'Angular', category: 'Frontend', color: '#DD0031' },
  { name: 'Cloudflare', category: 'Infrastructure', color: '#F38020' },
]

export default function TechStack() {
  const { t, language } = useI18n()
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const categories = language === 'en'
    ? ['All', 'Frontend', 'Backend', 'Cloud', 'Database', 'Infrastructure', 'Language']
    : ['Alles', 'Frontend', 'Backend', 'Cloud', 'Database', 'Infrastructure', 'Language']

  const [activeCategory, setActiveCategory] = useState(categories[0])

  useEffect(() => {
    setActiveCategory(categories[0])
  }, [language, categories])

  const filteredTech = activeCategory === categories[0]
    ? technologies
    : technologies.filter(t => t.category === activeCategory)

  return (
    <section
      id="tech"
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -top-32 -bottom-32"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
            {t('tech.title')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {(t('tech.subtitle') as string).split(' ').slice(0, -2).join(' ')}{' '}
            <span className="gradient-text-accent">
              {(t('tech.subtitle') as string).split(' ').slice(-2).join(' ')}
            </span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            {t('tech.description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-accent text-white'
                  : 'bg-white/5 text-muted hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {filteredTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                layout: { duration: 0.3 }
              }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              className="group relative"
            >
              <div
                className={`relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                  hoveredTech === tech.name
                    ? 'border-white/20 bg-white/10'
                    : 'border-border bg-card hover:border-white/10'
                }`}
                style={{
                  boxShadow: hoveredTech === tech.name
                    ? `0 0 40px ${tech.color}20`
                    : 'none'
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${tech.color}15, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center font-bold text-lg transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${tech.color}20`,
                      color: tech.color,
                      boxShadow: hoveredTech === tech.name
                        ? `0 0 20px ${tech.color}40`
                        : 'none'
                    }}
                  >
                    {tech.name.charAt(0)}
                  </div>

                  <h3 className="font-semibold text-white mb-1">{tech.name}</h3>
                  <p className="text-xs text-muted">{tech.category}</p>
                </div>

                <div
                  className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, transparent 50%, ${tech.color}10 50%)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted max-w-2xl mx-auto">
            {t('tech.bottomText')}{' '}
            <span className="text-white">{t('tech.bottomHighlight')}</span>
            {language === 'nl' && t('tech.bottomTextEnd')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
