import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Designs from './pages/Designs.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="min-h-dvh">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl px-4 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-6 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Nazmus Sakib Raiyan</p>
          <p>Built with React + Tailwind</p>
        </div>
      </footer>
    </div>
  )
}
