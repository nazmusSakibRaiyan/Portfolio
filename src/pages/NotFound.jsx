import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-slate-900">Page not found</h1>
      <p className="text-sm text-slate-700">The page you requested does not exist.</p>
      <Link className="text-sm font-medium text-slate-900 hover:underline" to="/">
        Go home
      </Link>
    </div>
  )
}
