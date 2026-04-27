export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(148,163,184,0.08),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(148,163,184,0.08),transparent_60%)]"
      />
      <div className="container-prose">
        <div className="max-w-3xl animate-fade-up">
          <p className="heading-eyebrow mb-6">Portfolio</p>
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]"
          >
            Zach Holm
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
            Aspiring full-stack engineer and game developer. Self-taught across the web, game engines, and 3D art. This is a small home for the things I build.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 rounded-md bg-neutral-900 dark:bg-white px-4 py-2.5 text-sm font-medium text-white dark:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors"
            >
              View projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-ghost"
            >
              About me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
