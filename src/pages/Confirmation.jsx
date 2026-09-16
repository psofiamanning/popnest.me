import { Link, useParams } from 'react-router-dom'
import { useBookings } from '../context/BookingContext'

export default function Confirmation() {
  const { id } = useParams()
  const { getBooking } = useBookings()
  const booking = getBooking(id)

  if (!booking) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="text-lg font-semibold text-neutral-900">No encontramos esa reserva.</p>
        <Link to="/" className="mt-3 inline-block text-rose-600 underline">
          Volver al inicio
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <div className="rounded-2xl border border-neutral-200 p-8 text-center shadow-sm">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-2xl text-emerald-600">
          ✓
        </div>
        <h1 className="mt-4 text-2xl font-bold text-neutral-900">¡Reserva confirmada!</h1>
        <p className="mt-2 text-neutral-500">
          Esta es una reserva simulada — no se realizó ningún cargo real.
        </p>

        <div className="mt-6 rounded-xl bg-neutral-50 p-5 text-left text-sm text-neutral-700">
          <p className="font-mono text-xs uppercase tracking-wide text-neutral-400">Código de confirmación</p>
          <p className="mb-4 text-lg font-semibold text-neutral-900">{booking.id}</p>
          <dl className="space-y-1">
            <div className="flex justify-between">
              <dt>Espacio</dt>
              <dd>{booking.spaceName}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Ciudad</dt>
              <dd>{booking.city}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Fecha</dt>
              <dd>{booking.date}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Hora</dt>
              <dd>
                {booking.startTime} · {booking.hours}h
              </dd>
            </div>
            <div className="flex justify-between">
              <dt>Personas</dt>
              <dd>{booking.guests}</dd>
            </div>
            <div className="flex justify-between font-semibold text-neutral-900">
              <dt>Total</dt>
              <dd>${booking.total.toLocaleString('es-MX')} MXN</dd>
            </div>
          </dl>
        </div>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          Buscar otro espacio
        </Link>
      </div>
    </div>
  )
}
