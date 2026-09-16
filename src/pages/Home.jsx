import { useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar'
import SpaceCard from '../components/SpaceCard'
import { SPACES } from '../data/spaces'

export default function Home() {
  const [filters, setFilters] = useState({ city: '', category: '', date: '', guests: '' })

  const results = useMemo(() => {
    return SPACES.filter((space) => {
      if (filters.city && space.city !== filters.city) return false
      if (filters.category && space.category !== filters.category) return false
      if (filters.guests && space.capacity < Number(filters.guests)) return false
      return true
    })
  }, [filters])

  return (
    <div>
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Encuentra el espacio ideal para tu próximo evento.
          </h1>
          <p className="mt-3 max-w-xl text-neutral-600">
            Salones, rooftops, salas de juntas y estudios creativos, listos para reservar por hora.
          </p>
          <div className="mt-6">
            <SearchBar filters={filters} onChange={setFilters} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="mb-4 text-sm text-neutral-500">
          {results.length} espacio{results.length === 1 ? '' : 's'} disponible{results.length === 1 ? '' : 's'}
        </p>
        {results.length === 0 ? (
          <p className="rounded-xl border border-dashed border-neutral-300 p-8 text-center text-neutral-500">
            No hay espacios que coincidan con esos filtros. Intenta ajustar la búsqueda.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((space) => (
              <SpaceCard key={space.id} space={space} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
