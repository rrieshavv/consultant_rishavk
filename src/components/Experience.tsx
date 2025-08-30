
import React from 'react'

type Item = {
  title: string
  org: string
  uri: string
  period: string
  bullets: string[]
}

const items: Item[] = [
  {
    title: 'Software Developer',
    org: 'Avinto IT',
    uri: 'https://www.avinto.no/en',
    period: 'Present',
    bullets: [

    ]
   },
  // {
  //   title: 'IT Consultant',
  //   org: 'Various clients',
  //   period: '2024 — Present',
  //   bullets: [

  //   ]
  // },
  // {
  //   title: 'Software Developer',
  //   org: 'Inficare',
  //   period: '2024 — 2025',
  //   bullets: [

  //   ]
  // },
  // {
  //   title: 'Junior .NET Developer',
  //   org: 'OnePoint Financial Services',
  //   period: '2024 — 2024',
  //   bullets: [
  //   ]
  // }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
      <div className="mt-8 grid gap-4">
        {items.map((it, i) => (
          <div key={i} className="glass rounded-3xl p-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="text-xl font-semibold">{it.title} · <a href={it.uri} target='_blank' className="text-brand-300">{it.org}</a></h3>
              <span className="text-neutral-400 text-sm">{it.period}</span>
            </div>
            <ul className="list-disc ml-5 mt-3 text-neutral-300 space-y-2">
              {it.bullets.map((b, j) => (<li key={j}>{b}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
