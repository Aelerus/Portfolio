import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="pt-32 pb-24">
      <div className="container-prose text-center">
        <p className="heading-eyebrow">404</p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          That page does not exist or has moved.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-ghost">Back to home</Link>
        </div>
      </div>
    </section>
  )
}
