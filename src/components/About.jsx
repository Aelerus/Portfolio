export default function About() {
  return (
    <section id="about" className="section-pad border-t border-neutral-200/70 dark:border-neutral-900/80" aria-labelledby="about-heading">
      <div className="container-prose">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="heading-eyebrow">About</p>
            <h2 id="about-heading" className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
              A bit about me
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <div className="flex items-center gap-5">
              <div
                aria-hidden="true"
                className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-400 dark:text-neutral-600"
                title="Profile photo placeholder"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                </svg>
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-500">
                Profile photo coming soon.
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. I am a self taught builder who is happiest somewhere between writing code, sketching mechanics in a game engine, and modeling things in Blender.
            </p>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Most of what is here is the result of curiosity, plenty of late nights, and a refusal to leave a problem alone until it works.
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-500 italic">
              Bio is placeholder copy. The real one will replace this soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
