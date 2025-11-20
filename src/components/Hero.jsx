import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/mWY-FNsBVpRvZHS5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur text-slate-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <span className="text-sm">Trusted cancer education resource</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Understand cancer with clarity and care
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-700">
            A beautifully crafted guide to symptoms, prevention, screening, and treatment—
            combining expert-backed content with an immersive 3D DNA animation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#overview" className="px-6 py-3 rounded-xl bg-rose-600 text-white shadow hover:bg-rose-700 transition">Explore topics</a>
            <a href="#screening" className="px-6 py-3 rounded-xl bg-slate-900 text-white shadow hover:bg-slate-800 transition">Find screening info</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
    </section>
  )
}

export default Hero
