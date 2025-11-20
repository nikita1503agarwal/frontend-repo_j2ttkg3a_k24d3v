function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200 bg-white/70">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-600">© {new Date().getFullYear()} OncoGuide. For education only.</p>
        <div className="flex items-center gap-4 text-slate-600">
          <a href="#overview" className="hover:text-rose-600">Overview</a>
          <a href="#prevention" className="hover:text-rose-600">Prevention</a>
          <a href="#screening" className="hover:text-rose-600">Screening</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
