function Card({ title, desc, icon }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 hover:shadow-lg transition relative overflow-hidden">
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-rose-100 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition" />
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center shadow">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 text-lg">{title}</h3>
          <p className="mt-2 text-slate-700 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export function CardGrid({ items }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((item, i) => (
        <Card key={i} {...item} />
      ))}
    </div>
  )
}

export default Card
