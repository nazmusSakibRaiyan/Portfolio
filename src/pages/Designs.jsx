export default function Designs() {
  const designs = [
    {
      title: 'Instagram Post (Product Ad)',
      description: 'A simple promotional post layout (replace with your Canva export anytime).',
      src: '/designs/instagram-post.svg',
    },
    {
      title: 'Business Banner',
      description: 'A banner/header design for a small business (replace with your Canva export anytime).',
      src: '/designs/business-banner.svg',
    },
  ]

  return (
    <div>
      <header className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Design Samples</h1>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Two quick design samples for your portfolio. If you export from Canva (PNG/JPG), drop files into
          <span className="font-medium"> public/designs/</span> and update the image paths.
        </p>
      </header>

      <div className="mt-8 grid gap-6">
        {designs.map((d) => (
          <section key={d.title} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">{d.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{d.description}</p>
            <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              <img src={d.src} alt={d.title} className="block h-auto w-full" />
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
