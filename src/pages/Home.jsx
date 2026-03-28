import { Link } from 'react-router-dom'
import { profile } from '../data/profile.js'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'

export default function Home() {
  return (
    <div className="space-y-14">
      <section className="rounded-2xl border border-slate-200 bg-white p-8">
        <p className="text-sm font-medium text-slate-600">Hi, I'm</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-base font-medium text-slate-700">{profile.headline}</p>

        <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-700">
          {profile.heroIntro}
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">{profile.focus}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            View projects
          </Link>
          <Link
            to="/case-study"
            className="inline-flex items-center justify-center rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            Read case study
          </Link>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2" id="about">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">About</h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Skills</h2>
          <div className="mt-4 space-y-4">
            {Object.entries(profile.skills).map(([group, items]) => (
              <div key={group} className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">{group}</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Featured Projects</h2>
            <p className="mt-2 text-sm text-slate-600">
              Cards + detail pages (production-style writeups)
            </p>
          </div>
          <Link to="/projects" className="text-sm font-medium text-slate-900 hover:underline">
            See all
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {projects.slice(0, 2).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
