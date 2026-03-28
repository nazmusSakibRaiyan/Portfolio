import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <div>
      <header className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Projects</h1>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Each project includes a quick overview plus a detail page with features, technical highlights, and outcomes.
        </p>
      </header>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  )
}
