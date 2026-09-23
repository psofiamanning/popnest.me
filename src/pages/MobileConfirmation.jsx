import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getWorkspaceById } from '../data/workspaces'
import useDominantColor, { darkenForOverlay, rgbToRgba } from '../hooks/useDominantColor'
import { bgBrandGradient, bgCtaGradient } from '../styles/gradients'
import { useLanguage } from '../context/LanguageContext'

function splitDateTime(str) {
  if (!str) return { date: '', time: '' }
  const parts = str.split(', ')
  const time = parts.pop()
  return { date: parts.join(', '), time }
}

function UpcomingEventIcon() {
  return (
    <svg viewBox="0 0 98 97" fill="none" className="h-[97px] w-[98px]">
      <rect x="24" y="7" width="8" height="14" rx="2" fill="white" />
      <rect x="66" y="7" width="8" height="14" rx="2" fill="white" />
      <rect x="12" y="18" width="62" height="60" rx="6" stroke="white" strokeWidth="4" />
      <line x1="12" y1="36" x2="74" y2="36" stroke="white" strokeWidth="4" />
      <path d="M38 57 H72 M60 45 L74 57 L60 69" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 shrink-0">
      <path d="M8 14s5-4.2 5-8a5 5 0 1 0-10 0c0 3.8 5 8 5 8Z" stroke="white" strokeWidth="1.3" />
      <circle cx="8" cy="6" r="1.8" stroke="white" strokeWidth="1.3" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0">
      <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="white" strokeWidth="1.3" />
      <path d="M2 6.5h12M5 1.5v2M11 1.5v2" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0">
      <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.3" />
      <path d="M8 5v3.2l2.2 1.3" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0">
      <circle cx="8" cy="5.5" r="2.5" stroke="white" strokeWidth="1.3" />
      <path d="M2.5 14c0-2.8 2.5-4.5 5.5-4.5s5.5 1.7 5.5 4.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function MapThumb() {
  return (
    <svg viewBox="0 0 60 24" className="h-6 w-full rounded-[4px] bg-white/20">
      <path d="M0 6 L18 6 L22 14 L40 14 L44 22" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" fill="none" />
      <path d="M10 0 L10 24 M30 0 L26 24" stroke="white" strokeOpacity="0.4" strokeWidth="1" />
      <circle cx="22" cy="14" r="2.5" className="fill-pink-interactive" />
    </svg>
  )
}

const pillClass =
  'flex flex-col items-start gap-1 rounded-[10px] px-3 py-2 text-white shadow-[0_4px_10px_rgba(0,0,0,0.25)] backdrop-blur-[2px] transition-colors duration-300'

const cardClass =
  'mt-3 rounded-[15px] px-4 py-4 text-white shadow-[0_4px_10px_rgba(0,0,0,0.25)] backdrop-blur-[2px] transition-colors duration-300'

const SPACE_RULE_KEYS = ['confirmation.spaceRule1', 'confirmation.spaceRule2', 'confirmation.spaceRule3']

function GuestFields({ labelKey, firstName, setFirstName, lastName, setLastName, email, setEmail, washStyle, t }) {
  return (
    <div className={cardClass} style={washStyle}>
      <p className="text-[11px] font-medium text-white/70">{t(labelKey)}</p>
      <div className="mt-2 flex gap-4">
        <label className="flex-1 text-[11px] font-medium text-white/70">
          {t('confirmation.name')}
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="block w-full bg-transparent text-[13px] font-medium text-white outline-none"
          />
        </label>
        <label className="flex-1 text-[11px] font-medium text-white/70">
          {t('confirmation.lastName')}
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="block w-full bg-transparent text-[13px] font-medium text-white outline-none"
          />
        </label>
      </div>
      <label className="mt-3 block text-[11px] font-medium text-white/70">
        {t('confirmation.email')}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="block w-full bg-transparent text-[13px] font-medium text-white outline-none"
        />
      </label>
    </div>
  )
}

export default function MobileConfirmation({ booking }) {
  const { t } = useLanguage()
  const [guest1First, setGuest1First] = useState('Mariana Sarali')
  const [guest1Last, setGuest1Last] = useState('Rodriguez Ibargüengoitia')
  const [guest1Email, setGuest1Email] = useState('testest@gmail.com')
  const [guest2First, setGuest2First] = useState('Mariana Sarali')
  const [guest2Last, setGuest2Last] = useState('Rodriguez Ibargüengoitia')
  const [guest2Email, setGuest2Email] = useState('maria_rodriguez@gmail.com')

  const workspace = booking ? getWorkspaceById(booking.workspaceId) : null
  const dominant = useDominantColor(workspace?.photo)

  if (!booking) {
    return (
      <div className={`flex min-h-[100dvh] flex-col items-center justify-center ${bgBrandGradient} px-[25px] text-center`}>
        <p className="text-[18px] font-medium text-white">{t('confirmation.notFound')}</p>
        <Link to="/" className="mt-4 text-[15px] font-semibold text-white underline">
          {t('confirmation.backToHome')}
        </Link>
      </div>
    )
  }

  const { date: checkInDate, time: checkInTime } = splitDateTime(booking.checkIn || booking.date)
  const { time: checkOutTime } = splitDateTime(booking.checkOut)

  const wash = darkenForOverlay(dominant)
  const washBg = (alpha) => rgbToRgba(wash, alpha)
  const pillStyle = { backgroundColor: washBg(0.49) }
  const cardStyle = { backgroundColor: washBg(0.49) }

  return (
    <div className={`min-h-[100dvh] ${bgBrandGradient} pb-16 pt-[calc(env(safe-area-inset-top)+16px)]`}>
      <div className="px-[19px]">
        <h1 className="text-[24px] font-medium leading-[34px] text-white">{t('confirmation.bookingConfirmation')}</h1>
        <p className="text-[15px] font-medium text-white/85">
          {t('confirmation.guestsAndRoom', { count: booking.guests, roomType: booking.roomType })}
        </p>
      </div>

      <div className="relative mx-[10px] mt-4 overflow-hidden rounded-t-[28px] border border-white/25 shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
        {workspace?.photo && (
          <div
            className="absolute inset-0 bg-cover bg-center blur-md"
            style={{ backgroundImage: `url(${workspace.photo})` }}
          />
        )}
        <div className="absolute inset-0 transition-colors duration-300" style={{ backgroundColor: washBg(0.55) }} />
        {workspace?.photo && (
          <img src={workspace.photo} alt={workspace.name} className="relative h-[217px] w-full object-cover" />
        )}

        <div className="relative bg-[rgba(255,255,255,0.14)] px-4 pb-6 pt-4 backdrop-blur-[10px]">
          <p className="text-[16px] font-medium text-white">{workspace?.name}</p>

          <div className={`${pillClass} mt-4`} style={pillStyle}>
            <span className="flex items-center gap-1 text-[11px] text-white/70">
              <PinIcon /> {t('confirmation.location')}
            </span>
            <span className="text-[13px] leading-[18px]">{workspace?.address}</span>
          </div>

          <div className="mt-2 flex gap-2">
            <div className={`${pillClass} flex-1`} style={pillStyle}>
              <span className="text-[11px] text-white/70">{t('confirmation.checkInDate')}</span>
              <span className="flex items-center gap-1.5 text-[13px] font-semibold">
                <CalendarIcon /> {checkInDate}
              </span>
            </div>
            <div className={`${pillClass} w-[102px] shrink-0`} style={pillStyle}>
              <span className="text-[11px] text-white/70">{t('confirmation.map')}</span>
              <MapThumb />
            </div>
          </div>

          <div className="mt-2 flex gap-2">
            <div className={`${pillClass} flex-1`} style={pillStyle}>
              <span className="text-[11px] text-white/70">{t('confirmation.checkInTime')}</span>
              <span className="flex items-center gap-1.5 text-[13px] font-semibold">
                <ClockIcon /> {t('confirmation.after')} {checkInTime}
              </span>
            </div>
            <div className={`${pillClass} flex-1`} style={pillStyle}>
              <span className="text-[11px] text-white/70">{t('confirmation.checkOutTime')}</span>
              <span className="flex items-center gap-1.5 text-[13px] font-semibold">
                <ClockIcon /> {t('confirmation.before')} {checkOutTime}
              </span>
            </div>
          </div>

          <div className={`${pillClass} mt-2 w-[124px]`} style={pillStyle}>
            <span className="text-[11px] text-white/70">{t('confirmation.numberOfGuests')}</span>
            <span className="flex items-center gap-1.5 text-[13px] font-semibold">
              <PeopleIcon /> {booking.guests}
            </span>
          </div>

          <GuestFields
            labelKey="confirmation.guest1"
            firstName={guest1First}
            setFirstName={setGuest1First}
            lastName={guest1Last}
            setLastName={setGuest1Last}
            email={guest1Email}
            setEmail={setGuest1Email}
            washStyle={cardStyle}
            t={t}
          />
          <GuestFields
            labelKey="confirmation.guest2"
            firstName={guest2First}
            setFirstName={setGuest2First}
            lastName={guest2Last}
            setLastName={setGuest2Last}
            email={guest2Email}
            setEmail={setGuest2Email}
            washStyle={cardStyle}
            t={t}
          />

          <div className={cardClass} style={cardStyle}>
            <p className="text-[16px] font-medium leading-[34px] text-white">{t('confirmation.spaceRules')}</p>
            <ul className="space-y-2 text-[11px] leading-[20px] text-white/70">
              {SPACE_RULE_KEYS.map((key) => (
                <li key={key} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/70" />
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>

          <div className={cardClass} style={cardStyle}>
            <p className="text-[16px] font-medium leading-[34px] text-white">{t('confirmation.cancellationPolicy')}</p>
            <p className="text-[11px] leading-[20px] text-white/70">{t('confirmation.cancellationPolicyBody')}</p>
          </div>

          <div className={cardClass} style={cardStyle}>
            <p className="text-[16px] font-medium leading-[34px] text-white">{t('confirmation.payment')}</p>
            <div className="flex items-center justify-between text-[11px] font-bold text-white">
              <span>{t('confirmation.totalMXN')}</span>
              <span>${Math.round(booking.total).toLocaleString('en-US')} MXN</span>
            </div>
            <p className="mt-2 text-[11px] leading-[20px] text-white/70">
              {t('confirmation.totalDescription', { amount: Math.round(booking.total).toLocaleString('en-US') })}
            </p>
            <div className="mt-3 flex gap-6 text-[11px] font-medium text-white/70">
              <span>{t('confirmation.getReceipt')}</span>
              <span>{t('confirmation.getInvoice')}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center px-[25px] text-center">
        <UpcomingEventIcon />

        <h2 className="mt-6 max-w-[236px] text-[24px] font-semibold leading-[28px] text-white">
          {t('confirmation.thankYou')}
        </h2>
        <p className="mt-4 max-w-[236px] text-[15px] font-medium leading-[22px] text-white/85">
          {t('confirmation.thankYouBody')}
        </p>

        <Link
          to="/"
          className={`mt-10 flex h-[43px] w-full items-center justify-center rounded-[10px] ${bgCtaGradient} text-[16px] font-bold uppercase text-white`}
        >
          {t('confirmation.backToHomePage')}
        </Link>
      </div>
    </div>
  )
}
