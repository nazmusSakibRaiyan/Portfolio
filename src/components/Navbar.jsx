import { NavLink } from 'react-router-dom'

const baseLink =
  'rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900'
const activeLink = 'bg-slate-100 text-slate-900'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3">
        <NavLink to="/" className="text-sm font-semibold tracking-tight text-slate-900">
          NSR
        </NavLink>

        <nav className="flex items-center gap-1">
          <NavLink to="/" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : ''}`}
            end
          >
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : ''}`}
          >
            Projects
          </NavLink>
          <NavLink to="/designs" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : ''}`}
          >
            Designs
          </NavLink>
          <NavLink to="/case-study" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : ''}`}
          >
            Case Study
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
