import { useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import WheelColumn from '../components/detail/WheelColumn'
import WorkspaceFooter from '../components/workspace/WorkspaceFooter'
import { bgTimePickerGradient, bgCtaGradient } from '../styles/gradients'
import { useLanguage } from '../context/LanguageContext'

const HOURS = Array.from({ length: 12 }, (_, i) => `${i + 1}:00`)
const MERIDIEMS = ['AM', 'PM']
const DEFAULT_HOUR_IDX = 8 // "9:00"

function formatTime(hourIdx, meridiemIdx) {
  return `${HOURS[hourIdx]} ${MERIDIEMS[meridiemIdx]}`
}

export default function MobileTimePicker() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const { t } = useLanguage()
  const date = params.get('date') || ''

  const [active, setActive] = useState('start')
  const [startHour, setStartHour] = useState(DEFAULT_HOUR_IDX)
  const [startMeridiem, setStartMeridiem] = useState(0)
  const [endHour, setEndHour] = useState(DEFAULT_HOUR_IDX)
  const [endMeridiem, setEndMeridiem] = useState(1)

  const hourIdx = active === 'start' ? startHour : endHour
  const meridiemIdx = active === 'start' ? startMeridiem : endMeridiem
  const setHourIdx = active === 'start' ? setStartHour : setEndHour
  const setMeridiemIdx = active === 'start' ? setStartMeridiem : setEndMeridiem

  const backUrl = `/espacios/${id}/reservar/date?${params.toString()}`

  function handleSubmit() {
    const startLabel = formatTime(startHour, startMeridiem)
    const endLabel = formatTime(endHour, endMeridiem)
    const next = new URLSearchParams(params)
    next.delete('date')
    next.set('checkin', date ? `${date}, ${startLabel}` : startLabel)
    next.set('checkout', date ? `${date}, ${endLabel}` : endLabel)
    navigate(`/espacios/${id}/reservar?${next.toString()}`)
  }

  return (
    <div className={`flex min-h-[100dvh] flex-col ${bgTimePickerGradient} px-[8px] pt-[calc(env(safe-area-inset-top)+16px)]`}>
      <Link to={backUrl} className="flex items-center gap-1.5 px-2 text-[16px] font-medium text-white">
        <span className="text-[28px] leading-none">‹</span>
        {t('timePicker.backToDatePicker')}
      </Link>

      <p className="mt-5 px-2 text-[16px] font-medium text-white">{t('timePicker.selectATime')}</p>
      <p className="mt-1 px-2 text-[13px] leading-[1.4] text-white/90">{t('timePicker.description')}</p>

      <p className="mt-6 text-center text-[16px] font-medium text-white">{t('timePicker.setTime')}</p>

      <div className="relative mx-auto mt-4 flex h-[40px] w-[220px] items-center rounded-[30px] border-[0.5px] border-white p-[2px]">
        <button
          type="button"
          onClick={() => setActive('start')}
          className={`flex h-full flex-1 items-center justify-center gap-1.5 rounded-[30px] text-[14px] ${
            active === 'start'
              ? 'border-[0.5px] border-white/30 bg-pink-highlight/40 font-bold text-white'
              : 'font-medium text-white/50'
          }`}
        >
          {t('timePicker.start')} <span>{formatTime(startHour, startMeridiem)}</span>
        </button>
        <button
          type="button"
          onClick={() => setActive('end')}
          className={`flex h-full flex-1 items-center justify-center gap-1.5 rounded-[30px] text-[14px] ${
            active === 'end'
              ? 'border-[0.5px] border-white/30 bg-pink-highlight/40 font-bold text-white'
              : 'font-medium text-white/50'
          }`}
        >
          {t('timePicker.end')} <span>{formatTime(endHour, endMeridiem)}</span>
        </button>
      </div>

      <div className="relative mx-auto mt-10 flex w-full max-w-[220px]">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[40px] -translate-y-1/2 rounded-[8px] bg-[rgba(217,217,217,0.2)]" />
        <WheelColumn items={HOURS} index={hourIdx} onChange={setHourIdx} />
        <WheelColumn items={MERIDIEMS} index={meridiemIdx} onChange={setMeridiemIdx} />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className={`mx-auto mt-10 block h-[48px] w-[240px] rounded-[24px] ${bgCtaGradient} text-[16px] font-medium text-white`}
      >
        {t('datePicker.submit')}
      </button>

      <WorkspaceFooter compact className="mt-auto px-4" />
    </div>
  )
}
