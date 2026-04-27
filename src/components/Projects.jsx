import { useMemo, useState } from 'react'
import { projects, projectTypes } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((p) => p.type === filter)
  }, [filter])

  return (
    <section id="projects" className="section-pad border-t border-neutral-200/70 dark:border-neutral-900/80" aria-labelledby="projects-heading">
      <div className="container-prose">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="heading-eyebrow">Projects</p>
            <h2 id="projects-heading" className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
              Selected work
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">
              A growing collection of things I have built across the web, games, and 3D. Click any card for details.
            </p>
          </div>

          <div role="tablist" aria-label="Filter projects by type" className="flex flex-wrap gap-1.5">
            {projectTypes.map((type) => {
              const active = filter === type
              return (
                <button
                  key={type}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(type)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                    active
                      ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900 dark:border-white'
                      : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-400 dark:hover:border-neutral-600'
                  }`}
                >
                  {type}
                </button>
              )
            })}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-12 text-sm text-neutral-500 dark:text-neutral-500">
            No projects in this category yet.
          </p>
        ) : (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
