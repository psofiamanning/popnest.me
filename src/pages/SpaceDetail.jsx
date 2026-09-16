import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getSpaceById } from '../data/spaces'
import { useBookings } from '../context/BookingContext'

function todayStr() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

const START_TIME_OPTIONS = Array.from({ length: 27 }, (_, i) => {
  const totalMinutes = 8 * 60 + i * 30 // 08:00 a 21:00
  const h = Math.floor(totalMinutes / 60)
  const m = totalMinutes % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
})

const inputClass =
  'w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-rose-500'

export default function SpaceDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { createBooking } = useBookings()
  const space = getSpaceById(id)

  const [date, setDate] = useState(todayStr())
  const [startTime, setStartTime] = useState('10:00')
  const [hours, setHours] = useState(2)
  const [guests, setGuests] = useState(space ? Math.min(4, space.capacity) : 1)
  const [step, setStep] = useState('detalle') // 'detalle' | 'datos'
  const [customer, setCustomer] = useState({ name: '', email: '' })
  const [error, setError] = useState('')

  const total = useMemo(() => {
    if (!space) return 0
    return Math.round(space.pricePerHour * Number(hours || 0))
  }, [space, hours])

  if (!space) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="text-lg font-semibold text-neutral-900">No encontramos ese espacio.</p>
        <Link to="/" className="mt-3 inline-block text-rose-600 underline">
          Volver al inicio
        </Link>
      </div>
    )
  }

  function handleConfirm(e) {
    e.preventDefault()
    if (!customer.name.trim() || !customer.email.trim()) {
      setError('Nombre y correo son obligatorios.')
      return
    }
    const booking = createBooking({
      spaceId: space.id,
      spaceName: space.name,
      city: space.city,
      date,
      startTime,
      hours: Number(hours),
      guests: Number(guests),
      total,
      customer,
    })
    navigate(`/confirmacion/${booking.id}`)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <Link to="/" className="text-sm text-neutral-500 hover:text-neutral-700">
        ← Volver a la búsqueda
      </Link>

      <h1 className="mt-3 text-2xl font-bold text-neutral-900 sm:text-3xl">{space.name}</h1>
      <p className="mt-1 text-neutral-500">
        {space.neighborhood}, {space.city} · ★ {space.rating.toFixed(2)} ({space.reviewsCount} reseñas)
      </p>

      <div className="mt-5 grid grid-cols-2 gap-2 overflow-hidden rounded-2xl sm:grid-cols-4">
        {space.images.slice(0, 4).map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${space.name} ${i + 1}`}
            className={`h-40 w-full object-cover sm:h-56 ${i === 0 ? 'col-span-2 row-span-2 h-full sm:h-full' : ''}`}
          />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="font-medium text-neutral-900">
            {space.category} · Hasta {space.capacity} personas
          </p>
          <p className="mt-4 text-neutral-700">{space.description}</p>

          <h2 className="mt-8 text-lg font-semibold text-neutral-900">Qué ofrece este espacio</h2>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {space.amenities.map((a) => (
              <li key={a} className="flex items-center gap-2 text-sm text-neutral-700">
                <span className="text-rose-500">✓</span> {a}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-3 border-t border-neutral-200 pt-6">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-neutral-200 text-sm font-semibold text-neutral-600">
              {space.host.name.charAt(0)}
            </div>
            <div>
              <p className="font-medium text-neutral-900">Anfitrión: {space.host.name}</p>
              <p className="text-sm text-neutral-500">En popnest.me desde {space.host.memberSince}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-20 rounded-2xl border border-neutral-200 p-5 shadow-sm">
            {step === 'detalle' ? (
              <>
                <p className="text-lg font-semibold text-neutral-900">
                  ${space.pricePerHour.toLocaleString('es-MX')} MXN <span className="text-sm font-normal text-neutral-500">/ hora</span>
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <label className="block">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">Fecha</span>
                    <input type="date" min={todayStr()} value={date} onChange={(e) => setDate(e.target.value)} className={inputClass} />
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">Hora</span>
                    <select value={startTime} onChange={(e) => setStartTime(e.target.value)} className={inputClass}>
                      {START_TIME_OPTIONS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">Horas</span>
                    <input
                      type="number"
                      min={1}
                      max={12}
                      value={hours}
                      onChange={(e) => setHours(e.target.value)}
                      className={inputClass}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">Personas</span>
                    <input
                      type="number"
                      min={1}
                      max={space.capacity}
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className={inputClass}
                    />
                  </label>
                </div>

                <div className="mt-5 flex justify-between border-t border-neutral-200 pt-4 text-sm text-neutral-600">
                  <span>
                    {hours}h × ${space.pricePerHour.toLocaleString('es-MX')}
                  </span>
                  <span className="font-semibold text-neutral-900">${total.toLocaleString('es-MX')} MXN</span>
                </div>

                <button
                  type="button"
                  onClick={() => setStep('datos')}
                  className="mt-5 w-full rounded-lg bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-600"
                >
                  Reservar
                </button>
                <p className="mt-2 text-center text-xs text-neutral-400">No se te cobrará todavía.</p>
              </>
            ) : (
              <form onSubmit={handleConfirm}>
                <button
                  type="button"
                  onClick={() => setStep('detalle')}
                  className="mb-4 text-sm text-neutral-500 hover:text-neutral-700"
                >
                  ← Cambiar fecha u horario
                </button>
                <p className="text-sm font-semibold text-neutral-900">Resumen de tu reserva</p>
                <div className="mt-2 space-y-1 text-sm text-neutral-600">
                  <p>{space.name}</p>
                  <p>
                    {date} · {startTime} · {hours}h · {guests} personas
                  </p>
                  <p className="font-semibold text-neutral-900">Total: ${total.toLocaleString('es-MX')} MXN</p>
                </div>

                <div className="mt-4 space-y-3">
                  <label className="block">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">Nombre</span>
                    <input
                      type="text"
                      value={customer.name}
                      onChange={(e) => setCustomer((c) => ({ ...c, name: e.target.value }))}
                      className={inputClass}
                      required
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">Correo</span>
                    <input
                      type="email"
                      value={customer.email}
                      onChange={(e) => setCustomer((c) => ({ ...c, email: e.target.value }))}
                      className={inputClass}
                      required
                    />
                  </label>
                </div>

                {error && <p className="mt-3 text-sm text-rose-600">{error}</p>}

                <button
                  type="submit"
                  className="mt-5 w-full rounded-lg bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-600"
                >
                  Confirmar reserva (demo)
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
