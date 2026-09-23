import { bgPromoGradient } from '../../styles/gradients'
import { useLanguage } from '../../context/LanguageContext'

export default function PerkBanner() {
  const { t } = useLanguage()

  return (
    <div className={`relative overflow-hidden ${bgPromoGradient} text-white`}>
      {/* See PromoBar.jsx — same gradient, same contrast fix. */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative px-4 py-10 text-center sm:px-6">
        <p className="text-lg font-semibold sm:text-xl">
          {t('perkBanner.line1')}
          <br />
          {t('perkBanner.line2')}
        </p>
        <p className="mt-2 text-xs text-white/80">
          {t('perkBanner.validFor')} <span className="underline">{t('perkBanner.terms')}</span>
        </p>
      </div>
    </div>
  )
}
