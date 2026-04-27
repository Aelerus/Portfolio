const groups = [
  {
    title: 'Web',
    items: ['JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Game Dev',
    items: ['Unity', 'Godot']
  },
  {
    title: '3D & Art',
    items: ['Blender (Modeling)', 'Blender (Animation)']
  }
]

function SkillBadge({ label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-300">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
      {label}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-neutral-200/70 dark:border-neutral-900/80" aria-labelledby="skills-heading">
      <div className="container-prose">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="heading-eyebrow">Skills</p>
            <h2 id="skills-heading" className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
              Tech and tools
            </h2>
            <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-500">
              All self-taught, picked up as the work demanded it.
            </p>
          </div>
          <div className="md:col-span-8 space-y-10">
            {groups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <SkillBadge key={item} label={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
