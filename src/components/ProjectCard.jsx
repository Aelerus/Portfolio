import { Link } from 'react-router-dom'
import ProjectThumb from './ProjectThumb.jsx'

export default function ProjectCard({ project }) {
  const { slug, name, type, summary, tech = [], liveUrl, sourceUrl, thumbnail } = project

  const stop = (e) => e.stopPropagation()

  return (
    <Link
      to={`/projects/${slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900/70 transition-colors duration-200"
    >
      <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <ProjectThumb name={name} type={type} src={thumbnail} className="transition-transform duration-500 group-hover:scale-[1.03]" />
      </div>

      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            {name}
          </h3>
          <span className="text-[10px] uppercase tracking-widest text-neutral-500 dark:text-neutral-500 border border-neutral-200 dark:border-neutral-800 rounded px-1.5 py-0.5">
            {type}
          </span>
        </div>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2">
          {summary}
        </p>

        {tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="text-[11px] text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/70 rounded px-1.5 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-2 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-sm text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
            View details
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>

          <div className="flex items-center gap-3" onClick={stop}>
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noreferrer noopener" className="link-quiet text-xs" aria-label={`${name} live link`}>
                Live
              </a>
            )}
            {sourceUrl && (
              <a href={sourceUrl} target="_blank" rel="noreferrer noopener" className="link-quiet text-xs" aria-label={`${name} source code`}>
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
