'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroSection from './sections/HeroSection'
import IntroSection from './sections/IntroSection'
import TechTunnel from './sections/TechTunnel'
import WorkGallery from './sections/WorkGallery'
import ExperienceTimeline from './sections/ExperienceTimeline'
import ContactPortal from './sections/ContactPortal'
import Navigation from './components/Navigation'
import ScrollProgress from './components/ScrollProgress'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    // Refresh ScrollTrigger after all content loads
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [])

  return (
    <main className="relative bg-[#050505]">
      <ScrollProgress />
      <Navigation />

      {/* Hero - Full screen pinned with 3D text animation */}
      <HeroSection />

      {/* Intro - Morphing shapes and parallax */}
      <IntroSection />

      {/* Tech Stack - Horizontal scroll tunnel */}
      <TechTunnel />

      {/* Work - Gallery with perspective shifts */}
      <WorkGallery />

      {/* Experience - Vertical timeline with pinning */}
      <ExperienceTimeline />

      {/* Contact - Portal effect */}
      <ContactPortal />
    </main>
  )
}
