import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClass = scrolled ? 'bg-white/70 backdrop-blur-md shadow-sm' : 'bg-white/40 backdrop-blur-md'

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${navClass}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 via-rose-500 to-blue-500 shadow-lg" />
            <span className="font-semibold text-slate-800">OncoGuide</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#overview" className="hover:text-rose-600">Overview</a>
            <a href="#symptoms" className="hover:text-rose-600">Symptoms</a>
            <a href="#prevention" className="hover:text-rose-600">Prevention</a>
            <a href="#screening" className="hover:text-rose-600">Screening</a>
            <a href="#treatment" className="hover:text-rose-600">Treatment</a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-slate-700">
            <span className="sr-only">Toggle menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 space-y-2">
            <a href="#overview" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-white/60">Overview</a>
            <a href="#symptoms" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-white/60">Symptoms</a>
            <a href="#prevention" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-white/60">Prevention</a>
            <a href="#screening" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-white/60">Screening</a>
            <a href="#treatment" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-white/60">Treatment</a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
