export default function CaseStudy() {
  return (
    <div className="space-y-8">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Marketing Case</h1>
        <p className="mt-3 text-sm leading-6 text-slate-700">Case Study: Instagram Growth Strategy</p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Objective</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Increase engagement and visibility for a small business.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Strategy</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
          <li>Post 5x per week</li>
          <li>Use targeted hashtags</li>
          <li>Focus on short-form content</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Execution</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
          <li>Designed sample posts</li>
          <li>Created a content calendar</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Expected Outcome</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Improved engagement and brand visibility within 30 days.
        </p>
      </section>

      <p className="text-xs text-slate-500">Source file: marketing/instagram-growth-strategy.md</p>
    </div>
  )
}
