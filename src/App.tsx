
import React from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="font-body">
      <header className="sticky top-0 z-50 bg-neutral-950/70 backdrop-blur border-b border-white/5">
        <nav className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <a href="#home" className="font-bold tracking-tight">RK</a>
          <div className="flex gap-5 text-sm">
            <a href="#skills" className="hover:text-brand-300">Skills</a>
            <a href="#experience" className="hover:text-brand-300">Experience</a>
            <a href="#contact" className="hover:text-brand-300">Contact</a>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto">
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}
