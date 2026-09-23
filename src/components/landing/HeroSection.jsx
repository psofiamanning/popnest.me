import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { bgCtaGradient } from '../../styles/gradients'
import { useLanguage } from '../../context/LanguageContext'
import LanguageToggle from '../LanguageToggle'

export default function HeroSection() {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const [where, setWhere] = useState('Condesa, CDMX')
  const [when, setWhen] = useState('Today')

  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/hero-coworking.png)' }}
    >
      <div className="absolute inset-0 bg-overlay/60" />

      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <img src="/images/logo-popnest-white.png" alt="Popnest" className="h-12 w-auto" />
        <div className="flex items-center gap-3">
          <LanguageToggle className="text-white" />
          <span className="text-sm font-medium text-white">{t('common.signUpSignIn')}</span>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-16">
        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-[80px]">
          {t('hero.title')}
        </h1>
        <p className="mt-4 max-w-2xl text-lg font-semibold tracking-wide text-white">{t('hero.subtitle')}</p>

        <form
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch"
          onSubmit={(e) => {
            e.preventDefault()
            navigate(`/workspace-map?${new URLSearchParams({ where, when })}`)
          }}
        >
          <label className="block flex-1 rounded-lg border border-white bg-brand-indigo/50 px-4 py-2 sm:max-w-xs">
            <span className="block text-xs font-semibold text-white/70">{t('hero.where')}</span>
            <input
              value={where}
              onChange={(e) => setWhere(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-white placeholder-white/60 focus:outline-none"
            />
          </label>
          <label className="block flex-1 rounded-lg border border-white bg-brand-indigo/50 px-4 py-2 sm:max-w-xs">
            <span className="block text-xs font-semibold text-white/70">{t('hero.when')}</span>
            <input
              value={when}
              onChange={(e) => setWhen(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-white placeholder-white/60 focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className={`rounded-lg ${bgCtaGradient} px-8 py-2 text-sm font-semibold text-white-warm sm:flex-1 sm:py-0`}
          >
            {t('hero.go')}
          </button>
        </form>
      </div>
    </section>
  )
}
