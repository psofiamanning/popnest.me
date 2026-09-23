import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { getWorkspaceById, getRoomTypeById, KEEP_IN_MIND } from '../data/workspaces'
import { useBookings } from '../context/BookingContext'
import { useLanguage } from '../context/LanguageContext'
import WorkspaceFooter from '../components/workspace/WorkspaceFooter'
import NotFound from './NotFound'
import { bgBrandGradient, bgCtaGradient } from '../styles/gradients'

const rowClass =
  'flex items-center justify-between rounded-[10px] border-[1.5px] border-white/30 bg-white/10 px-[16px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[10px]'

export default function MobileCheckout() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const { createBooking } = useBookings()
  const { t } = useLanguage()
  const workspace = getWorkspaceById(id)

  if (!workspace) return <NotFound />

  const roomType = getRoomTypeById(params.get('room'))
  const roomTypeLabel = t(roomType.labelKey) + (roomType.capacityKey ? ` ${t(roomType.capacityKey)}` : '')
  const checkIn = params.get('checkin') || 'Thu 11 Sep, 9:00 am'
  const checkOut = params.get('checkout') || 'Thu 11 Sep, 7:00 pm'
  const payment = params.get('payment') || t('checkout.creditCard')
  const { price } = workspace
  const tax = Math.round(price * 0.024 * 10) / 10
  const total = Math.round((price + tax) * 100) / 100

  function handleBookNow() {
    const booking = createBooking({
      workspaceId: id,
      spaceName: workspace.name,
      city: t('common.mexicoCity'),
      roomType: roomTypeLabel,
      date: checkIn,
      checkIn,
      checkOut,
      startTime: '9:00 am',
      hours: 10,
      guests: 2,
      total,
    })
    navigate(`/confirmacion/${booking.id}`)
  }

  return (
    <div className={`flex min-h-[100dvh] flex-col ${bgBrandGradient} px-[9px] pt-[calc(env(safe-area-inset-top)+16px)]`}>
      <Link to={`/espacios/${id}`} className="flex items-center gap-1.5 px-2 pb-4 text-[16px] font-medium text-white">
        <span className="text-[28px] leading-none">‹</span>
        {t('checkout.backToSpaceDetails')}
      </Link>

      <div className="flex flex-col gap-[10px] pb-8">
        <div className={`${rowClass} h-[60px]`}>
          <span className="text-[14px] font-medium text-white">{t('checkout.guest')}</span>
          <span className="flex items-center gap-1 text-[14px] font-semibold text-white/80">
            {t('checkout.required')}
            <span className="text-[18px] leading-none">›</span>
          </span>
        </div>

        <Link to={`/espacios/${id}/reservar/room-type?${params.toString()}`} className={`${rowClass} h-[50px]`}>
          <span className="text-[14px] font-medium text-white">{t('checkout.roomType')}</span>
          <span className="flex items-center gap-1 text-[14px] font-semibold text-white">
            {roomTypeLabel}
            <span className="text-[18px] leading-none">›</span>
          </span>
        </Link>

        <div className={`${rowClass} h-[125px] flex-col items-stretch justify-center gap-3`}>
          <Link
            to={`/espacios/${id}/reservar/date?${params.toString()}&field=checkin`}
            className="flex items-center justify-between"
          >
            <span className="text-[14px] font-medium text-white">{t('checkout.checkIn')}</span>
            <span className="flex items-center gap-1 text-[14px] font-semibold text-white">
              {checkIn}
              <span className="text-[18px] leading-none">›</span>
            </span>
          </Link>
          <Link
            to={`/espacios/${id}/reservar/date?${params.toString()}&field=checkout`}
            className="flex items-center justify-between"
          >
            <span className="text-[14px] font-medium text-white">{t('checkout.checkOut')}</span>
            <span className="flex items-center gap-1 text-[14px] font-semibold text-white">
              {checkOut}
              <span className="text-[18px] leading-none">›</span>
            </span>
          </Link>
        </div>

        <div className={`${rowClass} h-[109px] flex-col items-stretch justify-center gap-1.5`}>
          <div className="flex items-center justify-between">
            <span className="text-[14px] font-medium text-white">{t('checkout.dayX', { price })}</span>
            <span className="text-[14px] font-medium text-white">MXN {price}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-medium text-white">{t('checkout.taxesAndFees')}</span>
            <span className="text-[14px] font-medium text-white">MXN {tax}</span>
          </div>
          <div className="my-1 border-t border-white/20" />
          <div className="flex items-center justify-between">
            <span className="text-[14px] font-bold text-white">{t('checkout.total')}</span>
            <span className="text-[14px] font-semibold text-white">MXN {total.toLocaleString('en-US')}</span>
          </div>
        </div>

        <Link to={`/espacios/${id}/reservar/payment?${params.toString()}`} className={`${rowClass} h-[44px]`}>
          <span className="text-[14px] font-medium text-white">{t('checkout.paymentMethod')}</span>
          <span className="flex items-center gap-1 text-[14px] font-medium text-white">
            {payment}
            <span className="text-[18px] leading-none">›</span>
          </span>
        </Link>

        <div className={`${rowClass} h-[44px]`}>
          <span className="text-[14px] font-medium text-white">{t('checkout.promoCode')}</span>
          <span className="text-[18px] leading-none text-white">›</span>
        </div>

        <div className={`${rowClass} flex-col items-stretch gap-1 px-[16px] py-[14px]`}>
          <p className="text-[14px] font-semibold text-white">{t('detail.needToKnow')}</p>
          <p className="text-[14px] leading-[1.4] text-white/85">- {t(KEEP_IN_MIND[0])}</p>
        </div>

        <button
          type="button"
          onClick={handleBookNow}
          className={`h-[43px] rounded-[10px] ${bgCtaGradient} text-[16px] font-bold text-white`}
        >
          {t('detail.bookNow')}
        </button>
      </div>

      <WorkspaceFooter compact className="mt-auto px-4" />
    </div>
  )
}
