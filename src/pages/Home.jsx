import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    const target = location.state?.scrollTo
    if (target) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = document.getElementById(target)
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 60)
      })
    }
  }, [location.state])

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  )
}
