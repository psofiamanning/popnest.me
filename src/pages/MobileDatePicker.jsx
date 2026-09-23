import { useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import WheelColumn from '../components/detail/WheelColumn'
import WorkspaceFooter from '../components/workspace/WorkspaceFooter'
import { bgBrandGradient, bgCtaGradient } from '../styles/gradients'
import { useLanguage } from '../context/LanguageContext'

const YEARS = [2024, 2025, 2026, 2027, 2028]
const MONTH_IDS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1)

export default function MobileDatePicker() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const { t } = useLanguage()
  const MONTHS = MONTH_IDS.map((monthId) => t(`month.${monthId}`))

  const [yearIdx, setYearIdx] = useState(YEARS.indexOf(2025))
  const [monthIdx, setMonthIdx] = useState(MONTH_IDS.indexOf('dec'))
  const [dayIdx, setDayIdx] = useState(DAYS.indexOf(9))

  const backParams = new URLSearchParams(params)
  backParams.delete('field')
  const backUrl = `/espacios/${id}/reservar?${backParams.toString()}`

  function handleSubmit() {
    const label = `${MONTHS[monthIdx]} ${DAYS[dayIdx]}, ${YEARS[yearIdx]}`
    const next = new URLSearchParams(params)
    next.delete('field')
    next.set('date', label)
    navigate(`/espacios/${id}/reservar/time?${next.toString()}`)
  }

  return (
    <div className={`flex min-h-[100dvh] flex-col ${bgBrandGradient} px-[8px] pt-[calc(env(safe-area-inset-top)+16px)]`}>
      <Link to={backUrl} className="flex items-center gap-1.5 px-2 pb-6 text-[16px] font-medium text-white">
        <span className="text-[28px] leading-none">‹</span>
        {t('checkout.backToSpaceDetails')}
      </Link>

      <p className="text-center text-[20px] font-medium text-white">{t('datePicker.setDate')}</p>

      <div className="relative mx-auto mt-10 flex w-full max-w-[340px]">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[40px] -translate-y-1/2 rounded-[8px] bg-[rgba(217,217,217,0.2)]" />
        <WheelColumn items={YEARS} index={yearIdx} onChange={setYearIdx} />
        <WheelColumn items={MONTHS} index={monthIdx} onChange={setMonthIdx} />
        <WheelColumn items={DAYS} index={dayIdx} onChange={setDayIdx} />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className={`mx-auto mt-12 block h-[48px] w-[240px] rounded-[24px] ${bgCtaGradient} text-[16px] font-medium text-white`}
      >
        {t('datePicker.submit')}
      </button>

      <WorkspaceFooter compact className="mt-auto px-4" />
    </div>
  )
}
