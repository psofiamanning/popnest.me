import { KEEP_IN_MIND } from '../../data/workspaces'
import { bgPolicyCardGradient } from '../../styles/gradients'
import { useLanguage } from '../../context/LanguageContext'

export default function KeepInMindCard({ className = '' }) {
  const { t } = useLanguage()

  return (
    <section className={`rounded-[10px] ${bgPolicyCardGradient} p-6 text-white ${className}`}>
      <h2 className="text-[16px] font-semibold leading-[19px]">{t('detail.keepInMind')}</h2>
      <ul className="mt-4 flex list-disc flex-col gap-2.5 pl-5">
        {KEEP_IN_MIND.map((key) => (
          <li key={key} className="text-[14px] leading-[1.5]">
            {t(key)}
          </li>
        ))}
      </ul>
    </section>
  )
}
