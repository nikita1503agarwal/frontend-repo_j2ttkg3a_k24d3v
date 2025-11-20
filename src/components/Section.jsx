function Section({ id, eyebrow, title, lead, children }) {
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-10">
          {eyebrow && <p className="uppercase tracking-wider text-rose-600 font-semibold text-sm">{eyebrow}</p>}
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
          {lead && <p className="mt-4 text-slate-700 text-lg">{lead}</p>}
        </div>
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Section
