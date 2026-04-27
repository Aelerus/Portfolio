import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { getProjectBySlug, projects } from '../data/projects.js'
import ProjectThumb from '../components/ProjectThumb.jsx'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    if (project) {
      document.title = `${project.name} — Zach Holm`
    }
    return () => {
      document.title = 'Zach Holm — Full-Stack Engineer & Game Developer'
    }
  }, [project])

  if (!project) {
    return <Navigate to="/" replace />
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const next = projects[(currentIndex + 1) % projects.length]
  const prev = projects[(currentIndex - 1 + projects.length) % projects.length]

  return (
    <article className="pt-28 pb-24">
      <div className="container-prose">
        <Link
          to="/"
          state={{ scrollTo: 'projects' }}
          className="inline-flex items-center gap-2 text-sm link-quiet"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to projects
        </Link>

        <header className="mt-8 max-w-3xl animate-fade-up">
          <p className="heading-eyebrow">{project.type}</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            {project.name}
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {project.summary}
          </p>
        </header>

        <div className="mt-10 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 aspect-[16/9]">
          <ProjectThumb name={project.name} type={project.type} src={project.thumbnail} />
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-8 space-y-5 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Overview</h2>
            <p>{project.description}</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-500 italic">
              Detailed write up and screenshots are placeholder for now.
            </p>
          </div>

          <aside className="md:col-span-4 space-y-6">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
                Tech
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800/70 rounded px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
                Links
              </h3>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer noopener" className="link-quiet">
                    Live site
                  </a>
                ) : (
                  <span className="text-neutral-500 dark:text-neutral-500">Live: coming soon</span>
                )}
                {project.sourceUrl ? (
                  <a href={project.sourceUrl} target="_blank" rel="noreferrer noopener" className="link-quiet">
                    Source code
                  </a>
                ) : (
                  <span className="text-neutral-500 dark:text-neutral-500">Source: coming soon</span>
                )}
              </div>
            </div>
          </aside>
        </div>

        {projects.length > 1 && (
          <nav className="mt-20 pt-8 border-t border-neutral-200/70 dark:border-neutral-900/80 flex items-center justify-between gap-4" aria-label="Project pagination">
            <Link to={`/projects/${prev.slug}`} className="group flex flex-col items-start gap-1 text-sm">
              <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">Previous</span>
              <span className="link-quiet group-hover:text-neutral-900 dark:group-hover:text-neutral-100">{prev.name}</span>
            </Link>
            <Link to={`/projects/${next.slug}`} className="group flex flex-col items-end gap-1 text-sm text-right">
              <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">Next</span>
              <span className="link-quiet group-hover:text-neutral-900 dark:group-hover:text-neutral-100">{next.name}</span>
            </Link>
          </nav>
        )}
      </div>
    </article>
  )
}
