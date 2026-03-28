import { Link, useParams } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects.js'

function List({ items }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-slate-900">Project not found</h1>
        <p className="text-sm text-slate-700">The project you requested does not exist.</p>
        <Link className="text-sm font-medium text-slate-900 hover:underline" to="/projects">
          Back to projects
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <Link className="text-sm font-medium text-slate-900 hover:underline" to="/projects">
          ← Back to projects
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">{project.title}</h1>
        <p className="text-sm text-slate-600">{project.subtitle}</p>
        <p className="max-w-3xl text-sm leading-6 text-slate-700">{project.summary}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Key Features</h2>
        <List items={project.features} />
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Technical Highlights</h2>
        <List items={project.highlights} />
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Outcome</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">{project.outcome}</p>
        {project.repoPathHint ? (
          <p className="mt-3 text-xs text-slate-500">Repo folder: {project.repoPathHint}</p>
        ) : null}
      </section>
    </div>
  )
}
