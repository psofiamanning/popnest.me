import BrandMap from '../workspace/BrandMap'
import { NEED_TO_KNOW } from '../../data/workspaces'
import { bgPolicyCardGradient } from '../../styles/gradients'
import { useLanguage } from '../../context/LanguageContext'

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[16px] w-[16px] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m4 12 5 5L20 6" />
  </svg>
)

export default function NeedToKnowCard({ workspace, className = '' }) {
  const { t } = useLanguage()

  return (
    <section
      className={`rounded-[10px] ${bgPolicyCardGradient} p-6 text-white ${className}`}
    >
      <h2 className="text-[16px] font-semibold leading-[19px]">{t('detail.needToKnow')}</h2>
      <ul className="mt-4 flex flex-col gap-2.5">
        {NEED_TO_KNOW.map((key) => (
          <li key={key} className="flex items-start gap-3 text-[14px] leading-[1.5]">
            <CheckIcon />
            {t(key)}
          </li>
        ))}
      </ul>

      <div className="relative mt-5 h-[220px] overflow-hidden rounded-[10px] sm:h-[267px]">
        <BrandMap workspaces={[workspace]} focusId={workspace.id} interactive={false} showZoomControl={false} />
        <span className="pointer-events-none absolute left-3 top-3 z-[1000] rounded-[6px] bg-white px-3 py-1.5 text-[12px] font-medium text-brand-navy shadow">
          {workspace.address}
        </span>
      </div>
    </section>
  )
}
