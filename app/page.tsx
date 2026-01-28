import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import TechStack from '@/components/sections/TechStack'
import Work from '@/components/sections/Work'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'
import CursorGlow from '@/components/ui/CursorGlow'
import ScrollProgress from '@/components/ui/ScrollProgress'

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <CursorGlow />
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Work />
      <Experience />
      <Contact />
    </main>
  )
}
