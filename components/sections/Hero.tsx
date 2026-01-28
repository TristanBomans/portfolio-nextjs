'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, ArrowDown } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

export default function Hero() {
  const { t, language } = useI18n()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  }

  const badgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    }),
  }

  const stats = [
    { value: '8+', label: t('hero.yearsExperience') },
    { value: language === 'en' ? 'Hybrid' : 'Hybride', label: t('hero.workMode') },
    { value: language === 'en' ? 'Integrations' : 'Integraties', label: t('hero.focus') },
  ]

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 noise-overlay">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm text-muted">{t('hero.availability')}</span>
        </motion.div>

        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="overflow-hidden mb-6"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
            {'Tristan'.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="inline-block gradient-text-accent"
                style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="overflow-hidden mb-8"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-muted font-light">
            {(t('hero.subtitle') as string).split(' ').map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-muted mb-12"
        >
          <MapPin size={18} />
          <span>{t('hero.location')}</span>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={badgeVariants}
              initial="hidden"
              animate="visible"
              className="text-center px-4 py-3 md:px-6 md:py-4 rounded-2xl glass-light"
            >
              <p className="text-xl md:text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-xs md:text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="flex flex-col items-center gap-2 text-muted hover:text-white transition-colors cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs uppercase tracking-widest">{t('hero.scroll')}</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  )
}
