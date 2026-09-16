import { CATEGORIES, CITIES } from '../data/spaces'

const inputClass =
  'w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-rose-500'

export default function SearchBar({ filters, onChange }) {
  function set(key, value) {
    onChange({ ...filters, [key]: value })
  }

  return (
    <div className="grid grid-cols-1 gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
      <label className="block">
        <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">Ciudad</span>
        <select className={inputClass} value={filters.city} onChange={(e) => set('city', e.target.value)}>
          <option value="">Todas</option>
          {CITIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">Tipo de espacio</span>
        <select className={inputClass} value={filters.category} onChange={(e) => set('category', e.target.value)}>
          <option value="">Todos</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">Fecha</span>
        <input
          type="date"
          className={inputClass}
          value={filters.date}
          min={new Date().toISOString().slice(0, 10)}
          onChange={(e) => set('date', e.target.value)}
        />
      </label>
      <label className="block">
        <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">Personas</span>
        <input
          type="number"
          min={1}
          className={inputClass}
          value={filters.guests}
          onChange={(e) => set('guests', e.target.value)}
        />
      </label>
    </div>
  )
}
