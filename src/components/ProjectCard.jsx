import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-slate-900">{project.title}</h3>
          <p className="mt-1 text-sm text-slate-600">{project.subtitle}</p>
        </div>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-700">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.slice(0, 6).map((t) => (
          <span
            key={t}
            className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center justify-center rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
        >
          View details
        </Link>
      </div>
    </article>
  )
}
