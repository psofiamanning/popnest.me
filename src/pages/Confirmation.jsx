import { Link, useParams } from 'react-router-dom'
import { useBookings } from '../context/BookingContext'
import { useLanguage } from '../context/LanguageContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MobileConfirmation from './MobileConfirmation'
import useMediaQuery from '../hooks/useMediaQuery'
import { bgCtaGradient } from '../styles/gradients'

export default function Confirmation() {
  const { id } = useParams()
  const { getBooking } = useBookings()
  const booking = getBooking(id)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const { t } = useLanguage()

  if (!isDesktop) return <MobileConfirmation booking={booking} />

  return (
    <>
      <Navbar />
      {!booking ? (
        <div className="mx-auto max-w-2xl px-4 py-16 text-center">
          <p className="text-lg font-semibold text-neutral-900">{t('confirmation.notFound')}</p>
          <Link to="/" className="mt-3 inline-block text-rose-600 underline">
            {t('confirmation.backToHome')}
          </Link>
        </div>
      ) : (
        <div className="mx-auto max-w-2xl px-4 py-16">
          <div className="rounded-2xl border border-neutral-200 p-8 text-center shadow-sm">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-2xl text-emerald-600">
              ✓
            </div>
            <h1 className="mt-4 text-2xl font-bold text-neutral-900">{t('confirmation.confirmed')}</h1>
            <p className="mt-2 text-neutral-500">{t('confirmation.simulatedNotice')}</p>

            <div className="mt-6 rounded-xl bg-neutral-50 p-5 text-left text-sm text-neutral-700">
              <p className="font-mono text-xs uppercase tracking-wide text-neutral-400">
                {t('confirmation.confirmationCode')}
              </p>
              <p className="mb-4 text-lg font-semibold text-neutral-900">{booking.id}</p>
              <dl className="space-y-1">
                <div className="flex justify-between">
                  <dt>{t('confirmation.space')}</dt>
                  <dd>{booking.spaceName}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>{t('confirmation.city')}</dt>
                  <dd>{booking.city}</dd>
                </div>
                {booking.roomType && (
                  <div className="flex justify-between">
                    <dt>{t('confirmation.roomTypeLabel')}</dt>
                    <dd>{booking.roomType}</dd>
                  </div>
                )}
                <div className="flex justify-between">
                  <dt>{t('confirmation.date')}</dt>
                  <dd>{booking.date}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>{t('confirmation.time')}</dt>
                  <dd>
                    {booking.startTime} · {booking.hours}h
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt>{t('confirmation.people')}</dt>
                  <dd>{booking.guests}</dd>
                </div>
                <div className="flex justify-between font-semibold text-neutral-900">
                  <dt>{t('confirmation.total')}</dt>
                  <dd>${booking.total.toLocaleString('es-MX')} MXN</dd>
                </div>
              </dl>
            </div>

            <Link
              to="/"
              className={`mt-6 inline-block rounded-lg ${bgCtaGradient} px-5 py-2.5 text-sm font-semibold text-white`}
            >
              {t('confirmation.searchAnotherSpace')}
            </Link>
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}
