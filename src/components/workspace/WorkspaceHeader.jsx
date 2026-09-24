import { Link } from 'react-router-dom'
import { bgMapPageGradient } from '../../styles/gradients'
import { useLanguage } from '../../context/LanguageContext'
import LanguageToggle from '../LanguageToggle'

const FIELDS = [
  { key: 'where', labelKey: 'map.where' },
  { key: 'when', labelKey: 'map.when' },
  { key: 'filter', labelKey: 'map.filter' },
]

export default function WorkspaceHeader({ filters, onChange }) {
  const { t } = useLanguage()

  return (
    <header className={`z-20 lg:sticky lg:top-0 px-[10px] pb-[14px] pt-[9px] ${bgMapPageGradient}`}>
      <div className="flex flex-wrap items-start gap-x-[13px] gap-y-3">
        <Link to="/" className="mr-[5px] shrink-0">
          <img src="/images/logo-popnest-white.png" alt="Popnest" className="h-[35px] w-[77px] object-contain" />
        </Link>
        {FIELDS.map(({ key, labelKey }) => (
          <label
            key={key}
            className="block h-[52px] min-w-[140px] max-w-[325px] flex-1 rounded-[12px] border border-white bg-brand-indigo/50 px-[14px] pt-[7px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[2px]"
          >
            <span className="block text-[14px] font-medium leading-[16px] text-white-warm">{t(labelKey)}</span>
            <input
              value={filters[key]}
              onChange={(e) => onChange({ ...filters, [key]: e.target.value })}
              className="mt-[2px] block w-full bg-transparent text-[17px] font-medium leading-[19px] text-white-warm focus:outline-none"
            />
          </label>
        ))}
        <div className="ml-auto flex items-center gap-4 self-center">
          <LanguageToggle className="text-white" />
          <span className="text-sm font-medium text-white">{t('common.signUpSignIn')}</span>
        </div>
      </div>
    </header>
  )
}
