
import React from 'react'
import { motion } from 'framer-motion'
import Scene from './Scene'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] grid lg:grid-cols-2 items-center gap-8">
      <div className="absolute inset-0 -z-10 opacity-30">
        <Scene />
      </div>

      <div className="relative z-10 p-6 md:p-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Rishav Karna
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-3 text-xl md:text-2xl text-neutral-300"
        >
          Software Developer (.NET, C#, SQL) & Technical IT Consultant
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 text-neutral-300 max-w-xl"
        >
          I build reliable backend services, data-driven systems, and pragmatic solutions for teams.
          Based in Nepal, delivering globally.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#contact" className="px-5 py-3 rounded-2xl bg-brand-500 hover:bg-brand-400 transition shadow-lg shadow-brand-900/30">
            Contact Me
          </a>
          {/* <a href="#" className="px-5 py-3 rounded-2xl glass">
            Download CV
          </a> */}
          <a href="https://www.linkedin.com/in/rishavkarna" target="_blank" className="px-5 py-3 rounded-2xl glass">LinkedIn</a>
          <a href="https://github.com/rrieshavv" target="_blank" className="px-5 py-3 rounded-2xl glass">GitHub</a>
        </motion.div>
      </div>

      <div className="relative z-10 p-6 md:p-10">
        <div className="glass rounded-3xl p-6 md:p-8">
          <h3 className="text-lg font-semibold mb-4">Core Tech</h3>
          <ul className="grid grid-cols-2 gap-3 text-neutral-300">
            <li>.NET</li>
            <li>C#</li>
            <li>SQL Server</li>
            <li>Entity Framework</li>
            <li>REST APIs</li>
            <li>Azure</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="glass rounded-3xl p-5">
            <h4 className="font-semibold">Consulting</h4>
            <p className="text-neutral-400 text-sm mt-2">
              Rapid scalable software development, performance tuning, and team enablement.
            </p>
          </div>
          <div className="glass rounded-3xl p-5">
            <h4 className="font-semibold">Focus</h4>
            <p className="text-neutral-400 text-sm mt-2">
              Clean design, secure data, and measurable outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
