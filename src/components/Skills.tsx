
import React from 'react'

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 rounded-full text-sm glass">{children}</span>
)

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
      <p className="text-neutral-300 mt-3 max-w-2xl">
        Strong across backend engineering and solution consulting with a business-first mindset.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="glass rounded-3xl p-6">
          <h3 className="font-semibold">Engineering</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            <Tag>.NET 6/7/8</Tag>
            <Tag>C#</Tag>
            <Tag>ASP.NET Core</Tag>
            <Tag>Web API</Tag>
            <Tag>Entity Framework</Tag>
            <Tag>SQL Server</Tag>
            <Tag>Azure</Tag>
            <Tag>TypeScript</Tag>
            <Tag>React</Tag>
          </div>
        </div>
        <div className="glass rounded-3xl p-6">
          <h3 className="font-semibold">Consulting</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            <Tag>Requirements</Tag>
            <Tag>Solution Architecture</Tag>
            <Tag>Scalable software development</Tag>
            <Tag>Cost Optimization</Tag>
            <Tag>DevOps</Tag>
            <Tag>Performance</Tag>
          </div>
        </div>
      </div>
    </section>
  )
}
