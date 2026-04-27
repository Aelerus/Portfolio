function hashString(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

export default function ProjectThumb({ name, type, src, className = '' }) {
  if (src) {
    return (
      <img
        src={src}
        alt={`${name} thumbnail`}
        loading="lazy"
        className={`h-full w-full object-cover ${className}`}
      />
    )
  }

  const seed = hashString(name || 'project')
  const initials = (name || 'P')
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()

  const hue1 = seed % 360
  const hue2 = (seed * 7) % 360
  const bg = `linear-gradient(135deg, hsl(${hue1} 12% 22%) 0%, hsl(${hue2} 12% 14%) 100%)`

  return (
    <div
      role="img"
      aria-label={`${name} placeholder thumbnail`}
      className={`relative h-full w-full flex items-center justify-center text-neutral-300 ${className}`}
      style={{ background: bg }}
    >
      <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 20%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)',
          backgroundSize: '24px 24px, 32px 32px'
        }}
        aria-hidden="true"
      />
      <span className="relative text-3xl font-semibold tracking-wider">{initials}</span>
      <span className="absolute bottom-2 right-2 text-[10px] uppercase tracking-widest opacity-70">
        {type}
      </span>
    </div>
  )
}
