import { useState } from 'react'
import { bgPromoGradient, bgCtaGradient } from '../../styles/gradients'
import { useLanguage } from '../../context/LanguageContext'

// Mock: no backend, this is a demo project — the form doesn't submit anywhere.
export default function PromoBar() {
  const [phone, setPhone] = useState('')
  const { t } = useLanguage()

  return (
    <div className={`relative overflow-hidden ${bgPromoGradient} text-white`}>
      {/* This gradient's stops fail WCAG contrast for white text even at
          full opacity — see DESIGN_SYSTEM.md ("Contrast floor"). */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-3 sm:flex-row sm:justify-between sm:px-6">
        <p className="max-w-xl text-center text-sm leading-snug sm:text-left">
          <strong className="font-semibold">{t('promoBar.headline')}</strong> {t('promoBar.body')}
        </p>
        <form
          className="flex w-full max-w-md items-center overflow-hidden rounded-[12px] border border-white bg-white/90 text-neutral-800"
          onSubmit={(e) => e.preventDefault()}
        >
          <span className="flex shrink-0 items-center gap-1 self-stretch border-r border-white bg-brand-indigo/50 px-3 py-2 text-sm text-white">
            🇺🇸 +1
          </span>
          <input
            type="tel"
            placeholder={t('promoBar.phonePlaceholder')}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="min-w-0 flex-1 px-3 py-2 text-sm focus:outline-none"
          />
          <button
            type="submit"
            className={`shrink-0 ${bgCtaGradient} px-4 py-2 text-sm font-semibold text-white-warm shadow-lg backdrop-blur-sm`}
          >
            {t('promoBar.go')}
          </button>
        </form>
      </div>
    </div>
  )
}
