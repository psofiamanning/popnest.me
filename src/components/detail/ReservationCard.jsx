import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBookings } from '../../context/BookingContext'
import { useLanguage } from '../../context/LanguageContext'
import { bgBrandGradient, bgCtaGradient } from '../../styles/gradients'

const fieldClass = 'flex-1 bg-white px-3 py-2 text-[14px] font-normal leading-[17px] text-black focus:outline-none'

export default function ReservationCard({ workspace }) {
  const navigate = useNavigate()
  const { createBooking } = useBookings()
  const { t } = useLanguage()
  const [form, setForm] = useState({ date: 'Wed, Dec 10', people: '1 Person', start: '9:00 AM', end: '5:00 PM' })

  function set(key, value) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  return (
    <section className={`rounded-[10px] ${bgBrandGradient} p-6 text-white`}>
      <h2 className="text-[15px] font-semibold leading-[18px]">{t('detail.yourReservation')}</h2>

      <form
        className="mt-4 flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault()
          const booking = createBooking({
            spaceName: workspace.name,
            city: t('common.mexicoCity'),
            date: form.date,
            startTime: form.start,
            hours: 8,
            guests: form.people,
            total: workspace.price,
          })
          navigate(`/confirmacion/${booking.id}`)
        }}
      >
        <div className="flex">
          <label className="flex-1">
            <span className="sr-only">{t('detail.field.date')}</span>
            <input className={fieldClass} value={form.date} onChange={(e) => set('date', e.target.value)} />
          </label>
          <label className="flex-1 border-l border-brand-navy-muted">
            <span className="sr-only">{t('detail.field.people')}</span>
            <input className={fieldClass} value={form.people} onChange={(e) => set('people', e.target.value)} />
          </label>
        </div>
        <div className="flex">
          <label className="flex-1">
            <span className="sr-only">{t('detail.field.startTime')}</span>
            <input className={fieldClass} value={form.start} onChange={(e) => set('start', e.target.value)} />
          </label>
          <label className="flex-1 border-l border-brand-navy-muted">
            <span className="sr-only">{t('detail.field.endTime')}</span>
            <input className={fieldClass} value={form.end} onChange={(e) => set('end', e.target.value)} />
          </label>
        </div>
        <button
          type="submit"
          className={`mt-1 h-[37px] ${bgCtaGradient} text-[14px] font-medium leading-[17px] text-white`}
        >
          {t('detail.reserveNow')}
        </button>
      </form>
    </section>
  )
}
